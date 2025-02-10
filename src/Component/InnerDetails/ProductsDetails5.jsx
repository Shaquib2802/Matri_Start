import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Slider from "@mui/material/Slider";
import { blue, orange } from "@mui/material/colors";
import Header from "../Header1/Header";
import Bottom1 from "../Bottom/Bottom1";

import { MdFilter, MdOutlineSort } from "react-icons/md";
import { FaFilter } from "react-icons/fa";

const data2 = [
  {
    id: 1,
    title: "OPPO Reno12",
    description: "Xiaomi 360 Home Security Camera 2K Pro with Bluetooth Gateway BLE 4.2 & Dual Band Wi-fi Security Camera White",

    price: "25000",
    discountPrice: "31000",
    discountPercentage: "25% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/Mi_360_Home_Security_Camera_2K_Pro.jpg",
  },
  {
    id: 2,
    title: "Samsung Galaxy Z-fold",
    description: "OnePlus Q2 Pro 163 cm (65 inch) QLED Ultra HD (4K) Smart Google TV",

    price: "86000",
    discountPrice: "17500",
    discountPercentage: "10% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/Xiaomi_360_Home_Security_Camera_1080p_2i.jpg",
  },
  {
    id: 3,
    title: "OnePlus Nord CE4",
    description: "Xiaomi 360 Home Security Camera 2K Pro with Bluetooth Gateway BLE 4.2 & Dual Band Wi-fi Security Camera White",

    price: "24000",
    discountPrice: "2500",
    discountPercentage: "12% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/New_Crazzy_21_vo2Yf3G.jpg",
  },
  {
    id: 4,
    title: "Motorola G85 5G",
    description: "Mi X Series 108 cm (43 inch) Ultra HD (4K) LED Smart Android TV.",

    price: "31000",
    discountPrice: "25500",
    discountPercentage: "25% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/9_sAaA90g_OlWiBg8.jpg",
  },
  {
    id: 5,
    title: "OPPO Reno12",
    description: "Xiaomi 360 Home Security Camera 2K Pro with Bluetooth Gateway BLE 4.2 & Dual Band Wi-fi Security Camera White",

    price: "31000",
    discountPrice: "25500",
    discountPercentage: "25% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/New_Crazzy_14_7lM0gmV.jpg",
  },
  {
    id: 6,
    title: "OPPO Reno12",
    description: "Fire-Boltt Eclipse 1.43 AMOLED Smartwatch, Bluetooth Calling with AI Voice Assistant Smartwatch (Silver Black)",

    price: "31000",
    discountPrice: "25500",
    discountPercentage: "25% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/reply_image_in85Qvx.jpg",
  },
  {
    id: 7,
    title: "OPPO Reno12",
    description: "Mi X Series 108 cm (43 inch) Ultra HD (4K) LED Smart Android TV.",

    price: "31000",
    discountPrice: "25500",
    discountPercentage: "25% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/reply_image_em0yqIM.jpg",
  },
  {
    id: 8,
    title: "OPPO Reno12",
    description: "OPPO A3 5G(Ocean Blue, 128 GB) (6 GB RAM) Nord Latency",

    price: "31000",
    discountPrice: "25500",
    discountPercentage: "25% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/reply_image_oj4bjEr.jpg",
  },
  {
    id: 9,
    title: "OPPO Reno12",
    description: "OPPO A3 5G(Ocean Blue, 128 GB) (6 GB RAM) Nord Latency",

    price: "31000",
    discountPrice: "25500",
    discountPercentage: "25% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/New_Project_-_2023-03-22T100826.jpg",
  },
  {
    id: 10,
    title: "OPPO Reno12",
    description: "OPPO A3 5G(Ocean Blue, 128 GB) (6 GB RAM) Nord Latency",

    price: "31000",
    discountPrice: "25500",
    discountPercentage: "25% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/OnePlus-Q-Series-Q2-Pro-4K-QLED-Smart-TV-65-inch-01_mfvX6jV.jpg",
  },
  {
    id: 11,
    title: "OPPO Reno12",
    description: "VIVO Y28s 5G(Vintage Red, Z-Flip 128 GB) (8 GB RAM)",

    price: "25000",
    discountPrice: "31000",
    discountPercentage: "25% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/infinity-luxe-gold_2_1800x1800_1.jpg",
  },
  {
    id: 12,
    title: "Samsung Galaxy Z-fold",
    description: "OnePlus Nord CE4 lite 5G(Mega Blue, 128 GB) (8 GB RAM)",

    price: "86000",
    discountPrice: "17500",
    discountPercentage: "10% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/infinity-luxe-rose-gold_2_1800x1800_2.jpg",
  },
  {
    id: 13,
    title: "OnePlus Nord CE4",
    description: " V40 PRO 5G(Titanium Silver Gray, 256 GB) (8 GB RAM)",

    price: "24000",
    discountPrice: "2500",
    discountPercentage: "12% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/infinity-luxe-silver_2_1800x1800_1.jpg",
  },
  {
    id: 14,
    title: "Motorola G85 5G",
    description: "Motorola G85 5G (Olive Green, 128 GB) (8 GB RAM)",

    price: "31000",
    discountPrice: "25500",
    discountPercentage: "25% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/ultimate-active_black-l_3_1800x1800_1.jpg",
  },
  {
    id: 15,
    title: "OPPO Reno12",
    description: "OPPO A3 5G(Ocean Blue, 128 GB) (6 GB RAM) UV Display",

    price: "31000",
    discountPrice: "25500",
    discountPercentage: "25% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/ultimate-black_3_1800x1800_1.jpg",
  },
  {
    id: 16,
    title: "OPPO Reno12",
    description: "OPPO A3 5G(Ocean Blue, 128 GB) (6 GB RAM) Nord",

    price: "31000",
    discountPrice: "25500",
    discountPercentage: "25% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/ultimate-brown-l_2_1800x1800_1.jpg",
  },
  {
    id: 17,
    title: "OPPO Reno12",
    description: "OPPO A3 5G(Ocean Blue, 128 GB) (6 GB RAM) Nord",

    price: "31000",
    discountPrice: "25500",
    discountPercentage: "25% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/ultimate-gold_3_1800x1800_1.jpg",
  },
  {
    id: 18,
    title: "OPPO Reno12",
    description: "OPPO A3 5G(Ocean Blue, 128 GB) (6 GB RAM) Nord",

    price: "31000",
    discountPrice: "25500",
    discountPercentage: "25% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/ultimate-silver_3_1800x1800_1.jpg",
  },
  {
    id: 19,
    title: "OPPO Reno12",
    description: "OPPO A3 5G(Ocean Blue, 128 GB) (6 GB RAM) Nord",

    price: "31000",
    discountPrice: "25500",
    discountPercentage: "25% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/dagger-luxe-black-ss_2_1800x1800_1.jpg",
  },
  {
    id: 20,
    title: "OPPO Reno12",
    description: "OPPO A3 5G(Ocean Blue, 128 GB) (6 GB RA",

    price: "31000",
    discountPrice: "25500",
    discountPercentage: "25% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/reply_image_jMCxpva.jpg",
  },
];

