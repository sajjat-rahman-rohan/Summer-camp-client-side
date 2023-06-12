/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import useClasses from "../../../hooks/useClasses";
import PopularClassCard from "./PopularClassCard";
import axios from "axios";

const PopularClasses = () => {
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
        <h2 className="text-center text-4xl">Popular Classes</h2>
        <div className="divider md:w-96 mx-auto"></div>
      </div>
      <div className="grid md:grid-cols-3 gap-10">
        {classes.slice(0, 6).map((item) => (
          <PopularClassCard
            key={item._id}
            item={item}
            refetch={refetch}
          ></PopularClassCard>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
