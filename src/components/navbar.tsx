import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Logout from "@/app/logout";
import { getServerSession } from "next-auth";
import { Link } from "next-view-transitions";
import { redirect } from "next/navigation";
import React from "react";

export default async function navbar() {
  const session = await getServerSession(authOptions);
  return (
    <nav className="flex justify-center items-center bg-slate-500 gap-8 h-10">
      {!!session && (
        <>
          <p className="font-bold text-md">Welcome {session?.user?.username}</p>

          <Link href={"/users"}>Users</Link>
          <Link href={"/dashboard"}>Dashboard</Link>
          <Logout></Logout>
        </>
      )}
      {!session && (
        <>
          <Link href={"/login"}>Login</Link>
          <Link href={"/register"}>Register</Link>
          <Link href={"/register2"}>Register2</Link>
        </>
      )}
      <Link href={"/"}>Home</Link>
    </nav>
  );
}
