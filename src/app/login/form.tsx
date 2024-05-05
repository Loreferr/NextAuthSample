"use client";

import Credentials from "next-auth/providers/credentials";
import { signIn } from "next-auth/react";
import { Link } from "next-view-transitions";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Form() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [random, setRandom] = useState(0);
  const [inputCode, setInputCode] = useState(0);

  const router = useRouter();
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const response = await signIn("credentials", {
      username: username,
      password: password,
      redirect: false,
    });
    console.log({ response });
    if (!response?.error) {
      router.push("/");
      router.refresh();
    } else if (response === null) {
      router.push("/api/auth/login");
    }
  };

  const handleEmail = async (event: any) => {
    event.preventDefault();

    const randomNumber = Math.floor(Math.random() * 1000);
    setRandom(randomNumber);

    try {
      const formData = {
        email: email,
        random: randomNumber,
      };
      const response = await fetch("http://localhost:3000/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        console.log("Email sent successfully");
      } else {
      }
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <div className="card border-2 border-black p-2 w-96 flex flex-col space-y-4 justify-center items-center bg-orange-300">
      <h1 className="text-2xl">Login</h1>
      <form className=" space-y-8 flex flex-col " onSubmit={handleSubmit}>
        <div className="inputfield flex flex-col justify-center items-start">
          <label htmlFor="username">Username</label>
          <input
            className="text-black border-2 border-black rounded-md"
            name="username"
            type="username"
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="inputfield flex flex-col justify-center items-start">
          <label htmlFor="password">Password</label>
          <input
            className="text-black border-2 border-black rounded-md"
            name="password"
            value={password}
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="inputfield flex flex-col justify-center items-start">
          <label htmlFor="password">Email</label>
          <input
            className="text-black border-2 border-black rounded-md"
            name="password"
            value={email}
            type="text"
            placeholder="Password"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="bg-black text-white p-2 rounded-md" type="submit">
          Login
        </button>
        <Link className="text-underline" href="/register2">
          Not Register Yet? Click Here
        </Link>
      </form>
      <button
        onClick={handleEmail}
        className="bg-black text-white p-2 rounded-md"
      >
        START
      </button>
      {random !== 0 ? (
        <input
          value={inputCode}
          onChange={(e) => setInputCode(Number(e.target.value))}
          type="number"
        />
      ) : null}
    </div>
  );
}
