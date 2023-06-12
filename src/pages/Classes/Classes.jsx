/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useEffect } from "react";
import useClasses from "../../hooks/useClasses";
import ClassCard from "./ClassCard";
import axios from "axios";

const Classes = () => {
  const [classes, setClasses] = useState([]);
  const [refetch] = useClasses();
  console.log(classes);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/classes");
      setClasses(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto mb-24">
      <div>
        <h2 className="text-center text-4xl">
          Our Classes : <b>{classes.length}</b>
        </h2>
        <div className="divider w-96 mx-auto"></div>
      </div>

      <div className="grid grid-cols-3 gap-10">
        {classes.map((item, index) => (
          <ClassCard
            item={item}
            key={item._id}
            index={index}
            refetch={refetch}
          ></ClassCard>
        ))}
      </div>
    </div>
  );
};

export default Classes;
