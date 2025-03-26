import React, { useState } from "react";
import { BiSolidLike } from "react-icons/bi";
import { IoMdCall } from "react-icons/io";
import { IoPlanetSharp } from "react-icons/io5";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { TbMessage2Filled } from "react-icons/tb";
import { TiTick } from "react-icons/ti";
import Img1 from "../../../Photos/Img1.png";
import Bottom_dash from "../Dash_Board/Bottom_dash";
import Assist from "../Prime/Assist";
import Toggle from "./Toggle";

const All = () => {
  const [selected, setSelected] = useState("Last Login");

  const options = [
    {
      title: "Last Login",
      desc: "Show recently logged-in members first",
    },
    {
      title: "Date Created",
      desc: "Show recently created profiles first",
    },
    {
      title: "Latest Photos",
      desc: "Show members who have added photos recently first",
    },
  ];
  return (
    <div>
      <div className="w-[85%] mx-auto ">
        <div className="flex my-5 justify-between">
          <div className="text-lg font-semibold">
            202 Matches based on your{" "}
            <span className="text-orange-600 underline font-semibold">
              preferences
            </span>
          </div>
          <div className="flex items-center gap-x-1">
            <div>
              <MdCheckBoxOutlineBlank className="text-gray-500 mt-0.5" />
            </div>
            <div className="text-sm ">Show profiles I have not viewed</div>
          </div>
        </div>
        <div className="flex gap-x-5 my-10 bg-white">
          <div className="w-[25%]  sticky top-20 self-start  bg-white ">
            <div className="flex bg-white w-[100%]      gap-x-4 h-16 items-center">
              <div className="font-semibold text-sm border-b-2 pb-2 border-[#288A84]">
                Filter Profile
              </div>
              <div className="text-gray-800 text-sm -mt-2">Sort Profile</div>
            </div>

            <div className="hidden">
              <Toggle />
            </div>
            <div className="border shadow-lg  p-5 bg-white">
              

              <h2 className="font-semibold text-sm mb-4">
                Sort profiles on the basis of
              </h2>
              <div className="space-y-4">
                {options.map((opt) => (
                  <div
                    key={opt.title}
                    className="flex items-start gap-3 cursor-pointer"
                    onClick={() => setSelected(opt.title)}
                  >
                    <div
                      className={`w-5 h-5 border-2 rounded-full mt-1 flex items-center justify-center ${
                        selected === opt.title
                          ? "border-orange-500"
                          : "border-gray-400"
                      }`}
                    >
                      {selected === opt.title && (
                        <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      )}
                    </div>
                    <div>
                      <p className="font-semibold">{opt.title}</p>
                      <p className="text-gray-500 text-sm">{opt.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full bg-orange-500 text-white font-semibold py-2 rounded-full mt-6 hover:bg-orange-600">
                Apply
              </button>
            </div>
            <div className=" p-3 border border-gray-400 shadow-xl mt-3">
              <div className="flex  justify-between items-center">
                <div className=" cursor-pointer tracking-wide break-words w-20 text-lg  font-semibold">
                  201 matches
                </div>
                <div className="bg-[#D6D6D6] rounded-2xl text-gray-500 w-14 p-1 text-center">
                  Reset
                </div>
                <div className="bg-[#E06506] rounded-2xl text-white w-16 p-1 text-center">
                  Apply
                </div>
              </div>
            </div>
          </div>

          <div className="w-[75%]  rounded-xl">
            <div className="flex my-5 border relative border-gray-300 p-2 rounded-md m-1 justify-start gap-x-5 ">
              <div className="w-[30%] ">
                <div className="absolute  top-1 left-1">
                  <img
                    src="https://imgs.bharatmatrimony.com/bmimgs/desktop-images/newly-joined-desktop.svg"
                    alt=""
                  />
                  <div className="text-xs font-semibold rotate-[318deg] top-2 left-1 w-10   absolute">
                    Newly Joined
                  </div>
                </div>
                <img
                  className="w-[100%] rounded-xl"
                  src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/female-avatar-img-new.svg"
                  alt="Profile"
                />
              </div>
              <div className="w-[60%] flex justify-between my-3 flex-col">
                <div>
                  <div className="text-xl font-semibold">Farheen</div>
                  <div className="text-gray-500 text-sm font-semibold tracking-wide ">
                    H14370848 | Last seen 2 weeks ago
                  </div>
                  <div className="text-sm mt-2 text-gray-800 break-words w-[70%]">
                    20 yrs |5'0" |Muslim - Shaikh| BBA | Not Working | Mumbai{" "}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold">
                    Interested in her?
                  </div>
                  <div className="flex mt-1 gap-x-3">
                    <div className="border border-gray-500 p-1 rounded-2xl text-sm text-gray-500 font-semibold">
                      X Don't Show{" "}
                    </div>
                    <div className=" w-44 justify-center flex item-center border-gray-500 p-1 rounded-2xl text-sm text-gray-500 font-semibold bg-[#E06506]">
                      <div>
                        <TiTick className="text-xl text-white mt-0.5" />
                      </div>
                      <div className="text-white ">Send Interest</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex my-5 border relative border-gray-300 p-2 rounded-md m-1 justify-start gap-x-5 ">
              <div className="w-[30%] ">
                <div className="absolute  top-1 left-1">
                  <img
                    src="https://imgs.bharatmatrimony.com/bmimgs/desktop-images/newly-joined-desktop.svg"
                    alt=""
                  />
                  <div className="text-xs font-semibold rotate-[318deg] top-2 left-1 w-10   absolute">
                    Newly Joined
                  </div>
                </div>
                <img
                  className="w-[100%] rounded-xl"
                  src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/female-avatar-img-new.svg"
                  alt="Profile"
                />
              </div>
              <div className="w-[60%] flex justify-between my-3 flex-col">
                <div>
                  <div className="text-xl font-semibold">Farheen</div>
                  <div className="text-gray-500 text-sm font-semibold tracking-wide ">
                    H14370848 | Last seen 2 weeks ago
                  </div>
                  <div className="text-sm mt-2 text-gray-800 break-words w-[70%]">
                    20 yrs |5'0" |Muslim - Shaikh| BBA | Not Working | Mumbai{" "}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold">
                    Interested in her?
                  </div>
                  <div className="flex mt-1 gap-x-3">
                    <div className="border border-gray-500 p-1 rounded-2xl text-sm text-gray-500 font-semibold">
                      X Don't Show{" "}
                    </div>
                    <div className=" w-44 justify-center flex item-center border-gray-500 p-1 rounded-2xl text-sm text-gray-500 font-semibold bg-[#E06506]">
                      <div>
                        <TiTick className="text-xl text-white mt-0.5" />
                      </div>
                      <div className="text-white ">Send Interest</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-gray-3    flex rounded-xl  px-10 ">
              <div className=" w-[63%] my-auto">
                <div className="text-2xl font-semibold">
                  Become a paid member
                </div>
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
            <div className="flex my-5 border relative border-gray-300 p-2 rounded-md m-1 justify-start gap-x-5 ">
              <div className="w-[30%] ">
                <div className="absolute  top-1 left-1">
                  <img
                    src="https://imgs.bharatmatrimony.com/bmimgs/desktop-images/newly-joined-desktop.svg"
                    alt=""
                  />
                  <div className="text-xs font-semibold rotate-[318deg] top-2 left-1 w-10   absolute">
                    Newly Joined
                  </div>
                </div>
                <img
                  className="w-[100%] rounded-xl"
                  src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/female-avatar-img-new.svg"
                  alt="Profile"
                />
              </div>
              <div className="w-[60%] flex justify-between my-3 flex-col">
                <div>
                  <div className="text-xl font-semibold">Farheen</div>
                  <div className="text-gray-500 text-sm font-semibold tracking-wide ">
                    H14370848 | Last seen 2 weeks ago
                  </div>
                  <div className="text-sm mt-2 text-gray-800 break-words w-[70%]">
                    20 yrs |5'0" |Muslim - Shaikh| BBA | Not Working | Mumbai{" "}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold">
                    Interested in her?
                  </div>
                  <div className="flex mt-1 gap-x-3">
                    <div className="border border-gray-500 p-1 rounded-2xl text-sm text-gray-500 font-semibold">
                      X Don't Show{" "}
                    </div>
                    <div className=" w-44 justify-center flex item-center border-gray-500 p-1 rounded-2xl text-sm text-gray-500 font-semibold bg-[#E06506]">
                      <div>
                        <TiTick className="text-xl text-white mt-0.5" />
                      </div>
                      <div className="text-white ">Send Interest</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex my-5 border relative border-gray-300 p-2 rounded-md m-1 justify-start gap-x-5 ">
              <div className="w-[30%] ">
                <div className="absolute  top-1 left-1">
                  <img
                    src="https://imgs.bharatmatrimony.com/bmimgs/desktop-images/newly-joined-desktop.svg"
                    alt=""
                  />
                  <div className="text-xs font-semibold rotate-[318deg] top-2 left-1 w-10   absolute">
                    Newly Joined
                  </div>
                </div>
                <img
                  className="w-[100%] rounded-xl"
                  src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/female-avatar-img-new.svg"
                  alt="Profile"
                />
              </div>
              <div className="w-[60%] flex justify-between my-3 flex-col">
                <div>
                  <div className="text-xl font-semibold">Saher</div>
                  <div className="text-gray-500 text-sm font-semibold tracking-wide ">
                    H14370848 | Last seen 2 weeks ago
                  </div>
                  <div className="text-sm mt-2 text-gray-800 break-words w-[70%]">
                    20 yrs |5'0" |Muslim - Shaikh| BBA | Not Working | Mumbai{" "}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold">
                    Interested in her?
                  </div>
                  <div className="flex mt-1 gap-x-3">
                    <div className="border border-gray-500 p-1 rounded-2xl text-sm text-gray-500 font-semibold">
                      X Don't Show{" "}
                    </div>
                    <div className=" w-44 justify-center flex item-center border-gray-500 p-1 rounded-2xl text-sm text-gray-500 font-semibold bg-[#E06506]">
                      <div>
                        <TiTick className="text-xl text-white mt-0.5" />
                      </div>
                      <div className="text-white ">Send Interest</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex my-5 border relative border-gray-300 p-2 rounded-md m-1 justify-start gap-x-5 ">
              <div className="w-[30%] ">
                <div className="absolute  top-1 left-1">
                  <img
                    src="https://imgs.bharatmatrimony.com/bmimgs/desktop-images/newly-joined-desktop.svg"
                    alt=""
                  />
                  <div className="text-xs font-semibold rotate-[318deg] top-2 left-1 w-10   absolute">
                    Newly Joined
                  </div>
                </div>
                <img
                  className="w-[100%] rounded-xl"
                  src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/female-avatar-img-new.svg"
                  alt="Profile"
                />
              </div>
              <div className="w-[60%] flex justify-between my-3 flex-col">
                <div>
                  <div className="text-xl font-semibold">Afreen</div>
                  <div className="text-gray-500 text-sm font-semibold tracking-wide ">
                    H14370848 | Last seen 2 weeks ago
                  </div>
                  <div className="text-sm mt-2 text-gray-800 break-words w-[70%]">
                    20 yrs |5'0" |Muslim - Shaikh| BBA | Not Working | Mumbai{" "}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold">
                    Interested in her?
                  </div>
                  <div className="flex mt-1 gap-x-3">
                    <div className="border border-gray-500 p-1 rounded-2xl text-sm text-gray-500 font-semibold">
                      X Don't Show{" "}
                    </div>
                    <div className=" w-44 justify-center flex item-center border-gray-500 p-1 rounded-2xl text-sm text-gray-500 font-semibold bg-[#E06506]">
                      <div>
                        <TiTick className="text-xl text-white mt-0.5" />
                      </div>
                      <div className="text-white ">Send Interest</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Assist />
            <div className="flex my-5 border relative border-gray-300 p-2 rounded-md m-1 justify-start gap-x-5 ">
              <div className="w-[30%] ">
                <div className="absolute  top-1 left-1">
                  <img
                    src="https://imgs.bharatmatrimony.com/bmimgs/desktop-images/newly-joined-desktop.svg"
                    alt=""
                  />
                  <div className="text-xs font-semibold rotate-[318deg] top-2 left-1 w-10   absolute">
                    Newly Joined
                  </div>
                </div>
                <img
                  className="w-[100%] rounded-xl"
                  src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/female-avatar-img-new.svg"
                  alt="Profile"
                />
              </div>
              <div className="w-[60%] flex justify-between my-3 flex-col">
                <div>
                  <div className="text-xl font-semibold">Afreen</div>
                  <div className="text-gray-500 text-sm font-semibold tracking-wide ">
                    H14370848 | Last seen 2 weeks ago
                  </div>
                  <div className="text-sm mt-2 text-gray-800 break-words w-[70%]">
                    20 yrs |5'0" |Muslim - Shaikh| BBA | Not Working | Mumbai{" "}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold">
                    Interested in her?
                  </div>
                  <div className="flex mt-1 gap-x-3">
                    <div className="border border-gray-500 p-1 rounded-2xl text-sm text-gray-500 font-semibold">
                      X Don't Show{" "}
                    </div>
                    <div className=" w-44 justify-center flex item-center border-gray-500 p-1 rounded-2xl text-sm text-gray-500 font-semibold bg-[#E06506]">
                      <div>
                        <TiTick className="text-xl text-white mt-0.5" />
                      </div>
                      <div className="text-white ">Send Interest</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Bottom_dash />
    </div>
  );
};

export default All;
