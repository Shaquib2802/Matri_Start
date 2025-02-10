import React from "react";

const Location1 = () => {
  return (
    <div className="w-[100%]">
    <div className="w-[50%]  flex flex-col mx-auto border border-gray-600 mt-44 rounded-md">
      <div className="text-red-500 text-center text-3xl font-semibold mt-5">
        Help us to serve you better
      </div>
      <div className="mt-5 w-[80%] mx-auto text-center text-gray-800">
        Enter your delivery pincode to check nearest stores, product
        availability & faster delivery options
      </div>
      <div className="flex mt-5 justify-center gap-x-3 mb-5">
        <div className=" w-[80%]">
          <input type="text" className="w-[100%] h-10 outline-none border border-gray-400 rounded-md" />
        </div>
        <div className="bg-red-600 text-white p-2 rounded-md h-10 font-semibold ">SUBMIT</div>
      </div>
    </div>
    </div>
  );
};

export default Location1;
