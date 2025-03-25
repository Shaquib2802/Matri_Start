import React from "react";
import HeaderDash from "../Dash_Board/HeaderDash";
import { useLocation } from "react-router-dom";

const Result = () => {
  const { state } = useLocation();
  console.log("Result", state);
  return (
    <div>
      <HeaderDash />
      <div className="w-[60%] border-2 rounded-md p-2 mx-auto my-10">
        <div className="text-xl font-semibold">Displaying Matches</div>
        {Array.isArray(state.data) && state?.data.map((profile) => (
          <div
            key={profile.id}
            className="flex my-5 rounded-md m-1 border justify-start gap-x-5 items-center"
          >
            <div className="w-[30%] border">
              <img
                className="w-[100%] rounded-xl"
                src={profile.profile_picture}
                alt="Profile"
              />
            </div>
            <div className="w-[60%] flex flex-col">
              <div className="text-xl font-semibold">
                {profile.user_name || "Name Not Available"}
              </div>
              <div className="text-sm font-semibold">
                {profile.age} yrs | {profile.height}'' | {profile.religion} |{" "}
                {profile.location}
              </div>
              <div className="text-sm font-semibold">Email: {profile.email}</div>
              <div className="text-sm font-semibold">Mobile: {profile.mobile_number}</div>
              <div className="text-sm font-semibold">Income: ₹{profile.income}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Result;
