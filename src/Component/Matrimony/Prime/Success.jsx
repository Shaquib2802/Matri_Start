import React from "react";

const Success = () => {
  return (
    <div className=" pt-10  bg-gradient-to-b from-orange-50 to-white   rounded-xl px-6">
      <div className="flex   justify-between">
        <div className="w-[68%] ">
          <span className="font-semibold tracking-wide">
            Millions of happy marriages!
          </span>{" "}
          Featured in the Limca Book of Records for the highest number of
          documented online marriages.
        </div>
        <div className="w-[32%]  flex justify-end">
          <img
            src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/dashboard-revamp/logo-limca-records.svg"
            alt=""
          />
        </div>
      </div>
      <div className="text-xl font-semibold">Success stories of the day</div>
      <div className="grid grid-cols-3 my-5 gap-x-4">
        <div className="bg-white rounded-lg flex flex-col shadow-xl p-3">
          <div>
            <img
              className="rounded-lg w-56 h-36 "
              src="https://bh-imgs.matrimonycdn.com/successphoto/hindi/1/0/H10810444_SUCCESS_TS.jpg"
              alt=""
            />
          </div>
          <div className="font-semibold text-sm  mt-2">
            Madhulika Sharma & Saurabh Sharma
          </div>
          <div className="text-xs text-gray-500">Posted on: 13 Nov 2024</div>
          <div className="text-sm tracking-wide">
            Thank you Bharat Matrimony
          </div>
          <div className="text-sm tracking-wide text-orange-600 pb-5">
            Read More...
          </div>
        </div>
        <div className="bg-white rounded-lg flex flex-col shadow-xl p-3">
          <div>
            <img
              className="rounded-lg w-56 h-36 "
              src="https://bh-imgs.matrimonycdn.com/successphoto/hindi/1/0/H10406150_SUCCESS_TS.jpg"
              alt=""
            />
          </div>
          <div className="font-semibold text-sm  mt-2">
            Yuvraj and Swati Verma
          </div>
          <div className="text-xs text-gray-500">Posted on: 13 Nov 2024</div>
          <div className="text-sm tracking-wide">
            Thank you Bharat Matrimony
          </div>
          <div className="text-sm tracking-wide text-orange-600 pb-5">
            Read More...
          </div>
        </div>
        <div className="bg-white rounded-lg flex flex-col shadow-xl p-3">
          <div>
            <img
              className="rounded-lg w-56 h-36 "
              src="https://bh-imgs.matrimonycdn.com/successphoto/hindi/1/1/H11772582_SUCCESS_TS.jpg"
              alt=""
            />
          </div>
          <div className="font-semibold text-sm  mt-2">
            Madhulika Sharma & Saurabh Sharma
          </div>
          <div className="text-xs text-gray-500">Posted on: 13 Nov 2024</div>
          <div className="text-sm tracking-wide">
            Thank you Bharat Matrimony
          </div>
          <div className="text-sm tracking-wide text-orange-600 pb-5">
            Read More...
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
      <div className="border rounded-xl  w-[40%] border-black my-4  font-semibold mx-auto text-center bg-purple-100">View more success stories</div>
      <div className="border-2 my-8"></div>
    </div>
  );
};

export default Success;
