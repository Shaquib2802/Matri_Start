import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"; // For arrow icons
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

// Custom Left Arrow
function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute text-rose-400 -left-7  text-3xl top-[30%] z-40 w-8 h-20   "
    >
      <IoIosArrowDropleftCircle />
    </button>
  );
}

// Custom Right Arrow
function NextArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute text-rose-400  text-3xl top-[30%] -right-8  z-40 w-8 h-20  "
    >
      <IoIosArrowDroprightCircle />
    </button>
  );
}

function MiniSlider() {
  const settings = {
    dots: false,
    infinite: true,
    cssEase: "linear",
    speed: 1000,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true, // Autoplay enabled
    autoplaySpeed: 0, // Autoplay speed set to 3 seconds (3000 ms)
    nextArrow: <NextArrow />, // Custom next arrow
    prevArrow: <PrevArrow />, // Custom previous arrow
  };

  return (
    <div className="mt-2 w-[95%] mx-auto ">
      <Slider {...settings} className="gap-x-10">
        <div className="border rounded-full ">
          <img
            src="https://crazzyhub.s3.amazonaws.com/media/brand/image/xiaomi_6ErGXLc.png"
            alt=""
            srcSet=""
          />
        </div>
        <div className="border rounded-full">
          <img
            src="https://crazzyhub.s3.amazonaws.com/media/brand/image/tecno.png"
            alt=""
            srcSet=""
          />
        </div>
        <div className="border rounded-full">
          <img
            src="https://crazzyhub.s3.amazonaws.com/media/brand/image/Redme.png"
            alt=""
            srcSet=""
          />
        </div>
        <div className="border rounded-full">
          <img
            src="https://crazzyhub.s3.amazonaws.com/media/brand/image/jbl.png"
            alt=""
            srcSet=""
          />
        </div>
        <div className="border rounded-full">
          <img
            src="https://crazzyhub.s3.amazonaws.com/media/brand/image/2-3samsung_brand__8UkreHj.png"
            alt=""
            srcSet=""
          />
        </div>
        <div className="border rounded-full">
          <img
            src="https://crazzyhub.s3.amazonaws.com/media/brand/image/lava.png"
            alt=""
            srcSet=""
          />
        </div>
        <div className="border rounded-full">
          <img
            src="https://crazzyhub.s3.amazonaws.com/media/brand/image/itel_ff3aJrO.png"
            alt=""
            srcSet=""
          />
        </div>
        <div className="border rounded-full">
          <img
            src="https://crazzyhub.s3.amazonaws.com/media/brand/image/One-Plus.png"
            alt=""
            srcSet=""
          />
        </div>

        <div className="border rounded-full">
          <img
            src="https://crazzyhub.s3.amazonaws.com/media/brand/image/boat.png"
            alt=""
            srcSet=""
          />
        </div>
        <div className="border rounded-full">
          <img
            src="https://crazzyhub.s3.amazonaws.com/media/brand/image/LG.png"
            alt=""
            srcSet=""
          />
        </div>
        <div className="border rounded-full">
          <img
            src="https://crazzyhub.s3.amazonaws.com/media/brand/image/nothing.png"
            alt=""
            srcSet=""
          />
        </div>
        <div className="border rounded-full">
          <img
            src="https://crazzyhub.s3.amazonaws.com/media/brand/image/sandisk.png"
            alt=""
            srcSet=""
          />
        </div>
        <div className="border rounded-full">
          <img
            src="https://crazzyhub.s3.amazonaws.com/media/brand/image/dell.png"
            alt=""
            srcSet=""
          />
        </div>
      </Slider>
    </div>
  );
}

export default MiniSlider;
