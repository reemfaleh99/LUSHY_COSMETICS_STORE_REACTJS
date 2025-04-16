import React from "react";
import useGetData from "../custom-hooks/useGetData";
import { deleteDoc, doc } from "firebase/firestore";

import { db } from "../firebase.config";
import { AiFillDelete } from "react-icons/ai";
import { toast } from "react-toastify";
import Loading from "../components/loading/Loading";

const AllProducts = () => {
  const { data: productsData, loading } = useGetData("products");

  const deleteProduct = async (id) => {
    await deleteDoc(doc(db, "products", id));
    toast.success("deleted");
  };

  return (
    <section className="mt-24">
      <table className="w-full ">
        <thead>
          <tr class="bg-green-200 ">
            <th class="text-center border border-white px-2 md:px-4 py-2">
              Image
            </th>
            <th class="text-center border border-white px-2 md:px-4 py-2">
              Title
            </th>
            <th class="text-center border border-white px-2 md:px-4 py-2">
              Price
            </th>
            <th class="text-center border border-white px-2 md:px-4 py-2">
              category
            </th>
            <th class="text-center border border-white px-2 md:px-4 py-2">
              Delete
            </th>
          </tr>
        </thead>
        <tbody className="text-center">
          {loading ? (
            <Loading />
          ) : (
            productsData.map((item) => (
              <tr
                key={item.id}
                className="font-medium border-b-2 border-green-200 text-lg"
              >
                <td className="p-3">
                  <img src={item.imgUrl} alt="" className="w-16" />
                </td>
                <td>{item.productName}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
                <td>
                  <span
                    onClick={() => deleteProduct(item.id)}
                    className="flex justify-center items-center cursor-pointer"
                  >
                    <AiFillDelete className="w-6 h-6" />
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

export default AllProducts;
