import React, { useEffect, useState } from "react";
import Pro_Head from "./Pro_Head";
import { useNavigate } from "react-router-dom";
import Privacy from "./Privacy";
import Bottom_dash from "../Dash_Board/Bottom_dash";

const Setting = () => {
  const [selectedOption, setSelectedOption] = useState("Edit e-mail Address");
   useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

  return (
    <div>
      <Pro_Head />
      <div className="bg-gray-100 p-16  px-40 gap-x-4">
        <div className="text-xl px-2">Profile Settings</div>
        <div className="flex mt-2 gap-x-4">
          <div className="w-[20%] border-2 h-fit bg-white">
            <div className="flex flex-col">
              <div
                onClick={() => setSelectedOption("Edit e-mail Address")}
                className={`font-semibold text-sm px-4 py-1.5 border cursor-pointer ${
                  selectedOption === "Edit e-mail Address"
                    ? "bg-blue-200"
                    : "text-blue-500 hover:underline"
                }`}
              >
                Edit e-mail Address
              </div>
              <div
                onClick={() => setSelectedOption("Change Password")}
                className={`text-sm px-4 py-1.5 cursor-pointer ${
                  selectedOption === "Change Password"
                    ? "bg-blue-200"
                    : "text-blue-500 hover:underline"
                }`}
              >
                Change Password
              </div>
              <div
                onClick={() => setSelectedOption("Alerts & Updates")}
                className={`text-sm px-4 py-1.5 cursor-pointer ${
                  selectedOption === "Alerts & Updates"
                    ? "bg-blue-200"
                    : "text-blue-500 hover:underline"
                }`}
              >
                Alerts & Updates
              </div>
              <div
                onClick={() => setSelectedOption("Call Prefrence")}
                className={`text-sm px-4 py-1.5 cursor-pointer ${
                  selectedOption === "Call Prefrence"
                    ? "bg-blue-200"
                    : "text-blue-500 hover:underline"
                }`}
              >
                Call Prefrence
              </div>
              <div
                onClick={() => setSelectedOption("Privacy")}
                className={`text-sm px-4 py-1.5 cursor-pointer ${
                  selectedOption === "Privacy"
                    ? "bg-blue-200"
                    : "text-blue-500 hover:underline"
                }`}
              >
                Privacy
              </div>
            </div>
          </div>

          <div className="w-[80%] border-2 px-4 py-2 h-fit bg-white">
            {selectedOption === "Edit e-mail Address" ? (
              <div>
                <h2 className="font-semibold border-b border-dashed border-gray-300 w-[60%]">
                  Edit Email Address
                </h2>
                <div className="mt-2 text-xs w-[60%]">
                  A valid email ID will be used to send you partner search
                  mailers, member-to-member communication mailers, and special
                  offers.
                </div>
                <div className="flex mt-2 items-center gap-x-2">
                  <input
                    type="email"
                    className="border px-2 mt-2 placeholder: text-xs h-6 w-[30%] border-gray-600 rounded"
                    placeholder="Enter your email"
                  />
                  <button className="bg-[#f2090b] text-white rounded text-sm font-semibold px-2 py-0.5">
                    Save
                  </button>
                  <button className="bg-gray-400 text-white rounded text-sm font-semibold px-2 py-0.5">
                    Reset
                  </button>
                </div>
              </div>
            ) : selectedOption === "Change Password" ? (
              <div>
                <h2 className="font-semibold border-b pb-2 border-dashed border-gray-300 w-[90%]">
                  Change Password
                </h2>
                <div className="mt-2 text-xs w-[100%]">
                  Your password must have a minimum of 6 characters. We
                  recommend you choose an alphanumeric password. E.g., Matri123
                </div>
                <div className="flex mt-2 items-center gap-x-4">
                  <div>
                    <label className="text-xs font-semibold">
                      Enter Current Password
                    </label>
                    <input
                      type="password"
                      className="border px-2 h-5 w-[100%] border-gray-600 shadow-inner"
                      placeholder=""
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold">
                      Enter New Password
                    </label>
                    <input
                      type="password"
                      className="border px-2 h-5 w-[100%] border-gray-600 shadow-inner"
                      placeholder=""
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="border px-2 h-5 w-[100%] border-gray-600 shadow-inner"
                      placeholder=""
                    />
                  </div>
                  <button className="bg-[#f2090b] text-white rounded text-sm font-semibold px-2 py-0.5">
                    Change Password
                  </button>
                </div>
              </div>
            ) : selectedOption === "Alerts & Updates" ? (
              <div>
                <h2 className="text-lg font-semibold">Alerts & Updates</h2>
                <p className="mt-2">Manage your notifications and updates.</p>
              </div>
            ) : selectedOption === "Call Prefrence" ? (
              <div>
                <h2 className="text-lg font-semibold border-b border-dashed border-gray-500">Call Preference</h2>
                <div className="text-xs font-semibold mt-2">Let us know when we can call you:</div>
                <form className="mt-2">
                  <input type="radio" className="!text-sm " />
                  <label className="!text-sm ml-1 ">Call when there are important updates/offers</label><br />
                  <input type="radio" className="!text-sm " />
                  <label className="!text-sm ml-1 ">Call after 1 month</label><br />
                  <input type="radio" className="!text-sm " />
                  <label className="!text-sm ml-1 ">Call after 3 months</label><br />
                  <input type="radio" className="!text-sm " />
                  <label className="!text-sm ml-1 ">Call after 6 months</label><br />
                  <input type="radio" className="!text-sm " />
                  <label className="!text-sm ml-1 ">Never</label>
                </form>
              </div>
            ) : selectedOption === "Privacy" ? (
              <div>
               <Privacy/>
              
              </div>
            ) :  (
              <div>
                <h2 className="text-lg font-semibold">Invalid Option</h2>
                <p className="mt-2">Please select a valid option.</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Bottom_dash/>
    </div>
  );
};

export default Setting;
