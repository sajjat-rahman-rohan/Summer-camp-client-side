/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import img1 from "../../../assets/instructors/teacher1.jpg";
import img2 from "../../../assets/instructors/teacher2.jpg";
import img3 from "../../../assets/instructors/teacher3.jpg";
import img4 from "../../../assets/instructors/teacher4.jpg";
import img5 from "../../../assets/instructors/teacher5.jpg";
import img6 from "../../../assets/instructors/teacher6.jpg";

const PopularInstructors = () => {
  const [fold, setFold] = useState(true);

  return (
    <div className="max-w-screen-xl mx-auto mb-24 ">
      <div>
        <h2 className="text-center text-4xl">Popular Instructors</h2>
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
          <div className="pt-3 card-body items-center text-center">
            <h2 className="card-title">Danny Awesome</h2>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores
            </p>

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
        <div className="card shadow-xl glass">
          <figure className="px-10 pt-10">
            <img
              src={img2}
              alt="Shoes"
              className="rounded-xl"
              style={{
                height: "100px",
                width: "100px",
                borderRadius: "50%",
              }}
            />
          </figure>
          <div className="pt-3 card-body items-center text-center">
            <h2 className="card-title">Kimberly Richiez</h2>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores
            </p>

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
        <div className="card shadow-xl glass">
          <figure className="px-10 pt-10">
            <img
              src={img3}
              alt="Shoes"
              className="rounded-xl"
              style={{
                height: "100px",
                width: "100px",
                borderRadius: "50%",
              }}
            />
          </figure>
          <div className="pt-3 card-body items-center text-center">
            <h2 className="card-title">Dylan Taylor</h2>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores
            </p>

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
        <div className="card shadow-xl glass">
          <figure className="px-10 pt-10">
            <img
              src={img4}
              alt="Shoes"
              className="rounded-xl"
              style={{
                height: "100px",
                width: "100px",
                borderRadius: "50%",
              }}
            />
          </figure>
          <div className="pt-3 card-body items-center text-center">
            <h2 className="card-title">Barnet</h2>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores
            </p>

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
        <div className="card shadow-xl glass">
          <figure className="px-10 pt-10">
            <img
              src={img5}
              alt="Shoes"
              className="rounded-xl"
              style={{
                height: "100px",
                width: "100px",
                borderRadius: "50%",
              }}
            />
          </figure>
          <div className="pt-3 card-body items-center text-center">
            <h2 className="card-title">Amayla Clarke</h2>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores
            </p>

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
        <div className="card shadow-xl glass">
          <figure className="px-10 pt-10">
            <img
              src={img6}
              alt="Shoes"
              className="rounded-xl"
              style={{
                height: "100px",
                width: "100px",
                borderRadius: "50%",
              }}
            />
          </figure>
          <div className="pt-3 card-body items-center text-center">
            <h2 className="card-title">John Smith</h2>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores
            </p>

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
    </div>
  );
};

export default PopularInstructors;
