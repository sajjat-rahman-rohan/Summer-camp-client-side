/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import useAdmin from "../../../hooks/useAdmin";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";

import useClasses from "../../../hooks/useClasses";
import PopularClassCard from "./PopularClassCard";

const PopularClasses = () => {
  const [fold, setFold] = useState(true);

  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin();

  const [classes, refetch] = useClasses();
  console.log(classes);

  const navigate = useNavigate();
  const location = useLocation();

  const seats = 10;

  const [value, setValue] = useState(seats);

  const handleClick = (event) => {
    if (user) {
      event.currentTarget.disabled = true;
      console.log("button clicked");
      setValue((prevValue) => prevValue - 1);
    } else {
      navigate("/login", { state: { from: location } });
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto mb-24">
      <div>
        <h2 className="text-center text-4xl">Popular Classes</h2>
        <div className="divider w-96 mx-auto"></div>
      </div>
      <div className="grid grid-cols-3 gap-10">
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
