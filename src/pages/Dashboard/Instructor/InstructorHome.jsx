/* eslint-disable no-unused-vars */
import React from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";
import { FaFileVideo, FaUserFriends } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const InstructorHome = () => {
  const { user } = useContext(AuthContext);

  const currentDate = new Date();
  const currentHour = currentDate.getHours();
  let greeting;

  if (currentHour < 12) {
    greeting = "Good morning";
  } else if (currentHour < 19) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  return (
    <div className="p-5">
      <div className="flex items-center gap-3 mb-5">
        <Helmet>
          <title>Dashboard | Instructor-home</title>
        </Helmet>
        <div className="avatar">
          <div className="w-16 rounded-full ">
            <img src={user.photoURL} />
          </div>
        </div>
        <h2 className="text-4xl">
          {greeting} <b>{user.displayName}</b> !
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-5">
        <div className="bg-red-400 p-3 rounded-lg">
          <div className="flex items-center gap-3">
            <div className="rounded-xl ">
              <FaUserFriends style={{ fontSize: "50px" }}></FaUserFriends>
            </div>

            <h3>
              My Classes Total Students : <b>324</b>
            </h3>
          </div>
          <div>
            <p>
              Total Seat : <b>432</b>
            </p>
            <p>
              Booked Seat : <b>229</b>
            </p>
            <p>
              Availanle Seat : <b>203</b>
            </p>
          </div>
          <div>
            <progress
              className="progress progress-info w-56"
              value="432"
              max="432"
            ></progress>
            <progress
              className="progress progress-success w-56"
              value="229"
              max="432"
            ></progress>
            <progress
              className="progress progress-warning w-56"
              value="203"
              max="432"
            ></progress>
          </div>
        </div>
        <div className="bg-gray-400 p-3 rounded-lg">
          <div className="flex items-center gap-3">
            <div className="rounded-xl ">
              <FaFileVideo style={{ fontSize: "50px" }}></FaFileVideo>
            </div>

            <h3>
              My Total Classes : <b>07</b>
            </h3>
          </div>
          <div>
            <p>
              Total Classes : <b>07</b>
            </p>
            <p>
              Enrolled Classes : <b>05</b>
            </p>
            <p>
              New Classes : <b>02</b>
            </p>
          </div>
          <div>
            <progress
              className="progress progress-info w-56"
              value="7"
              max="7"
            ></progress>
            <progress
              className="progress progress-success w-56"
              value="5"
              max="7"
            ></progress>
            <progress
              className="progress progress-warning w-56"
              value="2"
              max="7"
            ></progress>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorHome;
