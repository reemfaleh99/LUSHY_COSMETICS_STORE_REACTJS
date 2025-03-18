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
} from "react-icons/ai";
import Helmet from "../../components/Helmet";
import { Link, useNavigate } from "react-router-dom";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.config";

import { toast } from "react-toastify";

const Login = () => {
  const [show, setShow] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const signIn = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      console.log(user);

      setLoading(false);
      toast.success("Account Created");
      navigate("/home");
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  const handlePassword = () => {
    setShow(!show);
  };

  return (
    <Helmet title="Login">
      <section className="login flex items-center justify-center">
        {loading ? (
          <h5>Loading..</h5>
        ) : (
          <div className=" my-36 bg-gradient-to-t from-gray-100 to-green-100 p-10 rounded-xl flex flex-col gap-5 items-center justify-center">
            <AiOutlineLogin className="w-16 h-16 bg-white rounded-xl p-3" />
            <h4 className="text-2xl font-semibold">Login with email</h4>
            <p className="font-medium text-gray-500">
              A huge pleasure by shoppin with us
            </p>
            <form className=" w-full" onSubmit={signIn}>
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
                <AiFillLock className=" w-7 h-7 absolute top-1/2 transform -translate-y-1/2 left-3" />
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={show ? "text" : "password"}
                  placeholder="Enter your password"
                  className=" w-full  py-3 px-12 border-2 border-green-200 rounded-xl focus:outline-green-500"
                />
                <div onClick={handlePassword}>
                  {show ? (
                    <AiFillEye className=" w-7 h-7 absolute top-1/2 transform -translate-y-1/2 right-3" />
                  ) : (
                    <AiFillEyeInvisible className=" w-7 h-7 absolute top-1/2 transform -translate-y-1/2 right-3" />
                  )}
                </div>
              </div>
              <button
                type="submit"
                className="bg-green-300 p-2 w-full rounded-xl font-semibold text-xl mt-6"
              >
                Login
              </button>
            </form>
            <span className="font-medium text-gray-800">Forget password</span>

            <span className="font-medium text-gray-800">
              Don't you have an accout?{" "}
              <Link to="/signup" className="text-green-600 font-bold">
                Signup
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

export default Login;
