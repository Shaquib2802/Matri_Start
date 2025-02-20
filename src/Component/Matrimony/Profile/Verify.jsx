import React from "react";
import Pro_Head from "./Pro_Head";
import Bottom_dash from "../Dash_Board/Bottom_dash";

const Verify = () => {
  return (
    <div className="w-[100%]">
      <Pro_Head />
      <div className="bg-[#f2090b] flex flex-col py-8 gap-y-2 ">
        <div className="mx-auto">
          <img
            src="	https://imgs.hindimatrimony.com/bmimgs/trust-badge-icon.png"
            alt=""
          />
        </div>
        <div className="text-white font-semibold text-xl mx-auto">
          Your profile is pending verification
        </div>
      </div>
      <div className="grid grid-cols-2 mx-[17%] gap-10 my-10 ">
        <div className="border border-gray-500 shadow-md rounded-3xl p-5">
          <div className="text-2xl font-semibold">ID Verification</div>
          <div className="mt-2 text-gray-800 font-medium">
            
            Select one of the below documents to verify your identity
            information. The documents chosen by you will not be shown to other
            members.
          </div>
          <div className="flex gap-x-2">
            <div className="border-2 hover:bg-green-500 hover:border-green-500 cursor-pointer mt-4 border-gray-300 w-36 text-center rounded-3xl p-1.5 font-medium">
              Driving Licence
            </div>
            <div className="border-2 hover:bg-green-500 hover:border-green-500 cursor-pointer mt-4 border-gray-300 w-28  text-center rounded-3xl p-1.5 font-medium">
              PAN Card
            </div>
          </div>
          <div className="flex gap-x-2">
            <div className="border-2 mt-4 hover:bg-green-500 hover:border-green-500 cursor-pointer border-gray-300 w-28 text-center rounded-3xl p-1.5 font-medium">
              Passport
            </div>
            <div className="border-2 mt-4 hover:bg-green-500 hover:border-green-500 cursor-pointer border-gray-300 w-28  text-center rounded-3xl p-1.5 font-medium">
              Voter ID
            </div>
            <div className="border-2 mt-4 hover:bg-green-500 hover:border-green-500 cursor-pointer border-gray-300 w-28  text-center rounded-3xl p-1.5 font-medium">
              Aadhar
            </div>
          </div>
        </div>
        <div className="border rounded-3xl h-fit p-5 border-gray-500 shadow-md ">
          {" "}
          <div className="text-2xl font-semibold">Education Verification </div>
          <div className="mt-2 text-gray-800 font-medium">
            {" "}
            Educational Qualification mentioned in your profile: BCA
          </div>
          <div className="mt-2 text-sm">
            Upload your education certificate and help us verify your
            educational qualification. The certificate uploaded by you will not
            be shown to other members.
          </div>
          <div className="flex gap-x-2">
            <div className="border-2 mt-4 hover:bg-green-500 hover:border-green-500 cursor-pointer border-gray-300 w-[80%] text-center rounded-3xl p-1.5 font-medium">
              Upload Education Certificate
            </div>
          </div>
        </div>
        <div className="border border-gray-500 shadow-md rounded-3xl p-5">
          <div className="text-2xl font-semibold">Salary Verification</div>
          <div className="mt-2 text-gray-800 font-medium">
            {" "}
            Annual income mentioned in your profile: Rs. 4 - 5 Lakhs
          </div>
          <div className="mt-2 text-gray-800 text-sm ">
            {" "}
            Upload your salary slip and help us verify your current salary. The
            salary slip uploaded by you will not be shown to other members
          </div>
          <div className="flex gap-x-2">
            <div className="border-2 mt-4 hover:bg-green-500 hover:border-green-500 cursor-pointer border-gray-300 w-[50%] text-center rounded-3xl p-1.5 font-medium">
              Upload Salary Slip
            </div>
          </div>
        </div>
        <div className="border border-gray-500 h-fit shadow-md rounded-3xl p-5">
          {" "}
          <div className="text-2xl font-semibold"> Photo Verification</div>
          <div className="mt-2 text-gray-800 font-medium">
            {" "}
            We will need to verify your profile photo with a selfie.{" "}
          </div>
          <div className="mt-2 text-gray-800 text-sm ">
            {" "}
            To complete your photo verification, download our mobile
            application.
          </div>
          <div className="flex gap-x-2">
            <div className="border-2 mt-4 hover:bg-green-500 hover:border-green-500 cursor-pointer border-gray-300 w-[50%] text-center rounded-3xl p-1.5 font-medium">
              Download App
            </div>
          </div>
        </div>
      </div>
      <Bottom_dash />
    </div>
  );
};

export default Verify;
