/* eslint-disable no-unused-vars */
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Users from "./Users";
import { Helmet } from "react-helmet-async";

const ManageUsers = () => {
  const { user } = useContext(AuthContext);

  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  console.log(users);

  return (
    <div className="px-3 text-center">
      <Helmet>
        <title>Dashboard | Admin-manage-users</title>
      </Helmet>
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
