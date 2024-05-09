import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import image from "../../assets/logo.png";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
const Success = () => {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      navigate("/");
    }
  }, [countdown, history]);

  return (
    <div className=" flex flex-col  gap-y-10">
      <div className=" topsection top-0 flex justify-between mt-6 mx-4  h-[5.5rem]">
        <a>
          {" "}
          <img src={image} alt="Logo" className="w-26 h-8 mt-6 mx-8 " />
        </a>
      </div>
      <div className="successSection flex flex-col justify-center items-center gap-y-10">
        <IoCheckmarkCircleSharp className="w-20 h-20 text-[#28B246]" />
        <div className="w-[718px] flex flex-col justify-center items-center gap-y-4">
          <p className="font-grace text-[#2DA950] text-[36px] font-normal">
            Success Submitted
          </p>
          <p className="font-[manrope] font-semibold text-[56px] leading-[67.2px]">
            Congratulations
          </p>
          <p className="font-[manrope] font-medium text-[27px] leading-[35.1px] text-[#727272] text-center">
            Your request has been successfully submitted to us. We will validate
            your information and reach out to your shortly with updates
          </p>
        </div>
        <p className="mt-20 font-[manrope] font-normal text-[20px] text-[#727272] flex ">
          Redirecting you to Home Page in{" "}
          <p className="text-[#1C1C1C] font-medium"> {countdown} seconds</p>
        </p>
      </div>
    </div>
  );
};

export default Success;
