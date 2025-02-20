import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { SlHome } from "react-icons/sl";    


import { useNavigate } from "react-router-dom";

const Matches = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  return (
    <div>
      <div className="w-[100%] shadow-lg top-0 sticky z-50 bg-white">
        <div className="flex w-[90%] gap-x-8 h-[16vh] mx-auto">
          {/* Logo */}
          <div className="w-[20%]">
            <img
              className="p-6"
              src="https://imgs.bharatmatrimony.com/bmimgs/new-logo/bharat-matrimony-logo.png"
              alt="Bharat Matrimony Logo"
            />
          </div>

          {/* Navigation */}
          <div className="w-[90%] flex justify-between py-5">
            <div className="flex py-2.5 gap-x-1 cursor-pointer" onClick={()=>navigate("/dash")}>
              <SlHome className="mt-1.5"/>
              <div className="mt-1.5 text-sm ">
                Home
              </div>
            </div>
            <div className="flex gap-x-0.5 py-3">
              <img className=""
                src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/bottom-navigation-green-matches.svg"
                alt="Matches"
              />
              <div className="mt-0.5 text-sm text-green-700 font-semibold">Matches</div>
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
            <div className="flex py-3 gap-x-0.5">
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
            <div className="flex py-3 gap-x-0.5">
              <img
                src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/bottom-navigation-notification.svg"
                alt="Notification"
              />
              <div className="mt-0.5 text-sm text-black">Notification</div>
            </div>
          </div>

          {/* Profile Dropdown */}
          <div>
            <div
              className={`hover:cursor-pointer flex mt-4 relative text-black hover:text-orange-500 ${
                open ? "text-orange-500" : ""
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
                      className="border cursor-pointer p-1 border-orange-600 mt-3 rounded-3xl w-20 text-center font-semibold text-sm text-orange-500 mx-auto"
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
      <div className="border-t-2 border-gray-300 my-14 w-[55%] mx-auto relative z-20 ">
        <div className="flex w-[35%] h-10 border rounded-3xl absolute -top-5 left-[30%] shadow-lg bg-white   justify-around">
          <div className="border  border-orange-500 text-sm pt-2 text-orange-500 font-semibold bg-orange-100 rounded-3xl text-center  w-[55%] ">
            Regular
          </div>
          <div
            onClick={() => navigate("/prime")}
            className=" text-center w-[45%] text-sm pt-2  font-semibold"
          >
            PRIME
          </div>
        </div>
      </div>
    </div>
  );
};

export default Matches;
