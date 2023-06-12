/* eslint-disable no-unused-vars */
import React from "react";
import Swal from "sweetalert2";

const Users = ({ user, index, refetch }) => {
  const handleMakeAdmin = (user) => {
    fetch(
      `https://b7a12-summer-camp-server-side-psi.vercel.app/users/admin/${user._id}`,
      {
        method: "PATCH",
      }
    )
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
    fetch(
      `https://b7a12-summer-camp-server-side-psi.vercel.app/users/instructor/${user._id}`,
      {
        method: "PATCH",
      }
    );
    const selectedClass = {
      InstructorName: user.name,
      image: user.image,
      email: user.email,
      Description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores",
    };

    console.log(selectedClass);

    fetch(
      "https://b7a12-summer-camp-server-side-psi.vercel.app/aadedinstructors",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(selectedClass),
      }
    )
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
        fetch(
          `https://b7a12-summer-camp-server-side-psi.vercel.app/users/${user._id}`,
          {
            method: "DELETE",
          }
        )
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
          {user.role === "admin" ? (
            "admin"
          ) : (
            <>
              <button onClick={() => handleMakeAdmin(user)}>Make Admin</button>
            </>
          )}
        </td>
        <td>
          {user.role === "instructor" ? (
            "instructor"
          ) : (
            <>
              <button onClick={() => handleMakeInstructor(user)}>
                Make Instructor
              </button>
            </>
          )}
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
