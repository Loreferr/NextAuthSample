import { getServerSession } from "next-auth";
import Form from "./form";

import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function LoginPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Form />
    </div>
  );
}
