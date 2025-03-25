import React, { useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { BiSolidLike } from "react-icons/bi";
import { IoPlanetSharp } from "react-icons/io5";
import Img1 from "../../../Photos/Img1.png";
import { TbMessage2Filled } from "react-icons/tb";
import Comp_Pro from "./Comp_Pro";
import Success from "./Success";
import Assist from "./Assist";
import Secure from "./Secure";
import Other from "./Other";
import Bottom_dash from "../Dash_Board/Bottom_dash";
import { useNavigate } from "react-router-dom";

const Prime_Body = () => {
  const [open, setOpen] = useState(false);
  const toggleDropdown = () => {
    setOpen(!open);
  };
  const [open1, setOpen1] = useState(false);
  const toggleDropdown1 = () => {
    setOpen1(!open1);
  };

  const navigate = useNavigate(); 
  return (
    <div>
      <div className="flex w-[100%] justify-center gap-x-5 ">
        <div className="w-[22%] my-1 sticky top-24  border h-fit rounded-xl shadow-sm flex flex-col">
          <div>
            <img
              className="w-14 mx-auto mt-6 rounded-full"
              src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/male-avatar-img-new.svg"
              alt=""
            />
          </div>

          <div className="text-xl cursor-pointer font-semibold text-center mt-1">
            Mohd Arfat
          </div>
          <div className="text-gray-950 mt-2 cursor-pointer text-lg  font-medium  text-center">
            H14160846
          </div>
          <div className="text-gray-600 mt-1 cursor-pointer tracking-wide text-sm text-center">
            Free Member
          </div>
          <div className="bg-[#FFEFFF] w-[80%] my-6 rounded-xl gap-y-2 justify-center items-center py-3 mx-auto flex flex-col">
            <div className="text-xs w-[70%] text-center font-semibold">
              Upgrade membership to call/chat with matches
            </div>
            <div
              onClick={() => navigate("/upg")}
              className="border bg-[#4E1A55] cursor-pointer text-center w-[50%] text-white p-1.5 rounded-2xl font-semibold text-[70%]"
            >
              {" "}
              Upgrade now
            </div>
          </div>
          <div
            onClick={() => navigate("/pro")}
            className="flex cursor-pointer justify-start items-center border-b py-4 gap-x-3   w-[80%] mx-auto "
          >
            <div>
              <img
                src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/dashboard-revamp/icon-menu-editprofile-new.svg"
                alt=""
              />
            </div>
            <div className="tracking-wide text-gray-600 text-sm font-semibold ">
              {" "}
              Edit profile
            </div>
          </div>
          <div
            onClick={() => navigate("/pre")}
            className="flex cursor-pointer justify-start items-center border-b py-4 gap-x-3   w-[80%] mx-auto "
          >
            <div>
              <img
                className="mt-2"
                src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/dashboard-revamp/icon-menu-editpreference-new2.svg"
                alt=""
              />
            </div>
            <div className="tracking-wide text-gray-600 text-sm font-semibold ">
              {" "}
              Edit Preference
            </div>
          </div>
          <div className="flex justify-start items-center py-4 gap-x-3   w-[80%] mx-auto ">
            <div className="tracking-wide text-gray-900 text-sm font-semibold ">
              {" "}
              Support & feedback
            </div>
          </div>
          <div
            onClick={() => navigate("/set")}
            className="flex justify-start cursor-pointer items-center border-b py-4 gap-x-3   w-[80%] mx-auto "
          >
            <div>
              <img
                src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/setting.svg"
                alt=""
              />
            </div>
            <div className="tracking-wide text-gray-600 text-sm font-semibold ">
              {" "}
              Settings
            </div>
          </div>
          <div className="flex border-b  py-2 gap-x-1.5   w-[80%] mx-auto ">
            <div className=" ">
              <img
                className="w-5 mt-3.5 h-5"
                src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/dashboard-revamp/icon-menu-help-new.svg"
                alt=""
              />
            </div>
            <div
              onClick={toggleDropdown}
              className="hover:bg-gray-100 p-3 w-[75%]"
            >
              <div className="flex  justify-between items-center">
                <div
                  onClick={() => navigate("/help")}
                  className=" cursor-pointer tracking-wide text-gray-600 text-sm font-semibold"
                >
                  Help
                </div>
                <div>
                  {open ? (
                    <MdKeyboardArrowUp className="text-2xl text-gray-600" />
                  ) : (
                    <MdKeyboardArrowDown className="text-2xl  text-gray-600" />
                  )}
                </div>
              </div>
              {open && (
                <div>
                  <div
                    onClick={() => navigate("/fq")}
                    className="my-2 cursor-pointer tracking-wide text-gray-600 text-sm font-semibold"
                  >
                    FAQ's
                  </div>
                  <div className=" my-2 tracking-wide text-gray-600 text-sm font-semibold">
                    Contact Us
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-start items-center border-b py-5 gap-x-3   w-[80%] mx-auto ">
            <div>
              <img
                className="w-5 h-5"
                src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/dashboard-revamp/success-new.png"
                alt=""
              />
            </div>
            <div className="tracking-wide text-gray-600 text-sm font-semibold ">
              {" "}
              Success Stories
            </div>
          </div>
          <div className=" border-b my-1 cursor-pointer  w-[90%] mx-auto ">
            <div
              onClick={toggleDropdown1}
              className="flex  justify-start p-4 item-center gap-x-2 hover:bg-gray-100"
            >
              <div className=" ">
                <img
                  className="w-5  h-5"
                  src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/dashboard-revamp/icon-menu-more-new.svg"
                  alt=""
                />
              </div>
              <div className="">
                <div className="tracking-wide text-gray-600 text-sm font-semibold">
                  More
                </div>
              </div>
            </div>
            {open1 && (
              <div className=" w-[80%] ml-10">
                <div className="my-2 tracking-wide text-gray-600 text-sm font-semibold">
                  Privacy policy
                </div>
                <div className=" my-2 tracking-wide text-gray-600 text-sm font-semibold">
                  Safe matrimony
                </div>
              </div>
            )}
          </div>
          <div className="flex cursor-pointer justify-start items-center py-4 gap-x-3   w-[80%] mx-auto ">
            <div className="tracking-wide text-gray-900 text-sm font-semibold ">
              {" "}
              Matrimony.com - Other Services
            </div>
          </div>
          <div className="flex  cursor-pointer justify-start items-center border-b py-5 gap-x-3   w-[80%] mx-auto ">
            <div>
              <img
                className="w-5 h-5"
                src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/dashboard-revamp/AstroFreechat-icon.svg"
                alt=""
              />
            </div>
            <div className="tracking-wide text-gray-600 text-sm font-semibold ">
              {" "}
              AstroFreeChat.com
            </div>
          </div>
          <div className="flex cursor-pointer justify-start items-center border-b py-5 gap-x-3   w-[80%] mx-auto ">
            <div>
              <img
                className="w-5 h-5"
                src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/dashboard-revamp/icon-menu-weddingbazzar-new.svg"
                alt=""
              />
            </div>
            <div className="tracking-wide text-gray-600 text-sm font-semibold ">
              {" "}
              WeddingBazaar.com
            </div>
          </div>
          <div className="flex cursor-pointer justify-start items-center border-b py-5 gap-x-3   w-[80%] mx-auto ">
            <div>
              <img
                className="w-5 h-5"
                src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/dashboard-revamp/icon-menu-makemywedding-updated.svg"
                alt=""
              />
            </div>
            <div className="tracking-wide text-gray-600 text-sm font-semibold ">
              {" "}
              MakeMyWedding.com
            </div>
          </div>
          <div className="cursor-pointer flex justify-start my-1 items-center border-b py-5 gap-x-3   w-[80%] mx-auto ">
            <div>
              <img
                className="w-5 h-5"
                src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/dashboard-revamp/icon-menu-mandap-new.svg"
                alt=""
              />
            </div>
            <div className="tracking-wide text-gray-600 text-sm font-semibold ">
              {" "}
              Mandap.com
            </div>
          </div>
          <div className="flex cursor-pointer justify-start my-1 items-center border-b py-5 gap-x-3   w-[80%] mx-auto ">
            <div>
              <img
                className="w-5 h-5"
                src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/dashboard-revamp/icon-menu-weddingloan-new.svg"
                alt=""
              />
            </div>
            <div className="tracking-wide text-gray-600 text-sm font-semibold ">
              {" "}
              WeddingLoan.com
            </div>
          </div>
          <div className="flex cursor-pointer justify-start my-1 items-center border-b py-5 gap-x-3   w-[80%] mx-auto ">
            <div>
              <img
                className="w-5 h-5"
                src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/dashboard-revamp/icon-menu-weddinggiftbox-new.svg"
                alt=""
              />
            </div>
            <div className="tracking-wide text-gray-600 text-sm font-semibold ">
              {" "}
              WeddingGiftBox.com
            </div>
          </div>
        </div>
        <div className="w-[62%] mt-10 ">
          <div className="border border-gray-3    flex rounded-xl  px-10 ">
            <div className=" w-[63%] my-auto">
              <div className="text-2xl font-semibold">Become a paid member</div>
              <div className="text-2xl ">
                Get up to{" "}
                <span className="text-orange-600 font-semibold">81% OFF</span>{" "}
                on paid membership!
              </div>
              <div className="flex flex-col mt-4 gap-y-3 my-2">
                <div className="flex items-center  gap-x-3">
                  <div className="">
                    <IoMdCall className="mt-1 border border-orange-500 rounded-full p-1 text-xl" />
                  </div>
                  <div className="font-semibold ">Call/WhatsApp matches</div>
                </div>
                <div className="flex items-center  gap-x-3">
                  <div className="">
                    <TbMessage2Filled className="mt-1 border border-orange-500 rounded-full p-1 text-xl" />
                  </div>
                  <div className="font-semibold ">Unlimited messages</div>
                </div>
                <div className="flex items-center  gap-x-3">
                  <div className="">
                    <BiSolidLike className="mt-1 border border-orange-500 rounded-full p-1 text-xl" />
                  </div>
                  <div className="font-semibold ">
                    Higher chances of response
                  </div>
                </div>
                <div className="flex items-center  gap-x-3">
                  <div className="">
                    <IoPlanetSharp className="mt-1 border border-orange-500 rounded-full p-1 text-xl" />
                  </div>
                  <div className="font-semibold ">
                    View and match horoscopes
                  </div>
                </div>
                <div className="font-semibold bg-[#4E1A55] text-white text-sm text-center rounded-2xl p-1 w-[60%]">
                  See Membership plans
                </div>
              </div>
            </div>
            <div className=" w-[37%]   ">
              <img className=" w-56   mx-auto h-68 " src={Img1} alt="uni" />
            </div>
          </div>
          <div className="border-2 my-10 border-gray-100"></div>
          <div>
            <Comp_Pro />
          </div>
          <div>
            <Success />
          </div>
          <div>
            <Assist />
          </div>
          <div>
            <Secure />
          </div>
          <div>
            <Other />
          </div>
        </div>
      </div>
      <div>
        <Bottom_dash />
      </div>
    </div>
  );
};

export default Prime_Body;
