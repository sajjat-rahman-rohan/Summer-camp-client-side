/* eslint-disable no-unused-vars */
import React from "react";
import { FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";

const Users = ({ user, index, refetch }) => {
  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
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
            title: `${user.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleMakeInstructor = (user) => {
    fetch(`http://localhost:5000/users/instructor/${user._id}`, {
      method: "PATCH",
    });
    const selectedClass = {
      InstructorName: user.name,
      image: user.image,
      email: user.email,
      Description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores",
    };

    console.log(selectedClass);

    fetch("http://localhost:5000/aadedinstructors", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(selectedClass),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Instructor Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleDelete = (user) => {
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
        fetch(`http://localhost:5000/users/${user._id}`, {
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
      <tr className="hover">
        <th>{index + 1}</th>
        <th>
          <img
            className="ring ring-primary ring-offset-base-100 ring-offset-2"
            src={user.image}
            style={{
              height: "40px",
              width: "40px",
              borderRadius: "50%",
            }}
          />
        </th>
        <td>{user.name}</td>
        <td>{user.email ? user.email : "unknown"}</td>
        <td>
          {/* <button
                      style={pTagStyle1}
                      onClick={handleClickA}
                      className="rounded text-black text-xs"
                      disabled={button1Disabled}
                    >
                      {pTagValue1}
                    </button>
                    <ToastContainer
                      position="top-center"
                      autoClose={5000}
                      hideProgressBar={false}
                      newestOnTop={false}
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover
                      theme="light"
                    /> */}
          {user.role === "admin" ? (
            "admin"
          ) : (
            <button
              onClick={() => handleMakeAdmin(user)}
              className="btn btn-ghost bg-orange-600  text-white"
            >
              <FaUserShield></FaUserShield>
            </button>
          )}
        </td>
        <td>
          {user.role === "instructor" ? (
            "instructor"
          ) : (
            <button
              onClick={() => handleMakeInstructor(user)}
              className="btn btn-ghost bg-orange-600  text-white"
            >
              <FaUserShield></FaUserShield>
            </button>
          )}
          {/* <button
                      style={pTagStyle2}
                      onClick={handleClickI}
                      className="rounded text-black text-xs"
                    >
                      {pTagValue2}
                    </button>
                    <ToastContainer
                      position="top-center"
                      autoClose={5000}
                      hideProgressBar={false}
                      newestOnTop={false}
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover
                      theme="light"
                    /> */}
        </td>
        <th>
          <button
            onClick={() => handleDelete(user)}
            className="btn btn-ghost btn-xs"
          >
            Delete
          </button>
        </th>
      </tr>
    </>
  );
};

export default Users;
