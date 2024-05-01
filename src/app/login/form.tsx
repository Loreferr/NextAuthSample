"use client";

import Credentials from "next-auth/providers/credentials";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function Form() {
  const router = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await signIn("credentials", {
      username: formData.get("username"),
      password: formData.get("password"),
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
            placeholder="Username"
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
          Login
        </button>
      </form>
    </div>
  );
}
