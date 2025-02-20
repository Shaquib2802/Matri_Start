import React, { useState } from "react";
import { RiAdminFill } from "react-icons/ri";

const Form_admin = () => {

  const [data, setData] = useState({
    mobile: "",
    password:""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(data);
  };
   

  return (
    <div className=" w-[100%] bg-orange-400 h-screen flex justify-center items-center">
      <div className="w-[40%] rounded-lg bg-white p-10 m-auto justify-center gap-y-5 items-center flex flex-col">
        <div className="text-7xl">
          <RiAdminFill />
        </div>
        <div className="text-4xl font-semibold ">Admin Login</div>
        <form className="w-[80%] " onSubmit={handleSubmit}>
          <input
            type="text"
            name="mobile"
            onChange={handleChange}
            value={data.mobile}
            className="w-[100%] outline-none p-1 border-2 rounded-md border-black mt-10"
            placeholder="Enter your Email/Mobile No,"
          />
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={data.mobile}
            className="w-[100%] outline-none border-2 rounded-md border-black mt-5 p-1"
            placeholder="Enter your Password"
          />
          <div className="w-[100%] flex justify-center mt-5">
          <button type="submit" className=" border-2 border-black  rounded-md p-1 font-semibold bg-orange-400  w-[60%]">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form_admin;
