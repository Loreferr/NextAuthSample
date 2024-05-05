import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { Link } from "next-view-transitions";
import { redirect } from "next/navigation";
import React from "react";

const Dashboard = async () => {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");
  return (
    <>
      <h1>Welcome {session?.user?.username}</h1>
      <p>Thats your Dashboard</p>
      <Link href="/">Home</Link>
    </>
  );
};

export default Dashboard;
