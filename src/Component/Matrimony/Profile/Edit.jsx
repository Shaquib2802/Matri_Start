import React, { useEffect, useState } from "react";
import Pro_Head from "./Pro_Head";
import toast, { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { MdOutlineEdit } from "react-icons/md";
import Bottom_dash from "../Dash_Board/Bottom_dash";
import { Get_Pref } from "../../Service/Get_pref";
import { Pref_Update } from "../../Service/Update_pref";

const Edit = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const [open1, setOpen1] = useState(false);
  const handleOpen = () => {
    setOpen1(!open1);
  };

  const handleClose = () => {
    setOpen1(false);
  };
  const [data, setData] = useState({});

  const DataApi = async () => {
    const response = await Get_Pref();
    console.log("data(Item--):", response?.data);
    setData(response?.data?.data || {});
  };

  useEffect(() => {
    DataApi();
  }, []);

  const formik = useFormik({
    initialValues: {
      preference_id: data?.id || "",
      age: data?.age || "",
      religion: data?.religion || "",
      location: data?.location || "",
      marital_status: data?.marital_status || "",
      height: data?.height || "",
      address: data?.address || "",
      income: data?.income || "",
      create_profile_for: data?.create_profile_for || "",
      user_name: data?.user_name || "",
      gender: data?.gender || "",
      mobile: data?.mobile_number || "",
      mother_tounque: data?.mother_tounque || "",
      profession: data?.profession || "",
      skin_col: data?.skin_colour || "",
      diet: data?.diet || "",
    },
    enableReinitialize: true, 
    onSubmit: async (values) => {
      try {
        const response = await Pref_Update(values); 
        console.log("Updated Data:", response?.data); 
  
        if (response?.data?.response_code === 200) {
          toast.success("Successfully updated!");
          handleClose(); 
          await DataApi(); 
        } else {
          toast.error("Update failed. Please try again.");
        }
      } catch (error) {
        console.error("Error updating preferences:", error);
        toast.error("An error occurred while updating.");
      }
    },
  });
  

  return (
    <div className="w-[100%]">
      <Pro_Head />
      <div className="h-14 mt-1 bg-slate-50">
        <div className="flex justify-center items-center pt-3 gap-x-3">
          <div className="text-sm text-gray-500 font-semibold">
            Going Premium is the best way to find your better half faster
          </div>
          <div className="text-gray-500 font-bold border rounded-lg border-gray-500 text-[70%] p-1">
            UPGRADE NOW
          </div>
        </div>
      </div>
      <div className="flex justify-start m-3 gap-x-5  ">
        <div className="w-[18%] sticky top-20 bg-green-700 gap-y-5 h-[90vh] flex flex-col text-gray-100 font-semibold text-[80%]">
          <div className="flex justify-center gap-x-4 items-center mt-10 ">
            <div>
              <img
                src="//imgs.bharatmatrimony.com/bmimgs/desktop-images/pp-heart.svg"
                alt=""
              />
            </div>
            <div>PARTNER PREFERENCES</div>
          </div>
          <div className="mx-auto">Basics</div>
          <div className="mx-auto">Religious</div>
          <div className="mx-auto">Professional</div>
          <div className="mx-auto">Location</div>
          <div className="mx-auto">About My Partner</div>
        </div>
        <div className="w-[79%] border-2 shadow-lg p-8">
          <div className="text-xl font-semibold">Partner Preferences</div>
          <div className="mt-4 text-lg ">
            Matches recommended by us are based on{" "}
            <span className="font-semibold">Acceptable matches</span> criteria
            and at times might go slightly beyond your preferences.
          </div>
          <div className="mt-2 text-lg">
            Turn on "Compulsory" to get matches exactly as per your preferences.
          </div>
          <div className="text-gray-600 mt-2 text-[75%]">*Patent pending</div>
          <div className=" mt-10 flex items-center justify-between gap-x-5 ">
            <div className="flex items-center gap-x-2">
              <div>
                <img
                  src="//imgs.bharatmatrimony.com/bmimgs/desktop-images/pp-basic-preferences.svg"
                  alt=""
                />
              </div>
              <div className="text-xl font-semibold ">Basic Preferences</div>
            </div>
            <div className="flex items-center gap-x-5">
              <div onClick={handleOpen} className="text-xl font-semibold mt-2">
                <MdOutlineEdit />
              </div>
              {open1 && (
                <div className="fixed inset-0 mt-10 flex items-center justify-center bg-black bg-opacity-50 z-40">
                  <form
                    onSubmit={formik.handleSubmit}
                    className="  w-[50%] h-[90%]  bg-white  relative"
                  >
                    <div
                      className="absolute cursor-pointer right-2 top-0 font-semibold"
                      onClick={handleClose}
                    >
                      x
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <div className="text-2xl font-semibold text-black mt-5">
                        Partner Basic Details
                      </div>
                      <div className="text-gray-700 font-semibold  text-sm">
                        Brief outline of personal information
                      </div>
                      <div className=" w-[80%]   ">
                        <div className="grid grid-cols-2 m-12 gap-3">
                          <div>
                            <label>Age:</label> <br />
                            <input
                              type="text"
                              name="age"
                              onChange={formik.handleChange}
                              value={formik.values.age}
                              className="outline-none border border-black rounded-md placeholder:pl-2 w-[90%] "
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
                              className="outline-none border border-black rounded-md placeholder:pl-2  w-[90%] "
                              placeholder="Enter Age"
                            />
                          </div>
                          <div>
                            <label>Location:</label> <br />
                            <input
                              type="text"
                              name="location"
                              onChange={formik.handleChange}
                              value={formik.values.location}
                              className="outline-none border border-black rounded-md placeholder:pl-2  w-[90%] "
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
                              className="outline-none border border-black rounded-md placeholder:pl-2  w-[90%]"
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
                              className="outline-none border border-black rounded-md placeholder:pl-2  w-[90%]"
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
                              className="outline-none border border-black rounded-md placeholder:pl-2  w-[90%]"
                              placeholder="Enter Age"
                            />
                          </div>
                          <div>
                            <label>Income:</label> <br />
                            <input
                              type="text"
                              name="income"
                              onChange={formik.handleChange}
                              value={formik.values.income}
                              className="outline-none border border-black rounded-md placeholder:pl-2  w-[90%]"
                              placeholder="Enter Age"
                            />
                          </div>
                          <div>
                            <label>Profession:</label> <br />
                            <input
                              type="text"
                              name="profession"
                              onChange={formik.handleChange}
                              value={formik.values.profession}
                              className="outline-none border border-black rounded-md placeholder:pl-2  w-[90%]"
                              placeholder="Enter Age"
                            />
                          </div>
                        </div>
                        <button
                          type="submit"
                          className="w-[77%] text-white bg-green-600 font-semibold  h-10 rounded-md text-center mx-auto mt-7 py-2 text-base"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>

          <div className="w-[91%] ml-[9%] flex flex-col">
            <div className="border-b-2 p-2">
              <div className="flex flex-col">
                <div className="text-lg">Age</div>
                <div className="font-semibold">{data?.age}</div>
              </div>
            </div>
            <div className="border-b-2 p-2 mt-3">
              <div className="flex flex-col">
                <div className="text-lg">Religion</div>
                <div className="font-semibold">{data?.religion}</div>
              </div>
            </div>
            <div className="border-b-2 p-2 mt-3">
              <div className="flex flex-col">
                <div className="text-lg">Location</div>
                <div className="font-semibold">{data?.location}</div>
              </div>
            </div>
            <div className="border-b-2 p-2 mt-3">
              <div className="flex flex-col">
                <div className="text-lg">Marital Status</div>
                <div className="font-semibold">{data?.marital_status}</div>
              </div>
            </div>
            <div className="border-b-2 p-2 mt-3">
              <div className="flex flex-col">
                <div className="text-lg">Address</div>
                <div className="font-semibold">{data?.address}</div>
              </div>
            </div>
            <div className="border-b-2 p-2 mt-3">
              <div className="flex flex-col">
                <div className="text-lg">Height</div>
                <div className="font-semibold">{data?.height}</div>
              </div>
            </div>
            <div className="border-b-2 p-2 mt-3">
              <div className="flex flex-col">
                <div className="text-lg">Income</div>
                <div className="font-semibold">{data?.income}</div>
              </div>
            </div>
            <div className="border-b-2 p-2 mt-3">
              <div className="flex flex-col">
                <div className="text-lg">Profession</div>
                <div className="font-semibold">{data?.profession}</div>
              </div>
            </div>
          </div>
          <div className=" mt-10 flex items-center justify-start gap-x-5">
            <div>
              <img
                src="https://imgs.bharatmatrimony.com/bmimgs/desktop-images/pp-religious-preferences.svg"
                alt="NAN"
              />
            </div>
            <div className="text-xl font-semibold">Religious Preferences</div>
          </div>
          <div className=" w-[91%] ml-[9%] flex flex-col">
            <div className="flex border-b-2 p-2 mt-3 justify-between items-center">
              <div className="flex flex-col">
                <div className="text-lg">Religion</div>
                <div className="font-semibold">Muslim - Sunni</div>
              </div>
              <div>
                <MdOutlineEdit className="text-2xl text-gray-600" />
              </div>
            </div>
            <div className="flex border-b-2 p-2 mt-3 justify-between items-center">
              <div className="flex flex-col">
                <div className="text-lg"> Caste</div>
                <div className="font-semibold">Muslim - Sheikh</div>
              </div>
              <div>
                <MdOutlineEdit className="text-2xl text-gray-600" />
              </div>
            </div>
            <div className="flex border-b-2 p-2 mt-3 justify-between items-center">
              <div className="flex flex-col">
                <div className="text-lg">Star</div>
                <div className="font-semibold">Any</div>
              </div>
              <div>
                <MdOutlineEdit className="text-2xl text-gray-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Bottom_dash />
      <Toaster />
    </div>
  );
};

export default Edit;
