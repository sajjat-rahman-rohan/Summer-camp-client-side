/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import PopularInstructorCard from "./PopularInstructorCard";
import { key } from "localforage";
import useInstructors from "../../../hooks/useInstructors";
import { useEffect } from "react";
import axios from "axios";

const PopularInstructors = () => {
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
    <div className="max-w-screen-xl mx-auto mb-24 ">
      <div>
        <h2 className="text-center text-4xl">Popular Instructors</h2>
        <div className="divider w-96 mx-auto"></div>
      </div>
      <div className="grid grid-cols-3 gap-10">
        {instructors.slice(0, 6).map((item) => (
          <PopularInstructorCard
            key={item._id}
            item={item}
            refetch={refetch}
          ></PopularInstructorCard>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
