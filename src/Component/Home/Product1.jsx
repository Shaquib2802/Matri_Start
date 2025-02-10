import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";

// Custom Left Arrow
function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute text-rose-400 !-left-5  text-2xl !top-[50%] z-30  md:-left-9 md:top-[40%] hidden md:block"
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
      className="absolute text-rose-400  text-2xl !top-[50%] !-right-5  z-30  md:-right-9 md:top-[40%] hidden md:block "
    >
      <IoIosArrowDroprightCircle />
    </button>
  );
}

const Product1 = ({ items }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    autoplay: true,
    slidesToScroll: 4,
    nextArrow: <NextArrow />, // Custom next arrow
    prevArrow: <PrevArrow />, // Custom previous arrow
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
  var settings1 = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    autoplay: true,
    slidesToScroll: 4,
    nextArrow: <NextArrow />, // Custom next arrow
    prevArrow: <PrevArrow />, // Custom previous arrow
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const navigate = useNavigate();
  return (
    <div>
    <div className=" w-[100%] m-0.5 hidden lg:flex">
    <div className="w-[25%] m-1">
        <img
          className="w-full h-full"
          src="https://crazzyhub.s3.amazonaws.com/media/maincat/image/tv_3PbwT80.jpg"
          alt=""
        />
      </div>
      <div className="w-[75%]   m-1 ">
        <div className="flex justify-between bg-gray-200 h-16 ">
          <div className="ml-7 my-auto font-semibold text-lg">
          Tv's & Electronics
          </div>
          <div className="mr-7 my-auto text-lg">See All</div>
        </div>
        <div className="  ">
          <div className="slider-container  border   mx-auto mt-2 rounded-md flex  ">
            <Slider
              {...settings}
              className="w-[96%] mx-auto mt-3  mb-3 gap-x-4 relative"
            >
              {items.map((shaquib,index) => (
                <div   key={index}
                  className="border border-gray-3 rounded-md  bg-white
           "
           onClick={() => navigate("/productsp2")}
                >
                  <div>
                    <img
                      className="h-40 w-32 mx-auto mt-4"
                      src={shaquib.thumbnail}
                    />
                  </div>
                  <div className="absolute top-2 ">{shaquib.favourite}</div>
                  <div className="text-sm font-semibold mt-2 ml-2">
                    {shaquib.description}
                  </div>
                  <div className="text-sm font-semibold mt-1 ml-2 text-green-500">
                    {shaquib.stock}
                  </div>
                  <div className="text-sm font-semibold mt-1 ml-2 text-black">
                    {" "}
                    ₹{shaquib.price}
                  </div>
                  <div className="flex gap-x-4 mb-2 ">
                    <div className="text-xs line-through text-gray-500 font-semibold ml-2 mt-1">
                    ₹{shaquib.discountPrice}
                    </div>
                    <div className="border text-xs font-bold bg-green-500 rounded-sm mt-1 w-14 text-center text-white">
                      {shaquib.discountPercentage}
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    
    </div>
    <div className="w-[100%]    block lg:hidden   ">
        <div className="flex justify-between bg-gray-200 h-16  ">
          <div className="ml-7 my-auto font-semibold text-lg">
          
          </div>
          <div className="mr-7 my-auto text-lg">See All</div>
        </div>
        <div className="  ">
          <div className="slider-container  border   mx-auto mt-2 rounded-md flex  ">
            <Slider
              {...settings1}
              className="w-[90%] mx-auto mt-3  mb-3 gap-x-4 relative"
              onClick={() => navigate("/productsp2")}
            >
              {items.map((shaquib,index) => (
                <div   key={index}
                  className="border border-gray-3 rounded-md  bg-white
           "
                >
                  <div>
                    <img
                      className="h-40 w-36   mx-auto mt-4"
                      src={shaquib.thumbnail}
                    />
                  </div>
                  <div className="absolute top-2 ">{shaquib.favourite}</div>
                  <div className="text-sm font-semibold mt-2 ml-2">
                    {shaquib.description}
                  </div>
                  <div className="text-sm font-semibold mt-1 ml-2 text-green-500">
                    {shaquib.stock}
                  </div>
                  <div className="text-sm font-semibold mt-1 ml-2 text-black">
                    {" "}
                    ₹{shaquib.price}
                  </div>
                  <div className="flex gap-x-4 mb-2 ">
                    <div className="text-xs line-through text-gray-500 font-semibold ml-2 mt-1">
                    ₹{shaquib.discountPrice}
                    </div>
                    <div className="border text-xs font-bold bg-green-500 rounded-sm mt-1 w-14 text-center text-white">
                      {shaquib.discountPercentage}
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product1;