/* eslint-disable no-unused-vars */
import React from "react";

const PaymentHistoryCard = ({ item, index }) => {
  const name = item.classesNames.map((classes, index) => (
    <div key={index}>
      {/* <span>{index + 1}</span> */}
      <span>{classes}</span>
    </div>
  ));
  console.log(item);
  console.log(name);

  return (
    <>
      <tr>
        <td>
          <p>{index + 1}</p>
        </td>
        <td>
          <div>{name}</div>
        </td>

        <td>
          <p>{item.classesNames.length}</p>
        </td>
        <td>
          <p>${item.price}</p>
        </td>
        <td>
          <p className="bg-green-500 text-center rounded">Successfull</p>
        </td>
        <td>
          <p>{item.date}</p>
        </td>
        <td>
          <p>{item.transactionId}</p>
        </td>
      </tr>
    </>
  );
};

export default PaymentHistoryCard;
