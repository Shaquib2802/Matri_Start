import React, { useEffect, useState } from "react";
import HeaderDash from "../Dash_Board/HeaderDash";
import Bottom_dash from "../Dash_Board/Bottom_dash";
import { Get_Blog, Get_F_and_Q } from "../../Service/Get_pref";

const Blog = () => {
      const [data, setData] = useState({});
          const DataApi = async () => {
            const response = await Get_Blog();
            console.log("data(Blog)):", response?.data);
            setData(response?.data?.data || {});
          };
        
          useEffect(() => {
            DataApi();
          }, []);
  return (
    <div>
      <HeaderDash />
      <div className="w-[100%] my-10">
        <div className="text-center text-5xl font-bold text-[#f2090b]">
          Our Journal
        </div>
        <div className="text-center mt-4 tracking-wider font-semibold">
          Get the latest articles from our journal, writing, discuss and share
        </div>
        <div className="text-4xl mt-5 font-semibold text-center text-[#f2090b]">
          POPULAR POSTS
        </div>
        <div className="grid grid-cols-3   w-[90%] mx-auto my-10 ">
        {/*   <div className="flex flex-col border rounded-lg shadow-xl  w-[90%] py-3">
            <div className=" flex justify-center ">
              <img
                className="w-[50%]"
                src={`http://192.168.1.188:8098/${data?.data?.images}`} alt="Profile" />
                
              
            </div>
            <div className="w-[57%]   mx-auto text-lg font-semibold mt-3">App Store Optimization (ASO): How to Make Your App Stand Out</div>
            <div className="text-xs mt-3 w-[55%] mx-auto text-gray-500 font-semibold">App Store Optimization (ASO): How to Make Your App Stand Out</div>
          </div>
          <div className="flex flex-col border rounded-lg shadow-xl  w-[90%] py-3">
            <div className=" flex justify-center ">
              <img
                className="w-[50%]"
                src="https://aaratechblog.s3.amazonaws.com/media/blog_images/Your_paragraph_text_85.png"
                alt=""
              />
            </div>
            <div className="w-[57%]   mx-auto text-lg font-semibold mt-3">App Store Optimization (ASO): How to Make Your App Stand Out</div>
            <div className="text-xs mt-3 w-[55%] mx-auto text-gray-500 font-semibold">App Store Optimization (ASO): How to Make Your App Stand Out</div>
          </div>
          <div className="flex flex-col border rounded-lg shadow-xl  w-[90%] py-3">
            <div className=" flex justify-center ">
              <img
                className="w-[50%]"
                src="https://aaratechblog.s3.amazonaws.com/media/blog_images/Your_paragraph_text_85.png"
                alt=""
              />
            </div>
            <div className="w-[57%]   mx-auto text-lg font-semibold mt-3">App Store Optimization (ASO): How to Make Your App Stand Out</div>
            <div className="text-xs mt-3 w-[55%] mx-auto text-gray-500 font-semibold">App Store Optimization (ASO): How to Make Your App Stand Out</div>
          </div> */}
          {Array.isArray(data) &&data?.map((item) => (
            <div
              key={item.id}
              className="flex flex-col border mt-5 rounded-lg shadow-xl w-[90%] py-3"
            >
              <div className="flex justify-center w-[60%] h-[80%] mx-auto border-2">
             
                <img
                  className="w-[100%] object-cover"
                  src={`http://192.168.1.188:8098/${item?.images }`}
                  alt="Photo Not Available"
                />
              </div>
              <div className="text-center  text-lg font-semibold mt-3">
                {item?.title}
              </div>
              <div className="text-xs mt-3 text-center text-gray-500 font-semibold">
                {item?.sub_title || "Sub title of the blog post"}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Bottom_dash/>
    </div>
  );
};

export default Blog;
