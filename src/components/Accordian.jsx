import React, { createContext, useRef } from "react";
import { useContext, useEffect, useState } from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";

const AccordianContext = createContext();

export default function Accordian({ children, value, onChange, ...props }) {
  const [selected, setSelected] = useState(value);

  useEffect(() => {
    onChange?.(selected);
  }, [selected]);
  return (
    <ul {...props}>
      <AccordianContext.Provider value={{ selected, setSelected }}>
        {children}
      </AccordianContext.Provider>
    </ul>
  );
}

export function AccordianItem({ children, value, trigger, ...props }) {
  const { selected, setSelected } = useContext(AccordianContext);
  const open = selected === value;
  const ref = useRef(null);

  return (
    <li
      className="mb-2 bg-transparent transition duration-300 ease-in-out "
      {...props}
    >
      <header
        role="button"
        onClick={() => setSelected(open ? null : value)}
        className="flex justify-between items-center p-5 font-semibold text-[20px] leading-[28px] text-[#1C1C1C]"
      >
        {trigger}

        <div className="text-[32px]">
          {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </header>
      <hr class="w-[98%] h-1 bg-[#D7D7D7] border-0 rounded  mt-[-10px] mb-4 "></hr>
      <div
        className="overflow-y-hidden transition-all"
        style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}
      >
        <div
          className="pt-2 p-4 text-[#617275] font-[manrope] text-[15px] leading-[24px] font-normal text-left "
          ref={ref}
        >
          {children}
        </div>
      </div>
    </li>
  );
}
