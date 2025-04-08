import React, { useState } from "react";
import { toast } from "react-toastify";

import { db, storage } from "../firebase.config";

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [department, setDepartment] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const addProduct = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const docRef = await collection(db, "products");
      const storageRef = ref(storage, `proImgs/${Date.now() + image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        "state_changed",
        null,
        (error) => {
          toast.error("Image upload failed: " + error.message);
          setLoading(false);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

          await addDoc(docRef, {
            productName: title,
            desc: description,
            price: price,
            brand: brand,
            dept: department,
            category: category,
            type: type,
            imgUrl: downloadURL,
            createdAt: new Date(),
          });
          setLoading(false);
          toast.success("product added");
          navigate("/dashboard/all-products");
        }
      );
    } catch (error) {
      setLoading(false);
      toast.error("product not added");
    }
  };

  return (
    <section>
      {loading ? (
        <h2>loading...</h2>
      ) : (
        <>
          <h6 className="text-xl font-medium">Add Products</h6>
          <form className="flex flex-col py-5" onSubmit={addProduct}>
            <input
              type="text"
              placeholder="product title"
              className="w-[100%] mb-5 p-5 border-2 border-green-200 rounded-xl focus:outline-green-500"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="description"
              className="w-[100%] mb-5 p-5 border-2 border-green-200 rounded-xl focus:outline-green-500"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              type="number"
              placeholder="price"
              className="w-[100%] mb-5 p-5 border-2 border-green-200 rounded-xl focus:outline-green-500"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <input
              type="text"
              placeholder="brand name"
              className="w-[100%] mb-5 p-5 border-2 border-green-200 rounded-xl focus:outline-green-500"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
            <input
              type="text"
              placeholder="department"
              className="w-[100%] mb-5 p-5 border-2 border-green-200 rounded-xl focus:outline-green-500"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            />
            <div className="flex justify-between items-center">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="cursor-pointer border-green-300 border-2 p-4 mt-5 w-3/4 md:w-72 rounded-xl font-semibold text-lg"
              >
                <option>category</option>
                <option value="skin">skin</option>
                <option value="cosmatics">cosmatics</option>
                <option value="fragrance">fragrance</option>
              </select>

              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="cursor-pointer border-green-300 border-2 p-4 mt-5 w-3/4 md:w-72 rounded-xl font-semibold text-lg"
              >
                <option> type</option>
                <option value="featured"> featured</option>
                <option value="bestselling"> bestselling</option>
                <option value="newest"> newest</option>
              </select>
              <div>
                <h6>choose img</h6>
                <input
                  type="file"
                  className="w-3/4 mb-5 p-4 border-2 border-green-200 rounded-xl focus:outline-green-500"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-green-300 p-4 my-10 w-52 rounded-full font-semibold text-xl hover:bg-green-500 transition m-auto"
            >
              Add Product
            </button>
          </form>
        </>
      )}
    </section>
  );
};

export default AddProduct;
