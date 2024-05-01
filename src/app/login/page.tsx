import { getServerSession } from "next-auth";
import Form from "./form";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/");
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <Form />
    </div>
  );
}
