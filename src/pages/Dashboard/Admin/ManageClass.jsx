/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageClass = ({ item, index, refetch }) => {
  const statusChange = (item) => {
    fetch(`http://localhost:5000/classes/approved/${item._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${item.className} Approved success!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/classes/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <>
      <tr>
        <td>
          <p>{index + 1}</p>
        </td>
        <td>
          <div className="flex items-center space-x-3">
            <img
              src={item.image}
              alt="Classimg"
              style={{
                height: "50px",
                width: "50px",
                borderRadius: "5px",
              }}
            />
            <p>{item.className}</p>
          </div>
        </td>
        <td>
          <p>{item.instructorName}</p>
        </td>
        <td>
          <p>{item.email ? item.email : "admin"}</p>
        </td>
        <td>
          <p>{item.availableSeat}</p>
        </td>
        <td>
          <p>{"$" + item.price}</p>
        </td>
        <td>
          {item.status === "approved" ? (
            <button
              style={{
                backgroundColor: "green",
              }}
              className="rounded text-black text-xs"
            >
              approved
            </button>
          ) : (
            <button
              style={{
                backgroundColor: "yellow",
              }}
              onClick={() => statusChange(item)}
              className="rounded text-black text-xs"
            >
              pending
            </button>
          )}
        </td>
        <td>
          <p>
            <Link to={`/dashboard/feedback/${item._id}`}>
              <u>Feedback</u>
            </Link>
          </p>
        </td>
        <th>
          <Link to={`/dashboard/update/${item._id}`}>
            <button className="btn btn-ghost btn-xs">Update</button>
          </Link>
        </th>
        <th>
          <button
            onClick={() => handleDelete(item)}
            className="btn btn-ghost btn-xs"
          >
            Delete
          </button>
        </th>
      </tr>
    </>
  );
};

export default ManageClass;
