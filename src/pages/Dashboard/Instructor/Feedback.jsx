/* eslint-disable no-unused-vars */
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import React, { useEffect } from "react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setInputValue(String(rating));
  }, [rating]);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setInputValue(inputValue);
    setRating(parseFloat(inputValue));
  };

  const updateFeedback = useLoaderData();
  console.log(updateFeedback);

  const { _id } = updateFeedback;

  const handleFeedback = (event) => {
    event.preventDefault();

    const form = event.target;
    const suggestion = form.suggestion.value;
    const feedback = form.feedback.value;
    const rating = form.rating.value;

    const updatefeedback = {
      suggestion,
      feedback,
      rating: parseFloat(rating),
    };
    console.log(updatefeedback);

    fetch(
      `https://b7a12-summer-camp-server-side-psi.vercel.app/classes/feedback/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatefeedback),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Feedback Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="p-3 text-center">
      <Helmet>
        <title>Dashboard | Feedback</title>
      </Helmet>
      <h2 className="text-3xl py-5">
        <u>
          <b>Feedback Please</b>
        </u>
      </h2>

      <div>
        <form
          action=""
          onSubmit={handleFeedback}
          className="bg-slate-50 p-10 mt-0"
        >
          <div className="flex justify-center items-center">
            <Rating
              style={{ maxWidth: 400 }}
              value={rating}
              onChange={setRating}
              isRequired
            />
          </div>
          <div className="">
            <label className="label p-0">
              <h3 className="text-lg">Rating Please :</h3>
            </label>
            <label className="">
              <input
                type="number"
                id="ratingInput"
                min="0"
                max="5"
                step="0.5"
                value={inputValue}
                name="rating"
                onChange={handleInputChange}
              />
            </label>
            <label className="label p-0">
              <h3 className="text-lg">Do you have any suggestion for me ? </h3>
            </label>
            <label className="">
              <input
                type="text"
                name="suggestion"
                placeholder="Suggestion"
                className="input m-0"
                style={{ width: "100%" }}
              />
            </label>
            <label className="label p-0">
              <h3 className="text-lg">Feedback Detail: </h3>
            </label>
            <label className="">
              <textarea
                name="feedback"
                placeholder="Please Feedback"
                className="textarea textarea-bordered"
                style={{ width: "100%" }}
              ></textarea>
            </label>
          </div>

          <div className="mt-5">
            <input type="submit" value="Feedback" className="btn" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
