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

  const [open3, setOpen3] = useState(false);
  const handleOpen = () => {
    setOpen3(!open3);
  };

  const handleClose = () => {
    setOpen3(false);
  };
  const [open4, setOpen4] = useState(false);
  const handleOpen1 = () => {
    setOpen4(!open4);
  };

  const handleClose1 = () => {
    setOpen4(false);
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
                      <div
                        onClick={handleOpen}
                        className="text-xs cursor-pointer text-blue-500"
                      >
                        Edit
                      </div>
                      {open3 && (
                        <div className="fixed inset-0 mt-16 flex items-center justify-center  bg-black bg-opacity-50 z-40">
                          <form className="  w-[50%] rounded-lg border-gray-600 bg-white  relative">
                            <div
                              className="absolute cursor-pointer right-2 top-0 font-semibold"
                              onClick={handleClose}
                            >
                              x
                            </div>
                            <div className="flex flex-col  items-center justify-center">
                              <div className="text-2xl font-semibold text-black mt-5">
                                Contact Number
                              </div>
                              <div className="text-gray-700 font-semibold  text-sm">
                                Brief outline of personal information
                              </div>
                              <div className=" w-[80%]  mt-10   ">
                                <div className=" flex flex-col justify-center items-center gap-y-5   ">
                                  <div className="flex  w-[87%] items-center gap-x-[37%] mx-auto ">
                                    <label className="  text-gray-700 ">
                                      Country *:
                                    </label>
                                    <select className="text-lg   border border-black rounded-md w-[42%] shadow-md  text-gray-600 ">
                                      <option value="+91">+91</option>
                                      <option value="+91">
                                        Afghanistan(+93)
                                      </option>
                                      <option value="+91">Oman(+968)</option>
                                      <option value="+91">
                                        Saudi Arabia(+966)
                                      </option>
                                      <option value="+91">Russia(+7)</option>
                                    </select>
                                  </div>
                                  <div className="flex  items-center  w-[87%]   mx-auto gap-x-6">
                                    <label className="text-gray-700   ">
                                      Primary Mobile Number *:
                                    </label>
                                    <div className="text-xs pl-1  w-[45%] text-gray-600">
                                      <input
                                        type="text"
                                        className=" border border-black rounded-md w-[95%] shadow-md  placeholder:border-none text-lg  outline-none"
                                      />
                                    </div>
                                  </div>
                                  <div className="flex gap-x-5  w-[88%]  mx-auto">
                                    <label className="text-gray-700 ">
                                      Parents' Contact Number *:
                                    </label>
                                    <div className="text-xs pl-1  w-48 text-gray-600">
                                      <input
                                        type="text"
                                        className="  shadow-md  w-[95%] border border-black rounded-md placeholder:border-none  text-lg outline-none"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <button
                                  type="submit"
                                  className="w-[77%] text-white ml-10 bg-green-600 font-semibold  h-10 rounded-md text-center  my-7 py-2 text-base"
                                >
                                  Save
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      )}
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
                    <div className="flex gap-x-[7%] items-center">
                      <div className="text-xs font-semibold">
                        Parents' Contact Number{" "}
                        <span className="text-red-600">*</span>
                      </div>
                      <div className="text-xs pl-1 border border-black shadow-md w-48 text-gray-600">
                        <input
                          type="text"
                          className=" placeholder:border-none outline-none"
                        />
                      </div>
                    </div>

                    <div className="flex gap-x-2 ml-[27%]">
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
                      <div
                        onClick={handleOpen1}
                        className="text-xs text-blue-500 cursor-pointer"
                      >
                        Edit
                      </div>
                      {open4 && (
                        <div className="fixed inset-0 mt-16 flex items-center justify-center  bg-black bg-opacity-50 z-40">
                          <form className="  w-[50%] rounded-lg border-gray-600 bg-white  relative">
                            <div
                              className="absolute cursor-pointer right-2 top-0 font-semibold"
                              onClick={handleClose1}
                            >
                              x
                            </div>
                            <div className="flex flex-col  items-center justify-center">
                              <div className="text-2xl font-semibold text-black mt-5">
                                Contact Number
                              </div>
                              <div className="text-gray-700 font-semibold  text-sm">
                                Brief outline of personal information
                              </div>
                              <div className=" w-[80%]  mt-10   ">
                                <div className=" flex flex-col justify-center items-center gap-y-5   ">
                                  <div className="flex   items-center  w-[87%]   mx-auto gap-x-16">
                                    <label className="text-gray-700   ">
                                      Whom to contact:
                                    </label>
                                    <div className="text-xs pl-1  w-[45%] text-gray-600">
                                      <input
                                        type="text"
                                        className=" border border-black rounded-md w-[95%] shadow-md  placeholder:border-none text-lg  outline-none"
                                      />
                                    </div>
                                  </div>
                                  <div className="flex gap-x-6  w-[88%]  mx-auto">
                                    <label className="text-gray-700 ">
                                      Contact person's name:
                                    </label>
                                    <div className="text-xs pl-1  w-48 text-gray-600">
                                      <input
                                        type="text"
                                        className="  shadow-md  w-[95%] border border-black rounded-md placeholder:border-none  text-lg outline-none"
                                      />
                                    </div>
                                  </div>
                                  <div className="flex gap-x-6  w-[88%]  mx-auto">
                                    <label className="text-gray-700 ">
                                      Convenient time to call:
                                    </label>
                                    <div className="text-xs pl-1  w-48 text-gray-600">
                                      <input
                                        type="text"
                                        className="  shadow-md  w-[95%] border border-black rounded-md placeholder:border-none  text-lg outline-none"
                                      />
                                    </div>
                                  </div>
                                  <div className="flex gap-x-[28%]  w-[88%]  mx-auto">
                                    <label className="text-gray-700 ">
                                      Comments:
                                    </label>
                                    <div className="text-xs pl-1  w-48 text-gray-600">
                                      <input
                                        type="text"
                                        className="  shadow-md  w-[95%] border border-black rounded-md placeholder:border-none  text-lg outline-none"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <button
                                  type="submit"
                                  className="w-[77%] text-white ml-10 bg-green-600 font-semibold  h-10 rounded-md text-center  my-7 py-2 text-base"
                                >
                                  Save
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      )}
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
