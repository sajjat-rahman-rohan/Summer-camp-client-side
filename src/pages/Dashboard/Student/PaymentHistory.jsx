/* eslint-disable no-unused-vars */
import React from "react";
import img from "../../../assets/classes/class1.jpg";
import useEnrolledClasses from "../../../hooks/useEnrolledClasses";
import PaymentHistoryCard from "./PaymentHistoryCard";

const PaymentHistory = () => {
  const [myEnrolledClasses] = useEnrolledClasses();
  console.log(myEnrolledClasses);

  const courses = ["French Intermediate", "German Advanced"];

  return (
    <div className="px-3 text-center">
      <h2 className="text-3xl my-5">
        <u>
          <b>Successfully Payment : 6</b>
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
                <th>Total Class</th>
                <th>Total Price</th>
                <th>Payment Status</th>
                <th>Payment Date</th>
                <th>Transaction Id</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {myEnrolledClasses.map((item, index) => (
                <PaymentHistoryCard
                  key={item._id}
                  item={item}
                  index={index}
                ></PaymentHistoryCard>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
