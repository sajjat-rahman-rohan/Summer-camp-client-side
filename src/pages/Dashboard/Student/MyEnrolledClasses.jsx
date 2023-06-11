/* eslint-disable no-unused-vars */
import React from "react";
import img from "../../../assets/classes/class1.jpg";
import useEnrolledClasses from "../../../hooks/useEnrolledClasses";
import EnrolledClass from "./EnrolledClass";

const MyEnrolledClasses = () => {
  const [myEnrolledClasses] = useEnrolledClasses();
  // console.log(myEnrolledClasses);

  // const test = myEnrolledClasses.map((item) => console.log(item._id));

  return (
    <div className="px-3 text-center">
      <h2 className="text-3xl py-5">
        <u>
          <b>My Enrolled Classes</b>
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
                <th>Price</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {myEnrolledClasses.map((item, index) => (
                <EnrolledClass
                  key={item._id}
                  item={item}
                  index={index}
                ></EnrolledClass>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyEnrolledClasses;
