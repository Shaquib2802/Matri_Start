import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import "slick-carousel/slick/slick-theme.css";
const Secure = () => {
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
      <div className="text-xl font-semibold ">Safety & Security Tips</div>

      <div className="text-gray-800 mt-2 text-sm">
        Follow these tips to stay safe on the platform
      </div>

      <div className="">
        <div className="slider-container ">
          <Slider {...settings} className="">
            <div className="px-1">
              <div className="bg-[#D7EFF3]  rounded-xl relative mt-5 w-[100%] h-[30vh]   ">
                <div className="">
                  <img
                    className="absolute top-9 left-9"
                    src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/newsafety1.png"
                    alt=""
                  />
                </div>
                <div className="w-[50%] absolute  top-14 text-sm   left-28">
                  People have lost hard earned money to these fraudsters. Call
                  9962043543 for any help{" "}
                </div>
              </div>
            </div>
            <div className="px-1">
              <div className="bg-[#E6F7FF]  rounded-xl relative mt-5 w-[100%] h-[30vh]   ">
                <div className="">
                  <img
                    className="absolute top-9 left-9"
                    src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/newsafety2.png"
                    alt=""
                  />
                </div>
                <div className="w-[50%] absolute  top-14 text-sm   left-28">
                  Fraudsters call from customs & ask for money to release a gift
                  sent by a prospect{" "}
                </div>
              </div>
            </div>
            <div className="px-1">
              <div className="bg-[#F3E8F5]  rounded-xl relative mt-5 w-[100%] h-[30vh]   ">
                <div className="">
                  <img
                    className="absolute top-9 left-9"
                    src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/newsafety3.png"
                    alt=""
                  />
                </div>
                <div className="w-[43%] absolute  top-6 text-sm    right-[10%]">
                  Fraudsters tell a false travel story & even send bogus flight
                  tickets. They later ask for money saying valuables are stuck
                  in customs
                </div>
              </div>
            </div>

            <div className="px-1">
              <div className="bg-[#FFF5F5]  rounded-xl relative mt-5 w-[100%] h-[30vh]   ">
                <div className="">
                  <img
                    className="absolute top-9 left-9"
                    src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/newsafety4.png"
                    alt=""
                  />
                </div>
                <div className="w-[55%] absolute  top-12 text-sm   right-10">
                  99% of people who ask for money turn out to be fraudsters,
                  even if they come on video call
                </div>
              </div>
            </div>

            <div className="px-1">
              <div className="bg-[#D7EFF3]  rounded-xl relative mt-5 w-[100%] h-[30vh]   ">
                <div className="">
                  <img
                    className="absolute top-9 left-5"
                    src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/newsafety5.png"
                    alt=""
                  />
                </div>
                <div className="w-[55%] absolute  top-14 text-sm   right-10">
                  Fraudsters ask you for money citing an accident, medical
                  emergency or some other reason
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div className="border rounded-2xl  w-[40%] border-black m6-4 p-1 font-semibold mx-auto text-center bg-purple-100">
        View more{" "}
      </div>
    </div>
  );
};

export default Secure;
