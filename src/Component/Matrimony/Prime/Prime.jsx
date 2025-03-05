import React, { useState } from "react";

const Prime = () => {
  const [selectedID, setSelectedID] = useState(""); 

  const handleSelect = (id) => {
    setSelectedID(selectedID === id ? "" : id); 
  };

  return (
    <div>
      <div className="bg-[url('https://i.ibb.co/tL9Zttw/Screenshot-2025-01-12-150146.png')] blur-sm h-[63vh] z-10 bg-cover relative"></div>

      <div className="bg-white py-5 w-[30%] border  shadow-2xl flex flex-col rounded-xl p-8 gap-y-3 z-40 absolute top-[37%] left-[33%]">
        <div>
          <img
            src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/prime-toggle-id-step-2.svg"
            alt="Verification"
          />
        </div>

        <div className="mx-auto text-xl font-bold">
          Almost there, verify your profile details now to view Prime matches
        </div>

        <div className="">Select the Govt ID to verify</div>

        <div className="grid grid-cols-2 w-[90%] gap-2">
          <button
            className={`border rounded-3xl font-semibold py-2 transition-all duration-200 ${
              selectedID === "Aadhar Card"
                ? "bg-green-600 text-white border-green-600"
                : "bg-white text-gray-700 border-gray-300"
            }`}
            onClick={() => handleSelect("Aadhar Card")}
          >
            Aadhar Card
          </button>

          <button
            className={`border rounded-3xl font-semibold text-center py-2 transition-all duration-200 ${
              selectedID === "PAN Card"
                ? "bg-green-600 text-white border-green-600"
                : "bg-white text-gray-700 border-gray-300"
            }`}
            onClick={() => handleSelect("PAN Card")}
          >
            PAN Card
          </button>

          <button
            className={`border rounded-3xl font-semibold text-center w-32 py-2 transition-all duration-200 ${
              selectedID === "Driving License"
                ? "bg-green-600 text-white border-green-600"
                : "bg-white text-gray-700 border-gray-300"
            }`}
            onClick={() => handleSelect("Driving License")}
          >
            Driving License
          </button>

         
          <button
            className={`border rounded-3xl font-semibold text-center py-2 transition-all duration-200 ${
              selectedID === "Voter ID"
                ? "bg-green-600 text-white border-green-600"
                : "bg-white text-gray-700 border-gray-300"
            }`}
            onClick={() => handleSelect("Voter ID")}
          >
            Voter ID
          </button>
        </div>

        {selectedID === "Aadhar Card" && (
          <div>
            <div className="mt-2  border-gray-300  rounded-lg border shadow-md w-[35%] flex flex-col items-center gap-2">
              <label className="cursor-pointer   border-gray-400 p-2 rounded-lg   text-gray-700 hover:border-green-600">
                <img
                  className=" mx-auto"
                  src="https://imgs.bharatmatrimony.com/webapp-assets/images/profile-verification-gallery.svg"
                  alt=""
                />
                <input type="file" className="hidden" />
                <div className="text-xs mt-1 text-center text-gray-900 ">
                  Upload from gallery
                </div>
              </label>
            </div>
            <div className="border my-5 w-[100%]"></div>
            <div className="text-sm text-gray-500">
              Your ID details will not be stored and will be used only for
              verification.
            </div>
          </div>
        )}
        {selectedID === "PAN Card" && (
          <div>
            <div className="border relative border-green-700 rounded-xl  mt-2">
              <div className="text-xs text-green-700 left-2 absolute p-1 -top-3 bg-white">
                Enter PAN Card Number
              </div>
              <div className="  p-2">
                <input type="text" className="outline-none w-[90%]" />
              </div>
            </div>
            <div className="font-semibold w-[40%] text-center p-2  bg-green-600 mt-4 rounded-3xl  text-white">
              Verify
            </div>
          </div>
        )}
        {selectedID === "Driving License" && (
          <div>
            <div className="border relative border-green-700 rounded-xl  mt-2">
              <div className="text-xs text-green-700 left-2 absolute p-1 -top-3 bg-white">
                Enter Driving License Number
              </div>
              <div className="  p-2">
                <input type="text" className="outline-none w-[90%]" />
              </div>
            </div>
            <div className="font-semibold w-[40%] text-center p-2  bg-green-600 mt-4 rounded-3xl  text-white">
              Verify
            </div>
          </div>
        )}
        {selectedID === "Voter ID" && (
          <div>
            <div className="border relative border-green-700 rounded-xl  mt-2">
              <div className="text-xs text-green-700 left-2 absolute p-1 -top-3 bg-white">
                Enter Voter ID Number
              </div>
              <div className="  p-2">
                <input type="text" className="outline-none w-[90%]" />
              </div>
            </div>
            <div className="font-semibold w-[40%] text-center p-2  bg-green-600 mt-4 rounded-3xl  text-white">
              Verify
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Prime;
