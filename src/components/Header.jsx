import React from "react";
import image from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const navigatetoForm = () => {
    
    navigate('/form');
  };
  return (
    <div className="top-0 flex justify-between mt-6 mx-4 rounded-full border-solid border-2 border-[#EAEAEA] h-[5.5rem]">
      <a href="/">
        {" "}
        <img src={image} alt="Logo" className="w-26 h-8 mt-6 mx-8 " />
      </a>
      <div className="flex justify-center gap-x-3.5 mx-8">
        <button onClick={navigatetoForm} className="rounded-full border-solid border-2 border-[#EAEAEA] h-[4rem] mt-3 px-6 text-center text-[18px] font-normal hover:bg-[#F1F1F1] font-[manrope]">
          Get Projects
        </button>
        <button className="rounded-full border-solid border-2 bg-[#1C1C1C] text-white border-black h-[4rem] text-[18px] font-semibold font-[manrope] mt-3 px-6 text-center hover:border-[#4E4E4E] hover:bg-[#4E4E4E] ">
          Onboard Talent
        </button>
      </div>
    </div>
  );
}

export default Header;
