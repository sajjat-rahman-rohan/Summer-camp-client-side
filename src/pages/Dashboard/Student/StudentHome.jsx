/* eslint-disable no-unused-vars */
import React from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";
import { useState, useEffect } from "react";
import {
  FaAddressBook,
  FaCalendarWeek,
  FaCity,
  FaClinicMedical,
  FaGoogleDrive,
  FaIdCard,
  FaMapMarkerAlt,
  FaUserEdit,
  FaUserGraduate,
  FaWonSign,
} from "react-icons/fa";
import { Helmet } from "react-helmet-async";

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

  const startTime = user?.metadata.creationTime;

  const [countdown, setCountdown] = useState(getCountdown());

  function getCountdown() {
    const currentTime = new Date().getTime();
    const endTime = new Date(startTime);
    endTime.setMonth(endTime.getMonth() + 3);
    const remainingTime = endTime.getTime() - currentTime;

    return remainingTime > 0 ? remainingTime : 0;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) =>
        prevCountdown > 0 ? prevCountdown - 1000 : 0
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function formatTime(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  return (
    <div className="p-5">
      <div className="flex items-center gap-3 mb-5">
        <Helmet>
          <title>Dashboard | Student-home</title>
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

      <div>
        <h2>
          <b>Your All Classes Access Duration 3 Month </b>
        </h2>
        <div className="flex flex-col">
          <span className="text-3xl">
            <b>
              Countdown : {"  "} {formatTime(countdown)}
            </b>
          </span>
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
                South Manda, Mugda para, Dhaka-1214
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
              <p className="text-gray-500">{user?.metadata.creationTime}</p>
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
