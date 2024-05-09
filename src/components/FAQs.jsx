import React from "react";
import Accordian from "./Accordian";
import { AccordianItem } from "./Accordian";
function FAQs() {
  return (
    <div className="flex justify-center items-center mt-36 mb-16 ">
      <div className=" bg-[#E8EEE7] w-[1376px] h-[749px] rounded-[2.8rem] flex justify-center items-center gap-x-36">
        <div className="flex flex-col justify-center items-center w-[80rem]">
          <p className="font-medium text-[32px] font-grace text-[#9E9D9D] leading-[35.2px] mb-3">
            What’s on your mind
          </p>
          <p className="font-[manrope] text-[60px] font-semibold leading-[66px]">
            Ask Questions
          </p>
        </div>
        <div>
          <Accordian className="  flex flex-col gap-y-7 mr-20">
            <AccordianItem value="1" trigger="Do you offer freelancers?">
              content 1
            </AccordianItem>
            <AccordianItem
              value="2"
              trigger="What’s the guarantee that I will be satisfied
        with the hired talent?"
            >
              content 2{" "}
            </AccordianItem>
            <AccordianItem
              value="3"
              trigger="Can I hire multiple talents at once?"
            >
              If unhappy with a project, communicate with the freelancer, allow
              for revisions, and refer to the agreement. Escalate to platform
              support if needed, considering mediation. Review policies, seek
              collaborative solutions for resolution.
            </AccordianItem>
            <AccordianItem
              value="4"
              trigger="Why should I not go to an agency directly?"
            >
              content 4{" "}
            </AccordianItem>
            <AccordianItem
              value="5"
              trigger="Who can help me pick a right skillset
        and duration for me?"
            >
              content 5
            </AccordianItem>
          </Accordian>
        </div>
      </div>
    </div>
  );
}

export default FAQs;
