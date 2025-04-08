import React from "react";
import useGetData from "../custom-hooks/useGetData";
import { AiFillDelete } from "react-icons/ai";

import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";

const Users = () => {
  const { data: userData, loading } = useGetData("users");

  const deleteProduct = async (id) => {
    await deleteDoc(doc(db, "users", id));
    toast.success("deleted");
  };

  return (
    <section className="mt-36">
      <table className="w-full ">
        <thead>
          <tr class="bg-green-200 ">
            <th class="text-center border border-white px-2 md:px-4 py-2">
              Image
            </th>
            <th class="text-center border border-white px-2 md:px-4 py-2">
              Username
            </th>
            <th class="text-center border border-white px-2 md:px-4 py-2">
              E-mail
            </th>

            <th class="text-center border border-white px-2 md:px-4 py-2">
              Delete
            </th>
          </tr>
        </thead>
        <tbody className="text-center">
          {loading ? (
            <h2>loading...</h2>
          ) : (
            userData.map((item) => (
              <tr key={item.id}>
                <td>
                  <img src={item.photoURL} alt="" className="w-12" />
                </td>
                <td>{item.displayName}</td>
                <td>{item.email}</td>
                <td>
                  <span
                    onClick={() => deleteProduct(item.id)}
                    className="flex justify-center items-center"
                  >
                    <AiFillDelete />
                  </span>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </section>
  );
};

export default Users;
