/* eslint-disable no-unused-vars */
import React from "react";
import img from "../../../assets/payment.jpg";
import { loadStripe } from "@stripe/stripe-js";
import Checkout from "../Student/Checkout";
import { Elements } from "@stripe/react-stripe-js";
import { useLoaderData } from "react-router-dom";
import useSelectedClass from "../../../hooks/useselectedclass";
import CheckoutForm from "../Payment/CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payments = () => {
  const [selectClasses, refetch] = useSelectedClass();
  console.log(selectClasses);

  const total = selectClasses.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(total.toFixed(2));
  console.log(price);

  const calculateEstimated = (price, percentage) => {
    return (price * percentage) / 100;
  };

  const estimatedPrice = calculateEstimated(price, 20);
  console.log(estimatedPrice);

  const totalPrice = price + estimatedPrice;
  console.log(totalPrice);

  return (
    <div className="px-3 text-center">
      <h2 className="text-3xl py-10">
        <u>
          <b>Payment Now </b>
        </u>
      </h2>

      <div className="card grid grid-cols-2 lg:card-side bg-base-100 text-start shadow-xl">
        <figure>
          <img src={img} alt="Album" />
        </figure>
        <div className="px-5 mt-5">
          <h3>Sub Total : ${price}</h3>
          <h3>Estimated : ${estimatedPrice}</h3>
          <div className="divider m-0"></div>
          <h2>Total : ${totalPrice}</h2>
          <Elements stripe={stripePromise}>
            <Checkout
              price={totalPrice}
              selectClasses={selectClasses}
            ></Checkout>
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payments;

{
  /* <form className="my-5" onSubmit={handleSubmit}>
<p>Please Enter your card number :</p>
<CardElement
  className="bg-slate-100 px-2 py-3 rounded"
  options={{
    style: {
      base: {
        fontSize: "16px",
        color: "#424770",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#9e2146",
      },
    },
  }}
/>
<button
  className="btn btn-primary btn-sm mt-4"
  type="submit"
  // disabled={!stripe || !clientSecret || processing}
>
  Payment
</button>
</form> */
}
