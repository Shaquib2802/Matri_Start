import React from "react";
import HeaderDash from "../Dash_Board/HeaderDash";
import { IoIosArrowDown } from "react-icons/io";
import All from "./All";
import { useNavigate } from "react-router-dom";


const All_Matches = () => {
  const file = {

   
  };
  const navigate = useNavigate();
  return (
    <div>
      <HeaderDash />
      <div className="border-t-2 border-gray-300 my-14 w-[55%] mx-auto relative z-20 ">
        <div className="flex w-[35%] h-10 border rounded-3xl absolute -top-5 left-[30%] shadow-lg bg-white   justify-around">
          <div className="border  border-[#f2090b] text-sm pt-2 text-[#f2090b] font-semibold bg-red-100 rounded-3xl text-center  w-[55%] ">
            Regular
          </div>
          <div
            onClick={() => navigate("/prime")}
            className=" text-center  w-[45%] text-sm pt-2 font-semibold"
          >
            PRIME
          </div>
        </div>
      </div>
      <div className="w-[85%] flex  gap-x-7 items-center mx-auto">
        <div>All Matches</div>
        <div>Newly Joined</div>
        <div>Nearly Matched</div>
        <div>Viewed You</div>
        <div>Shortlisted You</div>
        <div>Viewed By You </div>
        <div>Shortlisted by You</div>
        <div className="flex items-center gap-x-1 ">
          <div>More</div>
          <div><IoIosArrowDown/></div>
        </div>
      </div>
      <All/>
    </div>
  );
};

export default All_Matches;
