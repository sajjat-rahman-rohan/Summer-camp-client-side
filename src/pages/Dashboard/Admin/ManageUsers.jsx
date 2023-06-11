/* eslint-disable no-unused-vars */
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { FaUserShield } from "react-icons/fa";
import Users from "./Users";

const ManageUsers = () => {
  const { user } = useContext(AuthContext);

  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  console.log(users);

  // const handleMakeAdmin = (user) => {
  //   fetch(`http://localhost:5000/users/admin/${user._id}`, {
  //     method: "PATCH",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       if (data.modifiedCount) {
  //         refetch();
  //         Swal.fire({
  //           position: "top-end",
  //           icon: "success",
  //           title: `${user.name} is an Admin Now!`,
  //           showConfirmButton: false,
  //           timer: 1500,
  //         });
  //       }
  //     });
  // };

  // const handleMakeInstructor = (user) => {
  //   fetch(`http://localhost:5000/users/instructor/${user._id}`, {
  //     method: "PATCH",
  //   });
  //   const selectedClass = {
  //     InstructorName: user.displayName,
  //     image: user.photoURL,
  //     email: user.email,
  //     description:
  //       "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores",
  //   };

  //   console.log(selectedClass);

  //   fetch("http://localhost:5000/aadedinstructors", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(selectedClass),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       if (data.modifiedCount) {
  //         refetch();
  //         Swal.fire({
  //           position: "top-end",
  //           icon: "success",
  //           title: `${user.name} is an Instructor Now!`,
  //           showConfirmButton: false,
  //           timer: 1500,
  //         });
  //       }
  //     });
  // };

  const [status1, setStatus1] = useState("instructor");

  const [button1Disabled, setButton1Disabled] = useState(true);

  let pTagValue1;
  let bgColor1;

  if (status1 === "instructor") {
    pTagValue1 = "Instructor";
    bgColor1 = "yellow";
  } else if (status1 === "admin") {
    pTagValue1 = "Admin";
    bgColor1 = "green";
  }

  const pTagStyle1 = {
    backgroundColor: bgColor1,
  };

  const handleClickA = (event) => {
    event.currentTarget.disabled = true;
    setStatus1("admin");
    console.log("button clicked");
    toast.success("Make Admin success! 👍", { autoClose: 500 });
  };

  const [status2, setStatus2] = useState("student");

  let pTagValue2;
  let bgColor2;

  if (status2 === "student") {
    pTagValue2 = "Student";
    bgColor2 = "yellow";
  } else if (status2 === "instructor") {
    pTagValue2 = "Instructor";
    bgColor2 = "green";
  }

  const pTagStyle2 = {
    backgroundColor: bgColor2,
  };

  const handleClickI = (event) => {
    event.currentTarget.disabled = true;
    setStatus2("instructor");
    setButton1Disabled(false);
    console.log("button clicked");
    toast.success("Make Instructor success! 👍", { autoClose: 500 });
  };

  const handleDelete = (item) => {
    // Swal.fire({
    //   title: "Are you sure?",
    //   text: "You won't be able to revert this!",
    //   icon: "warning",
    //   showCancelButton: true,
    //   confirmButtonColor: "#3085d6",
    //   cancelButtonColor: "#d33",
    //   confirmButtonText: "Yes, delete it!",
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     fetch(`http://localhost:5000/selectedclass/${item._id}`, {
    //       method: "DELETE",
    //     })
    //       .then((res) => res.json())
    //       .then((data) => {
    //         if (data.deletedCount > 0) {
    //           refetch();
    //           Swal.fire("Deleted!", "Your file has been deleted.", "success");
    //         }
    //       });
    //   }
    // });
  };

  return (
    <div className="px-3 text-center">
      <h2 className="text-3xl py-5">
        <u>
          Manage All Users : <b>{users.length}</b>
        </u>
      </h2>

      <div>
        <div className="overflow-x-auto">
          <table className="table" style={{ width: "100%" }}>
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>User</th>
                <th>User Name</th>
                <th>User Email</th>
                <th>Make Admin</th>
                <th>Make Instructor</th>
                <th>Delete User</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <Users
                  key={user._id}
                  user={user}
                  index={index}
                  refetch={refetch}
                ></Users>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
