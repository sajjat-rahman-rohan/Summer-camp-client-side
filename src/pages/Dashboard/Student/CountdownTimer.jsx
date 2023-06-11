/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

function CountdownTimer({ targetTime }) {
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const currentTime = new Date().getTime();
    const difference = targetTime - currentTime;
    const seconds = Math.floor((difference / 1000) % 60);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(getTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <div>
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
        <div className="flex flex-col">
          <span className="text-3xl">
            <b>{timeRemaining.days} days</b>
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-3xl">
            <b>{timeRemaining.hours} hours,</b>
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-3xl">
            <b>{timeRemaining.minutes} minutes,</b>
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-3xl">
            <b>{timeRemaining.seconds} seconds</b>
          </span>
        </div>
      </div>
    </div>
  );
}

export default CountdownTimer;
