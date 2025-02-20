import React from "react";
import HeaderDash from "../Dash_Board/HeaderDash";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaChevronRight } from "react-icons/fa";
import Bottom_dash from "../Dash_Board/Bottom_dash";

const Preview = () => {
  return (
    <div>
      <HeaderDash />
      <div className="mx-20 border rounded-xl my-10 shadow-xl">
        <div className="flex  m-4 gap-x-7 ">
          <div className="relative ">
            <img
              className="rounded-lg"
              src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/male-avatar-img-new.svg"
              alt=""
            />
            <div>
              <img
                className="-top-1 -left-1 absolute"
                src="https://imgs.bharatmatrimony.com/bmimgs/desktop-images/newly-joined-desktop.svg"
                alt=""
              />
            </div>
            <div className="absolute text-[65%] w-[10%] -rotate-45 font-semibold top-1">
              NEWLY JOINED
            </div>
          </div>
          <div className="flex flex-col  mt-8">
            <div className="text-2xl font-semibold">Mohd Arfat</div>
            <div className="flex gap-x-1 mt-1">
              <div className="text-gray-500 text-sm">H14160846 | </div>
              <div className="bg-green-400 mt-1.5  w-3 h-3 rounded-full"></div>
              <div className="text-gray-500 text-sm">Online</div>
            </div>
            <div className="flex mt-2 gap-x-2">
              <div>
                <img
                  className="mt-1"
                  src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/vp_card_icon_age.svg"
                  alt=""
                />
              </div>
              <div>22 Yrs, 5'3"</div>
            </div>
            <div className="flex mt-2 gap-x-2">
              <div>
                <img
                  className="mt-1"
                  src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/vp_card_icon_caste.svg"
                  alt=""
                />
              </div>
              <div>Muslim - Sheikh</div>
            </div>
            <div className="flex mt-2 gap-x-2">
              <div>
                <img
                  className="mt-1"
                  src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/vp_card_icon_education.svg"
                  alt=""
                />
              </div>
              <div>BCA , Software Professional</div>
            </div>
            <div className="flex mt-2 gap-x-2">
              <div>
                <img
                  className="mt-1"
                  src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/vp_card_icon_location.svg"
                  alt=""
                />
              </div>
              <div>Lucknow, Uttar Pradesh</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-20  flex rounded-xl gap-x-5 my-10 ">
        <div className="border  w-[75%] shadow-xl">
          <div className="py-10 px-5">
            <div className="text-xl font-semibold">About Mohd Arfat</div>
            <div className="mt-3 w-[90%]">
              I am currently working in the private sector as a software
              professional, after having completed my bachelor's degree. I come
              from a middle class family with traditional family values. We
              belong to joint family currently living in Lucknow.
            </div>
            <div className="flex gap-x-1 mt-5">
              <div className="text-xl font-semibold">
                Profile verification - 1/5
              </div>
              <div>
                <IoIosInformationCircleOutline className="mt-2 text-gray-500" />
              </div>
            </div>
            <div className="flex mt-4">
              <div className="flex flex-col">
                <div>
                  <img
                    className="w-12"
                    src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/profile-verification-mobile-verified.svg"
                    alt=""
                  />
                </div>
                <div className="text-xs w-[10%]">Mobile verified</div>
              </div>
              <div className="flex flex-col  w-[13%] items-center">
                <div>
                  <img
                    className="w-12"
                    src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/profile-verification-govid.svg"
                    alt=""
                  />
                </div>
                <div className="text-xs w-[60%] text-gray-500">
                  Govt. ID not verified
                </div>
              </div>
              <div className="flex flex-col  w-[13%] items-center">
                <div>
                  <img
                    className="w-12"
                    src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/profile-verification-photo.svg"
                    alt=""
                  />
                </div>
                <div className="text-xs w-[60%] text-gray-500">
                  Photo not verified
                </div>
              </div>
              <div className="flex flex-col  w-[13%] items-center">
                <div>
                  <img
                    className="w-12"
                    src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/profile-verification-education.svg"
                    alt=""
                  />
                </div>
                <div className="text-xs w-[60%] text-gray-500">
                  Education not verified
                </div>
              </div>
              <div className="flex flex-col  w-[13%] items-center">
                <div>
                  <img
                    className="w-12"
                    src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/profile-verification-income.svg"
                    alt=""
                  />
                </div>
                <div className="text-xs w-[60%] text-gray-500">
                  Income not verified
                </div>
              </div>
            </div>
            <div className="text-xl font-semibold mt-10">His Basic Details</div>
            <div className="flex  my-8">
              <div className="flex  w-[25%] justify-start items-center gap-x-4">
                <div>
                  <img
                    src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/vp_icon_age.svg"
                    alt=""
                  />
                </div>
                <div className="text-sm">Age</div>
              </div>
              <div className="font-semibold">22 Years</div>
            </div>
            <div className="flex  my-8">
              <div className="flex  w-[25%] justify-start items-center gap-x-4">
                <div>
                  <img
                    src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/vp_icon_physique.svg"
                    alt=""
                  />
                </div>
                <div className="text-sm">Physique</div>
              </div>
              <div className="font-semibold">5'3" Normal</div>
            </div>
            <div className="flex  my-8">
              <div className="flex  w-[25%] justify-start items-center gap-x-4">
                <div>
                  <img
                    src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/vp_icon_lang.svg"
                    alt=""
                  />
                </div>
                <div className="text-sm">Spoken Languages</div>
              </div>
              <div className="font-semibold">Hindi (Mother Tongue)</div>
            </div>
            <div className="flex  my-8">
              <div className="flex  w-[25%] justify-start items-center gap-x-4">
                <div>
                  <img
                    src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/vp_icon_profile_created.svg"
                    alt=""
                  />
                </div>
                <div className="text-sm">Profile Created By</div>
              </div>
              <div className="font-semibold">Self</div>
            </div>
            <div className="flex  my-8">
              <div className="flex  w-[25%] justify-start items-center gap-x-4">
                <div>
                  <img
                    src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/vp_icon_marital.svg"
                    alt=""
                  />
                </div>
                <div className="text-sm">Marital Status</div>
              </div>
              <div className="font-semibold">Never Married</div>
            </div>
            <div className="flex  my-8">
              <div className="flex  w-[25%] justify-start items-center gap-x-4">
                <div>
                  <img
                    src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/vp_icon_livingin.svg"
                    alt=""
                  />
                </div>
                <div className="text-sm">Lives In</div>
              </div>
              <div className="font-semibold">Lucknow, Uttar Pradesh</div>
            </div>
            <div className="flex  my-8">
              <div className="flex  w-[25%] justify-start items-center gap-x-4">
                <div>
                  <img
                    src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/vp_icon_citizenship.svg"
                    alt=""
                  />
                </div>
                <div className="text-sm">Citizenship</div>
              </div>
              <div className="font-semibold">Indian Citizen</div>
            </div>
            <div className="text-xl font-semibold mt-10">
              His Religious Details
            </div>
            <div className="flex  my-8">
              <div className="flex  w-[25%] justify-start items-center gap-x-4">
                <div>
                  <img
                    src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/vp_icon_religion.svg"
                    alt=""
                  />
                </div>
                <div className="text-sm">Religion</div>
              </div>
              <div className="font-semibold">Muslim - Sunni</div>
            </div>
            <div className="flex  my-8">
              <div className="flex  w-[25%] justify-start items-center gap-x-4">
                <div>
                  <img
                    src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/vp_icon_caste.svg"
                    alt=""
                  />
                </div>
                <div className="text-sm">Caste</div>
              </div>
              <div className="font-semibold">Muslim - Sheikh</div>
            </div>
            <div className="flex  my-8">
              <div className="flex  w-[25%] justify-start items-center gap-x-4">
                <div>
                  <img
                    src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/vp_icon_star.svg"
                    alt=""
                  />
                </div>
                <div className="text-sm">Star/Raasi</div>
              </div>
              <div className="font-semibold">Not specified</div>
            </div>
            <div className="flex  my-8">
              <div className="flex  w-[25%] justify-start items-center gap-x-4">
                <div>
                  <img
                    src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/vp_icon_kundli.svg"
                    alt=""
                  />
                </div>
                <div className="text-sm">Horoscope</div>
              </div>
              <div className="font-semibold">Not specified</div>
            </div>
            <div className="text-xl font-semibold mt-10">
              His Professional Details
            </div>
            <div className="flex  my-8">
              <div className="flex  w-[25%] justify-start items-center gap-x-4">
                <div>
                  <img
                    src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/vp_icon_employment.svg"
                    alt=""
                  />
                </div>
                <div className="text-sm">Employment</div>
              </div>
              <div className="font-semibold">Works in Private Sector</div>
            </div>
            <div className="flex  my-8">
              <div className="flex  w-[25%] justify-start items-center gap-x-4">
                <div>
                  <img
                    src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/vp_icon_income.svg"
                    alt=""
                  />
                </div>
                <div className="text-sm">Income</div>
              </div>
              <div className="font-semibold">₹4L-5L per annum</div>
            </div>
            <div className="flex  my-8">
              <div className="flex  w-[25%] justify-start items-center gap-x-4">
                <div>
                  <img
                    src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/vp_icon_education.svg"
                    alt=""
                  />
                </div>
                <div className="text-sm">Education</div>
              </div>
              <div className="font-semibold">BCA</div>
            </div>
            <div className="flex  my-8">
              <div className="flex  w-[25%] justify-start items-center gap-x-4">
                <div>
                  <img
                    src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/vp_icon_occupation.svg"
                    alt=""
                  />
                </div>
                <div className="text-sm">Occupation</div>
              </div>
              <div className="font-semibold">Software Professional</div>
            </div>
            <div className="text-xl font-semibold mt-10">About His Family</div>
            <div className="text-xl font-semibold mt-10">
              Mohd Arfat's Partner Preferences
            </div>
            <div className="text-lg font-semibold mt-10">
              His Basic Preferences
            </div>
            <div className="flex  my-8">
              <div className="flex  w-[25%] justify-start border items-center ">
                <div className="text-sm">Preferred Bride's Age</div>
              </div>
              <div className="font-semibold">18-22 yrs</div>
            </div>
            <div className="flex  my-8">
              <div className="flex  w-[25%] justify-start items-center gap-x-4">
                <div className="text-sm">Preferred Height</div>
              </div>
              <div className="font-semibold">4'6" - 5'3"</div>
            </div>
            <div className="flex  my-8">
              <div className="flex  w-[25%] justify-start items-center gap-x-4">
                <div className="text-sm">Preferred Marital Status</div>
              </div>
              <div className="font-semibold">Never Married</div>
            </div>
            <div className="flex  my-8">
              <div className="flex  w-[25%] justify-start items-center gap-x-4">
                <div className="text-sm">Preferred Mother Tongue</div>
              </div>
              <div className="font-semibold w-[30%]">
                Awadhi, Bhojpuri, Brij, Bihari, Chatisgarhi, Dogri, Garhwali,
                Haryanvi, Himachali/Pahari, Hindi, Kanauji, Kashmiri, Kumaoni,
                Ladacki, Magahi, Maithili, Marwari, Nepali, Rajasthani,
                Sanskrit, Angika, Bagri Rajasthani, Dhundhari/Jaipuri,
                Gujari/Gojari, Harauti, Lambadi, Malvi, Mewari, Mewati/Ahirwati,
                Nimadi, Shekhawati, Wagdi
              </div>
            </div>
            <div className="flex  my-8">
              <div className="flex  w-[25%] justify-start items-center gap-x-4">
                <div className="text-sm">Preferred Physical Status</div>
              </div>
              <div className="font-semibold">Normal</div>
            </div>
            <div className="flex  my-8">
              <div className="flex  w-[25%] justify-start items-center gap-x-4">
                <div className="text-sm">Preferred Eating Habits</div>
              </div>
              <div className="font-semibold">Doesn't Matter</div>
            </div>
            <div className="flex  my-8">
              <div className="flex  w-[25%] justify-start items-center gap-x-4">
                <div className="text-sm">Preferred Smoking Habits</div>
              </div>
              <div className="font-semibold">Doesn't Matter</div>
            </div>
            <div className="flex  my-8">
              <div className="flex  w-[25%] justify-start items-center gap-x-4">
                <div className="text-sm">Preferred Drinking Habits</div>
              </div>
              <div className="font-semibold">Doesn't Matter</div>
            </div>
            <div className="text-lg font-semibold mt-10">
              His Professional Preferences
            </div>
            <div className="flex  my-8">
              <div className="flex  w-[25%] justify-start items-center gap-x-4">
                <div className="text-sm">Preferred Education</div>
              </div>
              <div className="font-semibold w-[30%]">
                MD / MS (Medical), MDS,MBBS, BDS,Ph.D.,MBA / PGDM, MBA, PGDM,
                MHRM (Human Resource Management), MFM (Financial Management),
                Other Master Degree in Management,CA, ICWA, CS, CFA (Chartered
                Financial Analyst),IAS / IPS/ IRS / IES / IFS, IAS, IPS, IRS,
                IES, IFS,Aviation Degree,Other Bachelor Degree in Medicine,Other
                Master Degree in Medicine,MCA / PGDCA, ME / M.Tech.,
                M.S.(Engg.), M.Arch., MCA, PGDCA, ME, M.Tech., M.Sc. IT /
                Computer Science,BE / B.Tech., BCA, Aeronautical Engineering,
                B.Arch, BE, B.Tech., B.Sc IT/ Computer Science
              </div>
            </div>
            <div className="flex  my-8">
              <div className="flex  w-[25%] justify-start items-center gap-x-4">
                <div className="text-sm">Preferred Employment Type</div>
              </div>
              <div className="font-semibold">Any</div>
            </div>
            <div className="flex  my-8">
              <div className="flex  w-[25%] justify-start items-center gap-x-4">
                <div className="text-sm">Preferred Occupation</div>
              </div>
              <div className="font-semibold">Any</div>
            </div>
            <div className="flex  my-8">
              <div className="flex  w-[25%] justify-start items-center gap-x-4">
                <div className="text-sm">Preferred Annual Income</div>
              </div>
              <div className="font-semibold w-[30%]">Any</div>
            </div>
          </div>
          <div className="bg-[#FCECF0] py-9 my-2 px-5">
            <div className="text-xl font-semibold">
              Plan your wedding with{" "}
              <span className="text-[#FF325E]">WeddingBazaar.com!</span>
            </div>
            <div className="mt-4">
              Weddingbazaar.com from Matrimony.com group is the India's largest
              wedding services marketplace with 2 lakh+ trusted vendors!
            </div>
            <div className="mt-5 flex gap-x-5 justify-center">
              <div className="flex flex-col">
                <div>
                  <img
                    src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/venues_dt.png"
                    alt=""
                  />
                </div>
                <div className="text-sm font-semibold">Venues</div>
              </div>
              <div className="flex flex-col">
                <div>
                  <img
                    src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/photographers_dt.png"
                    alt=""
                  />
                </div>
                <div className="text-sm font-semibold">Photographers</div>
              </div>
              <div className="flex flex-col">
                <div>
                  <img
                    src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/makeupartists_dt.png"
                    alt=""
                  />
                </div>
                <div className="text-sm">Makeup Artists</div>
              </div>
              <div className="flex flex-col">
                <div>
                  <img
                    src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/planners_dt.png"
                    alt=""
                  />
                </div>
                <div className="text-sm">Planner</div>
              </div>
              <div className="flex flex-col">
                <div>
                  <img
                    src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/decorators_dt.png"
                    alt=""
                  />
                </div>
                <div className="text-sm">Decorators</div>
              </div>
            </div>
            <div className="flex bg-[#FF325E] w-[15%] items-center p-1.5 justify-center gap-x-2 rounded-md mt-5">
              <div className="text-white text-xs">Explore Now</div>
              <div>
                <FaChevronRight className="text-white text-xs" />
              </div>
            </div>
          </div>
        </div>
        <div className=" w-[25%] flex flex-col gap-y-3  ">
          <div className="bg-blue-100 rounded-xl ">
            <div className="text-lg font-semibold mt-9 w-[80%] text-center mx-auto">
              140+ matrimony branches across India
            </div>
            <div className="mx-auto text-center text-sm mt-5">
              To serve you better
            </div>
            <div className=" ">
              <img
                className="mx-auto my-5"
                src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/outlet-placeholder.svg"
                alt=""
              />
            </div>
            <div className="text-center text-sm  w-[80%] font-semibold mx-auto">
              Visit any of our 140+ matrimony Branches
            </div>
            <div className="p-1 bg-orange-500 rounded-xl w-[50%] mx-auto text-center text-sm text-white my-5 font-semibold">
              View Branch
            </div>
          </div>
          <div className="bg-orange-50 rounded-xl ">
            <div className="text-lg font-semibold mt-9 w-[80%] text-center mx-auto">
              Millions of happy marriages
            </div>
            <div className="mx-auto text-center text-sm mt-5">
              Matched Through BharatMatrimony
            </div>
            <div className=" ">
              <img
                className="mx-auto my-5"
                src="https://bh-imgs.matrimonycdn.com/successphoto/hindi/1/2/H12162843_SUCCESS_TS.jpg"
                alt=""
              />
            </div>
            <div className="text-center text-sm   font-semibold mx-auto">
              Shubham Sharma & Sonali Sharma
            </div>
            <div className="p-1 bg-orange-600 rounded-2xl w-[50%] mx-auto text-center text-sm text-white my-5 font-semibold">
              Read Their Story
            </div>
          </div>
        </div>
      </div>
      <Bottom_dash />
    </div>
  );
};

export default Preview;
