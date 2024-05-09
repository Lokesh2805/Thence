import React from "react";
import model from "../assets/model.png";
import Carousel from "nuka-carousel";
import { feedback } from "../assets/Constant";

function SuccessStories() {
  const NextArrow = ({ onClick }) => (
    <div className=" hidden" onClick={onClick}>
      {/* Add your SVG for the Next button */}

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="47"
        viewBox="0 0 28 47"
        fill="none"
      >
        <path
          d="M0.258911 45.1152L25.5 26.499L0.258911 2.11523"
          stroke="black"
          stroke-width="2"
        />
      </svg>
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div className=" hidden" onClick={onClick}>
      {/* Add your SVG for the Prev button */}

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="43"
        viewBox="0 0 22 43"
        fill="none"
      >
        <path
          d="M21 1.5L1.44971 19.2363L21 41.5"
          stroke="black"
          stroke-width="2"
        />
      </svg>
    </div>
  );
  return (
    <div className="flex flex-col gap-y-28">
      <div className="flex flex-col justify-center items-center  ">
        <p className="font-grace text-[#2DA950] text-[36px] font-normal">
          Success Stories
        </p>
        <p className="font-[manrope] font-semibold text-[56px] text-center text-wrap w-[38rem] leading-[67.2px] ">
          Every success journey we’ve encountered.
        </p>
      </div>
      <div className="flex flex-col  sm:flex-row justify-center items-center gap-x-72">
        <div className="relative">
          <img
            src={model}
            alt="model"
            className="w-[480.65px] h-[510.29px] rounded-[3rem]"
          />
          <div class="content flex flex-col items-center justify-center bg-[#002E18] p-2 pt-8 md:p-12 pb-12 lg:max-w-lg w-[291px] shadow-lg h-[200px] rounded-[1.8rem] lg:absolute top-[360px] left-[265px]">
            <p className="flex text-[55.81px] text-white leading-[76.05px]  pb-2 font-[manrope] font-semibold">
              $0.5{" "}
              <p className="text-[22.81px] text-[#A6A3A0] pt-8 leading-[31.94px] pl-2">
                MILLION
              </p>
            </p>
            <p className="font-[manrope] text-[#CCCCCC] text-[16px]  ">
              Reduced client expenses by saving on hiring and employee costs.
            </p>
          </div>
          <div class="content flex flex-col items-center justify-center bg-white p-2 pt-8 md:p-12 pb-12 lg:max-w-lg w-[16.5rem] shadow-lg h-[15rem] rounded-[1.8rem] lg:absolute top-[50px] right-[360px]">
            <p className="font-[manrope] font-semibold text-[58.81px] leading-[76.05px]  pr-14 ">
              40%
            </p>
            <p className="font-[manrope] text-[#828282] text-[16px]">
              Achieved reduction in project execution time by optimising team
              availability
            </p>
          </div>

          <div class="content flex justify-center items-center bg-white p-2 pt-8 md:p-12 pb-12 lg:max-w-lg w-[17.5rem] shadow-lg h-[5.5rem] rounded-full lg:absolute top-[360px] right-[300px] gap-x-4">
            <div className="bg-[#DDEFE0] rounded-full h-11 w-11 flex justify-center items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="true"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-[#2DA950]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                />
              </svg>
            </div>
            <div>
              <p className="font-[manrope] font-bold text-[24px]">10 DAYS</p>
              <p className="font-[manrope] font-normal text-[15px]">
                Staff Deployment
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-44">
          <div className="w-96 h-48">
            <Carousel
              defaultControlsConfig={{
                pagingDotsStyle: {
                  borderRadius: "1rem",
                  color: "#E4E3E3",
                  margin: "5px",
                  fill: "#2DA950",
                },
              }}
              autoplay
              pauseOnHover={true}
              autoplayInterval={5000}
              wrapAround={true}
              slidesToShow={1}
              renderCenterLeftControls={({ previousSlide }) => (
                <PrevArrow onClick={previousSlide} />
              )}
              renderCenterRightControls={({ nextSlide }) => (
                <NextArrow onClick={nextSlide} />
              )}
            >
              {feedback.map((content) => (
                <p
                  className="font-[manrope] text-[40px] font-semibold pb-8"
                  key={content.id}
                >
                  {content.content}
                </p>
              ))}
            </Carousel>
          </div>
          <button className="flex items-center gap-2 rounded-full mr-44 border-solid border-2 bg-[#1C1C1C] text-[20px] text-white border-black h-[4rem] font-[manrope] font-semibold mt-3 px-6 text-center hover:border-[#4E4E4E] hover:bg-[#4E4E4E] ">
            Explore More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SuccessStories;
