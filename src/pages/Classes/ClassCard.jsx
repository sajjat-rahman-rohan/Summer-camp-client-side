/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const ClassCard = ({ item, refetch }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [isAdmin] = useAdmin();
  //   const [, refetch] = useCart();

  const [items, setItems] = useState(item);

  //   console.log(items._id);

  const handleFavbtn = (id) => {
    console.log("button clicked");
    if (user && user.email) {
      //   event.currentTarget.disabled = true;
      //     const updatedData = classes.map((item) => {
      //     if (item._id === id) {
      //       const updatedPrice = item.availableSeat - 1;
      //       return { ...item, availableSeat: updatedPrice, disabled: true };
      //     }
      //     console.log()
      //     return item;
      //   });
      //     setClasses(updatedData);
      //     console.log(updatedData);

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

      fetch("http://localhost:5000/selectedclass", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(selectedClass),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch(); // refetch cart to update the number of items in the cart
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

      toast.success("Class Booked success! 👍", { autoClose: 500 });
    }
    //  else {
    //   navigate("/login", { state: { from: location } });
    // }
  };

  return (
    <>
      <div className="card glass">
        <figure>
          <img src={items.image} alt="classimg" />
        </figure>

        <div className="p-5 gap-0 card-body">
          <h2 className="card-title">Name :{items.className}</h2>
          <h3>
            <b>Instructor Name :</b> {items.instructorName}
          </h3>
          <h4>
            <b>Available Seats :</b> {items.availableSeat}
          </h4>
          <h4>
            <b>Price :</b> $ {items.price}
          </h4>
          <p>
            <b>Description :</b> {items.description}
          </p>
          {items.availableSeat === 0 || isAdmin ? (
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
      {/* <ToastContainer
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
    </>
  );
};

export default ClassCard;
