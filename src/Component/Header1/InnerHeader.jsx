import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const InnerHeader = () => {
  const [open, setOpen] = useState();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [yes, setYes] = useState();

  const handleYes = () => {
    setYes(true);
  };
  const handleNo = () => {
    setYes(false);
  };
  const [yes1, setYes1] = useState();

  const handleYes1 = () => {
    setYes1(true);
  };
  const handleNo1 = () => {
    setYes1(false);
    2;
  };
  const [yes2, setYes2] = useState();

  const handleYes2 = () => {
    setYes2(true);
  };
  const handleNo2 = () => {
    setYes2(false);
  };
  const [yes3, setYes3] = useState();

  const handleYes3 = () => {
    setYes3(true);
  };
  const handleNo3 = () => {
    setYes3(false);
  };
  const [yes4, setYes4] = useState();

  const handleYes4 = () => {
    setYes4(true);
  };
  const handleNo4 = () => {
    setYes4(false);
  };
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex h-10  bg-white shadow-lg ">
        <div className="flex w-[50%]  justify-center gap-5   ">
          <div
            onMouseEnter={handleOpen}
            onMouseLeave={handleClose}
            onClick={() => navigate("/product")}
            className="font-semibold mt-1.5 cursor-pointer "
          >
            Tablets & Mobiles
          </div>
          <div
            onMouseEnter={handleYes}
            onMouseLeave={handleNo}
            onClick={() => navigate("/product1")}
            className="font-semibold mt-1.5 cursor-pointer"
          >
            Tv's & Electronics
          </div>
          <div
            onMouseEnter={handleYes1}
            onMouseLeave={handleNo1}
            onClick={() => navigate("/product2")}
           
            className="font-semibold mt-1.5 cursor-pointer"
          >
            Laptop & Accesories
          </div>
        </div>
        {open && (
          <div className=" ">
            <div className="!absolute mt-[9%] left-[7.5%] inset-0 grid grid-cols-2 w-[40%] h-fit bg-white border z-50 border-t-4 border-gray-300 border-t-orange-500 ">
              <div className="w-64 m-2  ">
                <img
                  src="https://crazzyhub.s3.amazonaws.com/media/maincat/image/mobile_9uce9lj.jpg"
                  alt=""
                />
              </div>
              <div className="flex    gap-x-8 mt-3 ml-4">
                <div className="flex flex-col gap-y-3 ">
                  <div>Techno</div>
                  <div>Oppo</div>
                  <div>Motorola</div>
                  <div>OnePlus</div>
                  <div>Itel</div>
                  <div>Vivo</div>
                  <div>Apple</div>
                  <div>Xiaomi</div>
                </div>
                <div className="flex flex-col gap-y-3">
                  <div>Realme</div>
                  <div>Samsung</div>
                  <div>Nothing</div>
                  <div>Lava</div>
                  <div>Nokia</div>
                  <div>Redmi</div>
                  <div>Mi</div>
                  <div>Infinix</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {yes && (
          <div className="!absolute mt-[9%] left-[19%] inset-0 grid grid-cols-2 w-[40%] h-fit bg-white border border-t-4 border-gray-300 border-t-orange-500 ">
            <div className="w-64 m-2 ">
              <img
                src="https://crazzyhub.s3.amazonaws.com/media/maincat/image/tv_3PbwT80.jpg"
                alt=""
              />
            </div>
            <div className="flex    gap-x-8 mt-3 ">
              <div className="flex flex-col gap-y-3 ml-5">
                <div>Full hd tv's</div>
                <div>4k ultra hd tv's</div>
                <div>Mi</div>
                <div>Samsung</div>
                <div>FJ</div>
              </div>
              <div className="flex flex-col gap-y-3">
                <div>HD TV's</div>
                <div>LG</div>
                <div>Motorola</div>
                <div>Xiaomi</div>
              </div>
            </div>
          </div>
        )}
        {yes1 && (
          <div className="!absolute mt-[9%] left-[30%] inset-0 grid grid-cols-2 w-[40%] h-fit border bg-white border-t-4 border-gray-300 border-t-orange-500 ">
            <div className="w-64 m-2 ">
              <img
                src="https://crazzyhub.s3.amazonaws.com/media/maincat/image/laptop_fXiBXlk.jpg"
                alt=""
              />
            </div>
            <div className="flex    gap-x-8 mt-3 ">
              <div className="flex flex-col gap-y-3 ml-5">
                <div>Laptop</div>
                <div>Solid State Drive</div>
                <div>Gaming Laptop</div>
              </div>
              <div className="flex flex-col gap-y-3">
                <div>Pandrive</div>
                <div>Tablet</div>
                <div>Ipad</div>
              </div>
            </div>
          </div>
        )}

        <div className="     ">
          <div className="w-16  right-[48%] top-1 absolute animate__animated animate__tada animate__infinite infinite ">
            <img
              src="https://www.crazzyhub.com/static/media/weblogo.77a9ceab0e5b281d7a91.png"
              alt=""
            />
          </div>
        </div>

        <div className="flex w-[50%]  justify-center gap-5   ">
          <div
            onMouseEnter={handleYes2}
            onMouseLeave={handleNo2}
            onClick={() => navigate("/product3")}
            className="font-semibold mt-1.5 cursor-pointer"
          >
            Computer & Peripherals
          </div>
          <div
            onMouseEnter={handleYes3}
            onMouseLeave={handleNo3}
            onClick={() => navigate("/product4")}
            className="font-semibold mt-1.5 cursor-pointer"
          >
            Smart Technology
          </div>
          <div
            onMouseEnter={handleYes4}
            onMouseLeave={handleNo4}
            onClick={() => navigate("/product5")}
            className="font-semibold mt-1.5 cursor-pointer"
          >
            Mobile Accessories
          </div>
        </div>
      </div>
      {yes2 && (
        <div className="!absolute inset-0 left-[57%] mt-[9%] bg-white grid grid-cols-2 w-[40%] h-fit border border-t-4 border-gray-300 border-t-orange-500 ">
          <div className="w-64 m-2">
            <img
              src="https://crazzyhub.s3.amazonaws.com/media/maincat/image/computer-and-speaker_OpTRCiD.jpg"
              alt=""
            />
          </div>
          <div className="flex    gap-x-8 mt-3 ml-3">
            <div className="flex flex-col gap-y-3 ">
              <div>Speaker</div>
            </div>
            <div className="flex flex-col gap-y-3">
              <div>Home Theater</div>
            </div>
          </div>
        </div>
      )}
      {yes3 && (
        <div className="!absolute inset-0 left-[40%] mt-[9%] bg-white grid grid-cols-2 w-[40%] h-fit border border-t-4 border-gray-300 border-t-orange-500 ">
          <div className="w-64 m-2">
            <img
              src="https://crazzyhub.s3.amazonaws.com/media/maincat/image/smart-technology.jpg"
              alt=""
            />
          </div>
          <div className="flex    gap-x-8 mt-3 ml-3">
            <div className="flex flex-col gap-y-3 ">
              <div>Security Camera</div>
              <div>Smart Watch</div>
              <div>Headphone</div>
            </div>
            <div className="flex flex-col gap-y-3">
              <div>Home Theater</div>
              <div>Smart Lighting</div>
              <div>Earphone</div>
            </div>
          </div>
        </div>
      )}
      {yes4 && (
        <div className="!absolute inset-0 left-[50%] mt-[9%] bg-white grid grid-cols-2 w-[45%] h-fit border border-t-4 border-gray-300 border-t-orange-500 ">
          <div className="w-64 m-2">
            <img
              src="https://crazzyhub.s3.amazonaws.com/media/maincat/image/Mobile-accessories.jpg"
              alt=""
            />
          </div>
          <div className="flex    gap-x-8 mt-3 ml-3">
            <div className="flex flex-col gap-y-3 ">
              <div>Cable & Adapter</div>
              <div>Memory</div>
              <div>True Wireless</div>
            </div>
            <div className="flex flex-col gap-y-3">
              <div>Neckband</div>
              <div>Smart Lighting</div>
              <div>Power Bank</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InnerHeader;