function valuetext(value) {
  return `${value}°C`;
}

const ProductDetails5 = () => {
  const [value, setValue] = React.useState([0, 100]);
  const [value1, setValue1] = React.useState(5);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="w-[100%] ">
      <Header />
      <div className="flex gap-5 m-4">
        <div className="w-[15%] h-fit pb-5 shadow-xl border hidden lg:block ">
          <div className="flex  justify-between mx-1 mt-2">
            <div className="font-semibold text-xl">Filters</div>
            <div className="text-sm text-orange-500 mt-1">CLEAR</div>
          </div>
          <div className="border m-1 p-1  bg-gray-100 rounded-sm text-base mt-3 font-semibold">
            PRICE
          </div>
          <div className="m-3">
            {" "}
            <Box sx={{ width: "100%" }}>
              <Slider
                getAriaLabel={() => "Temperature range"}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                sx={{
                  color: "red",
                  "& .MuiSlider-thumb": {
                    backgroundColor: "#bf4128",
                  },
                  "& .MuiSlider-rail": {
                    backgroundColor: "#bf4128",
                  },
                }}
              />
            </Box>
          </div>
          <div className="border m-1 p-1  bg-gray-100 rounded-sm text-base mt-4 font-semibold">
            BRAND
          </div>
          <div className="ml-5 space-y-3">
            <div className="mt-4">Xiaomi</div>
            <div>Samsung</div>
            <div>Oppo</div>
            <div>Vivo</div>
            <div>OnePlus</div>
            <div>Redmi</div>
            <div>Apple</div>
            <div>Huawai</div>
            <div>Micromax</div>
            <div>Xiaomi</div>
            <div>Huawai</div>
            <div>Micromax</div>
            <div>Xiaomi</div>
            <div>Nokia</div>
            <div>Fire-Bolt</div>
            <div>Itel</div>
            <div>Dell</div>
            <div>Nothing</div>
            <div>Mi</div>
            <div>Lenovo</div>
          </div>
          <div className=" flex justify-center mt-4">
            <KeyboardArrowDownIcon className=" !text-4xl text-orange-600" />
          </div>
          <div className="border m-1 p-1  bg-gray-100 rounded-sm text-base mt-4 font-semibold">
            Categories
          </div>
          <div className="ml-5 space-y-3">
            <div className="mt-4">Mobiles & Tablet</div>
            <div>TV's & Electronics</div>
            <div>Laptop & Accessories</div>
            <div>Computer & Pheripheral</div>
            <div>Smart Technology</div>
            <div>Mobile Accessories</div>
          </div>
          <div className="border m-1 p-1  bg-gray-100 rounded-sm text-base mt-4 font-semibold">
            RATING
          </div>
          <div className="mt-4 ml-2">
            {" "}
            <Box sx={{ "& > legend": { mt: 2 } }}>
              <Rating
                name="simple-controlled"
                value={value1}
                onChange={(event, newValue) => {
                  setValue1(newValue);
                }}
              />
            </Box>
          </div>
        </div>

        <div className="w-[100%]  xl:w-[85%] ">
          <div className="  justify-between  mb-3 hidden lg:flex ">
            <div className="text-xl font-semibold">MOBILES & TABLET</div>
            <div className="flex gap-x-2 ">
              <div className="border border-rose-400 text-xs font-medium w-24 text-center pt-1.5 text-red-400">
                Most Popular
              </div>
              <div className="border border-rose-400 text-xs font-medium w-24 text-center pt-1.5 text-red-400">
                Top Review
              </div>
              <div className="border border-rose-400 text-xs font-medium w-24 text-center pt-1.5 text-red-400">
                Newest First
              </div>
            </div>
          </div>
          <div className="w-[100%] grid grid-cols-2 relative lg:hidden h-10 -mt-4 ">
            <div className="text-center border text-rose-500  flex justify-center  gap-x-7 md:gap-x-0  ">
              <div>
                <MdOutlineSort className="absolute left-[19%] text-xl text-rose-500 mt-2.5 " />
              </div>
              <div className="mt-2">SORT</div>
            </div>
            <div className="text-center border text-rose-500  flex justify-center  gap-x-5 md:gap-x-0  ">
              <div>
                <FaFilter className="absolute right-[29%]  text-xl text-rose-500 mt-2.5" />
              </div>
              <div className="mt-2">FILTERS</div>
            </div>
          </div>
          <div className="grid lg:gap-4  grid-cols-2 lg:grid-cols-5  w-[100%]">
            {data2.map((shaquib1) => (
              <div className=" relative border border-gray-3 rounded-md  bg-white"
              key={shaquib1.id} >
                <div>
                  <img
                    className="h-40 w-40 mx-auto mt-4"
                    src={shaquib1.thumbnail}
                  />
                </div>
                <div className="absolute !top-2 !right-2 ">
                <FavoriteBorderIcon />
              </div>
                <div className="text-sm font-semibold mt-2 ml-2">
                  {shaquib1.description}
                </div>
                <div className="text-sm font-semibold mt-1 ml-2 text-green-500">
                  {shaquib1.stock}
                </div>
                <div className="text-sm font-semibold mt-1 ml-2 text-black">
                  {" "}
                  {shaquib1.price}
                </div>
                <div className="flex gap-x-4 mb-2 ">
                  <div className="text-xs line-through text-gray-500 font-semibold ml-2 mt-1">
                    {shaquib1.discountPrice}
                  </div>
                  <div className="border text-xs font-bold bg-green-500 rounded-md mt-1 w-14 text-center text-white">
                    {shaquib1.discountPercentage}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Bottom1 />
    </div>
  );
};

export default ProductDetails5;
