/* eslint-disable no-unused-vars */
import React from "react";

const EnrolledClass = ({ item, index }) => {
  const name = item.classesNames.map((classes, index) => (
    <div key={index}>
      <span>{classes}</span>
    </div>
  ));

  const instructorName = item.instructorsNames.map((name, index) => (
    <div key={index}>
      <span>{name}</span>
    </div>
  ));

  console.log(item);

  return (
    <>
      <tr>
        <td>
          <p>{index + 1}</p>
        </td>
        <td>
          <div>{name}</div>
        </td>
        <td>{instructorName}</td>
        <td>
          <p>${item.price}</p>
        </td>
        <th>
          <p>{item.date}</p>
        </th>
      </tr>
    </>
  );
};

export default EnrolledClass;
