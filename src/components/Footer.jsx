import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bottom-0 text-center bg-[#F5F5F5] flex justify-between items-center mt-6 mx-4 mb-2 rounded-3xl border-solid border-2 border-[#EAEAEA] h-[4.5rem]">
      <p className="text-[18px] font-[manrope] text-center  font-medium ml-10">
        © Talup {currentYear}. All rights reserved
      </p>
      <div className="flex font-[manrope] font-normal text-[18px] justify-center gap-12 mr-10">
        <button className="underline">Terms & Conditions</button>
        <button className="underline">Privacy Policy</button>
      </div>
    </footer>
  );
}

export default Footer;
