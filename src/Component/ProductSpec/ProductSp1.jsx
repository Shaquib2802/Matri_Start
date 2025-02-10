import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../Header1/Header";
import NewScroll from "../NewScroll";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import Box from "@mui/material/Box";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import Rating from "@mui/material/Rating";
import { IoShareSocial } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { MdCompare } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineEye } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import Bottom1 from "../Bottom/Bottom1";

const inner = [
  {
    id: 1,
    title: "OPPO Reno12",
    description: "VIVO Y28s 5G(Vintage Red, Z-Flip 128 GB) (8 GB RAM)",

    price: "25000",
    discountPrice: "31000",
    discountPercentage: "25% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/Vivo-y18i-space-black-64gb-4gb-ram-Front-Back-View.webp",
  },
  {
    id: 2,
    title: "Samsung Galaxy Z-fold",
    description: "OnePlus Nord CE4 lite 5G(Mega Blue, 128 GB) (8 GB RAM)",

    price: "86000",
    discountPrice: "17500",
    discountPercentage: "10% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/samsung-galaxy-z-fold-6-5g-pink-512gb-12gb-ram-back-fold.webp",
  },
  {
    id: 3,
    title: "OnePlus Nord CE4",
    description: " V40 PRO 5G(Titanium Silver Gray, 256 GB) (8 GB RAM)",

    price: "24000",
    discountPrice: "2500",
    discountPercentage: "12% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/ec64eb41a8e787a798be1b71c13a51bb.webp",
  },
  {
    id: 4,
    title: "Motorola G85 5G",
    description: "Motorola G85 5G (Olive Green, 128 GB) (8 GB RAM)",

    price: "31000",
    discountPrice: "25500",
    discountPercentage: "25% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/157773-800-auto.webp",
  },
  {
    id: 5,
    title: "OPPO Reno12",
    description: "OPPO A3 5G(Ocean Blue, 128 GB) (6 GB RAM) UV Display",

    price: "31000",
    discountPrice: "25500",
    discountPercentage: "25% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/Vivo-y18i-space-black-64gb-4gb-ram-Front-Back-View.webp",
  },
  {
    id: 6,
    title: "OPPO Reno12",
    description: "VIVO Y28s 5G(Vintage Red, Z-Flip 128 GB) (8 GB RAM)",

    price: "25000",
    discountPrice: "31000",
    discountPercentage: "25% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/New_Project_riTDfqm_yEavMsw.jpg",
  },
];

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute text-rose-400 !-left-7  text-3xl !top-[40%] z-30 w-8 h-20  md:-left-9 md:top-[40%] hidden md:block"
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
      className="absolute text-rose-400  text-3xl !top-[40%] !-right-7  z-30 w-8 h-20 md:-right-9 md:top-[40%] hidden md:block "
    >
      <IoIosArrowDroprightCircle />
    </button>
  );
}

