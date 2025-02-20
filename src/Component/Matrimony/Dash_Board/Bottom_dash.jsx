import React from "react";
import { useNavigate } from "react-router-dom";

const Bottom_dash = () => {
  const navigate = useNavigate()
  return (
    <div className="w-[100%] bg-white ">
      <div className="mx-24 border-t-2 m-10">
        <div className="w-[100%] flex  ">
          <div className="w-[40%]  flex flex-col mt-14">
            <div className="flex gap-x-3">
              <div>
                <img
                  src="https://imgs.bharatmatrimony.com/bmimgs/desktop-images/footer-bmlogo.png?v2"
                  alt=""
                />
              </div>
              <div className="font-semibold text-lg">About Us</div>
            </div>
            <div className="text-xs mt-5 w-[90%] leading-relaxed tracking-widest font-semibold text-gray-400 ">
              BharatMatrimony.com is one of the pioneers of online matrimony
              service.Today, we are the most trusted Matrimony website by Brand
              Trust Report. Millions of happy marriages happened and continue to
              happen through BharatMatrimony. We have been featured in the Limca
              Book of Records for the highest number of documented marriages
              online. Besides Internet, we also have a strong offline presence
              across India with over{" "}
              <span className="text-blue-600 underline">
                140+ matrimony branches!
              </span>{" "}
              BharatMatrimony is the 1st group to offer 100% mobile verified
              profiles, reinforcing the trust that members have on us. We have
              also pioneered the highly personalized matchmaking services -
              Assisted Service and EliteMatrimony. Our purpose is to build a
              better Bharat through happy marriages.
            </div>
          </div>
          <div className="w-[20%]  flex flex-col mt-14">
            <div className=" font-medium text-lg"> Help & Support</div>
            <div className="flex flex-col text-xs mt-5 leading-relaxed gap-y-2 tracking-widest font-semibold text-gray-400">
              <div className="hover:text-[#f2090b]">24x7 Live help</div>
              <div className="hover:text-[#f2090b]">Contact us</div>
              <div className="hover:text-[#f2090b] cursor-pointer" onClick={()=> navigate("/blog")}>Blog</div>
              <div className="hover:text-[#f2090b] cursor-pointer" onClick={()=> navigate("/fq")}>FAQs</div>
            </div>
            <div className=" font-medium mt-5 text-lg">Our Other Services</div>
            <div className="flex flex-col text-xs mt-5 leading-relaxed gap-y-2 tracking-widest font-semibold text-gray-400">
              <div className="hover:text-[#f2090b]">EliteMatrimony.com</div>
            </div>
            <div className=" font-medium mt-5 text-lg"> Social Initiatives</div>
            <div className="flex flex-col text-xs mt-5 leading-relaxed gap-y-2 tracking-widest font-semibold text-gray-400">
              <div className="hover:text-[#f2090b]">AbilityMatrimony.com</div>
              <div className="hover:text-[#f2090b]">Happymarriages.com</div>
            </div>
            <div className=" font-medium text-lg mt-5">
              {" "}
              Our Wedding Services
            </div>
            <div className="flex flex-col text-xs mt-5 leading-relaxed gap-y-2 tracking-widest font-semibold text-gray-400">
              <div className="hover:text-[#f2090b]">MatrimonyMandaps.com</div>
            </div>
          </div>
          <div className="w-[20%]  flex flex-col mt-14">
            <div className=" font-medium text-lg"> Information</div>
            <div className="flex flex-col  text-xs mt-5 leading-relaxed gap-y-2 tracking-widest font-semibold text-gray-400">
              <div className="hover:text-[#f2090b]">About Us</div>
              <div className="hover:text-[#f2090b]">Awards</div>
              <div className="hover:text-[#f2090b]">Milestones</div>
              <div className="hover:text-[#f2090b]">Success stories</div>
              <div className="hover:text-[#f2090b]">Careers</div>
              <div className="hover:text-[#f2090b]">Media Room</div>
              <div className="hover:text-[#f2090b]">Affiliates</div>
              <div className="hover:text-[#f2090b]">TV Commercials</div>
              <div className="hover:text-[#f2090b]">Advertise with us</div>
              <div className="hover:text-[#f2090b]">Terms & Conditions</div>
              <div className="hover:text-[#f2090b]">Privacy Policy</div>
            </div>
          </div>
          <div className="w-[20%]  flex flex-col mt-14">
            <div className=" font-medium text-lg">
              {" "}
              Related Matrimony Services
            </div>
            <div className="flex flex-col text-xs mt-5 leading-relaxed gap-y-2 tracking-widest font-semibold text-gray-400">
              <div className="hover:text-[#f2090b] cursor-pointer">HappyMarriages.com</div>
              <div className="hover:text-[#f2090b] cursor-pointer">Safe Matrimony</div>
              <div className="hover:text-[#f2090b] cursor-pointer">Matrimonial Tools</div>
              <div className="hover:text-[#f2090b] cursor-pointer">Matrimonial Sites</div>
              <div className="hover:text-[#f2090b] cursor-pointer">Hindi Matrimonials</div>
              <div className="hover:text-[#f2090b] cursor-pointer">Matrimonial Websites</div>
              <div className="hover:text-[#f2090b] cursor-pointer">
                Hindi Matrimony Branches
              </div>
              <div className="hover:text-[#f2090b] cursor-pointer">Marriage Halls</div>
              <div className="hover:text-o[#f2090b] cursor-pointer">Banquet Halls</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-24 border-t border-b py-10 m-10 flex">
        <div className="flex flex-col w-[60%] ">
            <div className="text-xs leading-relaxed  font-semibold text-gray-400 w-[70%] " >This website is strictly for matrimonial purpose only and not a dating website.</div>
            <div className="text-xs leading-relaxed  font-semibold text-gray-400 w-[70%] " >Copyright © 2025 Matrimony.com, the most trusted matrimony brand.</div>
        </div>
        <div className="w-[20%]  flex gap-x-2">
            <div><img src="https://imgs.bharatmatrimony.com/bmimgs/desktop-images/limca-book.png?v2" alt="" /></div>

            <div className="text-[60%] leading-relaxed tracking-widest font-semibold text-gray-400">
                <div>The Limca Book</div>
                <div>of records</div>
                <div>Highest No of Marriages</div>
            </div>
        </div>
        <div className="w-[20%]  flex flex-col pl-5">
            <div className=" leading-relaxed  font-semibold text-gray-500">FOLLOW US ON:</div>
            <div className="flex gap-x-4">
                <div><img src="https://imgs.bharatmatrimony.com/bmimgs/desktop-images/fb-icon.png?v2" alt="" /></div>
                <div><img src="https://imgs.bharatmatrimony.com/bmimgs/desktop-images/twitter-icon.png?v2" alt="" /></div>
                <div><img src="https://imgs.bharatmatrimony.com/bmimgs/desktop-images/instagrram-icon.png?v2" alt="" /></div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Bottom_dash;
