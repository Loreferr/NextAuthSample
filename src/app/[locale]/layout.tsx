import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
import { ViewTransitions } from "next-view-transitions";
import Logout from "./logout";

import Baselayout from "./base-layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <ViewTransitions>
      <html lang={locale}>
        <body className={inter.className}>
          <Baselayout>{children}</Baselayout>
        </body>
      </html>
    </ViewTransitions>
  );
}
