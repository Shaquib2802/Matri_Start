import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import TextsmsIcon from "@mui/icons-material/Textsms";
import PhoneIcon from "@mui/icons-material/Phone";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useLocation, useNavigate } from "react-router-dom";
import { get_Plan } from "../../Service/Get_pref";
import { Raz_Buy, Raz_Verify } from "../../Service/Razorpay";
const Upgrade = () => {
  const [data, setData] = useState();
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedMRP, setSelectedMRP] = useState(null);
  const [user_id, setID] = useState();

  console.log("api data ", data);

  console.log("shgjgjchdec", selectedPlan);
  console.log(">>><<<<", selectedPlan?.price);

  const DataApi = async () => {
    const response = await get_Plan();
    console.log("data(Blog)):", response?.data);
    setData(response?.data?.data || {});
  };

  useEffect(() => {
    DataApi();
  }, []);

  const handlePlanSelection = (index, price) => {
    setSelectedPlan(index);

    setSelectedMRP(price);
  };

  const handlePayment = async () => {
    const response = await Raz_Buy({ plan_id: selectedPlan?.id });

    console.log("thisnis", response?.data);
    console.log("data(Blog)):", response?.data?.response_code);
    setData(response?.data?.data);

    if (response?.data?.response_code === 200) {
      console.log("Data Fetched Successfully");
      /*  toast.success("Successfully updated!"); */
      RazorPayShow();
    } else {
      console.log("Not Working");
    }
  };
  const handleVerify = async (response) => {
    console.log("handleVerify>>>", response);

    try {
      const bodyData = new FormData();
      bodyData.append("response", JSON.stringify(response));

      const otpdata = await Raz_Verify(bodyData);

      console.log("Verify Response:", otpdata);

      if (!otpdata || !otpdata.data) {
        console.error("No response from Raz_Verify API");
        return;
      }

      console.log("Verify Response:", otpdata.data);

      if (otpdata?.data?.response_code === 200) {
        console.log("Payment Successful");
      } else {
        console.log("Verification Failed");
      }
    } catch (error) {
      console.error("Error verifying payment", error);
    }
  };

  /*  useEffect(() => {
    RazApi();
  }, []); */

  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };
  const RazorPayShow = async () => {
    const isLoaded = await loadRazorpay();
    if (!isLoaded) {
      console.error("Failed to load Razorpay SDK");
      return;
    }

    if (typeof window.Razorpay === "undefined") {
      console.error("Razorpay SDK not found");
      return;
    }

    const options = {
      key: "rzp_test_sww6eyRpjsDmO2",
      amount: data?.total_payable_amount,
      currency: "INR",
      name: "AARA",
      description: "Test Transaction",
      image: "https://your-logo-url.com",
      order_id: data?.payment_no,
      handler: handleVerify,
      prefill: {
        name: selectedPlan?.name,
        email: "johndoe@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const navigate = useNavigate();
  return (
    <div className="w-[100%] ">
      <div className=" h-20 w-[100%] border-b-2 border-green-600">
        <div className=" mx-8 h-20  flex justify-between items-center">
          <div>
            <img
              className="w-[80%] cursor-pointer "
              onClick={() => navigate("/dash")}
              src="https://imgs.bharatmatrimony.com/bmimgs/bharatmatrimony-logo.png"
              alt=""
            />
          </div>
          <div className="flex  gap-x-5 items-center">
            <div className="text-[65%] tracking-wider mt-1">
              Need help in making payment?
            </div>
            <div className="flex gap-x-1 items-center">
              <div>
                {" "}
                <TextsmsIcon className="text-green-600 !text-sm " />
              </div>
              <div className="text-[70%] tracking-wide mt-1">Chat with us </div>
            </div>
            <div className="flex gap-x-1 items-center">
              <div>
                {" "}
                <PhoneIcon className="text-green-600 !text-[95%] " />
              </div>
              <div className="text-[85%] tracking-wide mt-1">7538895777</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col my-5 ">
        <div className="mx-auto  w-[100%] mt-3">
          <img
            className="w-[33%] mx-auto cursor-pointer "
            src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/money-back/mb-thumb-with-info.svg"
            alt=""
          />
        </div>
        <div className="mx-auto text-3xl mt-3 font-bold tracking-tight">
          Pay now to contact matches
        </div>
        <div className=" mx-auto">
          <div className="flex mx-auto gap-x-2 mt-7">
            <div>
              <TiTick className="text-lg mt-1  text-[#f2090b] font-bold" />
            </div>
            <div>
              Send <span className="font-semibold">unlimited messages</span> &{" "}
              <span className="font-semibold">chat</span>, view{" "}
              <span className="font-semibold">50 verified mobile numbers*</span>{" "}
            </div>
          </div>
          <div className="flex mx-auto gap-x-2 mt-3">
            <div>
              <TiTick className="text-lg mt-1  text-[#f2090b] font-bold" />
            </div>
            <div>
              Check <span className="font-semibold">compatibility</span> with
              matches by viewing{" "}
              <span className="font-semibold">unlimited horoscopes</span>{" "}
            </div>
          </div>
          <div className="flex mx-auto gap-x-2 mt-3">
            <div>
              <RxCross2 className="text-sm mt-1.5  text-gray-500 font-bold" />
            </div>
            <div className="text-gray-500 line-through">
              View and contact{" "}
              <span className="font-semibold">
                ID verified matches with photos
              </span>{" "}
              from{" "}
              <span className="font-semibold">exclusive Prime section</span>
            </div>
          </div>
          <div className="flex mx-auto gap-x-2 mt-3">
            <div>
              <RxCross2 className="text-sm mt-1.5  text-gray-500 font-bold" />
            </div>
            <div className="text-gray-500 line-through">
              <span className="font-semibold">Priority customer service</span>{" "}
              helpline
            </div>
          </div>
          <div className="flex mx-auto gap-x-2 mt-3">
            <div>
              <RxCross2 className="text-sm mt-1.5  text-gray-500 font-bold" />
            </div>
            <div className="text-gray-500 line-through">
              View and contact{" "}
              <span className="font-semibold">
                ID verified matches with photos
              </span>{" "}
              from{" "}
              <span className="font-semibold">exclusive Prime section</span>
            </div>
          </div>

          <div className="grid grid-cols-3 my-5  ">
            {Array.isArray(data) &&
              data?.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col   mt-${
                    (index % 2) + 16
                  } cursor-pointer border rounded-lg py-5 h-fit w-[90%] ${
                    selectedPlan?.id === item?.id
                      ? "border-[#f2090b] border-4 shadow-xl bg-red-50"
                      : "border-gray-400"
                  }`}
                  onClick={() => {
                    setSelectedPlan(item);
                    /* handlePlanSelection(index, item.price); */
                  }}
                >
                  {/*  <div className="border rounded-full border-gray-400   hover:bg-gray-300 cursor-pointer h-5 w-5 mx-auto"></div> */}
                  {item.plan_type === "Gold" && (
                    <div className="absolute lg:top-[83.4%] md:top-[69%] hidden md:block   lg:left-[42.2%] md:left-[37.2%] border-t text-center text-white  bg-[#f2090b] md:w-[23%] w-[30%] left-[33.2%] lg:w-[14%] font-bold px-3 py-1 rounded-t-md text-medium">
                      Best Seller
                    </div>
                  )}
                  <div className="mx-auto text-center pb-2 font-semibold mt-5 border-b w-[70%]">
                    {item.plan_type}{" "}
                  </div>

                  <div className="mx-auto font-semibold mt-2 text-center pb-2 border-b w-[70%]">
                    {item.plan_validity}{" "}
                  </div>
                  <div className="mx-auto font-semibold text-green-700 mt-2">
                    SAVE {(100 - (item.price / item.mrp) * 100).toFixed(2)}%
                  </div>
                  <div className="mx-auto font-semibold text-gray-400 line-through mt-2">
                    ₹ {item.mrp}{" "}
                  </div>
                  <div className="mx-auto font-bold text-xl  mt-2">
                    ₹{item.price}{" "}
                  </div>
                </div>
              ))}
          </div>
          {/* ))} */}
          <div className="border-t  border-gray-500 my-8 w-[50%] mx-auto relative z-20 ">
            <div className=" w-[50%] h-7 text-sm absolute -top-5 left-[25%] mt-2 text-center bg-white   ">
              Offer Valid Only Today!
            </div>
          </div>
          <div className="my-5 flex">
            {selectedPlan !== null && (
              <button
                onClick={handlePayment}
                className="cursor-pointer border text-sm font-semibold text-white bg-[#f2090b] w-[40%] mx-auto  text-center rounded-3xl p-2"
              >
                Pay Now ₹{selectedPlan.price || 0}
              </button>
            )}
          </div>
          <div className="flex text-[#f2090b] mx-auto w-[50%] my-5 justify-center text-sm items-center font-semibold">
            <div>View All Packages</div>
            <div>
              <KeyboardArrowRightIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-36 flex justify-around my-5">
        <div>
          <img
            src="https://imgs.bharatmatrimony.com/bmimgs/payments/payment-footer-vbv-icon.png?v=1"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://imgs.bharatmatrimony.com/bmimgs/payments/payment-footer-master-icon.png?v=1"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://imgs.bharatmatrimony.com/bmimgs/payments/payment-footer-pci-icon.png?v=1"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://imgs.bharatmatrimony.com/bmimgs/payments/payment-footer-trustwave-icon.png?v=1"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://imgs.bharatmatrimony.com/bmimgs/payments/payment-footer-safekey-icon.png?v=1"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://imgs.bharatmatrimony.com/bmimgs/payments/payment-footer-vbv-icon.png?v=1"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://imgs.bharatmatrimony.com/bmimgs/payments/payment-footer-verisign-icon.png?v=1"
            alt=""
          />
        </div>
      </div>
      <div className="border mx-auto w-[90%] my-8"></div>
      <div className="my-4 text-center">
        Copyright © 2025 All rights reserved.
      </div>
      <Toaster />
    </div>
  );
};

export default Upgrade;
