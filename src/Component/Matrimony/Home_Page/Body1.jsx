import React from "react";
import Login from "./Login";

const Body1 = () => {
  
  return (
    <div className="w-[100%] bg-gray-50   ">
      <div className="p-5 md:p-14">
        <div className="text-xl md:text-3xl font-bold">
          The biggest and most trusted
        </div>
        <div className="text-xl md:text-3xl font-bold">
          matrimony service for Indians!
        </div>
        <div className="md:text-xl font-semibold mt-4">
          Now find matches based on your hobbies & interests
        </div>
      </div>
      <div
        className="w-full h-[80vh] bg-opacity-50 mt-28 md:mt-0 bg-black relative"
        style={{
          backgroundImage:
            "url('https://i.postimg.cc/pThbxY7k/bg-home-grop-img-bharat.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className=" h-full  bg-white bg-opacity-50 z-40 ">
          <div className="absolute   md:w-[70vw] lg:w-[45vw] w-[80vw] -top-28 md:-top-56 left-[10%] md:-left-[10%] lg:left-[20%]">
            <Login />
          </div>
          <div className=" py-10 border rounded-lg    bg-white absolute z-20 w-[85%] top-[70%]  left-[8%] mt-0 ">
            <div className="flex justify-evenly items-center rounded-md">
              <div className="flex flex-col gap-y-3 w-[30%]  justify-start gap-x-4 m-10 md:m-0 ">
                <div className="mx-auto">
                  <img
                    className=" mt-1"
                    src="https://imgs.bharatmatrimony.com/bmimgs/homepage-revamp-images/records-new-1.svg"
                    alt=""
                  />
                </div>

                <div className="font-bold text-2xl md:text-4xl text-center">
                  100%
                </div>
                <div className="text-lg tracking-wider text-center">
                  Mobile-verified profiles
                </div>
              </div>
              <div className="flex flex-col w-[30%] gap-y-3 border-l border-gray-400 border-r justify-start gap-x-4 m-10 md:m-0 ">
                <div className="mx-auto">
                  <img
                    className=" mt-1"
                    src="https://imgs.bharatmatrimony.com/bmimgs/homepage-revamp-images/records-new-2.svg"
                    alt=""
                  />
                </div>

                <div className="font-bold text-2xl md:text-4xl text-center">
                  4 Crores+
                </div>
                <div className="text-lg tracking-wider text-center">
                  Customers served
                </div>
              </div>
              <div className="flex flex-col w-[30%] gap-y-3  justify-start gap-x-4 m-10 md:m-0 ">
                <div className="mx-auto">
                  <img
                    className=" mt-1"
                    src="https://imgs.bharatmatrimony.com/bmimgs/homepage-revamp-images/records-new-3.svg"
                    alt=""
                  />
                </div>

                <div className="font-bold text-2xl md:text-4xl text-center">
                  24 Years
                </div>
                <div className="text-lg tracking-wider text-center">
                  of successful matchmaking
                </div>
              </div>
            </div>
            <div className=" w-[80%] border shadow-lg rounded-lg  mx-auto mt-28">
              <div className="flex p-4  justify-between ">
                <div className="w-[25%] ">
                  <img
                    src="https://imgs.bharatmatrimony.com/bmimgs/homepage-revamp-images/limca-records-img-new.png?0"
                    alt=""
                  />
                </div>
                <div className="text-xl border-l w-[60%] p-5  tracking-wider">
                  Featured in the Limca Book of Records for highest number of
                  documented marriages online
                </div>
              </div>
              <div className="absolute top-[50%] left-[5%]">
                <img
                  src="https://imgs.bharatmatrimony.com/bmimgs/homepage-revamp-images/records-corner-loading.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[31%] bg-white">
        <div className="flex  justify-center py-24">
          <div className=" w-[50%]">
            <img
              src="https://imgs.bharatmatrimony.com/bmimgs/homepage-revamp-images/relevant-filters-img-new.png"
              alt=""
            />
          </div>
          <div className="flex flex-col  w-[40%] justify-center gap-y-5">
            <div className="font-bold text-4xl w-[70%]">
              Choose by Interests, Location and other relevant filters
            </div>
            <div className="tracking-wide text-lg text-gray-900 w-[80%] ">
              Customize your partner search with filters like Hobbies, Location
              and more. Find your suitable match!
            </div>
          </div>
        </div>
        <div className="flex  justify-center py-2">
          <div className="flex flex-col  w-[50%] justify-center gap-y-7 pl-16">
            <div className="font-bold text-5xl w-[90%]  ">
              Connect with matches the way you like
            </div>
            <div className="flex justify-start items-center gap-x-5">
              <div>
                <img
                  src="https://imgs.bharatmatrimony.com/bmimgs/homepage-revamp-images/connect-matches-list-1.svg"
                  alt=""
                />
              </div>
              <div className="flex flex-col">
                <div className="font-bold text-3xl">Voice call</div>
                <div className="tracking-wide text-lg text-gray-900 ">Talk to matches directly through voice calls</div>
              </div>
            </div>
            <div className="flex justify-start items-center gap-x-5">
              <div>
                <img
                  src="https://imgs.bharatmatrimony.com/bmimgs/homepage-revamp-images/connect-matches-list-2.svg"
                  alt=""
                />
              </div>
              <div className="flex flex-col">
                <div className="font-bold text-3xl">
                Message</div>
                <div className="tracking-wide text-lg text-gray-900 ">Connect with matches instantly through messaging
                </div>
              </div>
            </div>
            <div className="flex justify-start items-center gap-x-5">
              <div>
                <img
                  src="https://imgs.bharatmatrimony.com/bmimgs/homepage-revamp-images/connect-matches-list-3.svg"
                  alt=""
                />
              </div>
              <div className="flex flex-col">
                <div className="font-bold text-3xl">Video call
                </div>
                <div className="tracking-wide text-lg text-gray-900 ">Meet your matches virtually with video calls
                </div>
              </div>
            </div>
          </div>
          <div className=" w-[45%]">
            <img
              src="https://imgs.bharatmatrimony.com/bmimgs/homepage-revamp-images/connect-matches-img.png?0"
              alt=""
            />
          </div>
        </div>
        {/* <div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum alias quaerat inventore delectus voluptatibus commodi hic qui adipisci animi corporis.</div>
          <div className="bg-blue-50 w-[50%] mx-auto">
            <video src="https://www.bharatmatrimony.com/youtube-video.html"></video>
          </div>
        </div> */}
        <div className="bg-gray-50">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, consequatur delectus porro omnis aliquam hic quia voluptates tempore deleniti qui?
        </div>
      </div>
    </div>
  );
};

export default Body1;
