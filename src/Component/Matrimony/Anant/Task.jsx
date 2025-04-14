import React, { useEffect, useState } from "react";
import { Get_Task, Task_Update } from "../../Service/Task";
import { InsertEmoticon } from "@mui/icons-material";
import { useFormik } from "formik";
import { CiEdit } from "react-icons/ci";
import toast, { Toaster } from "react-hot-toast";
import moment from "moment/moment";

const Task = () => {
  const [data, setData] = useState({});
  const [open1, setOpen1] = useState(false);
  const [value, setValue] = useState({});
  const handleOpen = () => {
    setOpen1(!open1);
  };
  const handleClose = () => {
    setOpen1(false);
  };
  const DataApi = async () => {
    const response = await Get_Task();
    console.log("Task(Blog)):", response);
    setData(response?.data?.data || {});
  };

  useEffect(() => {
    DataApi();
  }, []);

  const formik = useFormik({
    initialValues: {
      department_id: value?.id || "",
      created_at: value?.created_at || "",
      name: value?.name || "",
      description1: value?.description || "",
    },
    enableReinitialize: true,
    onSubmit: async (values) => {
      const data = await Task_Update(values);

      console.log("data::", data?.data);
      if (data.data.response_code === 200) {
        toast.success("successfully update complete");
        handleClose();
        DataApi();
      }
    },
  });

  return (
    <div className="p-5">
      <div className="text-4xl font-semibold mx-auto text-center">
        Hospital Department
      </div>
      <div className="p-1  text-center flex justify-end " onClick={handleOpen}>
        <div className="border-2 w-12 font-semibold rounded-md text-white bg-green-600 border-black">
          Edit{" "}
        </div>
      </div>
      {open1 && (
        <div className="fixed inset-0 pt-16  mx-auto flex items-center justify-center bg-black bg-opacity-50 z-40">
          <form
            onSubmit={formik.handleSubmit}
            className="border-2 flex flex-col py-5 gap-y-5  w-[40%] h-[55vh]  bg-white  relative"
          >
            <div
              className="absolute cursor-pointer right-2 top-0 font-semibold"
              onClick={handleClose}
            >
              x
            </div>
            <div className="text-4xl font-semibold mx-auto text-green-800">
              Edit
            </div>
            <div className="flex flex-col gap-y-5  w-[70%] mx-auto">
              <div className="flex   justify-between ">
                <div>
                  <label className="font-semibold">Department Name:</label>
                </div>
                <input
                  placeholder="Enter Department Name"
                  className=" outline-none border-2 rounded  placeholder:outline-none"
                  type="text"
                  name="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
              </div>
              <div className="flex justify-between ">
                <div>
                  <label className="font-semibold">Description:</label>
                </div>
                <textarea
                  placeholder="Enter Department Name"
                  className=" outline-none border-2 w-[53%] rounded placeholder:outline-none"
                  type="text"
                  name="description1  "
                  onChange={formik.handleChange}
                  value={formik.values.description1}
                />
              </div>

              <button
                type="submit"
                className="mx-auto text-2xl font-semibold border rounded-md text-white bg-green-500 p-2  text-center "
              >
                Save{" "}
              </button>
            </div>
          </form>
        </div>
      )}

      <div className=" grid grid-cols-2 my-10 gap-4 ">
        {Array.isArray(data) &&
          data.map((item, index) => (
            <div
              key={index}
              className="border-2 border-black rounded-md p-5 relative"
            >
              <div
                onClick={() => {
                  setValue(item);
                  handleOpen();
                }}
              >
                <CiEdit className="absolute right-5 text-green-800 text-xl   " />
              </div>
              <div className="flex gap-x-2 items-center">
                <div className="text-lg  font-semibold">Created:</div>
                <div>{moment(item?.created_at).format("LLL")}</div>
              </div>
              <div className="flex gap-x-2 items-center">
                <div className="text-lg  font-semibold">Department Name:</div>
                <div>{item?.name}</div>
              </div>
              <div className="flex gap-x-2 items-center">
                <div className="text-lg  font-semibold">description:</div>
                <div>{item?.description}</div>
              </div>
            </div>
          ))}
      </div>
      <Toaster />
    </div>
  );
};

export default Task;
