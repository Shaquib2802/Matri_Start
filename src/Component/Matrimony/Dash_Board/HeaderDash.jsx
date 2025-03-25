import React, { useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
import "animate.css";
import { useQuery } from "@tanstack/react-query";
import { MdNotificationsActive } from "react-icons/md";
import { Get_Noti } from "../../Service/Get_pref";
import Notificatio_Modal from "./Notificatio_Modal";

const HeaderDash = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  const { data: Plan } = useQuery({
    queryKey: ["plan"],
    queryFn: Get_Noti,
  });

  console.log("data of Query", Plan?.data);
  const state = Plan?.data;
  console.log("::::::", state?.count);

  const navigate = useNavigate();

  return (
    <div className="w-[100%] shadow-lg top-0 sticky z-50 bg-white overflow-hidden">
      <div className="flex w-[90%] gap-x-8 h-[16vh] mx-auto">
        <div className="w-[20%]">
          <img
            className="p-6"
            src="https://imgs.bharatmatrimony.com/bmimgs/new-logo/bharat-matrimony-logo.png"
            alt="Bharat Matrimony Logo"
          />
        </div>

        <div className="w-[90%] flex justify-between py-5">
          <div
            className="flex py-2.5 cursor-pointer"
            onClick={() => navigate("/dash")}
          >
            <HomeIcon className="text-gray-400 mt-0.5" />
            <div className="mt-1.5 text-sm font-semibold text-gray-600">
              Home
            </div>
          </div>
          <div className="flex gap-x-0.5 py-3">
            <img
              src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/bottom-navigation-matches.svg"
              alt="Matches"
            />
            <div className="mt-0.5 text-sm text-black">Matches</div>
          </div>
          <div className="flex py-3 gap-x-0.5">
            <img
              src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/bottom-navigation-mailbox.svg"
              alt="Mailbox"
            />
            <div className="mt-0.5 text-sm text-black">Mailbox</div>
          </div>
          <div className="flex py-3 gap-x-0.5">
            <img
              src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/bottom-navigation-chat.svg"
              alt="Messages"
            />
            <div className="mt-0.5 text-sm text-black">Messages</div>
          </div>
          <div
            className="flex py-3 gap-x-0.5 cursor-pointer"
            onClick={() => navigate("/search")}
          >
            <img
              className="mt-0.5"
              src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/icon-generic-search.svg"
              alt="Search"
            />
            <div className="mt-0.5 text-sm text-black">Search</div>
          </div>
          <div className="flex py-3 gap-x-0.5">
            <img
              className="mt-0.5"
              src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/bm-services/icon-generic-services.svg"
              alt="Services"
            />
            <div className="mt-0.5 text-sm text-black">Services</div>
          </div>
          <div
            className="flex py-3 gap-x-0.5 "
            onMouseEnter={handleOpen1}
            onMouseLeave={handleClose1}
          >
            <div className="relative animate__animated animate__heartBeat animate__infinite	infinite">
              <MdNotificationsActive className=" text-2xl  " />
              <div className="absolute right-0 z-40 top-0 text-white bg-red-600 text-[50%] font-bold rounded-xl h-3 text-center w-3">
                {state?.count}
              </div>
            </div>
            <div className=" mt-0.5 text-sm text-black relative">
              Notification
              {open1 && (
                <div
                  className="mt-3 absolute w-[30vw] right-1"
                  onClick={handleClose1}
                >
                  <div className="bg-white">
                    <div
                      className="border-2 rounded-md p-5
   "
                    >
                      <div className="text-xl font-semibold">Notifications</div>
                      {Array.isArray(Plan?.data?.data) &&
                        Plan.data?.data?.map((item, index) => (
                          <div
                            key={index}
                            className="border flex mt-4 gap-x-5 w-[100%] mx-auto"
                          >
                            <div>
                              <img
                                className="w-20"
                                src="https://imgs.bharatmatrimony.com/bmimgs/photo-request-f-75.jpg"
                                alt=""
                              />
                            </div>
                            <div className="flex flex-col justify-center">
                              <div className="tracking-wide font-semibold text-xs">
                                Receiver ID: {item?.id}
                              </div>
                              <div className="text-xs mt-2 text-orange-600 font-semibold">
                                Status: {item?.status}
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div>
          <div
            className={`hover:cursor-pointer flex mt-4 relative text-black hover:text-[#f2090b] ${
              open ? "text-[#f2090b]" : ""
            }`}
            onMouseEnter={handleOpen}
            onMouseLeave={handleClose}
          >
            <img
              className="w-12 rounded-3xl"
              src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/male-avatar-img-new.svg"
              alt="User Avatar"
            />
            <KeyboardArrowDownIcon className="text-gray-500 !text-base mt-4" />

            {open && (
              <div
                onMouseLeave={handleClose}
                className="absolute mt-12   z-40 right-[10%] w-[25vw] "
              >
                <div className="mx-auto my-5 border h-fit rounded-xl  shadow-xl bg-white flex flex-col">
                  <div className="text-xl font-semibold text-center mt-6">
                    Mohd Arfat
                  </div>
                  <div className="text-gray-950 mt-2 font-medium text-sm text-center">
                    H14160846
                  </div>
                  <div className="text-gray-950 mt-4 font-semibold text-sm text-center">
                    Membership: Free
                  </div>
                  <div className="text-black mt-2 font-normal text-sm text-center">
                    Become a paid member now
                  </div>
                  <div
                    onClick={() => navigate("/upg")}
                    className="border cursor-pointer p-1 border-[#f2090b] mt-3 rounded-3xl w-20 text-center font-semibold text-sm text-[#f2090b] mx-auto"
                  >
                    Upgrade
                  </div>
                  <div className="border flex mt-5 gap-y-5 flex-col p-5">
                    <div className="flex gap-x-3">
                      <img
                        className="w-5"
                        src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/edit-profile.svg"
                        alt="Edit Profile"
                      />
                      <div
                        onClick={() => navigate("/pro")}
                        className="text-sm cursor-pointer font-medium text-gray-600"
                      >
                        Edit Profile
                      </div>
                    </div>
                    <div className="flex gap-x-3">
                      <img
                        className="w-5"
                        src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/edit-preference.svg"
                        alt="Edit Preferences"
                      />
                      <div
                        onClick={() => navigate("/pre")}
                        className="text-sm cursor-pointer font-medium text-gray-600"
                      >
                        Edit Preferences
                      </div>
                    </div>
                    <div className="flex gap-x-3">
                      <img
                        className="w-5"
                        src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/menu_identity.svg"
                        alt="Verify Your Profile"
                      />
                      <div
                        onClick={() => navigate("/ver")}
                        className="text-sm cursor-pointer font-medium text-gray-600"
                      >
                        Verify Your Profile
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-y-5 flex-col p-5">
                    <div className="flex gap-x-3">
                      <img
                        className="w-5"
                        src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/help.svg"
                        alt="Help"
                      />
                      <div
                        onClick={() => navigate("/help")}
                        className="text-sm font-medium text-gray-600 cursor-pointer"
                      >
                        Help
                      </div>
                    </div>
                    <div className="flex gap-x-3">
                      <img
                        className="w-5"
                        src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/safe-matrimony.svg"
                        alt="Safe Matrimony"
                      />
                      <div
                        onClick={() => navigate("/safe")}
                        className="text-sm font-medium text-gray-600 cursor-pointer"
                      >
                        Safe Matrimony
                      </div>
                    </div>
                    <div className="flex gap-x-3">
                      <img
                        className="w-5"
                        src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/setting.svg"
                        alt="Settings"
                      />
                      <div
                        onClick={() => navigate("/set")}
                        className="text-sm font-medium text-gray-600 cursor-pointer"
                      >
                        Settings
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderDash;
