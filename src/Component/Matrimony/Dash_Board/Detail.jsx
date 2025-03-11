import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import React, { useEffect, useState } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import { useLocation, useNavigate } from "react-router-dom";
import Bottom_dash from "./Bottom_dash";
import HeaderDash from "./HeaderDash";
import { get_Visit } from "../../Service/Get_pref";

const Detail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  console.log("ID >>>>", state?.data?.id);

  useEffect(() => {
    const checkProfileVisits = async () => {
      const profile_id = state?.data?.id;
      try {
        console.log(" Sending Profile ID:", profile_id);
        const response = await get_Visit(profile_id);
        console.log("Profile Visit API Response:", response);

        if (
          response?.data?.message ===
          "You have already visited a profile. Please buy a plan to visit more profiles."
        ) {
          navigate("/upg");
        } else {
          console.log("Profile visit is allowed.");
        }
      } catch (error) {
        console.error("Error fetching profile visit data:", error);
      }
    };

    checkProfileVisits();
  }, [state, navigate]);
  return (
    <div className="bg-gray-50">
      <HeaderDash />
      <div className="border w-[85%] p-5 shadow-lg mx-auto flex bg-white my-10 rounded-xl">
        <div className="w-[33%] ">
          <div>
            <img
              className="rounded-xl "
              src={`http://192.168.1.188:8098/${state?.data?.profile_picture}`}
              alt=""
            />
          </div>
        </div>
        <div className="w-[67%] p-5  ">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-semibold">
              {state?.data?.user_name}
            </div>
            <div>
              <SlOptionsVertical />
            </div>
          </div>
          <div className="flex justify-between ">
            <div className="text-sm font-semibold mt-2 text-gray-500">
              H13866238 | Last seen few hour ago
            </div>
            <div className="flex gap-x-3 items-center mt-2">
              <div>
                <LocalPhoneIcon className="text-red-600 text-xl " />
              </div>
              <div>
                <WhatsAppIcon className="bg-green-400 text-white  !text-3xl rounded-full p-1" />
              </div>
            </div>
          </div>
          <div className="flex mt-3 items-center gap-x-2">
            <div>
              <img
                src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/vp_card_icon_age.svg"
                alt=""
              />
            </div>
            <div className="text-gray-600 font-semibold">
              {state?.data.age} Yrs, 5'3"
            </div>
          </div>
          <div className="flex mt-2 items-center gap-x-2">
            <div>
              <img
                src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/vp_card_icon_caste.svg"
                alt=""
              />
            </div>
            <div className="text-gray-600 font-semibold">Muslim - Pathan</div>
          </div>
          <div className="flex mt-2 items-center gap-x-2">
            <div>
              <img
                src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/vp_card_icon_education.svg"
                alt=""
              />
            </div>
            <div className="text-gray-600 font-semibold">
              B.Sc. , Event Management Professional
            </div>
          </div>
          <div className="flex mt-2 items-center gap-x-2">
            <div>
              <img
                src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/vp_card_icon_location.svg"
                alt=""
              />
            </div>
            <div className="text-gray-600 font-semibold">
              Kanpur, Uttar Pradesh
            </div>
          </div>
        </div>
      </div>
      <div className="border rounded-xl shadow-lg w-[85%] mx-auto py-10 px-7">
        <div className="text-xl font-semibold">
          About {state?.data.user_name}
        </div>
        <div className="mt-2">
          My sister is a business person with a Bachelor's degree currently
          living in Kanpur.
        </div>
        <div className="text-xl font-semibold mt-3">Her Basic Details</div>
        <div className="flex flex-col gap-y-7 mt-3">
          <div className="flex gap-x-44   justify-start items-center">
            <div className="flex  items-center gap-x-3 ">
              <div>
                <img
                  src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/vp_icon_age.svg"
                  alt=""
                />
              </div>
              <div className="text-sm font-semibold text-gray-700">Age</div>
            </div>
            <div className="font-semibold">
              {state?.data.age} Years and 8 months
            </div>
          </div>
          <div className="flex   gap-x-36   justify-start  items-center">
            <div className="flex border items-center gap-x-3 ">
              <div>
                <img
                  src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/vp_icon_physique.svg"
                  alt=""
                />
              </div>
              <div className="text-sm font-semibold text-gray-700">
                Physique{" "}
              </div>
            </div>
            <div className="font-semibold">{state?.data.height}" | Normal</div>
          </div>
          <div className="flex  gap-x-20   justify-start items-center">
            <div className="flex  items-center gap-x-3 ">
              <div>
                <img
                  src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/vp_icon_lang.svg"
                  alt=""
                />
              </div>
              <div className="text-sm font-semibold text-gray-700">
                Spoken Languages
              </div>
            </div>
            <div className="font-semibold">Hindi (Mother Tongue), English</div>
          </div>
          <div className="flex gap-x-28   justify-start items-center">
            <div className="flex  items-center gap-x-3 ">
              <div>
                <img
                  src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/vp_icon_marital.svg"
                  alt=""
                />
              </div>
              <div className="text-sm font-semibold text-gray-700">
                Marital Status
              </div>
            </div>
            <div className="font-semibold">{state?.data?.marital_status}</div>
          </div>
          <div className="flex  gap-x-36   justify-start items-center">
            <div className="flex  items-center gap-x-3 ">
              <div>
                <img
                  src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/vp_icon_livingin.svg"
                  alt=""
                />
              </div>
              <div className="text-sm font-semibold text-gray-700">
                Lives In
              </div>
            </div>
            <div className="font-semibold">
              {state?.data?.address}, Uttar Pradesh
            </div>
          </div>
          <div className="flex   gap-x-32   justify-start items-center">
            <div className="flex  items-center gap-x-3 ">
              <div>
                <img
                  src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/vp_icon_citizenship.svg"
                  alt=""
                />
              </div>
              <div className="text-sm font-semibold text-gray-700">
                Citizenship
              </div>
            </div>
            <div className="font-semibold">Indian Citizen</div>
          </div>
          <div className="flex    gap-x-32   justify-start items-center">
            <div className="flex  items-center gap-x-3 ">
              <div>
                <img
                  src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/vp_icon_physique.svg"
                  alt=""
                />
              </div>
              <div className="text-sm font-semibold text-gray-700">
                Profession
              </div>
            </div>
            <div className="font-semibold">{state?.data?.profession}</div>
          </div>
          <div className="flex   gap-x-40   justify-start  items-center">
            <div className="flex  items-center gap-x-3 ">
              <div>
                <img
                  src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/vp_icon_physique.svg"
                  alt=""
                />
              </div>
              <div className="text-sm font-semibold text-gray-700">Email</div>
            </div>
            <div className="font-semibold">{state?.data?.email}</div>
          </div>
          <div className="flex gap-x-40   justify-start items-center">
            <div className="flex  items-center gap-x-3 ">
              <div>
                <img
                  src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/vp_icon_physique.svg"
                  alt=""
                />
              </div>
              <div className="text-sm font-semibold text-gray-700">Salary</div>
            </div>
            <div className="font-semibold">{state?.data?.income}</div>
          </div>
        </div>
      </div>
      <Bottom_dash />
    </div>
  );
};

export default Detail;
