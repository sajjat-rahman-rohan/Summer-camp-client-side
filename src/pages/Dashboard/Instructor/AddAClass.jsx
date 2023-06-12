/* eslint-disable no-unused-vars */
import React from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";

const AddAClass = () => {
  const { user } = useContext(AuthContext);

  const [axiosSecure, refetch] = useAxiosSecure();
  const { register, handleSubmit } = useForm();

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

    fetch("https://b7a12-summer-camp-server-side-psi.vercel.app/classes", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newClass),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          refetch();
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
      <Helmet>
        <title>Dashboard | Instructor-add-A-class</title>
      </Helmet>
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
              {...register("instructorName", { required: true })}
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
              {...register("instructoremail", { required: true })}
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
              {...register("price", { required: true })}
              placeholder="Price"
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
