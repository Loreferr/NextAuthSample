import Navbar from "@/components/navbar";
import React from "react";

export const Baselayout = ({ children }) => {
  return (
    <>
      <div className="max-w-[1140px] wrap mx-auto">{children}</div>
    </>
  );
};
export default Baselayout;
