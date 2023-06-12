/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Rating } from "@smastrom/react-rating";

const InstructorClass = ({ item, index, refetch }) => {
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
        fetch(`http://localhost:5000/instructorClasses/${item._id}`, {
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

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <tr>
        <td>
          <p>{index + 1}</p>
        </td>
        <td>
          <h3>{item.className}</h3>
        </td>
        <td>
          <p>23</p>
        </td>
        <td>
          <p>{item.availableSeat}</p>
        </td>
        <td>
          <p>${item.price}</p>
        </td>
        <td>
          {item.status === "approved" ? (
            <p
              style={{
                backgroundColor: "green",
              }}
              className="rounded text-black px-2 py-1"
            >
              approved
            </p>
          ) : (
            <p
              style={{
                backgroundColor: "yellow",
              }}
              className="px-2 py-1 rounded "
            >
              pending
            </p>
          )}
        </td>

        <td>
          {item.feedback ? (
            <>
              <div className="flex items-center justify-center">
                <p
                  className="rounded text-purple-100 bg-blue-600 p-1 cursor-pointer"
                  type="button"
                  onClick={() => setShowModal(true)}
                  style={{ zIndex: "999" }}
                >
                  see feedback
                </p>
              </div>
              {showModal ? (
                <>
                  <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div
                      className="fixed inset-0 w-full h-full bg-black opacity-40"
                      onClick={() => setShowModal(false)}
                    ></div>
                    <div className="flex items-center min-h-screen">
                      <div className="relative w-full max-w-lg mx-auto bg-white rounded-md shadow-lg">
                        <div className="mt-2 text-center sm:ml-4 sm:text-left">
                          <div className="card">
                            <div className="card-body">
                              <div className="flex justify-center items-center">
                                <Rating
                                  style={{ maxWidth: 200 }}
                                  value={item.rating}
                                  isRequired
                                />
                              </div>
                              <p>
                                <b>Suggestion</b> : {item.suggestion}
                              </p>
                              <p>
                                <b>Feedback</b> : {item.feedback}
                              </p>
                              <div className="card-actions justify-end">
                                <button onClick={() => setShowModal(false)}>
                                  Cancel
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className=" flex justify-end sm:flex"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : null}
            </>
          ) : (
            <p>No Feedback</p>
          )}
        </td>
        <th>
          <Link to={`/dashboard/update/${item._id}`}>
            <button className="btn btn-ghost btn-xs">Update</button>
          </Link>
        </th>
        <th>
          <button
            onClick={() => handleDelete(item)}
            className="btn btn-ghost btn-xs"
          >
            Delete
          </button>
        </th>
      </tr>
    </>
  );
};

export default InstructorClass;
