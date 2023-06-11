/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import img1 from "../../assets/instructors/teacher1.jpg";
import useInstructors from "../../hooks/useInstructors";
import InstructorCard from "./instructorCard";

const Instructor = () => {
  const [fold, setFold] = useState(true);

  const [instructors, refetch] = useInstructors();

  return (
    <div className="max-w-screen-xl mx-auto mb-24">
      <div>
        <h2 className="text-center text-4xl">
          Our Instructors : <b>{instructors.length}</b>
        </h2>
        <div className="divider w-96 mx-auto"></div>
      </div>
      <div className="grid grid-cols-3 gap-10">
        <div className="card shadow-xl glass">
          <figure className="px-10 pt-10">
            <img
              src={img1}
              alt="Shoes"
              className="rounded-xl"
              style={{
                height: "100px",
                width: "100px",
                borderRadius: "50%",
              }}
            />
          </figure>
          <div className="pt-3 card-body ">
            <h2 className="card-title">
              <b>Name : </b> Danny Awesome
            </h2>
            <p className="m-0">
              <b>Details : </b>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores
            </p>
            <div>
              <p className="m-0">
                <b>Email :</b> danny@awsomegmail.com
              </p>
              <p>
                <b>Total Taken Classes :</b> 3
              </p>
              <p>
                <b>Name Of Taken Classes :</b> German, Spanish, Mandarin
              </p>
            </div>

            <div className="grid grid-cols-4">
              <Link to="https://www.linkedin.com/">
                <FaLinkedinIn
                  style={{ fontSize: "1.5rem", color: "#0a66c2" }}
                ></FaLinkedinIn>
              </Link>
              <Link to="https://www.facebook.com/">
                <FaFacebookF
                  style={{ fontSize: "1.5rem", color: "#1877f2" }}
                ></FaFacebookF>
              </Link>

              <Link to="https://www.twitter.com/">
                <FaTwitter
                  style={{ fontSize: "1.5rem", color: "#1da1f2" }}
                ></FaTwitter>
              </Link>
              <Link to="https://www.skype.com/">
                <FaSkype
                  style={{ fontSize: "1.5rem", color: "#00aff0" }}
                ></FaSkype>
              </Link>
            </div>
          </div>
        </div>
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
