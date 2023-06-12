/* eslint-disable no-unused-vars */
import React from "react";
import useEnrolledClasses from "../../../hooks/useEnrolledClasses";
import PaymentHistoryCard from "./PaymentHistoryCard";
import { Helmet } from "react-helmet-async";

const PaymentHistory = () => {
  const [myEnrolledClasses] = useEnrolledClasses();
  console.log(myEnrolledClasses);

  return (
    <div className="px-3 text-center">
      <Helmet>
        <title>Dashboard | Student-Payment-History</title>
      </Helmet>
      <h2 className="text-3xl my-5">
        <u>
          <b>Successfully Payment : 6</b>
        </u>
      </h2>

      <div>
        <div className="overflow-x-auto">
          <table className="table" style={{ width: "100%" }}>
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
