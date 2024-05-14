"use client";

import React, { useEffect, useState, useRef } from "react";
import Input from "./input";

const Countdown = () => {
  const [countdown, setCountdown] = useState(90);
  console.log(countdown);

  const timerId = useRef(null);

  const startCountdown = () => {
    if (timerId.current) return; // Evita di avviare più timer

    timerId.current = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timerId.current);
          timerId.current = null;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  useEffect(() => {
    // Cleanup on component unmount
    return () => {
      if (timerId.current) {
        clearInterval(timerId.current);
      }
    };
  }, []);

  return (
    <>
      <div>
        <h1>Countdown Timer</h1>
        <p>{countdown}</p>
        <button onClick={startCountdown}>Avvia Countdown</button>
      </div>
      <Input />
    </>
  );
};

export default Countdown;
