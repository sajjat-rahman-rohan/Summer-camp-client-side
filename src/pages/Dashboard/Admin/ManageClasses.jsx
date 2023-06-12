/* eslint-disable no-unused-vars */
import React from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";
import useClasses from "../../../hooks/useClasses";
import ManageClass from "./ManageClass";
import { Helmet } from "react-helmet-async";

const ManageClasses = () => {
  const { user } = useContext(AuthContext);

  const [classes, refetch] = useClasses();
  console.log(classes);

  return (
    <div className="px-3 text-center">
      <Helmet>
        <title>Dashboard | Admin-manage-classes</title>
      </Helmet>
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
