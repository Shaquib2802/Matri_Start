import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
import Prime from "./Prime";

const Prime_Header = () => {
    const navigate = useNavigate();
  return (
    <div>
      <div
        className="w-[100%] shadow-lg top-0 sticky  z-50 bg-[url('https://imgs.bharatmatrimony.com/bmimgs/desktop-images/new-image/prime-bg.png')] bg-cover bg-no-repeat
    "
      >
        <div className="flex w-[90%]   gap-x-10 h-[16vh] mx-auto">
          <div className="w-[20%]">
            <img
              className="p-6"
              src="https://imgs.bharatmatrimony.com/bmimgs/new-logo/bharat-matrimony-logo.png"
              alt=""
            />
          </div>
          <div className="w-[80%]  flex justify-between py-5">
            <div className=" flex  py-2.5 ">
              <div>
                <HomeIcon className="text-white" />
              </div>
              <div className="mt-1.5 text-sm font-semibold text-white">
                Home
              </div>
            </div>
            <div className=" flex gap-x-0.5 py-3 ">
              <div>
                <img
                  className="text-white"
                  src="https://imgs.bharatmatrimony.com//bmimgs/desktop-images/new-image/bottom-navigation-matches-prime.svg"
                  alt=""
                />
              </div>
              <div className="mt-0.5 text-sm text-white">Matches</div>
            </div>
            <div className=" flex py-3 gap-x-0.5 ">
              <div>
                <img
                  src="https://imgs.bharatmatrimony.com/bmimgs/desktop-images/new-image/bottom-navigation-mailbox-prime.svg"
                  alt=""
                />
              </div>
              <div className="mt-0.5 text-sm text-white">Mailbox</div>
            </div>
            <div className=" flex py-3 gap-x-0.5">
              <div>
                <img
                  src="https://imgs.bharatmatrimony.com/bmimgs/desktop-images/new-image/bottom-navigation-chat-prime.svg"
                  alt=""
                />
              </div>
              <div className="mt-0.5 text-sm text-white">Messages</div>
            </div>
            <div className=" flex py-3 gap-x-0.5 ">
              <div>
                <img
                  className="mt-0.5"
                  src="https://imgs.bharatmatrimony.com/bmimgs/desktop-images/new-image/icon-generic-search-prime.svg"
                  alt=""
                />
              </div>
              <div className="mt-0.5 text-sm text-white">Search</div>
            </div>
            <div className=" flex py-3  gap-x-0.5">
              <div>
                <img
                  className="mt-0.5"
                  src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/bm-services/icon-generic-services-prime.svg"
                  alt=""
                />
              </div>
              <div className="mt-0.5 text-sm text-white">Services</div>
            </div>
            <div className=" flex py-3 gap-x-0.5">
              <div>
                <img
                  className=""
                  src="https://imgs.bharatmatrimony.com/bmimgs/desktop-images/new-image/bottom-navigation-notification-prime.svg"
                  alt=""
                />
              </div>
              <div className="mt-0.5 text-sm text-white">Notification</div>
            </div>
          </div>
          <div className="w-[10%]  flex pt-5 pl-  gap-x-2 ">
            <div>
              <img
                className="w-12 rounded-3xl"
                src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/male-avatar-img-new.svg"
                alt=""
              />
            </div>
            <div>
              <KeyboardArrowDownIcon className="text-gray-500 !text-base mt-4" />
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-gray-300 my-14 w-[55%] mx-auto relative z-20 ">
        <div className="flex w-[35%] h-10 border rounded-3xl absolute -top-5 left-[30%] shadow-lg bg-white   justify-around">
          <div
            className="   text-sm pt-2  font-semibold   text-center  w-[45%] cursor-pointer"
            onClick={() => navigate("/dash")}
          >
            Regular
          </div>
          <div className="border rounded-3xl text-center w-[55%] border-purple-800 bg-purple-200 text-purple-900 text-sm pt-2 font-semibold">
            PRIME
          </div>
        </div>
      </div>

      <Prime/>
    </div>
  );
};

export default Prime_Header;
