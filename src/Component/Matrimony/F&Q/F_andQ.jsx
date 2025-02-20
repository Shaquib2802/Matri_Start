import React, { useEffect, useState } from "react";
import HeaderDash from "../Dash_Board/HeaderDash";
import Bottom_dash from "../Dash_Board/Bottom_dash";
import { Get_F_and_Q } from "../../Service/Get_pref";

const F_andQ = () => {
  const [data, setData] = useState([]);
  const [openIndexes, setOpenIndexes] = useState([]);

  const DataApi = async () => {
    const response = await Get_F_and_Q();
    console.log("data(F&Q)>>>>:", response?.data?.data);
    setData(response?.data?.data || []);
  };

  useEffect(() => {
    DataApi();
  }, []);

  // Toggle function for each item
  const toggleDropdown = (index) => {
    setOpenIndexes((prevOpenIndexes) =>
      prevOpenIndexes.includes(index)
        ? prevOpenIndexes.filter((i) => i !== index)
        : [...prevOpenIndexes, index]
    );
  };

  return (
    <div>
      <HeaderDash />
      <div className='relative bg-[url("https://static-assets-web.flixcart.com/fk-sp-static/images/prelogin/banner/Desktop_faq_1.webp")] h-[50vh] bg-cover bg-no-repeat'>
        <div className="text-5xl font-semibold absolute top-[40%] left-[7%] text-[#f2090b]">
          Frequently Asked Questions
        </div>
      </div>

      <div className="w-[80%] mt-5 mx-auto rounded-md">
        {Array.isArray(data) &&
          data.map((item, index) => (
            <div key={index} className="border rounded-md shadow-lg p-4 mb-2">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleDropdown(index)}
              >
                <span className="font-bold text-lg">{item?.question}</span>
                <span className="text-xl font-semibold">
                  {openIndexes.includes(index) ? "-" : "+"}
                </span>
              </div>
              {openIndexes.includes(index) && (
                <div className="mt-4 text-sm">{item?.answer}</div>
              )}
            </div>
          ))}
      </div>

      <Bottom_dash />
    </div>
  );
};

export default F_andQ;