const ProductSp1 = () => {
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
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="w-[100%]">
      <Header />
      <div className="flex  m-5 mb-5">
        <div className="w-[40%] ">
          <div>
            <img
              src="https://crazzyhub.s3.amazonaws.com/media/product_variant/ec64eb41a8e787a798be1b71c13a51bb.webp"
              alt="Shaquib"
              className="border"
            />
          </div>
          <div className="w-[100%] mx-auto mt-2 flex justify-center gap-x-2">
            <div>
              <IoIosArrowBack className="border rounded-full  text-3xl text-gray-500 mt-4 font-mono border-gray-500 pr-1" />
            </div>
            <div className="w-[80%]">
              <NewScroll />
            </div>
            <div>
              <IoIosArrowForward className="border rounded-full  text-3xl text-gray-500 mt-4 font-mono border-gray-500 pl-1" />
            </div>
          </div>
        </div>
        <div className="w-[37%] ">
          <div className="text-lg font-semibold w-[90%] mx-auto mt-3">
            OnePlus Nord CE4 lite 5G(Mega Blue, 128 GB) (8 GB RAM)
          </div>
          <div className="ml-5 mt-3">
            <Box sx={{ "& > legend": { mt: 2 } }}>
              <Rating name="no-value" value={null} />
            </Box>
          </div>
          <div className="text-green-700 ml-6 font-semibold text-lg">
            In-stock
          </div>
          <div className="flex ml-6 gap-x-3">
            <div className="text-orange-500 text-xl font-bold">₹19,999</div>
            <div className="text-base mt-0.5 line-through">M.R.P: 20999</div>
            <div className="text-white bg-green-500 rounded-md font-semibold p-1 text-sm">
              4.76%
            </div>
          </div>
          <div className="text-base font-semibold ml-6 underline mt-1">
            Available Offer
          </div>
          <div className="border border-dashed border-gray-600 rounded-md w-[80%] lg:w-[55%] ml-6 flex flex-col mt-2">
            <div className="ml-2 text-green-600 font-semibold">Discount:</div>
            <div className="ml-2 font-semibold text-xs">Get 5% discount</div>
            <div className="ml-2  text-xs ">
              Get 5% discount on mobile & tablets upto Rs.1500/-.
            </div>
            <div className="flex justify-end mr-2 mb-2">
              <div className="text-white bg-orange-600 w-[15%] text-xs rounded-lg  pl-1 lg:pl-2 ">
                T&C
              </div>
            </div>
          </div>
          <div className="ml-6 mt-2 font-semibold">Color</div>
          <div className="flex ml-6  gap-x-2 lg:gap-x-3">
            <div className="flex flex-col border-2 border-orange-500 rounded-md p-1 mt-2 ">
              <div className="ml-2 w-14 h-12">
                <img
                  src="https://crazzyhub.s3.amazonaws.com/media/product_variant/ec64eb41a8e787a798be1b71c13a51bb.webp"
                  alt=""
                  className="w-11"
                />
              </div>
              <div className="text-xs text-center ">Mega Blue</div>
            </div>
            <div className="flex flex-col border-2 border-gray-300 rounded-md p-1 mt-2 ">
              <div className="ml-2 w-14 h-12">
                <img
                  src="https://crazzyhub.s3.amazonaws.com/media/product_variant/ec64eb41a8e787a798be1b71c13a51bb.webp"
                  alt=""
                  className=" w-11"
                />
              </div>
              <div className="text-xs text-center">Mega Blue</div>
            </div>
            <div className="flex flex-col border-2 border-gray-300 rounded-md p-1 mt-2 ">
              <div className="">
                <img
                  src="https://crazzyhub.s3.amazonaws.com/media/product_variant/ec64eb41a8e787a798be1b71c13a51bb.webp"
                  alt=""
                  className="w-11"
                />
              </div>
              <div className="text-xs text-center ">Mega Blue</div>
            </div>
          </div>
          <div className="ml-6 mt-1 font-semibold">RAM</div>
          <div className="ml-6 border-2 border-orange-500 w-12 text-sm h-10 p-1.5 rounded-md ">
            8 GB
          </div>
          <div className="ml-6 mt-2 font-semibold">Storage</div>
          <div className="flex gap-x-4">
            <div className="ml-6 border-2 border-orange-500 w-16 text-sm h-10 px-3.5 py-2 rounded-md ">
              128
            </div>
            <div className="border-2 border-gray-300 w-16 text-sm h-10 px-3.5 py-2 rounded-md ">
              256
            </div>
          </div>
          <div className="bg-gray-100 w-[90%]  ml-6 flex  mt-8 lg:mt-3 h-10 py-2 relative justify-between">
            <div className="ml-2 text-gray-900 font-semibold text-base">
              Delivery Options:
            </div>
            <FaLocationDot className="absolute text-lg left-[90%] lg:left-[50%] top-3" />
            <div className="">
              <input
                type="text"
                placeholder="Enter Pincode"
                className="hidden lg:w-[90%]  placeholder: border-b-2 border-gray-200 bg-gray-100 text-gray-500 outline-none "
              />
            </div>
          </div>
          <div className=" bg-rose-100 ml-6 mt-3 h-14 w-[90%] hidden lg:flex">
            <div className="flex  w-[34%] gap-x-2 p-2 border">
              <div>
                <img
                  src="https://pub-027efb0add534c4fbed7432cf1c407a1.r2.dev/Assets/Return-Exchangee.png"
                  alt=""
                  className="w-11"
                />
              </div>
              <div className="text-sm ">
                <span className="font-semibold">Replacement</span> in 7 Days
              </div>
            </div>
            <div className="flex  w-[34%] gap-x-2 p-2 border">
              <div>
                <img
                  src="https://pub-027efb0add534c4fbed7432cf1c407a1.r2.dev/Assets/warrenty.png"
                  alt=""
                  className="w-11"
                />
              </div>
              <div className="text-sm ">
                <span className="font-semibold">Warranty</span> in 1 Year
              </div>
            </div>
            <div className="flex  w-[34%] gap-x-2 p-2 border">
              <div>
                <img
                  src="	https://pub-027efb0add534c4fbed7432cf1c407a1.r2.dev/Assets/Gst-Invoice.png"
                  alt=""
                  className="w-11"
                />
              </div>
              <div className="text-base">
                <span className="font-semibold text-sm">GST Invoice</span>{" "}
                Available
              </div>
            </div>
          </div>
        </div>
        <div className="w-[23%]  mt-12">
          <div className="border ">
            <div className="font-semibold text-center text-lg underline mt-2">
              Frequently Bought Together
            </div>
            <div className="m-2">
              <img
                src="https://img.freepik.com/premium-vector/no-data-found-empty-file-folder-concept-design-vector-illustration_620585-1698.jpg"
                alt=""
                className="h-[60vh] w-68"
              />
            </div>
          </div>
          <button className="border w-[100%] text-center bg-gradient-to-r text-white h-11 font-semibold text-lg to-blue-400 from-orange-500 mt-2 ">
            Buy Now
          </button>
          <button className="border w-[100%] text-center  h-11 font-semibold text-lg bg-green-500 text-white mt-2 ">
            Add to Cart
          </button>
          <div className="flex justify-center mt-3 gap-x-2">
            <div className="w-[45%] lg:w-[30%] border border-orange-600 rounded-md flex ">
              <div>
                <IoShareSocial className="text-rose-600  text-3xl font-bold p-1" />
              </div>
              <div className="text-rose-500 text-sm mt-1">Share</div>
            </div>
            <div className="  w-[30%] border border-orange-600 rounded-md hidden lg:flex">
              <div>
                <MdCompare className="text-rose-600 text-3xl p-1" />
              </div>
              <div className="!text-rose-500 text-xs mt-2">Compare</div>
            </div>
            <div className="flex w-[45%] lg:w-[30%]  border border-orange-600 rounded-md">
              <div>
                <FaRegHeart className="text-rose-500 text-3xl p-2" />
              </div>
              <div className="text-rose-500 text-xs mt-2">Wishlist</div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#fef2e6] ] text-[#e0b98e] h-8   justify-around sticky top-28 z-50 hidden lg:flex  ">
        <div className="flex mt-1 gap-x-1">
          <div>
            <HiOutlineEye className="text-xl font-semibold mt-0.5" />
          </div>
          <div className="text-base font-semibold">Overview</div>
        </div>
        <div className="flex mt-1 gap-x-1">
          <div>
            <img
              src="https://pub-027efb0add534c4fbed7432cf1c407a1.r2.dev/Assets/sliders.png"
              alt=""
              className="border mt-1"
            />
          </div>
          <div>Detailed Specs</div>
        </div>
        <div className="flex mt-1 gap-x-1">
          <div>
            <img
              src="https://pub-027efb0add534c4fbed7432cf1c407a1.r2.dev/Assets/play.png"
              alt=""
              className="w-4 mt-1"
            />
          </div>
          <div>Videos</div>
        </div>
        <div className="flex mt-1 gap-x-1">
          <div>
            <StarOutlineIcon />
          </div>
          <div>Rating and Reviews</div>
        </div>
        <div className="flex mt-1 gap-x-1">
          <div>
            <img
              src="https://pub-027efb0add534c4fbed7432cf1c407a1.r2.dev/Assets/package.png"
              alt=""
              className="mt-1"
            />
          </div>
          <div>Related Products</div>
        </div>
        <div className="flex mt-1 gap-x-1">
          <div>
            <img
              src="https://pub-027efb0add534c4fbed7432cf1c407a1.r2.dev/Assets/compare-color.png"
              alt=""
              className="mt-1 "
            />
          </div>
          <div>Compare</div>
        </div>
      </div>
      <div className="bg-[#8e8e8e] h-16 text-white flex justify-center items-center mt-4 ">
        <div className="text-3xl font-bold">Videos</div>
      </div>
      <div className="h-16  flex justify-center items-center my-8">
        <div className="text-xl">Video not available for this product</div>
      </div>
      <div className="m-2 ">
        <div className="bg-[#8e8e8e] h-12 text-white flex justify-center items-center mt-4 ">
          <div className="text-xl font-semibold">Rating & Reviews</div>
        </div>
        <div className="border flex flex-col justify-center items-center">
          <div className=" text-lg m-10 ">
            You are the first one to review this product. click below button to
            post your review !
          </div>
          <div className="border text-white bg-orange-500 font-semibold rounded-md w-[20%] lg:w-[15%] text-sm text-center p-4 mb-5">
            WRITE REVIEWS
          </div>
        </div>
        <div>
          <div className="relative">
            <div className=" w-[100%] m-1 hidden lg:flex ">
              <div className="w-[100%]   m-1 ">
                <div className="flex justify-between bg-gray-100 h-16 ">
                  <div className="ml-7 my-auto font-semibold text-2xl">
                    Related Products
                  </div>
                </div>
                <div className="  ">
                  <div className="slider-container  border   mx-auto mt-2 rounded-md flex  ">
                    <Slider
                      {...settings}
                      className="w-[96%] mx-auto flex   mt-3  mb-3 gap-x-4 "
                    >
                      {inner.map((shaquib) => (
                        <div
                          key={shaquib}
                          className=" relative border border-gray-3 rounded-md  bg-white"
                        >
                          <div>
                            <img
                              className="h-40 w-32 mx-auto mt-4"
                              src={shaquib.thumbnail}
                            />
                          </div>
                          <div className="absolute !top-2 !right-2 ">
                            {shaquib.favourite}
                          </div>
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
                  Related Products
                </div>
                <div className="mr-7 my-auto text-lg">See All</div>
              </div>
              <div className="  ">
                <div className="slider-container  border   mx-auto mt-2 rounded-md flex  ">
                  <Slider
                    {...settings1}
                    className="w-[90%] mx-auto mt-3  mb-3 gap-x-4 "
                  >
                    {inner.map((shaquib) => (
                      <div className="border border-gray-3 rounded-md  bg-white">
                        <div>
                          <img
                            className="h-40 w-32 mx-auto mt-4"
                            src={shaquib.thumbnail}
                          />
                        </div>
                        <div className="absolute top-0 ">
                          {shaquib.favourite}
                        </div>
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
        </div>
        <Bottom1 />
      </div>
    </div>
  );
};

export default ProductSp1;
