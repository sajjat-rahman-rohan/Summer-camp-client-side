/* eslint-disable no-unused-vars */
import React from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;

const AddAClass = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [axiosSecure, refetch] = useAxiosSecure();
  const { register, handleSubmit } = useForm();
  // const { refetch } = useQuery();
  // const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  // const submitForm = (data) => {
  //   const formData = new FormData();
  //   formData.append("image", data.image[0]);

  //   fetch(img_hosting_url, {
  //     method: "POST",
  //     body: formData,
  //   })
  //     .then((res) => res.json())
  //     .then((imgResponse) => {
  //       if (imgResponse.success) {
  //         const imgURL = imgResponse.data.display_url;
  //         const {
  //           availableSeat,
  //           className,
  //           description,
  //           instructorName,
  //           instructoremail,
  //           price,
  //         } = data;
  //         const newItem = {
  //           availableSeat,
  //           className,
  //           description,
  //           instructorName,
  //           instructoremail,
  //           image: imgURL,
  //           price: parseFloat(price),
  //         };
  //         console.log(newItem);
  // axiosSecure.post("/menu", newItem).then((data) => {
  //   console.log("after posting new menu class", data.data);
  //   if (data.data.insertedId) {
  //     reset();
  //     Swal.fire({
  //       position: "top-end",
  //       icon: "success",
  //       title: "added class successfully",
  //       showConfirmButton: false,
  //       timer: 1500,
  //     });
  //   }
  // });
  // }
  //     });
  // };

  const submitForm = (data) => {
    const formData = new FormData();

    const {
      availableSeat,
      className,
      description,
      instructorName,
      instructoremail,
      price,
      image,
    } = data;
    const newClass = {
      className,
      image,
      instructorName,
      availableSeat,
      price: parseFloat(price),
      description,
      email: instructoremail,
    };
    console.log(newClass);

    fetch("http://localhost:5000/classes", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newClass),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          refetch(); // refetch cart to update the number of items in the cart
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "This Class selected on the your cart.",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="p-5 text-center">
      <h2 className="text-3xl py-5">
        <u>
          <b>Added A New class</b>
        </u>
      </h2>

      <form
        action=""
        onSubmit={handleSubmit(submitForm)}
        className="mt-0 m-auto"
      >
        <div className="grid grid-cols-4">
          <label className="label">
            <h3 className="text-lg">Class Name : </h3>
          </label>
          <label className="col-span-3">
            <input
              type="text"
              // name="classname"
              {...register("className", { required: true, maxLength: 120 })}
              placeholder="Class Name"
              className="input h-10"
              style={{ width: "100%" }}
            />
          </label>
        </div>

        <div className="grid grid-cols-4">
          <label className="label">
            <h2 className="text-lg">Class Image URL : </h2>
          </label>
          <label className="col-span-3">
            <input
              type="url"
              // name="classimage"
              {...register("image", { required: true })}
              placeholder="Class Image URL"
              className="input h-10"
              style={{ width: "100%" }}
            />
          </label>
        </div>

        <div className="grid grid-cols-4">
          <label className="label">
            <h3 className="text-lg">Instructor Name : </h3>
          </label>
          <label className="col-span-3">
            <input
              type="text"
              // name="instructorName"
              {...register("instructorName", { required: true })}
              // placeholder="Instructor Name"
              defaultValue={user?.displayName}
              className="input h-10"
              style={{ width: "100%" }}
            />
          </label>
        </div>

        <div className="grid grid-cols-4">
          <label className="label">
            <h3 className="text-lg">Instructor Email : </h3>
          </label>
          <label className="col-span-3">
            <input
              type="email"
              // name="instructoremail"
              {...register("instructoremail", { required: true })}
              // placeholder="Instructor Email"
              defaultValue={user?.email}
              className="input h-10"
              style={{ width: "100%" }}
            />
          </label>
        </div>

        <div className="grid grid-cols-4">
          <label className="label">
            <h3 className="text-lg">Available Seats : </h3>
          </label>
          <label className="col-span-3">
            <input
              type="number"
              // name="availableSeat"
              {...register("availableSeat", { required: true })}
              placeholder="Available Seats"
              className="input h-10"
              style={{ width: "100%" }}
            />
          </label>
        </div>

        <div className="grid grid-cols-4">
          <label className="label">
            <h3 className="text-lg">Class Price: </h3>
          </label>
          <label className="col-span-3">
            <input
              type="number"
              // name="price"
              {...register("price", { required: true })}
              placeholder="Price"
              // defaultValue={"$"}
              className="input h-10"
              style={{ width: "100%" }}
            />
          </label>
        </div>

        <div className="grid grid-cols-4">
          <label className="label">
            <h3 className="text-lg">Description: </h3>
          </label>
          <label className="col-span-3">
            <textarea
              type="text"
              // name="description"
              {...register("description", { required: true })}
              placeholder="Description"
              className="p-4 rounded"
              style={{ width: "100%" }}
            />
          </label>
        </div>

        <div className="grid grid-cols-2 gap-10 mt-5">
          <input
            type="submit"
            value="Add A Class"
            className="btn bg-green-700"
          />
          <input type="reset" value="RESET" className="btn bg-red-600" />
        </div>
      </form>
    </div>
  );
};

export default AddAClass;
