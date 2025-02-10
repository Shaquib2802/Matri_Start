import React from "react";
import { ImCross } from "react-icons/im";

const Form = () => {
  return (
    <div>
      <form
    
        className="grid grid-cols-2 border w-[50%] bg-white mx-auto relative"
      >
        <div>
          <img
            src="https://pub-027efb0add534c4fbed7432cf1c407a1.r2.dev/Assets/login-img.jpeg"
            alt=""
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="text-2xl font-semibold">Welcome Back</div>
          <div className="text-gray-600 font-semibold ">
            Sign in to complete your shopping
          </div>
          <div>
            <input
              type="text"
              className="border  w-60 border-gray-200 h-9 rounded-md mt-8  placeholder:pl-4 placeholder:text-gray-600  "
              placeholder="Mobile Number"
            />
          </div>

          <div className="w-60 text-white bg-orange-400 font-semibold  h-10 rounded-md text-center mt-7 py-2">
            Login
          </div>
          <div className="w-60 text-xs mt-2">
            by signing in, you are conforming that you have accepted our{" "}
            <span className="text-blue-500">Privacy & Policy</span>
          </div>
        </div>

        <div>
          <ImCross  className="absolute top-2 right-1"/>
        </div>
      </form>
    </div>
  );
};

export default Form;
