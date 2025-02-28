import React, { useState } from "react";

import Pro_Head from "./Pro_Head";
import Bottom_dash from "../Dash_Board/Bottom_dash";
import { useMutation } from "@tanstack/react-query";
import { veriPro } from "../../Service/SignUP";

const Verify = () => {
  const [uploads, setUploads] = useState({});
  const {
    mutate: Plan,
    refetch,
    isLoading,
  } = useMutation({
    queryKey: ["plan"],
    queryFn: veriPro,
  });
  console.log("React Query:", Plan);

  console.log("Uploads Data", uploads);

  const handleFileUpload = async (event, id) => {
    console.log("ID Data____", id);

    const file = event.target.files[0];
    if (file) {
      setUploads((prev) => ({
        ...prev,
        [id]: file,
      }));
      /*    setUploads((prev) => { */
      /*   const updatedUploads = { ...prev, [id]: file };
        console.log("Uploads Data____", updatedUploads); */

      const formData = new FormData();
      /*  console.log("Payload_Data:)))", updatedUploads); */
      console.log("Payload_Data:File)))", id);
      /* formData.append(id, file); */
      formData.append(id, file);
   /*    formData.append("id", id); */

      veriPro(formData);

      /*    }); */
    }
  };

  const documents = [
    { id: "driving_license", label: "Driving Licence" },
    { id: "pan_card", label: "PAN Card" },
    { id: "passport", label: "Passport" },
    { id: "voter_id", label: "Voter ID" },
    { id: "aadhar", label: "Aadhar Card" },
  ];

  const educationDocs = [
    { id: "upload_education", label: "Upload Education Certificate" },
  ];
  const documents2 = [{ id: "salary_slip", label: "Upload Salary Slip" }];
  const documents3 = [{ id: "sdownloadApp", label: "Download App" }];
  return (
    <div className="w-full">
      <Pro_Head />

      <div className="bg-[#f2090b] flex flex-col py-8 gap-y-2">
        <div className="mx-auto">
          <img
            src="https://imgs.hindimatrimony.com/bmimgs/trust-badge-icon.png"
            alt="Verification Badge"
          />
        </div>
        <div className="text-white font-semibold text-xl mx-auto">
          Your profile is pending verification
        </div>
      </div>

      <div className="grid grid-cols-2 mx-[17%] gap-10 my-10">
        <div className="border border-gray-500 shadow-md rounded-3xl p-5">
          <div className="text-2xl font-semibold">ID Verification</div>
          <div className="mt-2 text-gray-800 font-medium">
            Select one of the below documents to verify your identity. The
            documents chosen by you will not be shown to other members.
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            {documents.map(({ id, label }) => (
              <div key={id} className="relative flex items-center gap-2">
                <label
                  htmlFor={id}
                  className={`border-2 cursor-pointer w-36 text-center rounded-3xl p-1.5 font-medium ${
                    uploads[id]
                      ? "bg-green-500 border-green-500 text-white"
                      : "border-gray-300 hover:bg-green-500 hover:border-green-500"
                  }`}
                >
                  {label}
                </label>
                <input
                  type="file"
                  id={id}
                  className="hidden"
                  onChange={(e) => handleFileUpload(e, id)}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="border rounded-3xl h-fit p-5 border-gray-500 shadow-md">
          <div className="text-2xl font-semibold">Education Verification</div>
          <div className="mt-2 text-gray-800 font-medium">
            Educational Qualification mentioned in your profile:BCA
          </div>
          <div className="mt-2 text-sm">
            Upload your education certificate and help us verify your
            educational qualification. The certificate uploaded by you will not
            be shown to other members.
          </div>

          <div className="mt-4">
            {educationDocs.map(({ id, label }) => (
              <div key={id} className="relative flex items-center gap-2">
                <label
                  htmlFor={id}
                  className={`border-2 cursor-pointer w-60 text-center rounded-3xl p-1.5 font-medium ${
                    uploads[id]
                      ? "bg-green-500 border-green-500 text-white"
                      : "border-gray-300 hover:bg-green-500 hover:border-green-500"
                  }`}
                >
                  {label}
                </label>
                <input
                  type="file"
                  id={id}
                  className="hidden"
                  onChange={(e) => handleFileUpload(e, id)}
                />
              </div>
            ))}
          </div>
        </div>
        {documents2.map(({ id, label }) => (
          <div
            key={id}
            className="border border-gray-500 shadow-md rounded-3xl p-5"
          >
            <div className="text-2xl font-semibold">Salary Verification</div>
            <div className="mt-2 text-gray-800 font-medium">
              {" "}
              Annual income mentioned in your profile: Rs. 4 - 5 Lakhs
            </div>
            <div className="mt-2 text-gray-800 text-sm ">
              {" "}
              Upload your salary slip and help us verify your current salary.
              The salary slip uploaded by you will not be shown to other members
            </div>
            <div className="flex gap-x-2">
              <label
                htmlFor={id}
                className={`border-2 mt-5 cursor-pointer w-60 text-center rounded-3xl p-1.5 font-medium ${
                  uploads[id]
                    ? "bg-green-500 border-green-500 text-white"
                    : "border-gray-300 hover:bg-green-500 hover:border-green-500"
                }`}
              >
                {label}
              </label>
              <input
                type="file"
                id={id}
                className="hidden"
                onChange={(e) => handleFileUpload(e, id)}
              />
            </div>
          </div>
        ))}
        {documents3.map(({ id, label }) => (
          <div
            key={id}
            className="border border-gray-500 h-fit shadow-md rounded-3xl p-5"
          >
            {" "}
            <div className="text-2xl font-semibold"> Photo Verification</div>
            <div className="mt-2 text-gray-800 font-medium">
              {" "}
              We will need to verify your profile photo with a selfie.{" "}
            </div>
            <div className="mt-2 text-gray-800 text-sm ">
              {" "}
              To complete your photo verification, download our mobile
              application.
            </div>
            <div className="flex gap-x-2">
              <label
                htmlFor={id}
                className={`border-2 mt-5 cursor-pointer w-60 text-center rounded-3xl p-1.5 font-medium ${
                  uploads[id]
                    ? "bg-green-500 border-green-500 text-white"
                    : "border-gray-300 hover:bg-green-500 hover:border-green-500"
                }`}
              >
                {label}
              </label>
              <input
                type="file"
                id={id}
                className="hidden"
                onChange={(e) => handleFileUpload(e, id)}
              />
            </div>
          </div>
        ))}
      </div>

      <Bottom_dash />
    </div>
  );
};

export default Verify;
