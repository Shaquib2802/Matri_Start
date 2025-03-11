import React from "react";
import Img2 from "../../../Photos/Img2.png";
import { FiCheck } from "react-icons/fi";

const Assist = () => {
  return (
    <div>
      <div className="border border-gray-300 rounded-2xl flex px-5 pt-6 bg-gradient-to-r from-[#FFF7EE] to-[#E3FFED]">
        <div className="w-[70%]">
          <div className="flex w-[70%] items-center gap-x-3">
            <div>
              <img
                className="w-12 h-12"
                src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/assisted-service/assisted-logo.svg"
                alt=""
              />
            </div>
            <div className="flex flex-col  ">
              <div className="text-xl  font-semibold">Assisted service</div>
              <div className="font-semibold text-sm ">
                Personalised matchmaking service
              </div>
            </div>
          </div>
          <div className="text-xl mt-3 font-semibold">
            Find your match{" "}
            <span className="text-green-600 font-bold ">10x faster </span>
          </div>
          <div className="mt-3 text-sm ">
            Personalized matchmaking service through expert Relationship Manager
          </div>
          <div className="flex flex-col gap-y-3 my-3">
            <div className="flex gap-x-2 items-center  ">
              <div>
                <FiCheck className="mt-1 !font-semibold text-lg  text-white bg-green-600  rounded-full" />
              </div>
              <div className="text-sm font-semibold">Guaranteed matches</div>
            </div>
            <div className="flex gap-x-2 items-center  ">
              <div>
                <FiCheck className="mt-1 !font-semibold text-lg  text-white bg-green-600  rounded-full" />
              </div>
              <div className="text-sm font-semibold">Better response</div>
            </div>
            <div className="flex gap-x-2 items-center  ">
              <div>
                <FiCheck className="mt-1 !font-semibold text-lg  text-white bg-green-600  rounded-full" />
              </div>
              <div className="text-sm font-semibold">Save time & effort</div>
            </div>
            <div className="border rounded-2xl font-semibold bg-[#4E1A55] text-center p-1 w-[50%]  text-white ">
              Know more{" "}
            </div>
          </div>
        </div>
        <div className="w-[30%]">
          <img className="mt-1" src={Img2} alt="Image2" />
        </div>
      </div>
      <div className="border-2 my-10 "></div>
    </div>
  );
};

export default Assist;
