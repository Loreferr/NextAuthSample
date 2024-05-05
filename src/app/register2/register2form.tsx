"use client";

import { Link } from "next-view-transitions";
import { redirect, useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export const Register2Form = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        console.log("User registered successfully");
      } else {
        console.log("User not registered");
      }
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <div className="card border-2 border-black p-2 w-96 flex flex-col space-y-4 justify-center items-center bg-orange-300">
      <h1 className="text-2xl">Register</h1>
      <form onSubmit={handleSubmit} className="space-y-8 flex flex-col">
        <div className="inputfield flex flex-col justify-center items-start">
          <label htmlFor="name">Name</label>
          <input
            className="text-black border-2 border-black rounded-md"
            name="name"
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="inputfield flex flex-col justify-center items-start">
          <label htmlFor="username">Username</label>
          <input
            className="text-black border-2 border-black rounded-md"
            name="username"
            type="text"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="inputfield flex flex-col justify-center items-start">
          <label htmlFor="email">Email</label>
          <input
            className="text-black border-2 border-black rounded-md"
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="inputfield flex flex-col justify-center items-start">
          <label htmlFor="password">Password</label>
          <input
            className="text-black border-2 border-black rounded-md"
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button className="bg-black text-white p-2 rounded-md" type="submit">
          Register
        </button>
        <Link className="text-underline" href="/login">
          Already Registered? Click Here to Login{" "}
        </Link>
      </form>
    </div>
  );
};

export default Register2Form;

/*import { FormEvent } from "react";

export const Register2Form = () => {
  const SubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const response = await fetch("http://localhost:3000/api/register", {
      method: "POST",
      body: JSON.stringify({
        name: formData.get("name"),
        username: formData.get("username"),
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    });
    console.log(formData);

    console.log(response);
  };
  return (
    <div className="card border-2 border-black p-2 w-96 flex flex-col space-y-4 justify-center items-center bg-orange-300">
      <h1 className="text-2xl">Register</h1>
      <form onSubmit={SubmitHandler} className=" space-y-8 flex flex-col ">
        <div className="inputfield flex flex-col justify-center items-start">
          <label htmlFor="username">name</label>
          <input
            className="text-black border-2 border-black rounded-md"
            name="name"
            type="name"
            placeholder="name"
          />
        </div>
        <div className="inputfield flex flex-col justify-center items-start">
          <label htmlFor="username">Username</label>
          <input
            className="text-black border-2 border-black rounded-md"
            name="username"
            type="username"
            placeholder="Username"
          />
        </div>
        <div className="inputfield flex flex-col justify-center items-start">
          <label htmlFor="username">Email</label>
          <input
            className="text-black border-2 border-black rounded-md"
            name="email"
            type="email"
            placeholder="email"
          />
        </div>
        <div className="inputfield flex flex-col justify-center items-start">
          <label htmlFor="password">Password</label>
          <input
            className="text-black border-2 border-black rounded-md"
            name="password"
            type="password"
            placeholder="Password"
          />
        </div>
        <button className="bg-black text-white p-2 rounded-md" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};
export default Register2Form;*/
