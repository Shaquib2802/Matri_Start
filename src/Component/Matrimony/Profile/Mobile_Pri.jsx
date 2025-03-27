import React, { useState } from "react";
import { MdArrowRight } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";

const Mobile_Pri = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const [isOpen1, setIsOpen1] = useState(false);

  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
  };
  const [isOpen2, setIsOpen2] = useState(false);

  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };
  return (
    <div className="">
      <div className="mx-auto border   gap-x-5">
        <div className="  ">
          <div className=" border-gray-300 border-b  p-4">
            <div
              className="flex justify-between items-center cursor-pointer "
              onClick={toggleDropdown}
            >
              <span className="font-bold text-xs">
                Verified Contact <br />
                <span className="font-normal">
                  Change / Edit your mobile number and verify it.
                </span>
              </span>
              <span className="text-xl font-semibold">
                {isOpen ? (
                  <IoMdArrowDropdown className="text-gray-400" />
                ) : (
                  <IoMdArrowDropup className="text-gray-400" />
                )}
              </span>
            </div>
            {isOpen && (
              <div className="flex flex-col gap-y-4 mt-2">
                <div className="text-xs ">
                  Given below are your contact details. In case, your mobile
                  number has changed, please verify your mobile number to
                  continue using our services. Profiles without verified mobile
                  numbers cannot be part of our site anymore.
                </div>
                <div className="text-xs">
                  BharatMatrimony is the world's only matrimony site to have
                  100% mobile verified profiles.
                </div>
                <div className="border p-1 space-y-7">
                  <div className="text-lg bg-gray-100 font-semibold">
                    Contact Details
                  </div>
                  <div className="flex flex-col gap-y-3 p-2">
                    <div className="text-lg border-gray-400  flex justify-between items-center  text-gray-400 border-b border-dashed font-semibold ">
                      <div>Contact Number</div>
                      <div className="text-xs text-blue-500">Edit</div>
                    </div>

                    <div className="flex gap-x-[21.5%] items-center">
                      <div className="text-xs font-semibold">
                        Country <span className="text-red-600">*</span>
                      </div>
                      <div>
                        <select className="text-xs border  border-black shadow-md w-48 text-gray-600 ">
                          <option value="+91">+91</option>
                          <option value="+91">Afghanistan(+93)</option>
                          <option value="+91">Oman(+968)</option>
                          <option value="+91">Saudi Arabia(+966)</option>
                          <option value="+91">Russia(+7)</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex gap-x-[8%] items-center">
                      <div className="text-xs font-semibold">
                        Primary Mobile Number{" "}
                        <span className="text-red-600">*</span>
                      </div>
                      <div className="text-xs pl-1 border border-black shadow-md w-48 text-gray-600">
                        <input
                          type="text"
                          className=" placeholder:border-none outline-none"
                        />
                      </div>
                    </div>
                    <div className="flex gap-x-[7.5%] items-center">
                      <div className="text-xs font-semibold">
                        Parents' Contact Number{" "}
                        <span className="text-red-600">*</span>
                      </div>
                      <div className="text-xs pl-1   w-48 text-black ">
                        : Not Specified{" "}
                        <span className="text-blue-600">Edit</span>
                      </div>
                    </div>
                    <div className="flex gap-x-2 ml-[22%]">
                      <div className="shadow-lg border-2 rounded-lg p-0.5">
                        <button className="bg-orange-500 py-0.5 px-1 text-white text-sm rounded-md font-semibold">
                          Save
                        </button>
                      </div>
                      <div className="shadow-lg border-2 rounded-lg p-0.5">
                        <button className="bg-[#AAAAAA] py-0.5 px-1 text-white text-sm rounded-md font-semibold">
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col  mt-3 gap-y-3 p-2 ">
                    <div className="text-lg border-gray-400  flex justify-between items-center  text-gray-400 border-b border-dashed font-semibold ">
                      <div>Contact Preferences</div>
                      <div className="text-xs text-blue-500">Edit</div>
                    </div>
                    <div className="w-[35%] flex flex-col ">
                      <div className="flex justify-between">
                        <div className="text-xs font-semibold">
                          Whom to contact
                        </div>
                        <div className="text-xs">: Not Specified</div>
                      </div>
                    </div>

                    <div className="w-[35%] flex flex-col ">
                      <div className="flex justify-between">
                        <div className="text-xs font-semibold">
                          Contact person's name
                        </div>
                        <div className="text-xs">: Not Specified</div>
                      </div>
                    </div>
                    <div className="w-[35%] flex flex-col ">
                      <div className="flex justify-between">
                        <div className="text-xs font-semibold">
                          Convenient time to call
                        </div>
                        <div className="text-xs">: Not Specified</div>
                      </div>
                    </div>
                    <div className="w-[35%] flex flex-col ">
                      <div className="flex justify-between">
                        <div className="text-xs font-semibold">Comments</div>
                        <div className="text-xs">: Not Specified</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-gray-600 text-xs ">
                  By verifying your mobile number, members can contact you
                  through mobile.
                </div>
              </div>
            )}
          </div>
          <div className=" mt-2 border-gray-300 border-b p-4">
            <div
              className="flex justify-between items-center cursor-pointer "
              onClick={toggleDropdown1}
            >
              <span className="font-bold text-xs">
                Mobile Privacy
                <br />
                <span className="font-normal">
                  Control who can view your mobile number.
                </span>
              </span>
              <span className="text-xl font-semibold">
                {isOpen1 ? (
                  <IoMdArrowDropdown className="text-gray-400" />
                ) : (
                  <IoMdArrowDropup className="text-gray-400" />
                )}
              </span>
            </div>
            {isOpen1 && (
              <div className="border mt-4 ">
                <form className="mt-2  p-4">
                  <div className="flex items-center">
                    <div>
                      <input type="radio" className="!text-sm !mt-1" />
                      <label className="!text-xs font-semibold ml-1 ">
                        {" "}
                        Let paid members view and contact me on my mobile number
                        directly
                      </label>
                    </div>
                    <div>
                      <img
                        className="mt-2"
                        src="https://imgs.bharatmatrimony.com/bmimgs/recommend-betterresponse.gif"
                        alt=""
                      />
                    </div>
                  </div>
                  <br />
                  <input type="radio" className="!text-sm " />
                  <label className="!text-xs ml-1 ">
                    Don't show my mobile number. Let paid members contact me
                    only through message
                  </label>
                  <br />
                </form>
                <div className=" ml-20 flex items-center gap-x-2 mb-3">
                  <div>
                    {" "}
                    <img
                      src="https://imgs.bharatmatrimony.com/bmimgs/desktop-images/lock-icon-horoscope.svg"
                      alt=""
                    />
                  </div>
                  <div className="text-orange-500 text-xs ">
                    Available only for paid members. Upgrade to use this feature
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className=" mt-2 border-gray-300 border-b p-4">
            <div
              className="flex justify-between items-center cursor-pointer "
              onClick={toggleDropdown2}
            >
              <span className="font-bold text-xs">
                Mobile Alerts
                <br />
                <span className="font-normal">
                  Choose if you want to receive Notifications through SMS.
                </span>
              </span>
              <span className="text-xl font-semibold">
                {isOpen2 ? (
                  <IoMdArrowDropdown className="text-gray-400" />
                ) : (
                  <IoMdArrowDropup className="text-gray-400"></IoMdArrowDropup>
                )}
              </span>
            </div>
            {isOpen2 && (
              <div>
                <div className="text-xs my-3 ">
                  You will get SMS notifications to{" "}
                  <span className="font-semibold">8795376971</span>, when
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center ">
                    <div>
                      <MdArrowRight className="text-2xl " />
                    </div>
                    <div className="text-xs "> You receive a new message</div>
                  </div>
                  <div className="flex items-center ">
                    <div>
                      <MdArrowRight className="text-2xl " />
                    </div>
                    <div className="text-xs "> You get an interest</div>
                  </div>
                  <div className="flex items-center ">
                    <div>
                      <MdArrowRight className="text-2xl " />
                    </div>
                    <div className="text-xs ">
                      {" "}
                      You get a reply for your message
                    </div>
                  </div>
                  <div className="flex items-center ">
                    <div>
                      <MdArrowRight className="text-2xl " />
                    </div>
                    <div className="text-xs "> Your interest gets accepted</div>
                  </div>
                  <div className="flex items-center ">
                    <div>
                      <MdArrowRight className="text-2xl " />
                    </div>
                    <div className="text-xs ">
                      {" "}
                      Member requests you to add Photo
                    </div>
                  </div>
                  <div className="flex items-center ">
                    <div>
                      <MdArrowRight className="text-2xl " />
                    </div>
                    <div className="text-xs ">
                      {" "}
                      Member sends you a reminder for Interest
                    </div>
                  </div>
                </div>
                <div className="text-xs font-semibold my-2  ">
                  <span className="text-red-600">*</span> Members using our app
                  will be notified through instant push notifications instead of
                  SMS.
                </div>
                <div className="border-t pt-2 border-dashed">
                  <div className="text-xs ">
                    As a member, you have the benefit of receiving mobile
                    alerts. We recommend you to keep your mobile alerts on all
                    the time for instant notifications. You may choose to turn
                    off the alerts
                  </div>
                  <div className="text-xs mt-2 ">
                    <span className="text-red-600">*</span> Members using our
                    app will be notified through instant push notifications
                    instead of SMS.
                  </div>
                  <div className="text-xs mt-2 ">
                    <span className="text-red-600">*</span>To turn off App
                    notifications go to BharatMatrimony App settings
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

export default Mobile_Pri;
