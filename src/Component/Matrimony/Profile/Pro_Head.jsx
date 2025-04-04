import HomeIcon from "@mui/icons-material/Home";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React from "react";
import { useNavigate } from "react-router-dom";


const Pro_Head = () => {
  const navigate = useNavigate();
  return (
    <div
      className="w-[100%]  top-0 sticky z-50 bg-white border-b-2 border-green-600"
    >
      <div className="flex justify-around items-center  gap-x-8 h-[13vh] px-32">
        <div className="w-[20%]   items-center cursor-pointer" onClick={()=>navigate('/dash')}>
          <img
            className="w-[65%] "
            src="https://imgs.bharatmatrimony.com/bmimgs/new-logo/bharat-matrimony-logo.png"
            alt=""
          />
        </div>
        <div className="w-[80%]  flex justify-end gap-x-20 items-center">
          <div  onClick={()=> navigate("/dash")} className=" flex cursor-pointer  py-2.5 ">
            <div>
              <HomeIcon className="text-green-600" />
            </div>
            <div className="mt-1.5  text-sm font-semibold text-green-600">
              Home
            </div>
          </div>
          <div className=" flex gap-x-0.5 py-3 ">
            <div>
              <img
                src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/bottom-navigation-matches.svg"
                alt=""
              />
            </div>
            <div className="mt-0.5 text-sm text-black">Matches</div>
          </div>
          <div className=" flex py-3 gap-x-0.5 ">
            <div>
              <img
                src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/bottom-navigation-mailbox.svg"
                alt=""
              />
            </div>
            <div className="mt-0.5 text-sm text-black">Mailbox</div>
          </div>
          <div className=" flex py-3 gap-x-0.5">
            <div>
              <img
                src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/bottom-navigation-chat.svg"
                alt=""
              />
            </div>
            <div className="mt-0.5 text-sm text-black">Chat</div>
          </div>

          <div className="  flex   gap-x-2 ">
            <div>
              <img
                className="w-14 rounded-full "
                src="https://imgs.bharatmatrimony.com/bmimgs/add-photo-Ntxt-m-150-avatar.jpg"
                alt=""
              />
            </div>
            <div>
              <KeyboardArrowDownIcon className="text-gray-500 !text-3xl mt-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pro_Head;
