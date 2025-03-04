import React from "react";
import Prefrence from "./Prefrence";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";

const Body_dash = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[100%] ">
      <div className="border-t-2 border-gray-300 my-14 w-[55%] mx-auto relative z-20 ">
        <div className="flex w-[35%] h-10 border rounded-3xl absolute -top-5 left-[30%] shadow-lg bg-white   justify-around">
          <div className="border  border-[#f2090b] text-sm pt-2 text-[#f2090b] font-semibold bg-red-100 rounded-3xl text-center  w-[55%] ">
            Regular
          </div>
          <div
            onClick={() => navigate("/prime")}
            className=" text-center  w-[45%] text-sm pt-2 font-semibold"
          >
            PRIME
          </div>
        </div>
      </div>
      <div className="flex justify-center w-[100%] pb-10 px-24 gap-x-4 ">
        <div className="w-[25%]  sticky top-20  border h-fit rounded-xl shadow-sm flex flex-col">
          <div>
            <img
              className="w-14 mx-auto mt-6 rounded-full"
              src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/male-avatar-img-new.svg"
              alt=""
            />
          </div>
          <div className="text-gray-950 mt-4 font-normal text-sm text-center">
            Good Evening!
          </div>
          <div className="text-xl font-semibold text-center mt-1">
            Mohd Arfat
          </div>
          <div className="text-gray-950 mt-2  font-medium text-sm text-center">
            H14160846
          </div>
          <div className="text-gray-950 mt-4  font-semibold text-sm text-center">
            Membership: Free
          </div>
          <div className="text-black mt-2  font-normal text-sm text-center">
            Become a paid member now
          </div>
          <div
            onClick={() => navigate("/upg")}
            className="border cursor-pointer p-1 font-Doto border-[#f2090b] mt-3 rounded-3xl w-20 text-center font-semibold text-sm text-[#f2090b] mx-auto"
          >
            Upgrade
          </div>
          <div className="border flex mt-5  gap-y-5 flex-col p-5">
            <div className="flex  gap-x-3">
              <div>
                <img
                  className="w-5"
                  src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/edit-profile.svg"
                  alt=""
                />
              </div>
              <div
                onClick={() => navigate("/pro")}
                className="text-sm cursor-pointer font-medium text-gray-600"
              >
                Edit Profile
              </div>
            </div>

            <div className="flex  gap-x-3">
              <div>
                <img
                  className="w-5"
                  src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/edit-preference.svg"
                  alt=""
                />
              </div>
              <div
                onClick={() => navigate("/pre")}
                className="text-sm cursor-pointer font-medium text-gray-600"
              >
                Edit Preferences
              </div>
            </div>

            <div className="flex  gap-x-3">
              <div>
                <img
                  className="w-5"
                  src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/menu_identity.svg"
                  alt=""
                />
              </div>
              <div
                onClick={() => navigate("/ver")}
                className="text-sm cursor-pointer font-medium text-gray-600"
              >
                Verify Your Profile
              </div>
            </div>
          </div>
          <div className=" flex   gap-y-5 flex-col p-5">
            <div className="flex gap-x-3">
              <div>
                <img
                  className="w-5"
                  src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/help.svg"
                  alt=""
                />
              </div>
              <div
                className="text-sm font-medium text-gray-600 cursor-pointer"
                onClick={() => navigate("/help")}
              >
                Help
              </div>
            </div>

            <div className="flex  gap-x-3">
              <div>
                <img
                  className="w-5"
                  src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/safe-matrimony.svg"
                  alt=""
                />
              </div>
              <div
                onClick={() => navigate("/safe")}
                className="text-sm font-medium text-gray-600"
              >
                Safe Matrimony
              </div>
            </div>

            <div className="flex  gap-x-3">
              <div>
                <img
                  className="w-5"
                  src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/setting.svg"
                  alt=""
                />
              </div>
              <div
                onClick={() => navigate("/set")}
                className="text-sm font-medium text-gray-600 cursor-pointer"
              >
                Setting
              </div>
            </div>
          </div>
        </div>
        <div className="w-[75%] ">
          <div className="h-14  border rounded-lg border-[#f2090b] flex justify-around items-center">
            <div>
              <img
                src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/verify-profile-img.svg"
                alt=""
              />
            </div>
            <div>
              Your profile is pending verification! Verify now to get better
              responses
            </div>
            <div
              onClick={() => navigate("/ver")}
              className="border cursor-pointer border-[#f2090b]  rounded-2xl  text-center font-semibold text-sm w-28 h-7 pt-1 bg-[#f2090b] text-white  "
            >
              Verify Profile
            </div>
          </div>
          <div className="w-[100%] relative h-[20vh] mt-5  bg-contain bg-no-repeat  bg-[url('https://imgs.hindimatrimony.com/bmimgs/bmoffers/Monday22/desktop-my-home-banner.png')]">
            <div className="text-white text-xs left-36 absolute top-10 font-medium">
              Get a flat ₹3700 off on 3 month Gold
            </div>
            <div
              onClick={() => navigate("/upg")}
              className="border cursor-pointer absolute right-3 top-6  border-gray-500 rounded-2xl  text-center  text-sm w-32 h-8 pt-1 bg-[#ffc500]"
            >
              Upgrade Now
            </div>
            <div className="text-[50%] text-gray-200 font-medium absolute top-14 right-5">
              Offers Expires on 04 Jan 2025
            </div>
          </div>
          <Prefrence />
          <div>
            {" "}
            <div className="flex mt-8  justify-between">
              <div className="text-xl font-semibold">
                Your Daily Recommendations for 5th Jan
              </div>

              <div className="flex gap-x-2">
                <div className="text-[#f2090b] text-sm font-semibold mt-0.5">
                  See all
                </div>
                <div>
                  <ArrowForwardIosIcon className="!text-xs !text-[#f2090b]" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-4 mt-3">
              <div className=" flex flex-col">
                <div>
                  <img
                    className="w-[90%] rounded-xl"
                    src="https://h-imgs.matrimonycdn.com/photos/2024/12/03/20/H14051259_dyBim_08423_TL_MH.jpg"
                    alt=""
                  />
                </div>
                <div className="text-sm font-semibold mt-1">Shanayasheikh</div>
                <div className="text-gray-700 font-semibold text-xs">
                  22 Yrs, 5'2"
                </div>
              </div>
              <div className=" flex flex-col">
                <div>
                  <img
                    className="w-[90%] rounded-xl"
                    src="https://h-imgs.matrimonycdn.com/photos/2024/10/02/12/H13823466_ftie_29683_TL_MH.jpg"
                    alt=""
                  />
                </div>
                <div className="text-sm font-semibold mt-1">Zeenatul</div>
                <div className="text-gray-700 font-semibold text-xs">
                  22 Yrs, 5'2"
                </div>
              </div>
              <div className=" flex flex-col">
                <div>
                  <img
                    className="w-[90%] rounded-xl"
                    src="https://hamariweb.com/profiles/images/profile/6254-954.jpg"
                    alt=""
                  />
                </div>
                <div className="text-sm font-semibold mt-1">Aayna</div>
                <div className="text-gray-700 font-semibold text-xs">
                  18 Yrs, 5'2"
                </div>
              </div>
              <div className=" flex flex-col">
                <div>
                  <img
                    className="w-[90%] rounded-xl"
                    src="https://h-imgs.matrimonycdn.com/photos/2024/08/29/13/H13703328_JOhvb_1027_TL_MH.jpg"
                    alt=""
                  />
                </div>
                <div className="text-sm font-semibold mt-1">Shanayasheikh</div>
                <div className="text-gray-700 font-semibold text-xs">
                  22 Yrs, 5'2"
                </div>
              </div>
            </div>
          </div>

          <div className=" mt-16">
            <div className="text-xl font-semibold">Complete Your Profile</div>
            <div className="flex gap-2 mt-2">
              <div className="text-gray-600 text-sm">
                Complete Your Profile 40%
              </div>
              <div className="flex w-[8%] h-2.5 bg-gray-200 rounded-full  mt-1.5 dark:bg-gray-200">
                <div
                  className="flex flex-col justify-center rounded-full overflow-hidden bg-[#f2090b] dark:bg-[#f2090b]"
                  style={{ width: "40%" }}
                ></div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[url('https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/add-photo-male.png')] mt-5 w-[100%] h-[30vh] bg-cover bg-center relative">
                <div className="w-[50%] absolute top-16 text-sm font-medium right-5">
                  Your photo is the first thing that your matches look at{" "}
                </div>
                <div className="border p-1 border-[#f2090b]  rounded-3xl  text-center font-semibold text-sm absolute top-28 right-9 w-48 bg-[#f2090b] text-white">
                  Add Photo
                </div>
              </div>
              <div className="bg-[url('https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/verify-profile-with-id.png')] mt-5 w-[100%] h-[30vh] bg-cover bg-center relative">
                <div className="w-[50%] absolute top-5 font-medium right-5">
                  Get 10x more response by verifying your profile with a Govt ID
                </div>
                <div className="border p-1 border-[#f2090b]  rounded-3xl  text-center font-semibold text-sm absolute top-28 right-9 w-48 bg-[#f2090b] text-white">
                  Verify Profile With ID
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-8  justify-between">
            <div className="text-xl font-semibold">New Matches (18)</div>

            <div className="flex gap-x-2">
              <div className="text-[#f2090b] text-sm font-semibold mt-0.5">
                See all
              </div>
              <div>
                <ArrowForwardIosIcon className="!text-xs !text-[#f2090b]" />
              </div>
            </div>
          </div>
          <div className="text-gray-700 text-sm">
            Members who match your preferences and have joined in the last 30
            days
          </div>
          <div className="grid grid-cols-4 mt-3">
            <div className=" flex flex-col">
              <div>
                <img
                  className="w-[90%] rounded-xl"
                  src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/female-avatar-img-new.svg"
                  alt=""
                />
              </div>
              <div className="text-sm font-semibold mt-1">Shanayasheikh</div>
              <div className="text-gray-700 font-semibold text-xs">
                22 Yrs, 5'2"
              </div>
            </div>
            <div className=" flex flex-col">
              <div>
                <img
                  className="w-[90%] rounded-xl"
                  src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/female-avatar-img-new.svg"
                  alt=""
                />
              </div>
              <div className="text-sm font-semibold mt-1">Zeenatul</div>
              <div className="text-gray-700 font-semibold text-xs">
                22 Yrs, 5'2"
              </div>
            </div>
            <div className=" flex flex-col">
              <div>
                <img
                  className="w-[90%] rounded-xl"
                  src="https://hamariweb.com/profiles/images/profile/6254-954.jpg"
                  alt=""
                />
              </div>
              <div className="text-sm font-semibold mt-1">Aayna</div>
              <div className="text-gray-700 font-semibold text-xs">
                18 Yrs, 5'2"
              </div>
            </div>
            <div className=" flex flex-col">
              <div>
                <img
                  className="w-[90%] rounded-xl"
                  src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/female-avatar-img-new.svg"
                  alt=""
                />
              </div>
              <div className="text-sm font-semibold mt-1">Shanayasheikh</div>
              <div className="text-gray-700 font-semibold text-xs">
                22 Yrs, 5'2"
              </div>
            </div>
          </div>
          <div className=" mt-16">
            <div className="text-xl font-semibold">Enrich Your Profile</div>

            <div className="text-gray-600 text-sm">
              Add below details to let prospects know more about you and get
              higher responses
            </div>

            <div className="mt-20">
              {" "}
              {/* Card */}
              <div className="text-xl font-semibold">Discover Matches</div>
              <div className="text-gray-800 mt-2 text-sm">
                Explore profiles matching your preferences
              </div>
              <div className="grid grid-cols-4 mt-3 gap-x-5">
                <div className="bg-[url('https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/card-bg-education.png')] bg-cover bg-center h-[20vh] rounded-2xl relative">
                  <div className="absolute top-20 left-3 text-white text-sm font-semibold ">
                    {" "}
                    Education (105)
                  </div>
                </div>
                <div className="bg-[url('https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/card-bg-profession-new.png')] bg-cover bg-center h-[20vh] rounded-2xl relative">
                  <div className="absolute top-20 left-3 text-white text-sm font-semibold ">
                    {" "}
                    Profession (122)
                  </div>
                </div>
                <div className="bg-[url('https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/card-bg-byself.png')] bg-cover bg-center h-[20vh] rounded-2xl relative">
                  <div className="absolute top-20 left-3 text-white text-sm font-semibold ">
                    {" "}
                    Education (105)
                  </div>
                </div>
                <div className="bg-[url('https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/discover-card-profile-with-photos-male.png')] bg-cover bg-center h-[20vh] rounded-2xl relative">
                  <div className="absolute top-20 left-3 text-white text-sm font-semibold ">
                    {" "}
                    Education (105)
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[url('https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/add-photo-male.png')] mt-5 w-[100%] h-[30vh] bg-cover bg-center relative">
                <div className="w-[50%] absolute top-16 text-sm font-medium right-5">
                  Your photo is the first thing that your matches look at{" "}
                </div>
                <div className="border p-1 border-[#f2090b] rounded-3xl  text-center font-semibold text-sm absolute top-28 right-9 w-48 bg-[#f2090b] text-white">
                  Add More Photo
                </div>
              </div>
              <div className="bg-[url('https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/add-hobbies.png')] mt-5 w-[100%] h-[30vh] bg-cover bg-center relative">
                <div className="w-[60%] absolute top-9 font-medium right-5">
                  Add your hobbies and interests to discover matches with
                  similar interests
                </div>
                <div className="border p-1 border-[#f2090b]  rounded-3xl  text-center font-semibold text-sm absolute top-28 right-9 w-48 bg-[#f2090b] text-white">
                  Add Hobbies
                </div>
              </div>
            </div>
            <div className="mt-20">
              {" "}
              {/* Card */}
              <div className="text-xl font-semibold">
                Explore Bharatmatrimony
              </div>
              <div className="grid grid-cols-7 w-[100%] mt-3 gap-x-5">
                <div className="flex flex-col   w-[85%]">
                  <div className=" rounded-md bg-gray-100 p-5  ">
                    <img
                      className=""
                      src="https://stageimgs.bharatmatrimony.com/webapp-assets/revamp-images/icon-explore-assisted.svg"
                      alt=""
                    />
                  </div>
                  <div className="text-xs font-semibold mx-auto mt-3">
                    Assisted
                  </div>
                  <div className="text-xs font-semibold mx-auto">Service</div>
                </div>
                <div className="flex flex-col   w-[85%]">
                  <div className=" rounded-md bg-pink-100 p-5  ">
                    <img
                      className=""
                      src="https://stageimgs.bharatmatrimony.com/webapp-assets/revamp-images/icon-explore-premium.svg"
                      alt=""
                    />
                  </div>
                  <div className="text-xs font-semibold mx-auto mt-3">
                    Premium
                  </div>
                  <div className="text-xs font-semibold mx-auto">
                    Membership
                  </div>
                </div>
                <div className="flex flex-col   w-[85%]">
                  <div className=" rounded-md bg-green-50 p-5  ">
                    <img
                      className="mx-auto"
                      src="https://stageimgs.bharatmatrimony.com/webapp-assets/revamp-images/icon-explore-safety.svg"
                      alt=""
                    />
                  </div>
                  <div className="text-xs font-semibold mx-auto mt-3">
                    Safety &
                  </div>
                  <div className="text-xs font-semibold mx-auto">Privacy</div>
                </div>
                <div className="flex flex-col   w-[85%]">
                  <div className=" rounded-md bg-purple-100 p-5  ">
                    <img
                      className="mx-auto"
                      src="https://stageimgs.bharatmatrimony.com/webapp-assets/revamp-images/icon-explore-retail.svg"
                      alt=""
                    />
                  </div>
                  <div className="text-xs font-semibold mx-auto mt-3">
                    Retail
                  </div>
                  <div className="text-xs font-semibold mx-auto">Store</div>
                </div>
                <div className="flex flex-col   w-[85%]">
                  <div className=" rounded-md bg-[#e0e6ea] p-5  ">
                    <img
                      className="mx-auto"
                      src="https://stageimgs.bharatmatrimony.com/webapp-assets/revamp-images/icon-explore-mandap.svg"
                      alt=""
                    />
                  </div>
                  <div className="text-xs font-semibold mx-auto mt-3">
                    Mandap.com
                  </div>
                </div>
                <div className="flex flex-col   w-[85%]">
                  <div className=" rounded-md bg-gray-100 p-5  ">
                    <img
                      className=""
                      src="https://stageimgs.bharatmatrimony.com/webapp-assets/revamp-images/icon-explore-wedding.svg"
                      alt=""
                    />
                  </div>
                  <div className="text-xs font-semibold mx-auto mt-3">
                    Wedding
                  </div>
                  <div className="text-xs font-semibold mx-auto">
                    Bazaar.com
                  </div>
                </div>
                <div className="flex flex-col   w-[85%]">
                  <div className=" rounded-md bg-green-100 p-5  ">
                    <img
                      className=""
                      src="https://stageimgs.bharatmatrimony.com/webapp-assets/revamp-images/icon-explore-help.svg"
                      alt=""
                    />
                  </div>
                  <div className="text-xs font-semibold mx-auto mt-3">
                    Help &
                  </div>
                  <div className="text-xs font-semibold mx-auto">Support</div>
                </div>
              </div>
              <div className=" mt-16">
                <div className="bg-[url('https://imgs.bharatmatrimony.com/bmimgs/desktop-images/revamp_banners/assisted_others.png')] mt-5 w-[100%] h-[25vh] bg-cover bg-center relative">
                  <div className="w-[50%] absolute top-4  text-lg font-medium left-40">
                    Need help to find a life partner?{" "}
                  </div>
                  <div className="w-[70%] absolute top-12  left-40">
                    Get personalised service from a dedicated Relationship
                    Manager
                  </div>
                  <div className="border p-2 border-[#f2090b]  rounded-3xl  text-center font-semibold text-sm absolute top-20 left-40 w-28 bg-[#f2090b] text-white">
                    Add Photo
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body_dash;
