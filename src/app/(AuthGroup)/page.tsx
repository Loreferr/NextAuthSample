import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Logout from "../logout";
import { redirect } from "next/navigation";

const Home = async () => {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
