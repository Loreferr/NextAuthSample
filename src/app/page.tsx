import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Logout from "./logout";
import { redirect } from "next/navigation";
import Navbar from "@/components/navbar";

const Home = async () => {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");
  return (
    <div>
      <Navbar></Navbar>
    </div>
  );
};

export default Home;
