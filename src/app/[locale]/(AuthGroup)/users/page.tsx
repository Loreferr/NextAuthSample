import { authOptions } from "@/app/[locale]/api/auth/[...nextauth]/route";
import Countdown from "@/components/countdown";
import Input from "@/components/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default async function Users() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");
  return (
    <>
      <Countdown /> <div className="h-screen"></div>
    </>
  );
}
