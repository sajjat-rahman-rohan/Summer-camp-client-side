/* eslint-disable no-unused-vars */
import React from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";
import {
  FaAddressBook,
  FaCalendarWeek,
  FaCity,
  FaClinicMedical,
  FaGoogleDrive,
  FaIdCard,
  FaLocationArrow,
  FaMapMarkerAlt,
  FaUserEdit,
  FaUserGraduate,
  FaWonSign,
} from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";
import CountdownTimer from "./CountdownTimer";

const StudentHome = () => {
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

  const targetTime = new Date("2023-09-01T00:00:00").getTime();

  return (
    <div className="p-5">
      <div className="flex items-center gap-3 mb-5">
        <div className="avatar">
          <div className="w-16 rounded-full ">
            <img src={user.photoURL} />
          </div>
        </div>
        <h2 className="text-4xl">
          {greeting} <b>{user.displayName}</b> !
        </h2>
      </div>

      <div>
        <h2>
          <b>Your All Classes Access Duration Countdown :</b>
        </h2>
        <div>
          <CountdownTimer targetTime={targetTime} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5 mt-5">
        <div className=" bg-white p-3 rounded-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-xl ">
              <FaIdCard style={{ fontSize: "50px" }}></FaIdCard>
            </div>
            <div>
              <h3>
                <b>USER ID</b>
              </h3>
              <p className="text-gray-500">{user?.uid}</p>
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
                <b>USER NAME</b>
              </h3>
              <p className="text-gray-500"> {user?.displayName}</p>
            </div>
          </div>
        </div>

        <div className=" bg-white p-3 rounded-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-xl ">
              <FaGoogleDrive style={{ fontSize: "50px" }}></FaGoogleDrive>
            </div>
            <div>
              <h3>
                <b>EMAIL ADDRESS</b>
              </h3>
              <p className="text-gray-500"> {user?.email}</p>
            </div>
          </div>
        </div>

        <div className=" bg-white p-3 rounded-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-xl ">
              <FaMapMarkerAlt style={{ fontSize: "50px" }}></FaMapMarkerAlt>
            </div>
            <div>
              <h3>
                <b>ADDRESS</b>
              </h3>
              <p className="text-gray-500">
                {" "}
                125 Govt College Street, Monohorpur
              </p>
            </div>
          </div>
        </div>

        <div className=" bg-white p-3 rounded-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-xl ">
              <FaAddressBook style={{ fontSize: "50px" }}></FaAddressBook>
            </div>
            <div>
              <h3>
                <b>POST CODE</b>
              </h3>
              <p className="text-gray-500">1214</p>
            </div>
          </div>
        </div>

        <div className=" bg-white p-3 rounded-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-xl ">
              <FaCity style={{ fontSize: "50px" }}></FaCity>
            </div>
            <div>
              <h3>
                <b>CITY</b>
              </h3>
              <p className="text-gray-500">Dhaka</p>
            </div>
          </div>
        </div>

        <div className=" bg-white p-3 rounded-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-xl ">
              <FaClinicMedical style={{ fontSize: "50px" }}></FaClinicMedical>
            </div>
            <div>
              <h3>
                <b>COUNTRY OF RESIDENCE</b>
              </h3>
              <p className="text-gray-500">Bangladesh</p>
            </div>
          </div>
        </div>

        <div className=" bg-white p-3 rounded-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-xl ">
              <FaCalendarWeek style={{ fontSize: "50px" }}></FaCalendarWeek>
            </div>
            <div>
              <h3>
                <b>JOINED SINCE</b>
              </h3>
              <p className="text-gray-500">20/10/2020</p>
            </div>
          </div>
        </div>

        <div className=" bg-white p-3 rounded-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-xl ">
              <FaWonSign style={{ fontSize: "50px" }}></FaWonSign>
            </div>
            <div>
              <h3>
                <b>WEB SITE</b>
              </h3>
              <p className="text-gray-500">http://example.com</p>
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
                <b>TYPE</b>
              </h3>
              <p className="text-gray-500">Personal</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentHome;
