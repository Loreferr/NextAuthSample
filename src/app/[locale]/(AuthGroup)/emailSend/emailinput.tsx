"use client";

import React, { useState } from "react";

const Emailinput = () => {
  const [emailData, setEmailData] = useState("");
  const [esito, setEsito] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: emailData,
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        setEsito("Email sent successfully");
      } else {
        setEsito("Email not sent");
      }
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };
  return (
    <div className="card border-2 border-black p-2 w-96 flex flex-col space-y-4 justify-center items-center bg-orange-300">
      <h1 className="text-2xl">Send Email</h1>
      <form onSubmit={handleSubmit} className="space-y-8 flex flex-col">
        <div className="inputfield flex flex-col justify-center items-start">
          <label htmlFor="name">Name</label>
          <input
            className="text-black border-2 border-black rounded-md"
            name="email"
            type="text"
            placeholder="Name"
            value={emailData}
            onChange={(e) => setEmailData(e.target.value)}
          />
        </div>

        <button
          onClick={handleSubmit}
          className="bg-black text-white p-2 rounded-md"
          type="submit"
        >
          START
        </button>
      </form>
      {esito ? <p>{esito}</p> : null}
    </div>
  );
};

export default Emailinput;
