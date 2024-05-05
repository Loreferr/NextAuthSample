import Navbar from "@/components/navbar";
import React from "react";

export const Baselayout = ({ children }) => {
  return (
    <>
      <div className="max-w-[1140px] mx-auto">
        <Navbar></Navbar>
        {children}
      </div>
    </>
  );
};
export default Baselayout;
