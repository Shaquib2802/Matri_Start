import React from "react";

const Photo_Pri = () => {
  return (
    <div className="  ">
      <div className="text-xs font-semibold ">
        Your Photo Privacy has been set to{" "}
        <span className="text-green-700">"Visible to All"</span>
      </div>
      <form className="mt-2   p-4">
        <div className="flex items-center">
          <div>
            <input type="radio"  id="visibility-option" className="!text-sm !mt-1" />
            <label className="!text-xs  ml-1 "  htmlFor="visibility-option"> Visible to all </label>
          </div>
          <div className="">
            <img
              className="mt-2"
              src="https://imgs.bharatmatrimony.com/bmimgs/recommend-betterresponse.gif"
              alt=""
            />
          </div>
        </div>
        <div>
          <input type="radio"  id="visibility-option"  className="!text-sm " />
          <label className="!text-xs ml-1 ">
            Visible to members you have contacted/accepted and to all paid
            members
          </label>
        </div>

        <div>
          <input type="radio"  id="visibility-option" className="!text-sm " />
          <label className="!text-xs ml-1 "  htmlFor="visibility-option">
            Visible to members of your choice
          </label>
        </div>
        <br />
      </form>

      <div className="flex gap-x-6 ml-5">
        <div className="break-words w-60  text-xs text-gray-500">
          When members request to view your photo, you can decide whether to
          allow or not
        </div>
        <div className="text-red-500 text-sm ">Upgrade to use this feature </div>
      </div>
      
    </div>
  );
};

export default Photo_Pri;
