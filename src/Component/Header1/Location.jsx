import React, { useState } from "react";

const Location = () => {
  const [open1, setOpen1] = useState();
  const handleOpen1 = () => {
    setOpen1(!open1);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };
  return (
    <div>
      <div
        className=" text-white font-bold cursor-pointer"
        onClick={handleOpen1}
      >
        Location
      </div>
      {open1 && (
        <div
          className="!absolute top-0 left-0 h-[100vh] bg-black bg-opacity-50 z-50 inset-0 w-[100vw] "
          onClick={handleClose1}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="!absolute inset-0 w-[48%] left-[25%] !top-44 h-[40%]  !bg-white bg-opacity-[90%] justify-center items-center rounded-md"
          >
            <div className="flex flex-col mx-auto rounded-md">
              <div className="text-red-500 text-center text-3xl font-semibold mt-5">
                Help us to serve you better
              </div>
              <div className="mt-5 w-[80%] mx-auto text-center text-gray-800">
                Enter your delivery pincode to check nearest stores, product
                availability & faster delivery options
              </div>
              <div className="flex mt-5 justify-center gap-x-3 mb-5">
                <div className=" w-[80%]">
                  <input
                    type="text"
                    className="w-[100%] h-10 outline-none border border-gray-400 rounded-md"
                  />
                </div>
                <div className="bg-red-600 text-white p-2 rounded-md h-10 font-semibold ">
                  SUBMIT
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Location;
