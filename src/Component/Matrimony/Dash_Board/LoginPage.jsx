import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";


const LoginPage = ({ isOpen, onClose }) => {
  const [data, setData] = useState({
    mobile: "",
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
   
  

  if (!isOpen) return null; // Render nothing if modal is not open

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-[90%] md:w-[40%] border rounded-2xl p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        <div className="flex gap-x-2">
          <div>
            <ArrowBackIcon />
          </div>
          <div className="font-semibold text-xl">Login with OTP</div>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col mx-auto mt-6">
          <div>
            <img
              className="mx-auto"
              src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/login-revamp/login-page-icon.svg"
              alt=""
            />
          </div>
          <div className="text-center mt-7 font-semibold text-lg w-[85%] mx-auto">
            Enter your registered mobile number and we will send you an OTP for login.
          </div>
          <div className="w-[85%] my-5 border border-black rounded-md flex mx-auto">
            <div className="w-[25%] bg-gray-100 rounded-md flex items-center gap-x-1.5 p-1 justify-center">
              <div className="border w-[20%] h-[20%]">
                <img
                  className="w-[90%] -mt-0.5"
                  src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/country-flags/INDIA.svg"
                  alt=""
                />
              </div>
              <div className="text-sm font-semibold">+91</div>
              <div>
                <KeyboardArrowDownIcon />
              </div>
            </div>
            <div className="w-[75%] p-2">
              <input
                type="number"
                name="mobile"
                onChange={handleChange}
                value={data.mobile}
                placeholder="Enter mobile number"
                className="placeholder: border-none ml-1 w-full"
              />
            </div>
          </div>
          <button
            type="submit"
            className="p-1 border bg-blue-700 font-semibold text-white hover:bg-blue-800 rounded-2xl w-[85%] mx-auto"
          >
            Generate OTP
          </button>
          <div className="font-semibold mx-auto text-sm my-4 text-center text-orange-400">
            Login with password
          </div>
          <div className="border-dashed border-gray-300 w-[85%] mx-auto border"></div>
          <div className="mt-4 text-sm font-semibold text-center mx-auto">
            Need Help in Login? Call +91 8144998877
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
