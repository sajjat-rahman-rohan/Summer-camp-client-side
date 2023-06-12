/* eslint-disable no-unused-vars */
import React from "react";
import "./Update.css";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Update = () => {
  const { user } = useContext(AuthContext);

  const updateclass = useLoaderData();
  console.log(updateclass);

  const {
    _id,
    availableSeat,
    className,
    description,
    instructorName,
    email,
    price,
    image,
  } = updateclass;

  const handleUpdateClass = (event) => {
    event.preventDefault();

    const form = event.target;
    const className = form.className.value;
    const instructorName = form.instructorName.value;
    const email = form.email.value;
    const availableSeat = form.availableSeat.value;
    const description = form.description.value;
    const price = form.price.value;

    const updatedclass = {
      className,
      instructorName,
      email,
      availableSeat: parseFloat(availableSeat),
      description,
      price: parseFloat(price),
    };
    console.log(updatedclass);

    fetch(`http://localhost:5000/classes/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedclass),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Class Information Update Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="p-5 text-center">
      <Helmet>
        <title>Dashboard | Class-update</title>
      </Helmet>
      <h2 className="text-3xl py-5">
        Update Class Information : <b>{updateclass.className}</b>
      </h2>

      <form action="" onSubmit={handleUpdateClass} className="mt-0 m-auto">
        <div className="grid grid-cols-4">
          <label className="label">
            <h3 className="text-lg">Class Name : </h3>
          </label>
          <label className="col-span-3">
            <input
              type="text"
              name="className"
              defaultValue={className}
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
              name="instructorName"
              defaultValue={instructorName}
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
              name="email"
              defaultValue={email}
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
              name="availableSeat"
              defaultValue={availableSeat}
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
              name="price"
              defaultValue={price}
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
              name="description"
              defaultValue={description}
              className="p-4 rounded"
              style={{ width: "100%" }}
            />
          </label>
        </div>

        <div className="mt-5">
          <input
            type="submit"
            value="Update Class"
            className="btn bg-green-700"
          />
        </div>
      </form>
    </div>
  );
};

export default Update;
