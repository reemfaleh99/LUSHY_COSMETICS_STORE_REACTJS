import React, { useState } from "react";
import {
  AiFillApple,
  AiFillEye,
  AiFillEyeInvisible,
  AiFillFacebook,
  AiFillGoogleCircle,
  AiFillLock,
  AiOutlineLogin,
  AiOutlineMail,
  AiOutlineUser,
} from "react-icons/ai";
import Helmet from "../../components/Helmet";
import { Link, useNavigate } from "react-router-dom";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { setDoc, doc } from "firebase/firestore";

import { auth } from "../../firebase.config";
import { storage } from "../../firebase.config";
import { db } from "../../firebase.config";

import { toast } from "react-toastify";

const Signup = () => {
  const [show, setShow] = useState();
  const [username, setUsername] = useState("");
  const [file, setFile] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const signup = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const useCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = useCredential.user;

      const storageRef = ref(storage, `images/${Date.now() + username}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (e) => {
          toast.error(e.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(user, {
              displayName: username,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "users", user.uid), {
              uid: user.uid,
              displayName: username,
              email,
              photoURL: downloadURL,
            });
          });
        }
      );

      setLoading(false);
      toast.success("Account Created");
      navigate("/login");
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  const handlePassword = () => {
    setShow(!show);
  };

  return (
    <Helmet title="Signup">
      <section className="login flex items-center justify-center">
        {loading ? (
          <h5>loading..</h5>
        ) : (
          <div
            className="bg-gradient-to-t from-gray-100 to-green-100 p-10 rounded-xl flex flex-col gap-5 items-center
           justify-center my-36"
          >
            <AiOutlineLogin className="w-16 h-16 bg-white rounded-xl p-3" />
            <h4 className="text-2xl font-semibold">Signup with email</h4>
            <p className="font-medium text-gray-500">
              A huge pleasure by shoppin with us
            </p>
            <form className="w-full" onSubmit={signup}>
              <div className="relative text-gray-400 focus-within:text-green-500 block ">
                <AiOutlineUser className=" w-7 h-7 absolute top-1/3 transform -translate-y-1/2 left-3" />
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  placeholder="Enter your username"
                  className=" w-full mb-5 py-3 px-12 border-2 border-green-200 rounded-xl focus:outline-green-500"
                />
              </div>
              <div className="relative text-gray-400 focus-within:text-green-500 block ">
                <AiOutlineMail className=" w-7 h-7 absolute top-1/3 transform -translate-y-1/2 left-3" />
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  placeholder="Enter your email"
                  className=" w-full mb-5 py-3 px-12 border-2 border-green-200 rounded-xl focus:outline-green-500"
                />
              </div>
              <div className="relative text-gray-400 focus-within:text-green-500 block ">
                <AiFillLock className=" w-7 h-7 absolute top-1/3 transform -translate-y-1/2 left-3" />
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={show ? "text" : "password"}
                  placeholder="Enter your password"
                  className=" w-full mb-5 py-3 px-12 border-2 border-green-200 rounded-xl focus:outline-green-500"
                />
                <div onClick={handlePassword}>
                  {show ? (
                    <AiFillEye className=" w-7 h-7 absolute top-1/3 transform -translate-y-1/2 right-3" />
                  ) : (
                    <AiFillEyeInvisible className=" w-7 h-7 absolute top-1/3 transform -translate-y-1/2 right-3" />
                  )}
                </div>
              </div>
              <div className="relative text-gray-400 focus-within:text-green-500 block ">
                <AiFillLock className=" w-7 h-7 absolute top-1/3 transform -translate-y-1/2 left-3" />
                <input
                  value={rePassword}
                  onChange={(e) => setRePassword(e.target.value)}
                  type={show ? "text" : "password"}
                  placeholder="re-Enter your password"
                  className=" w-full mb-5 py-3 px-12 border-2 border-green-200 rounded-xl focus:outline-green-500"
                />
                <div onClick={handlePassword}>
                  {show ? (
                    <AiFillEye className=" w-7 h-7 absolute top-1/3 transform -translate-y-1/2 right-3" />
                  ) : (
                    <AiFillEyeInvisible className=" w-7 h-7 absolute top-1/3 transform -translate-y-1/2 right-3" />
                  )}
                </div>
              </div>
              <div>
                <input
                  onChange={(e) => setFile(e.target.files[0])}
                  type="file"
                />
              </div>{" "}
              <button
                type="submit"
                className="bg-green-300 p-2 w-full rounded-xl font-semibold text-xl mt-6"
              >
                Signup
              </button>
            </form>

            <span className="font-medium text-gray-800">
              Do you have an accout?
              <Link to="/login" className="text-green-600 font-bold">
                Login
              </Link>
            </span>
            <span className="font-medium text-gray-500 text-sm">
              Or signin with
            </span>
            <div className="flex gap-5 text-4xl">
              <AiFillGoogleCircle />
              <AiFillFacebook />
              <AiFillApple />
            </div>
          </div>
        )}
      </section>
    </Helmet>
  );
};

export default Signup;
