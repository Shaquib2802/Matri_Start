import React from "react";
const image = [
  {
    id: 1,
    src: "https://crazzyhub.s3.amazonaws.com/media/product_variant/Vivo-y18i-space-black-64gb-4gb-ram-Front-Back-View.webp",
  },
  {
    id: 2,

    src: "https://crazzyhub.s3.amazonaws.com/media/product_variant_image/e71656380dcc8123d3045ce6876700ab.webp",
  },
  {
    id: 3,

    src: "https://crazzyhub.s3.amazonaws.com/media/product_variant_image/4f918752aec975d48e2314d011d4b356.webp",
  },
  {
    id: 4,

    src: "https://crazzyhub.s3.amazonaws.com/media/product_variant_image/ffd079788410d85ca85c085876890c6f.webp",
  },
  {
    id: 5,

    src: "https://crazzyhub.s3.amazonaws.com/media/product_variant_image/5d13e6b687e10427a2ac7a5a0ca391e4.webp",
  },
  {
    id: 6,

    src: "https://crazzyhub.s3.amazonaws.com/media/product_variant_image/65a645cc8cb83c41c95091b91f11abdf.webp",
  },
];

const NewScroll = () => {


  return( <div className="flex gap-x-2">
    {image.map((item =>
        <div key={item}>
            <div className="border-2  ">
                <img src={item.src} alt="" />
            </div>

        </div>
    ))}
  </div>

  )
};

export default NewScroll;
