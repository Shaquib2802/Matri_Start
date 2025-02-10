import React from "react";
import Header from "./Header1/Header";
import Bottom1 from "./Bottom/Bottom1";

const Cart = () => {
  return (
    <div>
      <Header />
      <div className="border lg:grid lg:grid-cols-2">
        <div className="  w-[80%] mx-auto">
          <img
            src="https://img.freepik.com/free-vector/shopping-cart-realistic_1284-6011.jpg?w=740&t=st=1685783526~exp=1685784126~hmac=6800dbb249248d9a3c102b95ec55d020ded3646bbede85b4c57bd6717d0c9289"
            alt=""
          />
        </div>
        <div className=" flex flex-col  justify-center ">
          <div className=" text-2xl  lg:text-4xl mx-auto font-semibold ">
            Your cart is Empty
          </div>
          <div className="bg-rose-500 mb-5 lg:mb-0 w-36 h-8 text-sm text-white pl-5 pt-1 rounded-md mx-auto mt-2">
            START SHOPPING
          </div>
        </div>
      </div>
      <Bottom1 />
    </div>
  );
};

export default Cart;
