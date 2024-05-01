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
    <form className="text-center space-x-8 bg-" onSubmit={handleSubmit}>
      <input
        className="text-black"
        name="username"
        type="username"
        placeholder="Username"
      />
      <input
        className="text-black"
        name="password"
        type="password"
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
}
