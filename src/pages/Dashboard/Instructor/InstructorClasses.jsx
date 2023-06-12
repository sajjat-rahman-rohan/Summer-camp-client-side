/* eslint-disable no-unused-vars */
import React from "react";
import useInstructorClasses from "../../../hooks/useInstructorClasses";
import InstructorClass from "./InstructorClass";
import "./Instructor.css";
import { Helmet } from "react-helmet-async";

const InstructorClasses = () => {
  const [instructorClasses, refetch] = useInstructorClasses();
  console.log(instructorClasses);

  return (
    <div className="px-3 text-center">
      <Helmet>
        <title>Dashboard | Instructor-Classes</title>
      </Helmet>
      <h2 className="text-3xl py-5">
        <u>
          My Added Classes : <b>{instructorClasses.length}</b>
        </u>
      </h2>

      <div>
        <div className="overflow-x-auto">
          <table className="table" style={{ width: "100%" }}>
            <thead>
              <tr>
                <th>#</th>
                <th>Class Name</th>
                <th>Enrolled Students</th>
                <th>Available Seats</th>
                <th>Price</th>
                <th>Status</th>
                <th>Feedback</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {instructorClasses.map((item, index) => (
                <InstructorClass
                  key={item._id}
                  item={item}
                  index={index}
                  refetch={refetch}
                ></InstructorClass>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InstructorClasses;
