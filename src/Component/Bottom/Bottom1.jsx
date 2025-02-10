import React from "react";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { FaInstagram } from "react-icons/fa";
import { Divider } from "@mui/material";

const Bottom1 = () => {
  return (
    <div className="border">
      <div className="hidden lg:block">
        <div className="flex justify-center gap-x-10 mt-2 ">
          <div className="flex border border-slate-200 rounded-sm justify-around w-[12%] py-2 px- ">
            <div>
              <FaYoutube className="text-red-600 text-2xl mt-1 " />
            </div>
            <div className="text-xl font-bold"> CrazzyHub </div>
          </div>
          <div className="flex border justify-around w-[12%] py-2 px- ">
            <div>
              <FaLinkedin className="text-blue-800 text-2xl mt-1 " />
            </div>
            <div className="text-xl font-bold"> CrazzyHub </div>
          </div>
          <div className="flex border justify-around w-[12%] py-2 px- ">
            <div>
              <FaInstagram className="text-rose-500 text-2xl mt-1 " />
            </div>
            <div className="text-xl font-bold"> CrazzyHub </div>
          </div>
          <div className="flex border justify-around w-[12%] py-2 px- ">
            <div>
              <FaFacebookSquare className="text-blue-700 text-2xl mt-1 " />
            </div>
            <div className="text-xl font-bold"> CrazzyHub </div>
          </div>
          <div className="flex  border justify-around w-[12%] py-2 px- ">
            <div>
              <FaXTwitter className=" text-2xl mt-1 " />
            </div>
            <div className="text-xl font-bold"> CrazzyHub </div>
          </div>
        </div>
        <div className="flex  justify-around mt-8">
          <div className="flex flex-col">
            <div className="text-base font-medium">Support</div>
            <div>Contact Us</div>
          </div>
          <div className="flex flex-col">
            <div className="text-base font-medium">Policies</div>
            <div>Term & Condition</div>
            <div>Privacy Policy</div>
            <div>Return,Replacement & Refund.</div>
          </div>
          <div className="flex flex-col">
            <div className="text-base font-medium">Know More</div>
            <div>About Us</div>
            <div>Our Stores</div>
            <div>Service Center</div>
          </div>
          <div className="flex flex-col w-72">
            <div className="text-base font-medium">
              Contact Information Head Office
            </div>
            <div>
              Registered Office Address: CRAZZYHUB RETAIL PVT. LTD, SS-1281
              Sector-H Ashiyana, LDA Colony, Lucknow, 226012 Uttar Pradesh,
              India. CIN - U52590UP2021PTC153464
            </div>
          </div>
        </div>
        <div className="mt-5  ">
          <Divider className="" />
        </div>
        <div className="text-center mt-3">
          ©2023 CRAZZYHUB RETAIL PVT. LTD. All Rights Reserved | Designed by
          Aara Technologies Pvt. Ltd.
        </div>
      </div>
      <div className="block lg:hidden">
        <div className="flex justify-center gap-x-5 ">
          <div className="text-red-600 text-2xl border m-2 p-2">
            <FaYoutube />
          </div>
          <div className="text-blue-800 text-2xl border m-2 p-2">
            <FaLinkedin />
          </div>
          <div className="text-rose-600 text-2xl border m-2 p-2">
            <FaInstagram />
          </div>
          <div className="text-blue-800 text-2xl border m-2 p-2">
            <FaFacebookSquare />
          </div>
          <div className="text-2xl border m-2 p-2">
            <FaXTwitter />
          </div>
        </div>
        <div className="grid grid-cols-2 mx-5 mt-10 gap-y-4">
          <div>
            <div className="font-medium">Support</div>
            <div>Contact Us</div>
          </div>
          <div>
            <div className="font-medium">Policies</div>
            <div>Term & Condition</div>
            <div>Privacy Policy</div>
            <div>Return, Refund & Replacement.</div>
          </div>

          <div>
            <div className="font-medium">Support</div>
            <div>About Us</div>
            <div>Our Stores</div>
            <div>Service Center</div>
          </div>
          <div className="w-52 md:w-72 ">
            <div className="font-medium ">Contact Information Head Office</div>
            <div>
              {" "}
              Registered Office Address: CRAZZYHUB RETAIL MART PVT. LTD,
              SS-21281 Sector-H Ashiyana, LDA Colony, Lucknow, 226012, Uttar
              Pradesh, India.{" "}
              <span className="text-xs"> CIN - U52590UP2021PTC153464</span>
            </div>
          </div>
        </div>
        <div className="mt-4"><Divider /></div>
        <div className="text-sm text-center mt-4 mb-4">©2023 CRAZZYHUB RETAIL PVT. LTD. All Rights Reserved | Designed by Aara Technologies Pvt. Ltd.</div>
      </div>
    </div>
  );
};

export default Bottom1;
