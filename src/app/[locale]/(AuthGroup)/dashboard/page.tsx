"use client";

import { authOptions } from "@/app/[locale]/api/auth/[...nextauth]/route";
import CardComponent from "@/app/[locale]/components/card";
import { getServerSession } from "next-auth";
import { Link } from "next-view-transitions";
import { redirect } from "next/navigation";
import React, { useState } from "react";

const Dashboard = () => {
  const [pin, setPin] = useState(null);
  const [inputValue, setInputValue] = useState(0);
  console.log(inputValue);
  const random = () => {
    setPin(Math.floor(Math.random() * 1000));
  };

  const handleInputChange = (e) => {
    setInputValue(Number(e.target.value));
  };

  return (
    <>
      <div>
        <p>Il PIN attuale è: {pin}</p>

        <button onClick={random}>Cambia PIN</button>

        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Inserisci un numero"
        />

        {pin === inputValue ? (
          <button className="bg-green-500 w-20 h-5">Hello!</button>
        ) : (
          <button className="bg-red-500 w-20 h-5">Hello!</button>
        )}
      </div>
    </>
  );
};

export default Dashboard;
