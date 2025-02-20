import React from "react";
import HeaderDash from "./HeaderDash";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Bottom_dash from "./Bottom_dash";
import Pro_Head from "../Profile/Pro_Head";

const Photo = () => {
  return (
    <div>
      <Pro_Head/>
      <div className=" my-8 mx-32 relative  h-[80vh] bg-[url('https://imgs.bharatmatrimony.com/bmimgs/inter-phadd-bg-m.jpg')]  bg-no-repeat  ">
        <div className=" absolute right-[4%] w-[70%] top-10  bg-white flex flex-col">
          <div className="text-center w-[70%] mt-9 text-green-600  mx-auto text-2xl font-semibold">
            Add your photo and get much better responses!
          </div>
          <div className="flex  w-[70%] mx-auto my-4 justify-between">
            <div className="w-[25%] border-2">
              <img
                src="https://imgs.bharatmatrimony.com/bmimgs/inter-phadd-male-icon.png"
                alt=""
              />
            </div>
            <div className="flex flex-col w-[75%] ">
                <div className="flex bg-orange-500 w-[55%] border-b-2 mt-5 border-orange-700 rounded-md mx-auto justify-center">
                    <div className="text-white p-1 font-semibold">ADD PHOTO NOW</div>
                    <div><ArrowRightIcon className="!text-4xl"/></div>
                </div>
                <div className="flex text-xs mt-3 mx-auto text-gray-400">
                    <div> Within 15 MB of size</div>
                    <div> jpg / gif / png / bmp</div>
                </div>

            </div>
          </div>
        </div>
      </div>
      <Bottom_dash/>
    </div>
  );
};

export default Photo;
