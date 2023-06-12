/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import useInstructor from "../../../hooks/useInstructor";
import useAdmin from "../../../hooks/useAdmin";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { ToastContainer } from "react-bootstrap";
import Swal from "sweetalert2";

const PopularClassCard = ({ item, refetch }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  const [items, setItems] = useState(item);

  const handleFavbtn = (id) => {
    console.log("button clicked");
    if (user && user.email) {
      setItems((prevData) => {
        return {
          ...prevData,
          availableSeat: prevData.availableSeat - 1,
          disabled: true,
        };
      });

      const selectedClass = {
        selectClassId: items._id,
        className: items.className,
        instructorName: items.instructorName,
        availableSeat: items.availableSeat,
        description: items.description,
        image: items.image,
        price: items.price,
        email: user.email,
        username: user.displayName,
      };

      console.log(selectedClass);

      fetch(
        "https://b7a12-summer-camp-server-side-psi.vercel.app/selectedclass",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(selectedClass),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "This Class selected on the your cart.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to select the class",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <>
      <div className="card glass">
        <figure>
          <img src={items.image} alt="car!" />
        </figure>
        <div className="p-5 gap-0 card-body">
          <h2 className="text-2xl card-title">Spanish</h2>
          <h3 className="text-1xl">
            <b>Total Student</b> : 327
          </h3>
          <p>
            <b>Description</b> : {items.description}
          </p>
          {items.availableSeat === 0 || isAdmin || isInstructor ? (
            <>
              <button disabled className="btn btn-primary ">
                <span className="text-rose-600">Sorry Seat Not Available</span>
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => handleFavbtn(item._id)}
                disabled={items.disabled}
                className="btn btn-primary"
              >
                Select This Class
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default PopularClassCard;
