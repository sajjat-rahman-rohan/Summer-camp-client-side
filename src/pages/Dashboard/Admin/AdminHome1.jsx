/* eslint-disable no-unused-vars */
import React from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";
import {
  FaCircleNotch,
  FaFileVideo,
  FaUserEdit,
  FaUserFriends,
  FaUserGraduate,
} from "react-icons/fa";

import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";

const data01 = [
  { name: "Total Student", value: 1732 },
  { name: "New Student", value: 438 },
  { name: "Total Instructor", value: 45 },
  { name: "Booked Seat", value: 1163 },
  { name: "Total Classes", value: 78 },
  { name: "Available Seat", value: 647 },
  { name: "New Classes", value: 12 },
];

const AdminHome1 = () => {
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
    <div className="p-5 ">
      <div>
        <h2>Profile</h2>
        <p>
          Welcome to {user.displayName} ! {greeting}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-5">
        <div className=" bg-white p-3 rounded-sm">
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="w-12 rounded-full ">
                <img src={user.photoURL} />
              </div>
            </div>
            <div>
              <h3>
                <b>{user.displayName}</b>
              </h3>
              <p className="text-gray-500">{user.email}</p>
            </div>
          </div>
        </div>

        <div className=" bg-white p-3 rounded-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-xl ">
              <FaUserEdit style={{ fontSize: "50px" }}></FaUserEdit>
            </div>
            <div>
              <h3>
                <b> My Profile</b>
              </h3>
              <p className="text-gray-500"> Account Setting Profile</p>
            </div>
          </div>
        </div>

        <div className=" bg-white p-3 rounded-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-xl ">
              <FaFileVideo style={{ fontSize: "50px" }}></FaFileVideo>
            </div>
            <div>
              <h3>
                <b>Our Classes</b>
              </h3>
              <p className="text-gray-500"> Total 78 Classes</p>
            </div>
          </div>
        </div>

        <div className=" bg-white p-3 rounded-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-xl ">
              <FaUserFriends style={{ fontSize: "50px" }}></FaUserFriends>
            </div>
            <div>
              <h3>
                <b>Our Instuctors</b>
              </h3>
              <p className="text-gray-500"> Total 34 Instructor</p>
            </div>
          </div>
        </div>

        <div className=" bg-white p-3 rounded-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-xl ">
              <FaUserGraduate style={{ fontSize: "50px" }}></FaUserGraduate>
            </div>
            <div>
              <h3>
                <b>Our Students</b>
              </h3>
              <p className="text-gray-500"> Total 1732 Students</p>
            </div>
          </div>
        </div>

        <div className=" bg-white p-3 rounded-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-xl ">
              <FaCircleNotch style={{ fontSize: "50px" }}></FaCircleNotch>
            </div>
            <div>
              <h3>
                <b>Activity</b>
              </h3>
              <p className="text-gray-500"> Logs & Notification</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <PieChart width={300} height={300}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
};

export default AdminHome1;
