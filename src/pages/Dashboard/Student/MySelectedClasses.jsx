/* eslint-disable no-unused-vars */
import React from "react";
import img1 from "../../../assets/classes/class1.jpg";
import { Link } from "react-router-dom";
import useSelectedClass from "../../../hooks/useselectedclass";
import Swal from "sweetalert2";

const MySelectedClasses = () => {
  const [selectClasses, refetch] = useSelectedClass();
  console.log(selectClasses);

  const total = selectClasses.reduce((sum, item) => item.price + sum, 0);

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/selectedclass/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="px-3 text-center">
      <div className="flex justify-between items-center px-2 mb-6">
        <h2 className="text-3xl">
          <u>
            <b>
              My booked Classes : {"   "}
              <b>
                {selectClasses.length} {"   "}
              </b>
            </b>
          </u>
        </h2>

        <div className="flex justify-between gap-5 items-center">
          <h2 className="text-3xl mt-3">
            Total Price :<b>${total}</b>
          </h2>
          <Link to="/dashboard/payment">
            <button className="btn btn-ghost">All Pay</button>
          </Link>
        </div>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table" style={{ width: "100%" }}>
            <thead>
              <tr>
                <th>#</th>
                <th>Class Name</th>
                <th>Instructor Name</th>
                <th>Price</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* <tr>
                <td>
                  <p>1</p>
                </td>
                <td>
                  <p>Spanish</p>
                </td>
                <td>
                  <p>Kaif Barnet</p>
                </td>
                <td>
                  <p>$220</p>
                </td>
                <th>
                  <button className="btn btn-ghost btn-xs">Delete</button>
                </th>
                <th>
                  <button className="btn btn-ghost btn-xs">Pay</button>
                </th>
              </tr> */}
              {selectClasses.map((item, index) => (
                <tr key={item._id}>
                  <td>
                    <p>{index + 1}</p>
                  </td>
                  <td>
                    {/* <p>{item.className}</p> */}
                    <div className="flex items-center space-x-3">
                      <img
                        src={item.image}
                        alt="Classimg"
                        style={{
                          height: "50px",
                          width: "50px",
                          borderRadius: "5px",
                        }}
                      />
                      <p>{item.className}</p>
                    </div>
                  </td>
                  <td>
                    <p>{item.instructorName}</p>
                  </td>
                  <td>
                    <p>${item.price}</p>
                  </td>
                  <th>
                    <button
                      onClick={() => handleDelete(item)}
                      className="btn btn-ghost btn-xs"
                    >
                      Delete
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MySelectedClasses;
