/* eslint-disable no-unused-vars */
import React from "react";
import useInstructorClasses from "../../../hooks/useInstructorClasses";
import InstructorClass from "./InstructorClass";
import { useState } from "react";
import "./Instructor.css";

const InstructorClasses = () => {
  const status = "pending"; // Replace with your status value

  const [instructorClasses, refetch] = useInstructorClasses();
  console.log(instructorClasses);

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

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="px-3 text-center">
      <h2 className="text-3xl py-5">
        <u>
          My Added Classes : <b>{instructorClasses.length}</b>
        </u>
      </h2>

      {/* <>
        <div className="flex items-center justify-center h-60">
          <button
            className="px-6 py-3 text-purple-100 bg-purple-600 rounded-md"
            type="button"
            onClick={() => setShowModal(true)}
          >
            Open Modal
          </button>
        </div>
        {showModal ? (
          <>
            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div
                className="fixed inset-0 w-full h-full bg-black opacity-40"
                onClick={() => setShowModal(false)}
              ></div>
              <div className="flex items-center min-h-screen px-4 py-8">
                <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                  <div className="mt-3 sm:flex">
                    <div className="mt-2 text-center sm:ml-4 sm:text-left">
                      <div className="items-center gap-2 mt-3 sm:flex">
                        <button
                          className="w-full mt-2 p-2.5 flex-1 text-white bg-red-600 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                          onClick={() => setShowModal(false)}
                        >
                          Delete
                        </button>
                        <button
                          className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                          onClick={() => setShowModal(false)}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </> */}

      <div>
        <div className="overflow-x-auto">
          <table className="table" style={{ width: "100%" }}>
            {/* head */}
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
