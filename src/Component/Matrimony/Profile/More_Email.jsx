import React, { useState } from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

const More_Email = ({ goBack1 }) => {
  const [notificationPreference, setNotificationPreference] =
    useState("instant");

  return (
    <div>
      <div className="flex items-center gap-x-2 border-b pb-3 border-gray-300">
        <div className="cursor-pointer" onClick={goBack1}>
          <MdOutlineArrowBackIosNew className="text-lg mt-1 text-gray-500" />
        </div>
        <div className="text-xl">More E-Mail Alerts</div>
      </div>

      <div className="text-gray-500 mt-2">
        Choose how often you receive mails about any member's activity on your
        profile.
      </div>
      <div className="border-b pb-4 border-gray-400 ">
        <div className="my-6">
          <div className="font-semibold">Express Interest</div>
          <div className="text-gray-500">When members send you an interest</div>
        </div>

        <form
          action="
"
        >
          <div className="flex justify-between items-center">
            <div>Get notified instantly</div>
            <div>
              <input
                className="w-4 h-4 "
                type="radio"
                name="notification"
                value="instant"
              />
            </div>
          </div>
          <div className="flex mt-4 justify-between items-center">
            <div>Get one notification daily for all interests received</div>
            <div>
              <input
                className="w-4 h-4 "
                type="radio"
                name="notification"
                value="instant"
              />
            </div>
          </div>
          <div className="flex justify-end  mt-5">
            <button className="rounded bg-[#FF7805] text-white text-xs p-1 font-semibold">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="border-b pb-4 border-gray-400 ">
        <div className="my-6">
          <div className="font-semibold">Personalized Messages t</div>
          <div className="text-gray-500">
            When premium members send messages
          </div>
        </div>

        <form
          action="
"
        >
          <div className="flex justify-between items-center">
            <div>Get notified instantly</div>
            <div>
              <input
                className="w-4 h-4 "
                type="radio"
                name="notification"
                value="instant"
              />
            </div>
          </div>
          <div className="flex mt-4 justify-between items-center">
            <div>Get one notification daily for all messages received</div>
            <div>
              <input
                className="w-4 h-4 "
                type="radio"
                name="notification"
                value="instant"
              />
            </div>
          </div>
          <div className="flex justify-end  mt-5">
            <button type="submit" className="rounded bg-[#FF7805] text-white text-xs p-1 font-semibold">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default More_Email;
