import React, { useState } from "react";
import { CiLock } from "react-icons/ci";
import { MdCheckBoxOutlineBlank, MdKeyboardArrowDown, MdKeyboardArrowUp, MdOutlineModeEdit } from "react-icons/md";

const Toggle = () => {
  const [open, setOpen] = useState(false);
  const toggleDropdown = () => {
    setOpen(!open);
  };
  const [open1, setOpen1] = useState(false);
  const toggleDropdown1 = () => {
    setOpen1(!open1);
  };
  const [open2, setOpen2] = useState(false);
  const toggleDropdown2 = () => {
    setOpen2(!open2);
  };
  const [open3, setOpen3] = useState(false);
  const toggleDropdown3 = () => {
    setOpen3(!open3);
  };
  const [open4, setOpen4] = useState(false);
  const toggleDropdown4 = () => {
    setOpen4(!open4);
  };
  const [open5, setOpen5] = useState(false);
  const toggleDropdown5 = () => {
    setOpen5(!open5);
  };
  const [open6, setOpen6] = useState(false);
  const toggleDropdown6 = () => {
    setOpen6(!open6);
  };
  const [open7, setOpen7] = useState(false);
  const toggleDropdown7 = () => {
    setOpen7(!open7);
  };

  return (
    <div>
      <div className="bg-[#FFF9CC] flex items-center p-3">
        <div>
          <CiLock className="text-orange-600" />
        </div>
        <div className="text-xs">
          <span className="text-orange-600">Upgrade</span> to access premium
          filters
        </div>
      </div>
      <div
        onClick={toggleDropdown}
        className=" p-2 border border-gray-400 shadow-xl mt-3"
      >
        <div className="flex  justify-between items-center">
          <div
            onClick={() => navigate("/help")}
            className=" cursor-pointer tracking-wide  text-lg  font-semibold"
          >
            Basic Details
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
          <div className="">
            <div className="flex border-gray-500 border-b item-center justify-between items-center ">
              <div className="my-2 cursor-pointer tracking-wide text-gray-800 text-sm font-semibold">
                Age
              </div>
              <div className="flex gap-x-2  item-center">
                <div className="text-xs">18 Yrs - 22 Yrs</div>
                <div>
                  <MdOutlineModeEdit className="text-lg " />
                </div>
              </div>
            </div>
            <div className="flex border-gray-500 border-b item-center justify-between items-center ">
              <div className="my-2 cursor-pointer tracking-wide text-gray-800 text-sm font-semibold">
                Height
              </div>
              <div className="flex gap-x-2  item-center">
                <div className="text-xs">4'6" - 5'3"</div>
                <div>
                  <MdOutlineModeEdit className="text-lg " />
                </div>
              </div>
            </div>
            <div className="flex border-gray-500 border-b item-center justify-between items-center ">
              <div className="my-2 cursor-pointer tracking-wide text-gray-800 text-sm font-semibold">
                Profile Created
              </div>
              <div className="flex gap-x-2  item-center">
                <div className="text-xs">Any</div>
                <div>
                  <MdOutlineModeEdit className="text-lg " />
                </div>
              </div>
            </div>
            <div className="flex border-gray-500 border-b item-center justify-between items-center ">
              <div className="my-2 cursor-pointer tracking-wide text-gray-800 text-sm font-semibold">
                Marital Status
              </div>
              <div className="flex gap-x-2  item-center">
                <div className="text-xs">Any</div>
                <div>
                  <MdOutlineModeEdit className="text-lg " />
                </div>
              </div>
            </div>
            <div className="flex border-gray-500 border-b item-center justify-between items-center ">
              <div className="my-2 cursor-pointer tracking-wide text-gray-800 text-sm font-semibold">
                Having Children
              </div>
              <div className="flex gap-x-2  item-center">
                <div className="text-xs">Doesn't Matter</div>
                <div>
                  <MdOutlineModeEdit className="text-lg " />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        onClick={toggleDropdown1}
        className=" p-2 border border-gray-400 shadow-xl mt-3"
      >
        <div className="flex  justify-between items-center">
          <div
            onClick={() => navigate("/help")}
            className=" cursor-pointer tracking-wide  text-lg  font-semibold"
          >
            Religious Details
          </div>
          <div>
            {open1 ? (
              <MdKeyboardArrowUp className="text-2xl text-gray-600" />
            ) : (
              <MdKeyboardArrowDown className="text-2xl  text-gray-600" />
            )}
          </div>
        </div>
        {open1 && (
          <div className="">
            <div className="flex border-gray-500 border-b item-center justify-between items-center ">
              <div className="my-2 cursor-pointer tracking-wide text-gray-800 text-sm font-semibold">
                Religion
              </div>
              <div className="flex gap-x-2  item-center">
                <div className="text-xs">Muslim - Sunni</div>
                <div>
                  <MdOutlineModeEdit className="text-lg " />
                </div>
              </div>
            </div>
            <div className="flex border-gray-500 border-b item-center justify-between items-center ">
              <div className="my-2 cursor-pointer tracking-wide text-gray-800 text-sm font-semibold">
                Caste
              </div>
              <div className="flex gap-x-2  item-center">
                <div className="text-xs w-24 py-2 break-words">
                  Muslim - Sheikh, Muslim - Ansa... read more
                </div>
                <div>
                  <MdOutlineModeEdit className="text-lg mt-4" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        onClick={toggleDropdown2}
        className=" p-2 border border-gray-400 shadow-xl mt-3"
      >
        <div className="flex  justify-between items-center">
          <div className=" cursor-pointer tracking-wide  text-lg  font-semibold">
            Professional Details
          </div>
          <div>
            {open2 ? (
              <MdKeyboardArrowUp className="text-2xl text-gray-600" />
            ) : (
              <MdKeyboardArrowDown className="text-2xl  text-gray-600" />
            )}
          </div>
        </div>
        {open2 && (
          <div className="">
            <div className="flex border-gray-500 border-b item-center justify-between items-center ">
              <div className="my-2 cursor-pointer tracking-wide text-gray-800 text-sm font-semibold">
                Occupation
              </div>
              <div className="flex gap-x-2  item-center">
                <div className="text-xs">Any</div>
                <div>
                  <MdOutlineModeEdit className="text-lg mt-2" />
                </div>
              </div>
            </div>
            <div className="flex border-gray-500 border-b item-center justify-between items-center ">
              <div className="my-2 cursor-pointer tracking-wide text-gray-800 text-sm font-semibold">
                Annual Income
              </div>
              <div className="flex gap-x-2  item-center">
                <div className="text-xs  py-2 ">Any</div>
                <div>
                  <MdOutlineModeEdit className="text-lg mt-2" />
                </div>
              </div>
            </div>
            <div className="flex border-gray-500 border-b item-center justify-between items-center ">
              <div className="my-2 cursor-pointer tracking-wide text-gray-800 text-sm font-semibold">
                Employment Type
              </div>
              <div className="flex gap-x-2  item-center">
                <div className="text-xs  py-2 ">Any</div>
                <div>
                  <MdOutlineModeEdit className="text-lg mt-2" />
                </div>
              </div>
            </div>
            <div className="flex border-gray-500 border-b item-center justify-between items-center ">
              <div className="my-2 cursor-pointer tracking-wide text-gray-800 text-sm font-semibold">
                Education
              </div>
              <div className="flex gap-x-2  item-center">
                <div className="text-xs  py-2 ">Any</div>
                <div>
                  <MdOutlineModeEdit className="text-lg mt-2" />
                </div>
              </div>
            </div>
            <div className="flex border-gray-500 border-b item-center justify-between items-center ">
              <div className="my-2 cursor-pointer tracking-wide text-gray-800 text-sm font-semibold">
                Institution Details
              </div>
              <div className="flex gap-x-2  item-center">
                <div className="text-xs  py-2 ">Any</div>
                <div>
                  <CiLock className="text-lg mt-2 text-orange-600 " />
                </div>
              </div>
            </div>
            <div className="flex border-gray-500 border-b item-center justify-between items-center ">
              <div className="my-2 cursor-pointer break-words w-24 tracking-wide text-gray-800 text-sm font-semibold">
                Organisation Details
              </div>
              <div className="flex gap-x-2  item-center">
                <div className="text-xs  py-2 ">Any</div>
                <div>
                  <CiLock className="text-lg mt-2 text-orange-600 " />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        onClick={toggleDropdown3}
        className=" p-2 border border-gray-400 shadow-xl mt-3"
      >
        <div className="flex  justify-between items-center">
          <div className=" cursor-pointer tracking-wide  text-lg  font-semibold">
            Location Details
          </div>
          <div>
            {open2 ? (
              <MdKeyboardArrowUp className="text-2xl text-gray-600" />
            ) : (
              <MdKeyboardArrowDown className="text-2xl  text-gray-600" />
            )}
          </div>
        </div>
        {open3 && (
          <div className="">
            <div className="flex border-gray-500 border-b item-center justify-between items-center ">
              <div className="my-2 cursor-pointer tracking-wide text-gray-800  font-semibold">
                <div className="text-sm">Nearby Profiles</div>
                <div className="text-xs text-gray-500">
                  Matches near your location
                </div>
              </div>

              <div className="flex gap-x-2  item-center">
                <MdCheckBoxOutlineBlank className="text-gray-400 text-lg" />
              </div>
            </div>
            <div className="flex border-gray-500 border-b item-center justify-between items-center ">
              <div className="my-2 cursor-pointer tracking-wide text-gray-800 text-sm font-semibold">
                Country
              </div>
              <div className="flex gap-x-2  item-center">
                <div className="text-xs  py-2 ">Any</div>
                <div>
                  <MdOutlineModeEdit className="text-lg mt-2" />
                </div>
              </div>
            </div>
            <div className="flex border-gray-500 border-b item-center justify-between items-center ">
              <div className="my-2 cursor-pointer tracking-wide text-gray-800 text-sm font-semibold">
                Citizenship
              </div>
              <div className="flex gap-x-2  item-center">
                <div className="text-xs  py-2 ">Any</div>
                <div>
                  <MdOutlineModeEdit className="text-lg mt-2 " />
                </div>
              </div>
            </div>
            <div className="flex border-gray-500 border-b item-center justify-between items-center ">
              <div className="my-2 cursor-pointer tracking-wide text-gray-800 text-sm font-semibold">
                Ancestral Origin
              </div>
              <div className="flex gap-x-2  item-center">
                <div className="text-xs  py-2 ">Any</div>
                <div>
                  <MdOutlineModeEdit className="text-lg mt-2" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        onClick={toggleDropdown4}
        className=" p-2 border border-gray-400 shadow-xl mt-3"
      >
        <div className="flex  justify-between items-center">
          <div className=" cursor-pointer tracking-wide  text-lg  font-semibold">
            Lifestyle
          </div>
          <div>
            {open4 ? (
              <MdKeyboardArrowUp className="text-2xl text-gray-600" />
            ) : (
              <MdKeyboardArrowDown className="text-2xl  text-gray-600" />
            )}
          </div>
        </div>
        {open4 && (
          <div className="">
            <div className="flex border-gray-500 border-b item-center justify-between items-center ">
              <div className="my-2 cursor-pointer tracking-wide text-gray-800  font-semibold">
                <div className="text-sm">Mutual Hobbies</div>
                <div className="text-xs text-gray-500">
                  Matches who have similar hobbies as you
                </div>
              </div>

              <div className="flex gap-x-2  item-center">
                <MdCheckBoxOutlineBlank className="text-gray-400 text-lg" />
              </div>
            </div>
            <div className="flex border-gray-500 border-b item-center justify-between items-center ">
              <div className="my-2 cursor-pointer tracking-wide text-gray-800 text-sm font-semibold">
                Eating Habits
              </div>
              <div className="flex gap-x-2  item-center">
                <div className="text-xs  py-2 ">Any</div>
                <div>
                  <MdOutlineModeEdit className="text-lg mt-2" />
                </div>
              </div>
            </div>
            <div className="flex border-gray-500 border-b item-center justify-between items-center ">
              <div className="my-2 cursor-pointer tracking-wide text-gray-800 text-sm font-semibold">
                Drinking Habits
              </div>
              <div className="flex gap-x-2  item-center">
                <div className="text-xs  py-2 ">Doesn't Matter</div>
                <div>
                  <MdOutlineModeEdit className="text-lg mt-2 " />
                </div>
              </div>
            </div>
            <div className="flex border-gray-500 border-b item-center justify-between items-center ">
              <div className="my-2 cursor-pointer tracking-wide text-gray-800 text-sm font-semibold">
                Smoking Habits
              </div>
              <div className="flex gap-x-2  item-center">
                <div className="text-xs  py-2 ">Doesn't Matter</div>
                <div>
                  <MdOutlineModeEdit className="text-lg mt-2" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        onClick={toggleDropdown5}
        className=" p-2 border border-gray-400 shadow-xl mt-3"
      >
        <div className="flex  justify-between items-center">
          <div className=" cursor-pointer tracking-wide  text-lg  font-semibold">
            Family Details
          </div>
          <div>
            {open5 ? (
              <MdKeyboardArrowUp className="text-2xl text-gray-600" />
            ) : (
              <MdKeyboardArrowDown className="text-2xl  text-gray-600" />
            )}
          </div>
        </div>
        {open5 && (
          <div className="">
            <div className="flex border-gray-500 border-b item-center justify-between items-center ">
              <div className="my-2 cursor-pointer tracking-wide text-gray-800 text-sm font-semibold">
                Family Status
              </div>
              <div className="flex gap-x-2  item-center">
                <div className="text-xs  py-2 ">Any</div>
                <div>
                  <MdOutlineModeEdit className="text-lg mt-2" />
                </div>
              </div>
            </div>
            <div className="flex border-gray-500 border-b item-center justify-between items-center ">
              <div className="my-2 cursor-pointer tracking-wide text-gray-800 text-sm font-semibold">
                Family Type
              </div>
              <div className="flex gap-x-2  item-center">
                <div className="text-xs  py-2 ">Any</div>
                <div>
                  <MdOutlineModeEdit className="text-lg mt-2 " />
                </div>
              </div>
            </div>
            <div className="flex border-gray-500 border-b item-center justify-between items-center ">
              <div className="my-2 cursor-pointer tracking-wide text-gray-800 text-sm font-semibold">
                Family Value
              </div>
              <div className="flex gap-x-2  item-center">
                <div className="text-xs  py-2 ">Any</div>
                <div>
                  <MdOutlineModeEdit className="text-lg mt-2" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        onClick={toggleDropdown6}
        className=" p-2 border border-gray-400 shadow-xl mt-3"
      >
        <div className="flex  justify-between items-center">
          <div className=" cursor-pointer tracking-wide  text-lg  font-semibold">
            Recently active profiles
          </div>
          <div>
            {open6 ? (
              <MdKeyboardArrowUp className="text-2xl text-gray-600" />
            ) : (
              <MdKeyboardArrowDown className="text-2xl  text-gray-600" />
            )}
          </div>
        </div>
        {open6 && (
          <div className="">
            <div className="flex border-gray-500 border-b item-center justify-between items-center ">
              <div className="my-2 cursor-pointer tracking-wide text-gray-800 text-sm font-semibold">
                Family Status
              </div>
              <div className="flex gap-x-2  item-center">
                <div className="text-xs  py-2 ">Any</div>
                <div>
                  <MdOutlineModeEdit className="text-lg mt-2" />
                </div>
              </div>
            </div>
            <div className="flex border-gray-500 border-b item-center justify-between items-center ">
              <div className="my-2 cursor-pointer tracking-wide text-gray-800 text-sm font-semibold">
                Family Type
              </div>
              <div className="flex gap-x-2  item-center">
                <div className="text-xs  py-2 ">Any</div>
                <div>
                  <MdOutlineModeEdit className="text-lg mt-2 " />
                </div>
              </div>
            </div>
            <div className="flex border-gray-500 border-b item-center justify-between items-center ">
              <div className="my-2 cursor-pointer tracking-wide text-gray-800 text-sm font-semibold">
                Family Value
              </div>
              <div className="flex gap-x-2  item-center">
                <div className="text-xs  py-2 ">Any</div>
                <div>
                  <MdOutlineModeEdit className="text-lg mt-2" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        onClick={toggleDropdown7}
        className=" p-2 border border-gray-400 shadow-xl mt-3"
      >
        <div className="flex  justify-between items-center">
          <div className=" cursor-pointer tracking-wide  text-lg  font-semibold">
            Profile Type
          </div>
          <div>
            {open7 ? (
              <MdKeyboardArrowUp className="text-2xl text-gray-600" />
            ) : (
              <MdKeyboardArrowDown className="text-2xl  text-gray-600" />
            )}
          </div>
        </div>
        {open7 && (
          <div className="">
            <div className="flex border-gray-500 border-b item-center justify-between items-center ">
              <div className="my-2 cursor-pointer tracking-wide text-gray-800 text-sm font-semibold">
                Family Status
              </div>
              <div className="flex gap-x-2  item-center">
                <div className="text-xs  py-2 ">Any</div>
                <div>
                  <MdOutlineModeEdit className="text-lg mt-2" />
                </div>
              </div>
            </div>
            <div className="flex border-gray-500 border-b item-center justify-between items-center ">
              <div className="my-2 cursor-pointer tracking-wide text-gray-800 text-sm font-semibold">
                Family Type
              </div>
              <div className="flex gap-x-2  item-center">
                <div className="text-xs  py-2 ">Any</div>
                <div>
                  <MdOutlineModeEdit className="text-lg mt-2 " />
                </div>
              </div>
            </div>
            <div className="flex border-gray-500 border-b item-center justify-between items-center ">
              <div className="my-2 cursor-pointer tracking-wide text-gray-800 text-sm font-semibold">
                Family Value
              </div>
              <div className="flex gap-x-2  item-center">
                <div className="text-xs  py-2 ">Any</div>
                <div>
                  <MdOutlineModeEdit className="text-lg mt-2" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Toggle;
