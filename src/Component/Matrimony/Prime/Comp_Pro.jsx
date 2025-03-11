import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import "slick-carousel/slick/slick-theme.css";
const Comp_Pro = () => {
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <button onClick={onClick} className="">
        {" "}
        <IoIosArrowBack className="absolute !left-0 !top-[48%] rounded-r-xl bg-white !p-1 !font-bold !text-3xl " />
      </button>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <button className="" onClick={onClick}>
        {" "}
        <IoIosArrowForward className="absolute !right-0 top-[48%] z-30 rounded-r-xl bg-white !p-1 !font-bold !text-3xl " />
      </button>
    );
  }
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
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
      <div className="text-2xl font-semibold ">Complete Your Profile</div>
      <div className="flex gap-2 mt-2">
        <div className="text-gray-800 text-sm">Complete Your Profile 40%</div>
        <div className="flex w-[8%] h-2.5 bg-gray-200 rounded-full  mt-1.5 dark:bg-gray-200">
          <div
            className="flex flex-col justify-center rounded-full overflow-hidden bg-green-800 dark:bg-green-800"
            style={{ width: "75%" }}
          ></div>
        </div>
      </div>

      <div className="">
        <div className="slider-container ">
          <Slider {...settings} className="">
            <div className="px-1">
              <div className="bg-[url('https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/dashboard-revamp/pcs-bg-add-horoscope.png')]  rounded-xl relative mt-5 w-[100%] h-[30vh] bg-cover bg-center ">
                <div className="">
                  <img
                    className="absolute top-9 left-9"
                    src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/dashboard-revamp/pcs-icon-add-horoscope.svg"
                    alt=""
                  />
                </div>
                <div className="w-[50%] absolute  top-8 text-center  font-medium right-7">
                  View horoscope compatible matches by adding your birth details
                </div>
                <div className="border p-1 border-[#4E1A55]  rounded-3xl  text-center font-semibold text-sm absolute top-28 right-9 w-48 bg-[#4E1A55] text-white">
                  Generate Horoscope
                </div>
              </div>
            </div>
            <div className="px-1">
              <div className="bg-[url('https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/dashboard-revamp/pcs-bg-add-institution-details.png')] rounded-xl relative mt-5 w-[100%] h-[30vh] bg-cover bg-center ">
                <div className="">
                  <img
                    className="absolute top-9 left-9"
                    src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/dashboard-revamp/pcs-icon-add-institution-details.svg"
                    alt=""
                  />
                </div>
                <div className="w-[50%] absolute  top-8 text-center  font-medium right-7">
                  Let matches know more about your educational background
                </div>
                <div className="border p-1 border-[#4E1A55]  rounded-3xl  text-center font-semibold text-sm absolute top-28 right-9 w-48 bg-[#4E1A55] text-white">
                  Add institution details
                </div>
              </div>
            </div>
            <div className="px-1">
              <div className="bg-[url('https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/dashboard-revamp/pcs-bg-add-organization.png')] rounded-xl relative mt-5 w-[100%] h-[30vh] bg-cover bg-center ">
                <div className="">
                  <img
                    className="absolute top-9 left-9"
                    src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/dashboard-revamp/pcs-icon-add-organization.svg"
                    alt=""
                  />
                </div>
                <div className="w-[50%] absolute  top-8 text-center  font-medium right-7">
                  Let your matches know about your organization details
                </div>
                <div className="border p-1 border-[#4E1A55]  rounded-3xl  text-center font-semibold text-sm absolute top-28 right-9 w-48 bg-[#4E1A55] text-white">
                  Add Organisation
                </div>
              </div>
            </div>
            <div className="px-1">
              <div className="bg-[url('https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/dashboard-revamp/pcs-bg-add-hobbies.png')] rounded-xl relative mt-5 w-[100%] h-[30vh] bg-cover bg-center ">
                <div className="">
                  <img
                    className="absolute top-9 left-9"
                    src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/dashboard-revamp/pcs-icon-add-hobbies.svg"
                    alt=""
                  />
                </div>
                <div className="w-[50%] absolute  top-8 text-center  font-medium right-7">
                  Let your matches know more about your hobbies and interests{" "}
                </div>
                <div className="border p-1 border-[#4E1A55]  rounded-3xl  text-center font-semibold text-sm absolute top-28 right-9 w-48 bg-[#4E1A55] text-white">
                  Add Hobbies
                </div>
              </div>
            </div>
            <div className="px-1">
              <div className="bg-[url('https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/dashboard-revamp/pcs-bg-add-family-details.png')] rounded-xl relative mt-5 w-[100%] h-[30vh] bg-cover bg-center ">
                <div className="">
                  <img
                    className="absolute top-9 left-9"
                    src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/dashboard-revamp/pcs-icon-family-details.svg"
                    alt=""
                  />
                </div>
                <div className="w-[50%] absolute  top-8 text-center  font-medium right-7">
                  Let matches know your family better! Add your family details{" "}
                </div>
                <div className="border p-1 border-[#4E1A55]  rounded-3xl  text-center font-semibold text-sm absolute top-28 right-9 w-48 bg-[#4E1A55] text-white">
                  Add Family Details
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div className="border-2 my-10"></div>
      <div className="">
        <div className="text-2xl font-semibold">Discover Matches</div>
        <div className="text-gray-800 tracking-wide mt-2 text-sm">
          Explore profiles matching your preferences
        </div>
        <div className="grid grid-cols-4 mt-3 gap-x-5">
          <div className="bg-[#E1E9FB] h-[33vh] w-[15vw] rounded-2xl relative">
            <div className="absolute flex top-3 left-3  text-sm font-semibold ">
              {" "}
              <div className="text-black"> Matches living abroad</div>
              <div>
                <IoIosArrowForward className=" mt-1" />
              </div>
            </div>
            <div className="">
              <img className="absolute w-24 h-24 bottom-0 right-2"
                src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/dashboard-revamp/discover-bg-abroad-new.svg"
                alt=""
              />
            </div>
          </div>
          <div className="bg-[#FaEEF6] h-[33vh] w-[15vw] rounded-2xl relative">
            <div className="absolute flex top-3 left-3  text-sm font-semibold ">
              {" "}
              <div className="text-black"> Profiles with Photos</div>
              <div>
                <IoIosArrowForward className=" mt-1" />
              </div>
            </div>
            <div className="">
              <img className="absolute w-24 h-24 bottom-0 right-2"
                src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/dashboard-revamp/discover-bg-withphoto.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="border-2 my-10"></div>
    </div>
  );
};

export default Comp_Pro;
