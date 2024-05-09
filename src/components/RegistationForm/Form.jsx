import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import image from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate();
  const navigatetoHome = () => {
    navigate("/");
  };
  const [formvalue, setFormValue] = useState({ username: "", email: "" });
  const [errors, setErrors] = useState({ username: "", email: "" });
  const [isFormValid, setIsFormValid] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formvalue, [name]: value });
    validateForm();
  };
  useEffect(() => {
    setIsFormValid(
      formvalue.username.trim() !== "" && formvalue.email.trim() !== ""
    );
  }, [formvalue]);
  const validateForm = () => {
    let isValid = true;
    const newErrors = { username: "", email: "" };

    if (!formvalue.username.trim()) {
      newErrors.username = "Username is required";
      isValid = false;
    }

    if (!formvalue.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formvalue.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    setErrors(newErrors);
    setIsFormValid(isValid);
    return isValid;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formvalue);
      navigate("/success");
    }
  };

  return (
    <div>
      <div className=" topsection top-0 flex justify-between mt-6 mx-4  h-[5.5rem]">
        <a>
          {" "}
          <img src={image} alt="Logo" className="w-26 h-8 mt-6 mx-8 " />
        </a>
        <div className="flex justify-center gap-x-3.5 mx-8">
          <button
            onClick={navigatetoHome}
            className="flex justify-center items-center rounded-full border-solid border-2 border-[#EAEAEA] h-[4rem] w-[4rem] mt-2 text-center  hover:bg-[#F1F1F1] "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="formsection flex flex-col justify-center items-center gap-16">
        <div>
          <p className="font-grace text-center text-[#2DA950] text-[36px] font-normal">
            Registration Form
          </p>
          <p className="text-[56px] font-[manrope] leading-[67.2px] text-center w-[40rem]">
            Start your success Journey here!
          </p>
        </div>
        <div>
          <form
            onSubmit={handleSubmit}
            autoComplete="off"
            className="flex flex-col gap-y-6"
          >
            <div className="flex  font-[manrope] font-medium text-[20px] px-8 bg-[#EFEFEF] w-[417px] h-[75px] rounded-full">
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your name"
                className="outline-0"
                value={formvalue.username}
                onChange={handleInput}
                style={{ background: "transparent" }}
              />
            </div>

            <div className="flex  font-[manrope] font-medium text-[20px] px-8 bg-[#EFEFEF] w-[417px] h-[75px] rounded-full">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="outline-0"
                value={formvalue.email}
                onChange={handleInput}
                style={{ background: "transparent" }}
              />
            </div>
            {errors.username && (
              <span className="text-[#FF0808] font-[manrope] font-medium text-[16px] leading-[21.86px] flex justify-start items-start">
                <div className="bg-[#FF0808] mt-1 mx-2 w-4 h-4 rounded-full text-center flex justify-center items-center text-white">
                  !
                </div>
                {errors.username}
              </span>
            )}
            {errors.email && (
              <span className="text-[#FF0808] font-[manrope] font-medium text-[16px] leading-[21.86px] flex justify-start items-start">
                <div className="bg-[#FF0808] mt-1 mx-2 w-4 h-4 rounded-full text-center flex justify-center items-center text-white">
                  !
                </div>
                {errors.email}
              </span>
            )}

            <button
              type="submit"
              disabled={!isFormValid}
              className={` text-white flex justify-center items-center text-center font-[manrope] font-medium text-[20px] my-4  w-[417px] h-[75px] rounded-full ${
                isFormValid ? "bg-[#1C1C1C]" : "bg-[#C9C9C9]"
              }`}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
