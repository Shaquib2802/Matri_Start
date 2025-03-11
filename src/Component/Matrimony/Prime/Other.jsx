import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import "slick-carousel/slick/slick-theme.css";

const Other = () => {
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <button onClick={onClick} className="">
        {" "}
        <IoIosArrowBack className="absolute !left-0 !top-[48%] z-30 rounded-r-xl bg-white !p-1 !font-bold !text-3xl " />
      </button>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <button className="" onClick={onClick}>
        {" "}
        <IoIosArrowForward className="absolute !right-0 top-[48%] z-30 rounded-l-xl bg-white !p-1 !font-bold !text-3xl " />
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
    nextArrow: <SamplePrevArrow />,
    prevArrow: <SampleNextArrow />,
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
      <div className="border-2 my-12 relative">
        <div className="text-2xl left-[24%] font-semibold absolute -top-5 bg-white w-[48%] text-center">
          Matrimony.com - Other Services
        </div>
      </div>

      <div className="">
        <div className="slider-container ">
          <Slider {...settings} className="">
            <div className="px-3">
              <div className="bg-[#F6F4FF] border  border-gray-500 p-5 rounded-2xl relative mt-5 w-[100%] h-[65vh]   ">
                <div className="">
                  <img
                    className="w-52 "
                    src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/new-promotion/WeddingLoanLogo.svg"
                    alt=""
                  />
                </div>
                <div className="font-semibold text-sm my-2">
                  Quick and hazzle free wedding loan
                </div>
                <div className="flex flex-col gap-y-3 mt-8">
                  <div className="flex gap-x-2 items-center">
                    <div>
                      <img
                        src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/new-promotion/Desktop-WeddingLoanIcon1.svg"
                        alt=""
                      />
                    </div>
                    <div className="font-semibold text-sm ">
                      Dedicated relationship manager
                    </div>
                  </div>
                  <div className="flex gap-x-2 items-center">
                    <div>
                      <img
                        src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/new-promotion/Desktop-WeddingLoanIcon2.svg"
                        alt=""
                      />
                    </div>
                    <div className=" text-sm ">
                      <span className="font-semibold">Discount</span> on
                      processing fee
                    </div>
                  </div>
                  <div className="flex gap-x-2 items-center">
                    <div>
                      <img
                        src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/new-promotion/Desktop-WeddingLoanIcon3.svg"
                        alt=""
                      />
                    </div>
                    <div className="font-semibold text-sm">
                      <span className="font-semibold">Save big </span> with
                      popular brand vouchers.
                    </div>
                  </div>
                </div>
                <div className="flex w-[95%] items-center gap-x-2 mx-auto my-5 justify-center p-1 border border-[#CAC9FE] rounded-md">
                  <div className="text-[#020164] font-semibold text-[60%]">
                    Our loan partner
                  </div>
                  <div>
                    <img
                      className="w-5 h-5 rounded-sm border  "
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxgJnzA0F8vIiGH53XqcsY1iNyis07yoI1TQ&s"
                      alt=""
                    />
                  </div>
                  <div className="border">
                    <img
                      src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/wedding-loan-promo/logo-tvs-credit-small.svg"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="w-5 h-5 border rounded-sm"
                      src="https://smest.in/_next/image?url=https%3A%2F%2Fissuer-master-article-logos.s3.ap-south-1.amazonaws.com%2FL%26TFinanceHoldings.png&w=256&q=75"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="w-5 h-5 border  rounded-sm"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ULj--55S7mBPE8d4q6rxh9kL_1YFZsNJLg&s"
                      alt=""
                    />
                  </div>
                </div>
                <div className="border rounded-2xl  w-[90%] text-white border-black my-8 p-1 font-semibold mx-auto text-center bg-[#161570]">
                  Know More
                </div>
              </div>
            </div>
            <div className="px-3">
              <div className="bg-[#FFEFDA] relative border  border-gray-500 p-5 rounded-2xl mt-5 w-[100%] h-[65vh]   ">
                <div className="">
                  <img
                    className="w-52 mt-5"
                    src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/new-promotion/AstroFreechatLogo.svg"
                    alt=""
                  />
                </div>
                <div className="font-semibold text-sm my-2">
                  Looking for astrology guidance in love, relationships, career,
                  or health?
                </div>
                <div className="text-xs">
                  Connect instantly with expert astrologers on AstroFreeChat.
                </div>
                <div className="flex flex-col gap-y-2 mt-5">
                  <div className="flex gap-x-2 items-center">
                    <div>
                      <img
                        src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/new-promotion/AstroFreeChat-tick.svg"
                        alt=""
                      />
                    </div>
                    <div className="text-sm ">Chat Anytime, Anywhere</div>
                  </div>
                  <div className="flex gap-x-2 items-center">
                    <div>
                      <img
                        src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/new-promotion/AstroFreeChat-tick.svg"
                        alt=""
                      />
                    </div>
                    <div className="text-sm ">Chat Anytime,Anywhere</div>
                  </div>
                  <div className="flex gap-x-2 items-center">
                    <div>
                      <img
                        src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/new-promotion/AstroFreeChat-tick.svg"
                        alt=""
                      />
                    </div>
                    <div className="text-sm ">
                      First 5 Minutes{" "}
                      <span className="font-semibold">FREE</span>
                    </div>
                  </div>
                </div>

                <div className="border rounded-2xl my-10  w-[60%] text-white border-black  p-1 font-semibold  text-center bg-[#5C2C62]">
                  Download AstroFreeChat
                </div>
                <div className="absolute bottom-0 right-2">
                  <img
                    src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/new-promotion/AstroFreeChat-modal.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="px-3">
              <div className="bg-[#FFFBF9] relative border  border-gray-500 p-5 rounded-2xl  mt-5 w-[100%] h-[65vh]   ">
                <div className="">
                  <img
                    className="w-52 mt-5"
                    src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/new-promotion/WeddingBazaarLogo.svg"
                    alt=""
                  />
                </div>
                <div className="font-semibold text-sm my-2">
                  India's Largest Wedding Planning Platform
                </div>

                <div className="flex mt-9 flex-col gap-y-2">
                  <div className="flex gap-x-2 items-center">
                    <div>
                      <img
                        src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/new-promotion/WeddingBazaarIcon1-New.svg"
                        alt=""
                      />
                    </div>
                    <div className="text-sm ">
                      <span className="font-semibold">
                        Photographers, Makeup artists, Caterers
                      </span>{" "}
                      and more. Hire best vendor!
                    </div>
                  </div>
                  <div className="flex gap-x-2 items-center">
                    <div>
                      <img
                        className="w-6 h-5"
                        src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/new-promotion/WeddingBazaarIcon2-New.svg"
                        alt=""
                      />
                    </div>
                    <div className="text-sm ">
                      {" "}
                      <span className="font-semibold">
                        Trusted wedding market place
                      </span>{" "}
                      from matrimony.com group
                    </div>
                  </div>
                  <div className="flex gap-x-2 items-center">
                    <div>
                      <img
                        className="w-5 h-5 "
                        src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/new-promotion/WeddingBazaarIcon3-New.svg"
                        alt=""
                      />
                    </div>
                    <div className="text-sm ">
                      <span className="font-semibold">
                        {" "}
                        2.8 Lakh+trusted vendors
                      </span>{" "}
                      across 40+ cities
                    </div>
                  </div>
                </div>

                <div className="border rounded-2xl my-10  w-[90%] mx-auto  text-white border-black  p-1 font-semibold  text-center bg-[#FF426B]">
                  Know more
                </div>
              </div>
            </div>
            <div className="px-3">
              <div className="bg-[#FFFDFD] relative border  border-gray-500 p-5 rounded-2xl  mt-5 w-[100%] h-[65vh]   ">
                <div className="">
                  <img
                    className="w-52 mt-5"
                    src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/new-promotion/MandapLogo.svg"
                    alt=""
                  />
                </div>
                <div className="font-semibold text-sm my-2">
                  India's Largest Wedding Venue Booking Platform
                </div>

                <div className="flex mt-7 flex-col gap-y-3">
                  <div className="flex gap-x-2 items-center">
                    <div>
                      <img
                        className="w-5 h-5 "
                        src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/new-promotion/MandapIcon1-New.svg"
                        alt=""
                      />
                    </div>
                    <div className="text-sm ">
                      <span className="font-semibold">Free assistance</span> in
                      finding your venue
                    </div>
                  </div>
                  <div className="flex gap-x-2 items-center">
                    <div>
                      <img
                        className="w-5 h-5"
                        src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/new-promotion/MandapIcon2-New.svg"
                        alt=""
                      />
                    </div>
                    <div className="text-sm ">
                      {" "}
                      <span className="font-semibold">100% verified</span>{" "}
                      venues
                    </div>
                  </div>
                  <div className="flex gap-x-2 items-center">
                    <div>
                      <img
                        className="w-5 h-5 "
                        src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/new-promotion/MandapIcon3-New.svg"
                        alt=""
                      />
                    </div>
                    <div className="text-sm ">
                      <span className="font-semibold"> 40000+ Venues</span>{" "}
                    </div>
                  </div>
                  <div className="flex gap-x-2 items-center">
                    <div>
                      <img
                        className="w-5 h-5 "
                        src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/new-promotion/MandapIcon4-New.svg"
                        alt=""
                      />
                    </div>
                    <div className="text-sm ">
                      Service available over
                      <span className="font-semibold"> 20+ cities</span>{" "}
                    </div>
                  </div>
                </div>

                <div className="border rounded-2xl my-9  w-[90%] mx-auto  text-white border-black  p-1 font-semibold  text-center bg-[#5C2C62]">
                  Know more
                </div>
              </div>
            </div>
            <div className="px-3">
              <div className="bg-[#FAF6EF] border  border-gray-500 p-5 rounded-2xl relative mt-5 w-[100%] h-[65vh]   ">
                <div className="">
                  <img
                    className="w-42"
                    src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/new-promotion/MakeMyWeddingLogo.svg"
                    alt=""
                  />
                </div>
                <div className="font-semibold text-sm my-2 w-[80%]">
                  Plan your dream wedding with our expert help
                </div>
                <div className="flex flex-col gap-y-3 mt-4">
                  <div className="flex gap-x-2 items-center">
                    <div>
                      <img
                        className="h-7  w-7"
                        src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/new-promotion/MakeMyWeddingIcon1-New.svg"
                        alt=""
                      />
                    </div>
                    <div className="text-sm ">
                      <span className="font-semibold ">
                        Dedicated relationship manager
                      </span>{" "}
                      to guide on your wedding planning
                    </div>
                  </div>
                  <div className="flex gap-x-2 items-center">
                    <div>
                      <img
                        className="w-5 h-5 "
                        src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/new-promotion/MakeMyWeddingIcon2-New.svg"
                        alt=""
                      />
                    </div>
                    <div className=" text-sm ">
                      <span className="font-semibold">Exclusive Discount </span>{" "}
                      from top brands
                    </div>
                  </div>
                  <div className="flex gap-x-2 items-center">
                    <div>
                      <img
                        className="w-6 h-6 "
                        src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/new-promotion/MakeMyWeddingIcon3-New.svg"
                        alt=""
                      />
                    </div>
                    <div className="font-semibold text-sm">
                      Plan starts from
                      <span className="font-semibold">Rs.990 </span>
                    </div>
                  </div>
                </div>
                <div className="flex w-[95%] items-center gap-x-2 mx-auto my-3 bg-white justify-center p-1 border  rounded-md">
                  <div className=" font-semibold text-xs">
                    Parner brands
                  </div>
                  <div>
                    <img
                      className="w-5 h-5 rounded-sm border  "
                      src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/new-promotion/BrandKaldanLogo.svg"
                      alt=""
                    />
                  </div>
                  <div className="border">
                    <img   className="w-5 h-5 rounded-sm border  "
                      src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/new-promotion/BrandGRTLogo.svg"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="w-5 h-5 border rounded-sm"
                      src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/new-promotion/BrandPothysLogo.svg"
                      alt=""
                    />
                  </div>
                  <div className="text-[80%]">
                   & more
                  </div>
                </div>
                <div className="border rounded-2xl  w-[90%] text-white border-black my-2 p-1 font-semibold mx-auto text-center bg-[#813D64]">
                  Know More
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Other;
