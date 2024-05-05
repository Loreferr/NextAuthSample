"use client";

import React, { useEffect, useState } from "react";
import Input from "./input";

const Countdown = () => {
  const [seconds, setSeconds] = useState(90);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else {
          clearInterval(intervalId);
          // Fai qualcosa quando il countdown raggiunge zero
        }
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActive, seconds]);

  const startCountdown = () => {
    setIsActive(true);
  };

  return (
    <>
      <div>
        <h1>Countdown Timer</h1>
        <p>{seconds}</p>
        <button onClick={startCountdown}>Avvia Countdown</button>
      </div>
      <Input></Input>
    </>
  );
};

export default Countdown;
