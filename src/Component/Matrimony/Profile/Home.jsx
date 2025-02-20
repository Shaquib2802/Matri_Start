import React, { useState } from "react";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const [isOpen1, setIsOpen1] = useState(false);

  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
  };

  return (
    <div  className="w-[100%]">
    <div className=" ">
      <div className="mt-8">
        <img
          src="https://imgs.bharatmatrimony.com/bmimgs/safematrimony-homepage-bnr.jpg"
          alt=""
        />
      </div>
      <div className="text-xl font-bold mt-6">Why Safe Matrimony?</div>
      <div className="mt-6 text-sm tracking-wide">
        While online matchmaking helps millions of Indians find a life partner
        year after year, a few experience frauds. As the biggest matrimony
        service for Indians, it's our responsibility to ensure that your
        matchmaking journey is a safe one. Matrimony.com's 'Safe Matrimony', a
        10-year-old initiative, educates users on staying safe while searching
        for their life partner. At Matrimony.com, we are committed to making the
        matchmaking experience safe for our members. We have implemented
        multiple procedures to ensure this. Simultaneously, we also encourage
        all our members to remain vigilant. May your journey with Matrimony.com
        lead you to the perfect partner, creating a lifetime of shared joy and
        love!
      </div>
      <div className="flex mt-6 gap-x-5">
        <div className=" w-[60%] rounded-md ">
          <div className="border rounded-md shadow-lg p-4">
            <div
              className="flex justify-between items-center cursor-pointer "
              onClick={toggleDropdown}
            >
              <span className="font-bold text-lg">
                Your Safety is our priority
              </span>
              <span className="text-xl font-semibold">
                {isOpen ? "-" : "+"}
              </span>
            </div>
            {isOpen && (
              <div className="mt-4 text-sm">
                <div className="font-bold">Choose who views your photo</div>
                <div>
                  You can control who views your photos by showing them only to
                  select members or even hide them completely.
                </div>
                <div className="font-bold mt-2">
                  Choose who sees your number
                </div>
                <div>
                  You can show your number only to members who contacted you or
                  responded to your interest. Or reveal it only to Premium
                  Members from your community.
                </div>
                <div className="font-bold mt-2">Safety for women</div>
                <div>
                  Women, can turn on the "Secure Connect" feature to get calls
                  from members without revealing their own number.
                </div>
                <div className="font-bold mt-2">Protect your horoscope</div>
                <div>
                  You can choose to show your horoscope only to members who
                  contacted you or responded to your interest. In fact, you can
                  even hide your horoscope from being viewed.
                </div>
              </div>
            )}
          </div>
          <div className="border my-3 p-4 shadow-lg rounded-md">
            <div
              className="flex justify-between items-center cursor-pointer   "
              onClick={toggleDropdown1}
            >
              <span className="font-bold text-lg">How to be safe?</span>
              <span className="text-xl font-semibold">
                {isOpen1 ? "-" : "+"}
              </span>
            </div>
            {isOpen1 && (
              <div className="mt-4 text-sm">
                <div className="font-bold">
                  Never reveal your account details
                </div>
                <div>
                  Keep your matrimony profile username and password safe. No one
                  from BharatMatrimony or any of our matrimony services will
                  ever ask you for the same
                </div>
                <div className="font-bold mt-2">
                  Never make any financial transaction
                </div>
                <div>
                  Never engage in financial transactions during your search for
                  a life partner, even if presented with plausible scenarios
                  like a gift for you stuck at Customs Duty, Emergency Cash
                  Requirement, etc
                </div>
                <div className="font-bold mt-2">
                  End video calls upon encountering explicit content
                </div>
                <div>
                  Terminate video calls upon encountering explicit content. If a
                  member requests or displays obscene content during a video
                  call, disconnect immediately, report the profile as abuse, and
                  block it
                </div>
                <div className="font-bold mt-2">
                  Ensure a secure meeting with your match in a public setting
                </div>
                <div>
                  Arrange to meet your matches only in secure public locations,
                  and always ensure your friends or family are aware of your
                  plans.
                </div>
                <div className="font-bold mt-2">
                  Do not share any personal information
                </div>
                <div>
                  Never share your personal information like Aadhar, Pan card or
                  any other government ids. Do not disclose your bank account,
                  Demat account details, email passwords etc. If someone tries
                  to generate a pin number or a password on your behalf and asks
                  you for the same to complete any kind of transaction refrain
                  them from doing so and do not share this information.
                </div>
              </div>
            )}
          </div>
        </div>
        <div className=" w-[40%] p-4">
          <div className="text-xl font-semibold border-b pb-1 border-gray-600 border-dotted">
            Contact Us
          </div>
          <div className="font-semibold mt-3">Matrimony.com Helpline</div>
          <div className="text-xs mt-2">
            Report any profile you find suspicious or wrongly misrepresenting
            themselves.
          </div>
          <div className="text-xs mt-2">Reach us and we shall assist you.</div>
          <div className="text-xs mt-3">
            Phone : <span className="text-blue-600">+91-8144998877</span>
          </div>
          <div className="text-xs mt-2">
            Email :{" "}
            <span className="text-blue-600">helpdesk@bharatmatrimony.com</span>
          </div>
          <div className="font-semibold mt-7">Cyber Cell Contact Details</div>
          <div className="text-xs mt-5">
          Any acts related to identity theft, e-mail scams, and obscene content can also be reported to the Cyber Cell.
          </div>
          <div  className="text-blue-600 text-xs mt-3">Find Details Here</div>
        </div>
      </div>
      <div className=" font-semibold p-5">We hereby declare that BharatMatrimony website is not a dating website and it is strictly for matrimonial purpose only.
      </div>
    </div>
      
    </div>
  );
};

export default Home;
