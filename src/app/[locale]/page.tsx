import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";
import { authOptions } from "@/app/[locale]/api/auth/[...nextauth]/route";
import Logout from "./logout";
import { redirect } from "next/navigation";
import Navbar from "@/components/navbar";
import { getTranslations } from "next-intl/server";

const Home = async () => {
  const t = await getTranslations("Index");

  return (
    <div>
      <Navbar></Navbar>
      <h1> {t("title")}</h1>
    </div>
  );
};

export default Home;
