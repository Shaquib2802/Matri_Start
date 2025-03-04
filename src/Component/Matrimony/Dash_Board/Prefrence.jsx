import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeartCircleExclamation,
  faHeartCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import { Get_Matched_Pref } from "../../Service/Get_pref";
import { useMutation } from "@tanstack/react-query";
import { Req_Sent } from "../../Service/SignUP";
import toast, { Toaster } from "react-hot-toast";

const Prefrence = () => {
  const [data, setData] = useState([]);
  const [likedItems, setLikedItems] = useState({});
  const navigate = useNavigate();

  const { mutate: Chat } = useMutation({
    mutationFn: Req_Sent,

    onSuccess: (response, variables) => {
      console.log("Response>>", response);
      console.log("Status:::", response?.status);
      if (response?.status === 201) {
        console.log("Toastify");
        toast.success("Chat request sent");
        setLikedItems((prev) => ({
          ...prev,
          [variables.receiver_profile_id]: true,
        }));
      }
    },

    onError: (error) => {
      console.error("Error sending request:", error);
    },
  });

  console.log("React Query:", Chat);

  const DataApi = async () => {
    try {
      const response = await Get_Matched_Pref();
      console.log("API Response:", response);
      if (response?.data?.data) {
        setData(response?.data?.data);
        console.log(">>>>>", response?.data);
      } else {
        console.error("Data is not an array", response?.data?.data);
        setData([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    DataApi();
  }, []);

  const handleLikeClick = (receiver_profile_id) => {
    console.log("Sending Request:", { receiver_profile_id });
    Chat({ receiver_profile_id });
  };

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      {" "}
      <div>
        {" "}
        <div className="flex mt-8  justify-between">
          <div className="text-xl font-semibold">All Matches (271)</div>

          <div className="flex gap-x-2">
            <div className="text-[#f2090b] text-sm font-semibold mt-0.5">
              See all
            </div>
            <div>
              <ArrowForwardIosIcon className="!text-xs !text-[#f2090b]" />
            </div>
          </div>
        </div>
        <div className="text-gray-800 mt-2 text-sm">
          Members who match your partner preferences
        </div>
        <div className="slider-container gap-x-2">
          <Slider {...settings}>
            {Array.isArray(data) &&
              data.map((item, index) => (
                <div key={index}>
                  <div
                    className=" flex flex-col  cursor-pointer  "
                    onClick={() => {
                      navigate("/det", { state: { data: item } });
                    }}
                  >
                    <div>
                      <img
                        className="w-[90%] border-2 mx-auto rounded-xl"
                        src={`http://cbadmin.aarasocial.com/${item?.profile_picture}`}
                        alt="Profile"
                      />
                    </div>
                    <div className="flex justify-between border w-[90%] mx-auto">
                      <div>
                        <div className="text-sm ml-3 font-semibold mt-1">
                          {item.user_name}
                        </div>
                        <div className="text-gray-700 ml-3 font-semibold text-xs">
                          {item.age} Yrs, {item.height}"
                        </div>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          console.log("Clicked ID:", item.id);
                          handleLikeClick(item.id);
                        }}
                      >
                        <FontAwesomeIcon
                          icon={
                            likedItems[item.id]
                              ? faHeartCircleExclamation
                              : faHeartCirclePlus
                          }
                          className="text-xl mt-2 text-pink-500 hover:text-red-700"
                        />
                      </button>
                    </div>
                  </div>
                  {/*    <div className=" flex flex-col">
            <div>
              <img
                className="w-[90%] rounded-xl"
                src="https://h-imgs.matrimonycdn.com/photos/2024/06/23/21/H13492567_rQzR_361_TL_MH.jpg"
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
                src="https://h-imgs.matrimonycdn.com/photos/2024/09/24/11/H13795864_vhfjJ_69027_TL_MH.jpg"
                alt=""
              />
            </div>
            <div className="text-sm font-semibold mt-1">
              Shanayasheikh
            </div>
            <div className="text-gray-700 font-semibold text-xs">
              22 Yrs, 5'2"
            </div>
          </div> */}
                </div>
              ))}
          </Slider>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Prefrence;
