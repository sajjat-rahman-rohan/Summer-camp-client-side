/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaSkype, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const InstructorCard = ({ item, refetch }) => {
  const { user } = useContext(AuthContext);

  const [items, setItems] = useState(item);

  console.log(items);

  return (
    <div>
      <div className="card shadow-xl glass">
        <figure className="px-10 pt-10">
          <img
            src={item.image}
            alt="Instructor img"
            className="rounded-xl"
            style={{
              height: "100px",
              width: "100px",
              borderRadius: "50%",
            }}
          />
        </figure>
        <div className="pt-3 card-body">
          <h2 className="card-title">
            <b>Name : </b> {item.InstructorName}
          </h2>
          <p className="m-0">
            <b>Description : </b>
            {item.Description}
          </p>
          <div>
            <p className="m-0">
              <b>Email :</b> {item.email}
            </p>
            <p>
              <b>Total Taken Classes :</b> {item.takenTotalClasses}
            </p>
            <p>
              <b>Name Of Taken Classes :</b> {item.nameOfTakenClasses}
            </p>
          </div>

          <div className="grid grid-cols-4 gap-6">
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
    </div>
  );
};

export default InstructorCard;
