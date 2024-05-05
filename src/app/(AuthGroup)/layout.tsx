import Navbar from "@/components/navbar";
import { ViewTransitions } from "next-view-transitions";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={inter.className}>
          <Navbar></Navbar>
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}
