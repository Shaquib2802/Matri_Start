import React, { useEffect, useState } from "react";
import { TbEyeFilled } from "react-icons/tb";
import { MdEdit } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";
import Bottom_dash from "../Dash_Board/Bottom_dash";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { Get_Edit_Prof } from "../../Service/Get_pref";
import { Edit_Update } from "../../Service/Update_pref";
import { useFormik } from "formik";

const Body_Pro = () => {
  const [open1, setOpen1] = useState(false);
  const handleOpen = () => {
    setOpen1(!open1);
  };

  const handleClose = () => {
    setOpen1(false);
  };
  const [data, setData] = useState({});

  const DataApi = async () => {
    const response = await Get_Edit_Prof();
    console.log("data(Item_Edit):", response?.data);
    setData(response?.data?.data || {});
  };

  useEffect(() => {
    DataApi();
  }, []);

  const formik = useFormik({
    initialValues: {
      preference_id: data?.id || "",
      age: data?.age || "", //
      profile_picture: data?.profile_picture || "", //
      religion: data?.religion || "", //
      location: data?.location || "", //
      /* profile_picture: data?.profile_picture || "", */
      marital_status: data?.marital_status || "", //
      height: data?.height || "", //  
      address: data?.address || "", //
      income: data?.income || "", //
      ceate_profile_for: data?.ceate_profile_for || "", //
      user_name: data?.user_name || "", //
      gender: data?.gender || "", //
      mobile: data?.mobile_number || "", //
      mother_tounque: data?.mother_tounque || "", //
      profession: data?.profession || "", //
      /* date_of_birth: data?.date_of_birth || "", */
      skin_col: data?.skin_colour || "",
      diet: data?.diet || "",
      add: data?.address || "",
    },
    enableReinitialize: true,
    onSubmit: async (values) => {
      const data = await Edit_Update(values);

      console.log("data", data?.data);

      if (data.data.response_code === 200) {
        toast.success("successfully complete");
        handleClose();
        DataApi();
      }
    },
  });

  const navigate = useNavigate();
  return (
    <div className="w-[100%] h-[100%] pt-10 bg-gray-100">
      <div className="flex mx-32    gap-x-5 ">
        <div className="w-[75%]">
          {/* <div className="border-b-4 border-gray-300  bg-white  ">
            <div className="flex w-[100%] p-5 gap-x-5">
             
              <div className="w-[54%]  flex flex-col">
                <div className="font-bold text-2xl">Mohd Arfat</div>
                <div className="text-sm text-gray-500 font-semibold">
                  Profile created for My Self
                </div>
                <div className="text-sm mt-0.5 tracking-wide">
                  22 Yrs, 5 Ft 3 In / 160 Cms
                </div>
                <div className="text-sm mt-2">
                  Muslim - Sunni, Muslim - Sheikh
                </div>
                <div className="text-sm mt-2">
                  Lucknow, Uttar Pradesh, India
                </div>
                <div className="text-sm mt-2">BCA, Software Professional</div>
                <div className="mt-2 text-sm">
                  <span className="font-semibold">+91-8795376971</span> ({" "}
                  <span className="text-green-500">Verified</span> ){" "}
                  <span className="text-blue-500">Edit Mobile No</span>{" "}
                </div>
              </div>
              <div className="w-[23%] flex flex-col mt-5">
                <div className="text-sm text-center text-gray-600">
                  How your profile looks to others
                </div>
                <div className="flex border rounded-md border-gray-200 items-center justify-around mt-2">
                  <div>
                    <TbEyeFilled className="text-2xl text-blue-700" />
                  </div>
                  <div
                    className="text-blue-600 cursor-pointer"
                    onClick={() => navigate("/prev")}
                  >
                    Profile Preview
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/*   <div className="bg-[#567CBD] h-[35vh] p-5 my-10">
            <div className="text-white text-xl font-semibold">
              Photos are the first thing that prospects look at.
            </div>
            <div className="text-white">
              Add your photo and get 10 times more responses!
            </div>
            <div className="flex mt-5 gap-x-3 ">
              <div className="border border-black rounded-md text-sm text-white py-1 px-2">
                Skip
              </div>
              <div className="border rounded-md border-white text-white font-semibold bg-orange-400 p-1 text-sm">
                Upload Photos Now
              </div>
            </div>
          </div> */}

          <div className="bg-white flex flex-col border-b-4 my-5  p-5">
            <div className="flex justify-between">
              <div className="text-xl text-gray-600">Basic Details</div>
              <div
                onClick={handleOpen}
                className="flex bg-blue-500 p-1 items-center gap-x-1"
              >
                <div>
                  <MdEdit className="mt-0.5  text-xs text-white" />
                </div>
                <div className="text-xs text-white">Edit</div>
              </div>
              {open1 && (
                <div className="fixed inset-0 pt-16  flex items-center justify-center bg-black bg-opacity-50 z-40">
                  <form
                    onSubmit={formik.handleSubmit}
                    encType="multipart/form-data"
                    className="border-2 flex flex-col justify-center   w-[80%] h-[85vh]  bg-white  relative"
                  >
                    <div
                      className="absolute cursor-pointer right-2 top-0 font-semibold"
                      onClick={handleClose}
                    >
                      x
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <div className="text-2xl -mt-5 font-semibold text-black">
                        Partner Basic Details
                      </div>
                      <div className="text-gray-700 font-semibold  text-sm">
                        Brief outline of personal information
                      </div>
                      <div className=" w-[80%]  border-2 flex flex-col justify-center items-center ">
                        <div className="grid grid-cols-3 my-2 gap-3">
                          <div>
                            <label>Age:</label> <br />
                            <input
                              type="text"
                              name="age"
                              onChange={formik.handleChange}
                              value={formik.values.age}
                              className="outline-none border border-black rounded-md  placeholder: pl-2 w-[90%] "
                              placeholder="Enter Age"
                            />
                          </div>
                          <div>
                            <label>Religion:</label> <br />
                            <input
                              type="text"
                              name="religion"
                              onChange={formik.handleChange}
                              value={formik.values.religion}
                              className="outline-none border border-black rounded-md placeholder: pl-2 w-[90%]  "
                              placeholder="Enter Age"
                            />
                          </div>
                          <div>
                            <label>Photos:</label> <br />
                            <input
                              type="file"
                              name="profile_picture"
                              onChange={(e) =>
                                formik.setFieldValue(
                                  "profile_picture",
                                  e.target.files[0]
                                )
                              }
                              className="outline-none border border-black rounded-md placeholder: pl-2 w-[90%]"
                              placeholder="Enter Image"
                            />
                          </div>
                          <div>
                            <label>Location:</label> <br />
                            <input
                              type="text"
                              name="location"
                              onChange={formik.handleChange}
                              value={formik.values.location}
                              className="outline-none border border-black rounded-md placeholder: pl-2 w-[90%]  "
                              placeholder="Enter Age"
                            />
                          </div>
                          <div>
                            <label>Marital Status:</label> <br />
                            <input
                              type="text"
                              name="marital_status"
                              onChange={formik.handleChange}
                              value={formik.values.marital_status}
                              className="outline-none border border-black rounded-md placeholder: pl-2 w-[90%]  "
                              placeholder="Enter Age"
                            />
                          </div>
                          <div>
                            <label>Height:</label> <br />
                            <input
                              type="text"
                              name="height"
                              onChange={formik.handleChange}
                              value={formik.values.height}
                              className="outline-none border border-black rounded-md placeholder: pl-2 w-[90%]  "
                              placeholder="Enter Age"
                            />
                          </div>
                          <div>
                            <label>Address:</label> <br />
                            <input
                              name="address"
                              onChange={formik.handleChange}
                              value={formik.values.address}
                              type="text"
                              className="outline-none border border-black rounded-md placeholder: pl-2 w-[90%]  "
                              placeholder="Enter Age"
                            />
                          </div>
                          <div>
                            <label>Income:</label> <br />
                            <input
                              name="income"
                              onChange={formik.handleChange}
                              value={formik.values.income}
                              type="text"
                              className="outline-none border border-black rounded-md placeholder: pl-2 w-[90%]  "
                              placeholder="Enter Age"
                            />
                          </div>
                          <div>
                            <label>Created For:</label> <br />
                            <input
                              name="ceate_profile_for"
                              onChange={formik.handleChange}
                              value={formik.values.ceate_profile_for}
                              type="text"
                              className="outline-none border border-black rounded-md placeholder: pl-2 w-[90%]  "
                              placeholder="Enter Created For"
                            />
                          </div>
                          <div>
                            <label>Name:</label> <br />
                            <input
                              name="user_name"
                              onChange={formik.handleChange}
                              value={formik.values.user_name}
                              type="text"
                              className="outline-none border border-black rounded-md placeholder: pl-2 w-[90%]  "
                              placeholder="Enter Name"
                            />
                          </div>
                          <div>
                            <label>Gender:</label> <br />
                            <input
                              name="gender"
                              onChange={formik.handleChange}
                              value={formik.values.gender}
                              type="text"
                              className="outline-none border border-black rounded-md placeholder: pl-2 w-[90%]  "
                              placeholder="Enter Gender: "
                            />
                          </div>
                          <div>
                            <label>Mobile:</label> <br />
                            <input
                              name="mobile"
                              onChange={formik.handleChange}
                              value={formik.values.mobile}
                              type="text"
                              className="outline-none border border-black rounded-md placeholder: pl-2 w-[90%]  "
                              placeholder="Enter Mobile No"
                            />
                          </div>
                          <div>
                            <label>Mother Tongue</label> <br />
                            <input
                              name="mother_tounque"
                              onChange={formik.handleChange}
                              value={formik.values.mother_tounque}
                              type="text"
                              className="outline-none border border-black rounded-md placeholder: pl-2 w-[90%]  "
                              placeholder="Enter Mother Tongue "
                            />
                          </div>
                          {/* <div>
                            <label>Date of Birth:</label> <br />
                            <input
                              type="text"
                              name="date_of_birth"
                              onChange={formik.handleChange}
                              value={formik.values.date_of_birth}
                              className="outline-none border border-black rounded-md placeholder: pl-2 w-[90%]  "
                              placeholder="Enter DOB"
                            />
                          </div> */}
                          <div>
                            <label>Diet</label> <br />
                            <input
                              type="text"
                              name="diet"
                              onChange={formik.handleChange}
                              value={formik.values.diet}
                              className="outline-none border border-black rounded-md placeholder: pl-2 w-[90%]  "
                              placeholder="Enter Diet"
                            />
                          </div>
                          <div>
                            <label>Profession:</label> <br />
                            <input
                              type="text"
                              name="profession"
                              onChange={formik.handleChange}
                              value={formik.values.profession}
                              className="outline-none border border-black rounded-md placeholder: pl-2 w-[90%]  "
                              placeholder="Enter Profession"
                            />
                          </div>
                        </div>
                        <button
                          type="submit"
                          className="w-[70%]  text-white mt-2 bg-green-600 font-semibold   p-1.5 rounded-md  text-base"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              )}
            </div>
            <div className="w-[23%] border bg-gray-100 ">
              <div className="flex flex-col ">
                
                <div>
                <img className="w-28 mx-auto h-32  object-cover" src={`http://192.168.1.188:8098/${data?.profile_picture}`} alt="Profile" />

                </div>
              </div>
             {/*  <div
                oClick={() => navigate("/pho")}
                className="text-center cursor-pointer text-sm p-1 text-blue-500"
              >
                Add / Edit Photos
              </div> */}
              
            </div>
            <div className="flex  mt-4">
              <div className="flex flex-col w-[50%] gap-y-4">
                <div className="flex  gap-x-4   ">
                  <div className="text-gray-600 text-sm tracking-wide w-[35%]">
                    Profile created for
                  </div>
                  <div className="text-gray-800 text-sm tracking-wide">
                    {data?.ceate_profile_for}
                  </div>
                </div>

                <div className="flex  gap-x-4 ">
                  <div className="text-gray-600 text-sm tracking-wide w-[35%]">
                    Diet
                  </div>
                  <div className="text-gray-800 text-sm tracking-wide">
                    :{data?.diet}
                  </div>
                </div>

                <div className="flex  gap-x-4 ">
                  <div className="text-gray-600 text-sm tracking-wide w-[35%]">
                    Marital Status
                  </div>
                  <div className="text-gray-800 text-sm tracking-wide">
                    : {data?.marital_status}
                  </div>
                </div>

                <div className="flex  gap-x-4 ">
                  <div className="text-gray-600 text-sm tracking-wide w-[35%]">
                    Gender
                  </div>
                  <div className="text-gray-800 text-sm tracking-wide">
                    : {data?.gender}
                  </div>
                </div>

                <div className="flex  gap-x-4 ">
                  <div className="text-gray-600 text-sm tracking-wide w-[35%]">
                    City
                  </div>
                  <div className="text-gray-800 text-sm tracking-wide">
                    : {data?.location}
                  </div>
                </div>

                <div className="flex  gap-x-4 ">
                  <div className="text-gray-600 text-sm tracking-wide w-[35%]">
                    Mobile No:
                  </div>
                  <div className="text-gray-800 text-sm tracking-wide">
                    : {data?.mobile_number}
                  </div>
                </div>

                <div className="flex  gap-x-4 ">
                  <div className="text-gray-600 text-sm tracking-wide w-[35%]">
                    Income:
                  </div>
                  <div className="text-gray-800 text-sm tracking-wide">
                    : {data?.income}
                  </div>
                </div>

                <div className="flex  gap-x-4 ">
                  <div className="text-gray-600 text-sm tracking-wide w-[35%]">
                    Email:
                  </div>
                  <div className="text-gray-800 text-sm tracking-wide">
                    : {data?.email}
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-[50%] gap-y-4">
                <div className="flex  gap-x-4   ">
                  <div className="text-gray-600 text-sm tracking-wide w-[35%]">
                    Name{" "}
                  </div>
                  <div className="text-gray-800 text-sm tracking-wide">
                    :{data?.user_name}
                  </div>
                </div>
                <div className="flex  gap-x-4 ">
                  <div className="text-gray-600 text-sm tracking-wide w-[35%]">
                    Age
                  </div>

                  <div className=" text-sm text-gray-700 tracking-wide font-semibold ">
                    : {data?.age}
                  </div>
                </div>
                <div className="flex  gap-x-4 ">
                  <div className="text-gray-600 text-sm tracking-wide w-[35%]">
                    Height
                  </div>
                  <div className="text-gray-800 text-sm tracking-wide">
                    : {data?.height}
                  </div>
                </div>
                <div className="flex  gap-x-4 ">
                  <div className="text-gray-600 text-sm tracking-wide w-[35%]">
                    Profession
                  </div>
                  <div className="text-gray-800 text-sm tracking-wide">
                    : {data?.profession}
                  </div>
                </div>

                <div className="flex  gap-x-4 ">
                  <div className="text-gray-600 text-sm tracking-wide w-[35%]">
                    Mother Tongue:
                  </div>
                  <div className="text-gray-800 text-sm tracking-wide">
                    : {data?.mother_tounque}
                  </div>
                </div>
                {/*  <div className="flex  gap-x-4 ">
                    <div className="text-gray-600 text-sm tracking-wide w-[35%]">
                      DOB
                    </div>
                    <div className="flex items-center text-blue-600">
                      <div className=" text-sm tracking-wide font-semibold ">
                        : {data?.date_of_birth}
                      </div>
                    </div>
                  </div> */}

                <div className="flex  gap-x-4 ">
                  <div className="text-gray-600 text-sm tracking-wide w-[35%]">
                    Address
                  </div>
                  <div className="flex items-center text-blue-600">
                    <div className=" text-sm tracking-wide font-semibold ">
                      : {data?.address}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-3xl text-green-700">Personal Information</div>
          <div className="bg-white flex flex-col border-b-4 my-5  p-5">
            <div className="flex justify-between">
              <div className="text-xl text-gray-600">In my own words</div>
              <div className="flex bg-blue-500 p-1 items-center gap-x-1">
                <div>
                  <MdEdit className="mt-0.5  text-xs text-white" />
                </div>
                <div className="text-xs text-white">Edit</div>
              </div>
            </div>
            <div className="text-sm text-gray-700 mt-5">
              I am currently working in the private sector as a software
              professional, after having completed my bachelor's degree. I come
              from a middle class family with traditional family values. We
              belong to joint family currently living in Lucknow.
            </div>
            <div></div>
          </div>
        </div>
        <div className=" w-[25%] bg-gray-100  ">
          <div className="flex flex-col border bg-white border-b-4 border-gray-300">
            <div className="flex p-4 gap-x-2 items-center">
              <div className="">
                <img
                  src="https://imgs.bharatmatrimony.com/bmimgs/edit-add-partnerpref.gif"
                  alt=""
                />
              </div>
              <div className="">
                <div className="text-lg">Add Partner</div>
                <div className="text-lg -mt-2">Preference</div>
                <div className="text-sm">To find your perfect match</div>
              </div>
            </div>
            <div className="bg-gray-100 text-lg text-center font-semibold text-blue-500">
              Add Partner Preferences ►
            </div>
          </div>
          <div className="flex flex-col mt-3 border bg-white border-b-4 border-gray-300">
            <div className="flex p-4 gap-x-2 items-center">
              <div className="">
                <img
                  src="https://imgs.bharatmatrimony.com/bmimgs/edit-add-horoscope.gif"
                  alt=""
                />
              </div>
              <div className=" ">
                <div className="text-lg">Add Horoscope</div>
                <div className="text-sm">It is simple and absolutely</div>
                <div className="text-">FREE!</div>
              </div>
            </div>
            <div className="bg-gray-100 text-lg text-center font-semibold text-blue-500">
              Add Horoscope ►
            </div>
          </div>
          <div className="bg-white text-sm text-center p-1 mt-3 text-blue-600 font-semibold">
            View More ▼
          </div>
        </div>
      </div>
      <Bottom_dash />
       <Toaster />
    </div>
  );
};

export default Body_Pro;
