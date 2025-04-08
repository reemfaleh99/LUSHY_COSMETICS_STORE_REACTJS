import React from "react";
import useGetData from "../custom-hooks/useGetData";
import { deleteDoc, doc } from "firebase/firestore";

import { db } from "../firebase.config";
import { AiFillDelete } from "react-icons/ai";
import { toast } from "react-toastify";

const AllProducts = () => {
  const { data: productsData, loading } = useGetData("products");

  const deleteProduct = async (id) => {
    await deleteDoc(doc(db, "products", id));
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
            <h2>loading...</h2>
          ) : (
            productsData.map((item) => (
              <tr key={item.id}>
                <td>
                  <img src={item.imgUrl} alt="" className="w-12" />
                </td>
                <td>{item.productName}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
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

export default AllProducts;
