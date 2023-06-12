/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import useInstructors from "../../hooks/useInstructors";
import InstructorCard from "./instructorCard";
import { useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const Instructor = () => {
  const [instructors, setInstructors] = useState([]);
  const [refetch] = useInstructors();
  console.log(instructors);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/instructors");
      setInstructors(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto mb-24">
      <Helmet>
        <title>Ola Conversa | Instructors</title>
      </Helmet>
      <div>
        <h2 className="text-center text-4xl">
          Our Instructors : <b>{instructors.length}</b>
        </h2>
        <div className="divider w-96 mx-auto"></div>
      </div>
      <div className="grid grid-cols-3 gap-10">
        {instructors.map((item, index) => (
          <InstructorCard
            item={item}
            key={item._id}
            refetch={refetch}
          ></InstructorCard>
        ))}
      </div>
    </div>
  );
};

export default Instructor;
