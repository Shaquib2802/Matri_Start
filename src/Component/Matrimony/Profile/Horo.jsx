import React from "react";
import { IoMdArrowDropright } from "react-icons/io";

const Horo = () => {
  return (
    <div className=" ">
      <div className=" font-semibold ">
        Your Horoscope Privacy has been set to{" "}
        <span className="text-green-700">"Visible to All"</span>
      </div>
      <form className="mt-2  p-4">
        <div className="flex items-center">
          <div>
            <input type="radio" className="!text-sm !mt-1" />
            <label className="!text-xs  ml-1 "> Visible to all </label>
          </div>
          <div>
            <img
              className="mt-2"
              src="https://imgs.bharatmatrimony.com/bmimgs/recommend-betterresponse.gif"
              alt=""
            />
          </div>
        </div>
        <div className="flex ml-5 my-2">
          <div>
            <IoMdArrowDropright />
          </div>
          <div className="text-xs text-gray-600">
            Paid members can view unlimited number of horoscopes / Free members
            have limited access to horoscope.
          </div>
        </div>
        <div>
          <input type="radio" className="!text-sm " />
          <label className="!text-xs ml-1 ">
            Visible only to members whom I had contacted / responded.
          </label>
        </div>

        <div className="ml-5">
          <input type="radio" className="!text-sm " />
          <label className="!text-xs ml-1 ">
            Protect with Horoscope Password
          </label>
        </div>
        <div>
          <div className="text-xs text-gray-600">With this option you can</div>
          <div className="flex items-center  my-2">
            <div>
              <IoMdArrowDropright />
            </div>
            <div className="text-xs text-gray-600">
              Share your Horoscope Password to a member of your choice.
            </div>
          </div>
          <div className="flex items-center  my-2">
            <div>
              <IoMdArrowDropright />
            </div>
            <div className="text-xs text-gray-600">
            Grant access to your Horoscope at the time of contacting.
            </div>
          </div>
        </div>
        <br />
      </form>

      <div className="flex gap-x-6 ml-5">
        <div className="break-words w-60  text-xs text-gray-500">
          When members request to view your photo, you can decide whether to
          allow or not
        </div>
        <div className="text-red-500 text-sm "></div>
      </div>
    </div>
  );
};

export default Horo;
