/* eslint-disable no-unused-vars */
import React from "react";
import img from "../../../assets/classes/class1.jpg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import useClasses from "../../../hooks/useClasses";
import ManageClass from "./ManageClass";

const ManageClasses = () => {
  const { user } = useContext(AuthContext);
  // const status = "pending"; // Replace with your status value

  const [classes, refetch] = useClasses();
  console.log(classes);

  const [status, setStatus] = useState("pending");

  let pTagValue;
  let bgColor;

  if (status === "pending") {
    pTagValue = "Pending";
    bgColor = "yellow";
  } else if (status === "approved") {
    pTagValue = "Approved";
    bgColor = "green";
  } else if (status === "denied") {
    pTagValue = "Denied";
    bgColor = "red";
  } else {
    pTagValue = "Unknown";
    bgColor = "gray";
  }

  const pTagStyle = {
    backgroundColor: bgColor,
  };

  const handleClick = (event) => {
    event.currentTarget.disabled = true;
    setStatus("approved");
    toast.success("Approved success! 👍", { autoClose: 500 });
    console.log("button clicked");
  };

  return (
    <div className="px-3 text-center">
      <h2 className="text-3xl py-5">
        <u>
          Manage All Classes : <b>{classes.length}</b>
        </u>
      </h2>

      <div>
        <div className="overflow-x-auto">
          <table className="table" style={{ width: "100%" }}>
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Class Name</th>
                <th>Instructor Name</th>
                <th>Instructor Email</th>
                <th>Available Seats</th>
                <th>Price</th>
                <th>Status</th>
                <th>Feedback</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {classes.map((item, index) => (
                <ManageClass
                  item={item}
                  key={item._id}
                  refetch={refetch}
                  index={index}
                ></ManageClass>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageClasses;
