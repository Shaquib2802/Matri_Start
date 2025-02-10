import React from "react";
import Slider1 from "../Home/Slider/Slider1";

import Product from "../Home/Product";
import Slider2 from "../Home/Slider/Slider2";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Product1 from "../Home/Product1";
import Slider3 from "../Home/Slider/Slider3";
import Product2 from "../Home/Product2";
import Slider4 from "../Home/Slider/Slider4";
import Product3 from "../Home/Product3";
import Slider5 from "../Home/Slider/Slider5";
import Product4 from "../Home/Product4";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Slider6 from "../Home/Slider/Slider6";
import Product5 from "../Home/Product5";
import Slider7 from "../Home/Slider/Slider7";
import MiniSlider from "../Home/Slider/MinSlider";
const data = [
  {
    id: 1,
    title: "OPPO Reno12",
    description: "VIVO Y28s 5G(Vintage Red, Z-Flip 128 GB) (8 GB RAM)",
    favourite: <FavoriteBorderIcon />,
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
    favourite: <FavoriteBorderIcon />,
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
    favourite: <FavoriteBorderIcon />,
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
    description: "Motorola G85 5G (Olive Green, 128 GB) (8 GB RAM) Highlighted",
    favourite: <FavoriteBorderIcon />,
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
    favourite: <FavoriteBorderIcon />,
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
    description: "OPPO A3 5G(Ocean Blue, 128 GB) (6 GB RAM) Nord Latency",
    favourite: <FavoriteBorderIcon />,
    price: "31000",
    discountPrice: "25500",
    discountPercentage: "25% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/Vivo-y18i-space-black-64gb-4gb-ram-Front-Back-View.webp",
  },
  {
    id: 7,
    title: "OPPO Reno12",
    description: "OPPO A3 5G(Ocean Blue, 128 GB) (6 GB RAM) Nord Latency",
    favourite: <FavoriteBorderIcon />,
    price: "31000",
    discountPrice: "25500",
    discountPercentage: "25% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/Oppo-a3x-5g-starlight-white-64gb-4gb-ram-Front-Back-View.webp",
  },
  {
    id: 8,
    title: "OPPO Reno12",
    description: "OPPO A3 5G(Ocean Blue, 128 GB) (6 GB RAM) Nord Latency",
    favourite: <FavoriteBorderIcon />,
    price: "31000",
    discountPrice: "25500",
    discountPercentage: "25% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/Redmi-13-5g-black-diamond-128gb-8gb-ram-Front-Back-View.webp",
  },
  {
    id: 9,
    title: "OPPO Reno12",
    description: "OPPO A3 5G(Ocean Blue, 128 GB) (6 GB RAM) Nord Latency",
    favourite: <FavoriteBorderIcon />,
    price: "31000",
    discountPrice: "25500",
    discountPercentage: "25% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/-original-imah46tavfvmwjaf.webp",
  },
  {
    id: 10,
    title: "OPPO Reno12",
    description: "OPPO A3 5G(Ocean Blue, 128 GB) (6 GB RAM) Nord Latency",
    favourite: <FavoriteBorderIcon />,
    price: "31000",
    discountPrice: "25500",
    discountPercentage: "25% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/vivo-v40-5g-titanium-grey-256gb-8gb-ram-front-back-view.webp",
  },
];
const data1 = [
  {
    id: 1,
    title: "OPPO Reno12",
    description: "VIVO Y28s 5G(Vintage Red, Z-Flip 128 GB) (8 GB RAM)",
    favourite: <FavoriteBorderIcon />,
    price: "25000",
    discountPrice: "31000",
    discountPercentage: "25% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/New_Project_-_2023-03-21T173254.jpg",
  },
  {
    id: 2,
    title: "Samsung Galaxy Z-fold",
    description: "OnePlus Nord CE4 lite 5G(Mega Blue, 128 GB) (8 GB RAM)",
    favourite: <FavoriteBorderIcon />,
    price: "86000",
    discountPrice: "17500",
    discountPercentage: "10% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/New_Project_-_2023-03-21T190331.jpg",
  },
  {
    id: 3,
    title: "OnePlus Nord CE4",
    description: " V40 PRO 5G(Titanium Silver Gray, 256 GB) (8 GB RAM)",
    favourite: <FavoriteBorderIcon />,
    price: "24000",
    discountPrice: "2500",
    discountPercentage: "12% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/b031d78e4c19876c45c0433541510897600x60085.webp",
  },
  {
    id: 4,
    title: "Motorola G85 5G",
    description: "Motorola G85 5G (Olive Green, 128 GB) (8 GB RAM) Highlighted",
    favourite: <FavoriteBorderIcon />,
    price: "31000",
    discountPrice: "25500",
    discountPercentage: "25% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/New_Project_-_2023-03-22T102154.jpg",
  },
  {
    id: 5,
    title: "OPPO Reno12",
    description: "OPPO A3 5G(Ocean Blue, 128 GB) (6 GB RAM) UV Display",
    favourite: <FavoriteBorderIcon />,
    price: "31000",
    discountPrice: "25500",
    discountPercentage: "25% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/New_Project_-_2023-03-21T165736.jpg",
  },
  {
    id: 6,
    title: "OPPO Reno12",
    description: "OPPO A3 5G(Ocean Blue, 128 GB) (6 GB RAM) Nord Latency",
    favourite: <FavoriteBorderIcon />,
    price: "31000",
    discountPrice: "25500",
    discountPercentage: "25% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/New_Project_-_2023-03-21T164636.jpg",
  },
  {
    id: 7,
    title: "OPPO Reno12",
    description: "OPPO A3 5G(Ocean Blue, 128 GB) (6 GB RAM) Nord Latency",
    favourite: <FavoriteBorderIcon />,
    price: "31000",
    discountPrice: "25500",
    discountPercentage: "25% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/New_Project_-_2023-03-21T171953.jpg",
  },
  {
    id: 8,
    title: "OPPO Reno12",
    description:
      "SAMSUNG Series 7 138 cm (55 inch) Ultra HD (4K) LED Smart Tizen TV(Black)",
    favourite: <FavoriteBorderIcon />,
    price: "31000",
    discountPrice: "25500",
    discountPercentage: "25% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/New_Project_-_2023-03-21T173834.jpg",
  },
  {
    id: 9,
    title: "OPPO Reno12",
    description:
      "SAMSUNG Series 7 138 cm (55 inch) Ultra HD (4K) LED Smart Tizen TV(Black)",
    favourite: <FavoriteBorderIcon />,
    price: "31000",
    discountPrice: "25500",
    discountPercentage: "25% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/New_Project_-_2023-03-21T165736.jpg",
  },
  {
    id: 10,
    title: "OPPO Reno12",
    description:
      "SAMSUNG Series 7 138 cm (55 inch) Ultra HD (4K) LED Smart Tizen TV(Black)",
    favourite: <FavoriteBorderIcon />,
    price: "31000",
    discountPrice: "25500",
    discountPercentage: "25% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/New_Project_-_2023-03-21T173834.jpg",
  },
];
const data2 = [
  {
    id: 1,
    title: "OPPO Reno12",
    description: " Lenovo Tab M10 Tablet(Platinum Grey , 2GB+32GB )",
    favourite: <FavoriteBorderIcon />,
    price: "89000",
    discountPrice: "31000",
    discountPercentage: "25% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/New_Project_16_3eQUWZD_N70yIfl.jpg",
  },
  {
    id: 2,
    title: "Samsung Galaxy Z-fold",
    description:
      "ASUS Vivobook 15 Touch Core i3 11th Gen -Thin and  Laptop (Silver,8GB+512GB)",
    favourite: <FavoriteBorderIcon />,
    price: "86000",
    discountPrice: "17500",
    discountPercentage: "10% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/crazzy_hub_48.jpg",
  },
  {
    id: 3,
    title: "OnePlus Nord CE4",
    description: " V40 PRO 5G(Titanium Silver Gray, 256 GB) (8 GB RAM)",
    favourite: <FavoriteBorderIcon />,
    price: "2000",
    discountPrice: "2500",
    discountPercentage: "12% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/crazzy_hub_24.jpg",
  },
  {
    id: 4,
    title: "Motorola G85 5G",
    description: "Motorola G85 5G (Olive Green, 128 GB) (8 GB RAM) Highlighted",
    favourite: <FavoriteBorderIcon />,
    price: "3100",
    discountPrice: "25500",
    discountPercentage: "25% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/reply_image_8FLmEfW.jpg",
  },
  {
    id: 5,
    title: "OPPO Reno12",
    description:
      "ASUS Vivobook 15 Touch Core i3 11th Gen -Thin and Light Laptop (Silver,8GB+512GB)",
    favourite: <FavoriteBorderIcon />,
    price: "3500",
    discountPrice: "25500",
    discountPercentage: "25% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/crazzy_hub_14.jpg",
  },
  {
    id: 6,
    title: "OPPO Reno12",
    description: "OPPO A3 5G(Ocean Blue, 128 GB) (6 GB RAM) Nord Latency",
    favourite: <FavoriteBorderIcon />,
    price: "20000",
    discountPrice: "25500",
    discountPercentage: "25% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/crazzy_hub_48.jpg",
  },
  {
    id: 7,
    title: "OPPO Reno12",
    description: "OPPO A3 5G(Ocean Blue, 128 GB) (6 GB RAM) Nord Latency",
    favourite: <FavoriteBorderIcon />,
    price: "10000",
    discountPrice: "25500",
    discountPercentage: "25% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/crazzy_hub_40.jpg",
  },
  {
    id: 8,
    title: "OPPO Reno12",
    description: "Lenovo Tab M10 Tablet(Platinum Grey , 2GB+32GB )",
    favourite: <FavoriteBorderIcon />,
    price: "1000",
    discountPrice: "25500",
    discountPercentage: "25% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/crazzy_hub_14.jpg",
  },
  {
    id: 9,
    title: "OPPO Reno12",
    description:
      "SAMSUNG Series 7 138 cm (55 inch) Ultra HD (4K) LED Smart Tizen TV(Black)",
    favourite: <FavoriteBorderIcon />,
    price: "11000",
    discountPrice: "25500",
    discountPercentage: "25% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/New_Project_-_2023-03-21T165736.jpg",
  },
  {
    id: 10,
    title: "OPPO Reno12",
    description:
      "SAMSUNG Series 7 138 cm (55 inch) Ultra HD (4K) LED Smart Tizen TV(Black)",
    favourite: <FavoriteBorderIcon />,
    price: "39000",
    discountPrice: "25500",
    discountPercentage: "25% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/crazzy_hub_18.jpg",
  },
];
const data3 = [
  {
    id: 1,
    title: "OPPO Reno12",
    description: " Lenovo Tab M10 Tablet(Platinum Grey , 2GB+32GB )",
    favourite: <FavoriteBorderIcon />,
    price: "89000",
    discountPrice: "31000",
    discountPercentage: "25% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/New_Project_16_AaonoR2_k259KMh.jpg",
  },
  {
    id: 2,
    title: "Samsung Galaxy Z-fold",
    description:
      "ASUS Vivobook 15 Touch Core i3 11th Gen -Thin and Laptop (Silver,8GB+512GB)",
    favourite: <FavoriteBorderIcon />,
    price: "86000",
    discountPrice: "17500",
    discountPercentage: "10% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/New_Project_23_K2Amgak_D0b6T9Q.jpg",
  },
  {
    id: 3,
    title: "OnePlus Nord CE4",
    description: " V40 PRO 5G(Titanium Silver Gray, 256 GB) (8 GB RAM)",
    favourite: <FavoriteBorderIcon />,
    price: "24000",
    discountPrice: "2500",
    discountPercentage: "12% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/New_Project_78_WCL4Bfc_BXhKogk_JUqvCHG.jpg",
  },
  {
    id: 4,
    title: "Motorola G85 5G",
    description: "Motorola G85 5G (Olive Green, 128 GB) (8 GB RAM) Highlighted",
    favourite: <FavoriteBorderIcon />,
    price: "31000",
    discountPrice: "25500",
    discountPercentage: "25% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/New_Project_16_AaonoR2_k259KMh.jpg",
  },
  {
    id: 5,
    title: "OPPO Reno12",
    description:
      "ASUS Vivobook 15 Touch Core i3 11th Gen -Thin and Laptop (Silver,8GB+512GB)",
    favourite: <FavoriteBorderIcon />,
    price: "31000",
    discountPrice: "25500",
    discountPercentage: "25% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/reply_image_OmzeABn_Tu1TdX8.jpg",
  },
  {
    id: 6,
    title: "OPPO Reno12",
    description: "OPPO A3 5G(Ocean Blue, 128 GB) (6 GB RAM) Nord Latency",
    favourite: <FavoriteBorderIcon />,
    price: "31000",
    discountPrice: "25500",
    discountPercentage: "25% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/New_Project_43_4hVW82A_PpWfQ7O_kU62o8o.jpg",
  },
  {
    id: 7,
    title: "OPPO Reno12",
    description: "OPPO A3 5G(Ocean Blue, 128 GB) (6 GB RAM) Nord Latency",
    favourite: <FavoriteBorderIcon />,
    price: "31000",
    discountPrice: "25500",
    discountPercentage: "25% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/crazzy_hub_40.jpg",
  },
  {
    id: 8,
    title: "OPPO Reno12",
    description: "Lenovo Tab M10 Tablet(Platinum Grey , 2GB+32GB )",
    favourite: <FavoriteBorderIcon />,
    price: "31000",
    discountPrice: "25500",
    discountPercentage: "25% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/New_Project_39_fn4jptN_9dCE92p_zdZuCXA_17oUj2w_nlIPIpU.jpg",
  },
  {
    id: 9,
    title: "OPPO Reno12",
    description:
      "SAMSUNG Series 7 138 cm (55 inch) Ultra HD (4K) LED Smart Tizen TV(Black)",
    favourite: <FavoriteBorderIcon />,
    price: "31000",
    discountPrice: "25500",
    discountPercentage: "25% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/New_Project_81_L7ZCPbw.jpg",
  },
  {
    id: 10,
    title: "OPPO Reno12",
    description:
      "SAMSUNG Series 7 138 cm (55 inch) Ultra HD (4K) LED Smart Tizen TV(Black)",
    favourite: <FavoriteBorderIcon />,
    price: "31000",
    discountPrice: "25500",
    discountPercentage: "25% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/New_Project_78_WCL4Bfc_BXhKogk_JUqvCHG.jpg",
  },
];
const data4 = [
  {
    id: 1,
    title: "OPPO Reno12",
    description: " Lenovo Tab M10 Tablet(Platinum Grey , 2GB+32GB )",
    favourite: <FavoriteBorderIcon />,
    price: "89000",
    discountPrice: "31000",
    discountPercentage: "25% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/FIRE-BOLTT_SOLACE_GOLD_SILVER_CRAZZYHUB.jpg",
  },
  {
    id: 2,
    title: "Samsung Galaxy Z-fold",
    description:
      "ASUS Vivobook 15 Touch Core i3 11th Gen -Thin and Laptop (Silver,8GB+512GB)",
    favourite: <FavoriteBorderIcon />,
    price: "86000",
    discountPrice: "17500",
    discountPercentage: "10% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/FIRE_BOLTT_JAGUAR_BLACK_CRAZZYHUB.jpg",
  },
  {
    id: 3,
    title: "OnePlus Nord CE4",
    description: " V40 PRO 5G(Titanium Silver Gray, 256 GB) (8 GB RAM)",
    favourite: <FavoriteBorderIcon />,
    price: "24000",
    discountPrice: "2500",
    discountPercentage: "12% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/FIRE-BOLTT_ASTEROID_BLACK_CRAZZYHUB.jpg",
  },
  {
    id: 4,
    title: "Motorola G85 5G",
    description: "Motorola G85 5G (Olive Green, 128 GB) (8 GB RAM) Highlighted",
    favourite: <FavoriteBorderIcon />,
    price: "2300",
    discountPrice: "200",
    discountPercentage: "25% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/reply_image_75drlZS.jpg",
  },
  {
    id: 5,
    title: "OPPO Reno12",
    description:
      "ASUS Vivobook 15 Touch Core i3 11th Gen -Thin and Laptop (Silver,8GB+512GB)",
    favourite: <FavoriteBorderIcon />,
    price: "1100",
    discountPrice: "25500",
    discountPercentage: "25% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/Fire_Boltt_Legacy_Black_SS_Crazzyhub.jpg",
  },
  {
    id: 6,
    title: "OPPO Reno12",
    description:
      "Titan A3 5G(Ocean Blue, 128 GB) AI Voice Assistant Smartwatch",
    favourite: <FavoriteBorderIcon />,
    price: "2500",
    discountPrice: "25500",
    discountPercentage: "25% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/reply_image_LKPjd0Z.jpg",
  },
  {
    id: 7,
    title: "OPPO Reno12",
    description:
      " Sonata AI Voice Assistant Smartwatch) (6 GB RAM) Nord Latency",
    favourite: <FavoriteBorderIcon />,
    price: "1300",
    discountPrice: "25500",
    discountPercentage: "25% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/Fire_Boltt_Cobra_Black.jpg",
  },
  {
    id: 8,
    title: "OPPO Reno12",
    description: "Lenovo Tab M10 Tablet(Platinum Grey , 2GB+32GB )",
    favourite: <FavoriteBorderIcon />,
    price: "1000",
    discountPrice: "25500",
    discountPercentage: "25% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/reply_image_75drlZS.jpg",
  },
  {
    id: 9,
    title: "OPPO Reno12",
    description:
      "Fire-Boltt Ninja Calling Pro 1.69 inch Bluetooth Calling Smartwatch with  (Blue) Watch",
    favourite: <FavoriteBorderIcon />,
    price: "3000",
    discountPrice: "1500",
    discountPercentage: "25% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/FIRE-BOLTT_ASTEROID_BLACK_CRAZZYHUB.jpg",
  },
  {
    id: 10,
    title: "OPPO Reno12",
    description:
      "Fireboltt ASTEROID 1.43 AMOLED Display With Bluetooth Calling Smartwatch ",
    favourite: <FavoriteBorderIcon />,
    price: "1900",
    discountPrice: "25500",
    discountPercentage: "25% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/FIRE-BOLTT_SOLACE_GOLD_SILVER_CRAZZYHUB.jpg",
  },
];
const data5 = [
  {
    id: 1,
    title: "OPPO Reno12",
    description: " Lenovo Tab M10 Tablet(Platinum Grey , 2GB+32GB )",
    favourite: <FavoriteBorderIcon />,
    price: "2000",
    discountPrice: "1000",
    discountPercentage: "25% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/DURACELL_TYPE_C_TO_TYPE_C_CRAZZYHUB.jpg",
  },
  {
    id: 2,
    title: "Samsung Galaxy Z-fold",
    description:
      "ASUS Vivobook 15 Touch Core i3 11th Gen -Thin and Laptop (Silver,8GB+512GB)",
    favourite: <FavoriteBorderIcon />,
    price: "2000",
    discountPrice: "7500",
    discountPercentage: "10% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/LAPCARE_SMART_TANK_10000MAH_POWER_BANK_LPB-003_WCcOWUe.jpg",
  },
  {
    id: 3,
    title: "OnePlus Nord CE4",
    description: " V40 PRO 5G(Titanium Silver Gray, 256 GB) (8 GB RAM)",
    favourite: <FavoriteBorderIcon />,
    price: "2400",
    discountPrice: "500",
    discountPercentage: "12% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/MI_33W_SONIC_CHARGE_2.jpg",
  },
  {
    id: 4,
    title: "Motorola G85 5G",
    description: "Motorola G85 5G (Olive Green, 128 GB) (8 GB RAM) Highlighted",
    favourite: <FavoriteBorderIcon />,
    price: "2300",
    discountPrice: "130",
    discountPercentage: "25% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/REALME_BUDS_WIRELESS_3_BASS_YELLOW_CRAZZYHUB.jpg",
  },
  {
    id: 5,
    title: "OPPO Reno12",
    description:
      "ASUS Vivobook 15 Touch Core i3 11th Gen -Thin and Laptop (Silver,8GB+512GB)",
    favourite: <FavoriteBorderIcon />,
    price: "1500",
    discountPrice: "500",
    discountPercentage: "25% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/300047_bgbvzu.webp",
  },
  {
    id: 6,
    title: "OPPO Reno12",
    description:
      "Titan A3 5G(Ocean Blue, 128 GB) AI Voice Assistant Smartwatch",
    favourite: <FavoriteBorderIcon />,
    price: "2290",
    discountPrice: "5500",
    discountPercentage: "25% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/boat-airdopes-131-wireless-earbuds-right.jpg",
  },
  {
    id: 7,
    title: "OPPO Reno12",
    description:
      " Sonata AI Voice Assistant Smartwatch) (6 GB RAM) Nord Latency",
    favourite: <FavoriteBorderIcon />,
    price: "1300",
    discountPrice: "25500",
    discountPercentage: "25% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/DURACELL_TYPE_C_TO_TYPE_C_CRAZZYHUB.jpg",
  },
  {
    id: 8,
    title: "OPPO Reno12",
    description: "Lenovo Tab M10 Tablet(Platinum Grey , 2GB+32GB )",
    favourite: <FavoriteBorderIcon />,
    price: "1000",
    discountPrice: "25500",
    discountPercentage: "25% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/LAPCARE_SMART_TANK_10000MAH_POWER_BANK_LPB-003_WCcOWUe.jpg",
  },
  {
    id: 9,
    title: "OPPO Reno12",
    description:
      "Fire-Boltt Ninja inch Bluetooth Smartwatch with  (Blue) Watch",
    favourite: <FavoriteBorderIcon />,
    price: "3000",
    discountPrice: "1500",
    discountPercentage: "25% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/boat-airdopes-131-wireless-earbuds-right.jpg",
  },
  {
    id: 10,
    title: "OPPO Reno12",
    description:
      "Fireboltt ASTEROID 1.43 AMOLED Display With Bluetooth Calling Smartwatch ",
    favourite: <FavoriteBorderIcon />,
    price: "1900",
    discountPrice: "25500",
    discountPercentage: "25% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/FIRE-BOLTT_SOLACE_GOLD_SILVER_CRAZZYHUB.jpg",
  },
];

const Body1 = () => {
  return (
    <div className="overflow-hidden ">
      <Slider1 />
      <MiniSlider/>
      <Product items={data} />
      <Slider2 />
      <Product1 items={data1} />
      <Slider3 />
      <Product2 items={data2} />
      <Slider4 />
      <Product3 items={data3} />
      <Slider5 />
      <Product4 items={data4} />
      <Slider6 />
      <Product5 items={data5} />
      <Slider7 />
    </div>
  );
};

export default Body1;
