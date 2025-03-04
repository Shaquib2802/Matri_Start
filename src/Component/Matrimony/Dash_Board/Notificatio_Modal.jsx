import React from "react";

const Notificatio_Modal = () => {
  return (
    <div className="bg-white">
      <div
        className="border-2 rounded-md p-5
   "
      >
        <div className="text-xl font-semibold">Notifications</div>
        <div className="border flex mt-4 gap-x-5 w-[100%] mx-auto">
          <div>
            <img
              className="w-20"
              src="https://imgs.bharatmatrimony.com/bmimgs/photo-request-f-75.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="tracking-wide font-semibold text-xs">
              Zeba Khatoon
            </div>
            <div className="text-xs mt-2 text-orange-600 font-semibold">
              View Profile
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notificatio_Modal;
