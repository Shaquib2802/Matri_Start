import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import React, { useState } from "react";
import { SignUP } from "../../Service/SignUP";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    mobile_number: "",
    gender: "",
    age: "",
    religion: "",
    location: "",
    address: "",
    income: "",
    profession: "",
    height: "",
    marital_status: "",
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
    sign();
    console.log(data);
  };
  const sign = async () => {
    const data1 = await SignUP(data);
    
    console.log(data1, "DataPost");
    localStorage.setItem("token",data1?.data?.token_key)
  };

  return (
    <div className="w-[100%]">
      <div className=" md:w-[70%] md:ml-[80%] border bg-green-600 rounded-3xl mx-auto  z-50 ">
        <div className="text-white text-center font-semibold text-lg md:text-2xl py-2 md:py-4">
          Create a Matrimony Profile
        </div>
        <div>
          <div className="text-center text-white font-semibold md:font-normal text-lg md:text-xl py-2 md:py-4">
            Find your perfect match
          </div>
          <form
            onSubmit={handleSubmit}
            className="bg-white grid grid-cols-2 pt-5 border border-gray-600 rounded-3xl pb-5 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={data.email}
              className="   w-[90%] md:w-[80%] mx-auto border border-black placeholder:text-black pl-3 p-1 md:p-1 rounded-lg outline-none  "
              placeholder=" Enter Email"
            />
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={data.password}
              className=" mt-2  w-[90%] md:w-[80%] mx-auto border border-black placeholder:text-black pl-3 p-1 md:p-1 rounded-lg outline-none  "
              placeholder=" Enter Password"
            />
            <input
              type="number"
              name="mobile_number"
              onChange={handleChange}
              value={data.mobile_number}
              className=" mt-2  w-[90%] md:w-[80%] mx-auto border border-black placeholder:text-black pl-3 p-1 md:p-1 rounded-lg outline-none  "
              placeholder=" Enter Number"
            />
            <input
              type="text"
              name="gender"
              onChange={handleChange}
              value={data.gender}
              className=" mt-2  w-[90%] md:w-[80%] mx-auto border border-black placeholder:text-black pl-3 p-1 md:p-1 rounded-lg outline-none  "
              placeholder=" Enter Gender"
            />
            <input
              type="text"
              name="age"
              onChange={handleChange}
              value={data.age}
              className=" mt-2  w-[90%] md:w-[80%] mx-auto border border-black placeholder:text-black pl-3 p-1 md:p-1 rounded-lg outline-none  "
              placeholder=" Enter Age"
            />
            <input
              type="text"
              name="religion"
              onChange={handleChange}
              value={data.religion}
              className=" mt-2  w-[90%] md:w-[80%] mx-auto border border-black placeholder:text-black pl-3 p-1 md:p-1 rounded-lg outline-none  "
              placeholder=" Enter religion"
            />
            <input
              type="text"
              name="location"
              onChange={handleChange}
              value={data.location}
              className=" mt-2  w-[90%] md:w-[80%] mx-auto border border-black placeholder:text-black pl-3 p-1 md:p-1 rounded-lg outline-none  "
              placeholder=" Enter Location"
            />

            <input
              type="text"
              name="address"
              onChange={handleChange}
              value={data.address}
              className=" mt-2  w-[90%] md:w-[80%] mx-auto border border-black placeholder:text-black pl-3 p-1 md:p-1 rounded-lg outline-none  "
              placeholder=" Enter Address"
            />

            <input
              type="text"
              name="income"
              onChange={handleChange}
              value={data.income}
              className=" mt-2  w-[90%] md:w-[80%] mx-auto border border-black placeholder:text-black pl-3 p-1 md:p-1 rounded-lg outline-none  "
              placeholder=" Enter Income"
            />

            <input
              type="text"
              name="profession"
              onChange={handleChange}
              value={data.profession}
              className=" mt-2  w-[90%] md:w-[80%] mx-auto border border-black placeholder:text-black pl-3 p-1 md:p-1 rounded-lg outline-none  "
              placeholder=" Enter profession"
            />

            <input
              type="text"
              name="height"
              onChange={handleChange}
              value={data.height}
              className=" mt-2  w-[90%] md:w-[80%] mx-auto border border-black placeholder:text-black pl-3 p-1 md:p-1 rounded-lg outline-none  "
              placeholder=" Enter height"
            />

            <input
              type="text"
              name="marital_status"
              onChange={handleChange}
              value={data.marital_status}
              className=" mt-2  w-[90%] md:w-[80%] mx-auto border border-black placeholder:text-black pl-3 p-1 md:p-1 rounded-lg outline-none  "
              placeholder=" Enter marital_status"
            />

            <button
              type="submit"
              className="text-white bg-[#f2090b] w-[90%] md:w-[80%] p-2 mx-auto rounded-lg mt-5 md:mt-10 font-semibold"
            >
              REGISTER FREE
              <TrendingFlatIcon className="ml-2" />
            </button>
            <div className="text-xs text-gray-600 text-center  mt-5 w-[100%] ">
              *By clicking register free, I agree to the T&C and Privacy Policy
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
