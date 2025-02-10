import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Cart from "./Component/Cart";
import CrazyHub from "./Component/CrazyHub/CrazyHub";
import Wishlist from "./Component/Wishlist";

import ProductDetails1 from "./Component/InnerDetails/ProductDetails1";
import ProductDetails2 from "./Component/InnerDetails/ProductDetails2";
import ProductDetails3 from "./Component/InnerDetails/ProductDetails3";
import ProductDetails6 from "./Component/InnerDetails/ProductDetails6";
import ProductDetails4 from "./Component/InnerDetails/ProductsDetails4";
import ProductDetails5 from "./Component/InnerDetails/ProductsDetails5";
import ProductSp1 from "./Component/ProductSpec/ProductSp1";
import ProductSp2 from "./Component/ProductSpec/ProductSpec2";
import ProductSp3 from "./Component/ProductSpec/ProductSpec3";
import ProductSp5 from "./Component/ProductSpec/ProductSpec5";
import ProductSp4 from "./Component/ProductSpec/ProductsSpec4";
const data = [
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
    description: "OPPO A3 5G(Ocean Blue, 128 GB) (6 GB RAM) Nord Latency",

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

    price: "31000",
    discountPrice: "25500",
    discountPercentage: "25% Off",

    stock: "In-Stock",

    thumbnail:
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/Vivo-y18i-space-black-64gb-4gb-ram-Front-Back-View.webp",
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
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/Vivo-y18i-space-black-64gb-4gb-ram-Front-Back-View.webp",
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
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/Vivo-y18i-space-black-64gb-4gb-ram-Front-Back-View.webp",
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
      "https://crazzyhub.s3.amazonaws.com/media/product_variant/Vivo-y18i-space-black-64gb-4gb-ram-Front-Back-View.webp",
  },
];

const App = () => {
  return (
    <div>
      {/* <div className="sticky z-50  top-3/4 ">
        <FaWhatsapp className="text-white absolute rounded-full bg-green-500 !p-3 !text-6xl right-10  animate__animated animate__pulse animate__infinite infinite  " />
      </div> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CrazyHub />} />
          <Route path="/wish" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product" element={<ProductDetails1 />} />
          <Route path="/product1" element={<ProductDetails2 />} />
          <Route path="/product2" element={<ProductDetails3 />} />
          <Route path="/product3" element={<ProductDetails4 />} />
          <Route path="/product4" element={<ProductDetails5 />} />
          <Route path="/product5" element={<ProductDetails6 />} />
          <Route path="/productsp1" element={<ProductSp1 />} />
          <Route path="/productsp2" element={<ProductSp2 />} />
          <Route path="/productsp3" element={<ProductSp3 />} />
          <Route path="/productsp4" element={<ProductSp4 />} />
          <Route path="/productsp5" element={<ProductSp5 />} />
        </Routes>
      </BrowserRouter>
      {/* <ProductDetails/> */}

      {/* <Location/> */}
      {/* <Cart/> */}
      {/* <Practice2/> */}
      {/* <InnerHeader/> */}
      {/* <Header/> */}
      {/* <TabMob1/> */}
      {/* <Card1/> */}
      {/* <Drawer1/> */}
      {/* <Akil/>  */}
      {/* <Form/>  */}
      {/* <InnerHeader/> */}
    </div>
  );
};

export default App;
