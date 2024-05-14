import Navbar from "@/components/navbar";
import { ViewTransitions } from "next-view-transitions";
import { Inter } from "next/font/google";
import Modal from "../components/modal";
const inter = Inter({ subsets: ["latin"] });
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <Navbar></Navbar>
      {children}
      <Modal></Modal>
    </section>
  );
}
