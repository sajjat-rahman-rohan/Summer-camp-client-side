/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import useClasses from "../../hooks/useClasses";
import Swal from "sweetalert2";
import ClassCard from "./ClassCard";

const Classes = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [isAdmin] = useAdmin();

  const [classes, refetch] = useClasses();
  console.log(classes);

  // const [classes, setClasses] = useState(classess);
  // console.log(classes[0]._id);

  // const [disabled, setDisabled] = useState(false);

  const seats = 0;

  const [value, setValue] = useState(seats);

  const handleClick = (event) => {
    if (user) {
      event.currentTarget.disabled = true;
      console.log("button clicked");
      setValue((prevValue) => prevValue - 1);
      toast.success("Added Favorite success! 👍", { autoClose: 500 });
    } else {
      navigate("/login", { state: { from: location } });
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto mb-24">
      <div>
        <h2 className="text-center text-4xl">
          Our Classes : <b>{classes.length}</b>
        </h2>
        <div className="divider w-96 mx-auto"></div>
      </div>

      <div className="grid grid-cols-3 gap-10">
        {classes.map((item, index) => (
          <ClassCard item={item} key={item._id} refetch={refetch}></ClassCard>
        ))}
        {/* {classes.map((item, index) => (
          <div className="card glass" key={item._id}>
            <figure>
              <img src={item.image} alt="classimg" />
            </figure>

            <div className="p-5 gap-0 card-body">
              <h2 className="card-title">Name :{item.className}</h2>
              <h3>
                <b>Instructor Name :</b> {item.instructorName}
              </h3>
              <h4>
                <b>Available Seats :</b> {item.availableSeat}
              </h4>
              <h4>
                <b>Price :</b> {item.price}
              </h4>
              <h5>
                <b>Total Student</b> : 327
              </h5>
              <p>
                <b>Description :</b> {item.description}
              </p>
              {item.availableSeat === 0 || isAdmin ? (
                <>
                  <button disabled className="btn btn-primary ">
                    <span className="text-rose-600">
                      Sorry Seat Not Available
                    </span>
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => handleFavbtn(item._id)}
                    disabled={item.disabled}
                    className="btn btn-primary"
                  >
                    Select This Class
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        /> */}
      </div>
    </div>
  );
};

export default Classes;
