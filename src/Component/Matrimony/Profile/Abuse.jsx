  import React from "react";

  const Abuse = () => {
    return (
      <div className="bg-gray-50  border ">
        <div className="bg-white m-2 border p-5">
          <div className="text-sm font-semibold">Grievance Officer</div>
          <div className="text-sm">Mr. Karthikeyan Krishnasamy</div>
          <div className="text-sm">
            Contact Address : M/s. Matrimony.com Limited,
          </div>
          <div className="text-sm">No.94, TVH Beliciaa Towers, Tower - 2,</div>
          <div className="text-sm">5th Floor, MRC Nagar, Chennai,</div>
          <div className="text-sm">Tamil Nadu – 600028</div>
          <div className="text-sm">
            Phone : <span className="text-blue-600">+91-8939455547,</span>
          </div>
          <div className="text-sm">
            Email :{" "}
            <span className="text-blue-600">
              reportfraud@bharatmatrimony.com,
            </span>
          </div>
          <div className="flex justify-between my-5   ">
            <div className="text-xl">
              Grievance Form Only for Public Complaints relating to content on the
              site
            </div>
            <div className="text-xs text-red-600">*Compulsory Fields</div>
          </div>
          <form className="flex flex-col gap-y-5" action="">
            <div>
              <label className="text-xs">
                <span className="text-red-600 ">*</span>Your Name:{" "}
              </label>
              <br />
              <input
                type="text"
                placeholder="Name"
                className="border mt-1 p-1.5 w-[25%] placeholder: text-xs bg-gray-50"
              />{" "}
              <br />
            </div>
            <div>
              <label className="text-xs ">
                <span className="text-red-600 ">*</span>Your E-Mail ID:{" "}
              </label>
              <br />
              <input
                type="text"
                placeholder="Email ID"
                className="border mt-1 p-1.5 w-[25%] placeholder: text-xs bg-gray-50"
              />{" "}
              <br />
            </div>
            <div>
              <label className="text-xs">
                <span className="text-red-600 ">*</span>Your Contact Number:{" "}
              </label>
              <br />
              <input
                type="text"
                placeholder="Mobile Number"
                className="border mt-1 p-1.5 w-[25%] placeholder: text-xs bg-gray-50"
              />
            </div>
            <div>
              <label className="text-xs">
                <span className="text-red-600">*</span>
                Please mark the web portal which hosts the issue(s) encountered by
                you:
              </label>
              <br />
              <input
                list="browsers"
                name="browser"
                className="border mt-1 p-1.5 w-[25%] placeholder: text-xs bg-gray-50"
                placeholder="Select Your Domain"
              />
              <datalist id="browsers">
                <option value="Select Your Domain" />
                <option value="AssameseMatrimony.com" />
                <option value="BengaliMatrimony.com" />
                <option value="BharatMatrimony.com" />
                <option value="GujratiMatrimony.com" />
                <option value="HindiMatrimony.com" />
                <option value="KannadMatrimony.com" />
                <option value="KeralaMatrimony.com" />
                <option value="MarathiMatrimony.com" />
                <option value="MarwadiMatrimony.com" />
                <option value="OdiyaMatrimony.com" />
                <option value="ParsiMatrimony.com" />
                <option value="SindhiMatrimony.com" />
                <option value="PunjabiiMatrimony.com" />
                <option value="UrduMatrimony.com" />
              </datalist>
            </div>

            <div>
              <label className="text-xs">
                <span className="text-red-600 ">*</span>Please share the link
                (URL) of the Page which you are reporting against:{" "}
              </label>
              <br />
              <input
                type="text"
                placeholder=""
                className="border mt-1 p-1.5 w-[25%] placeholder: text-xs bg-gray-50"
              />
            </div>
            <div className="text-xs ">
              <label className="text-xs">
                <span className="text-red-600 ">*</span>Please tell us the reason
                for your complaint/concern. Choose an option which most closely
                matches with your concern. If you are unsure which option to
                choose, please select the last option. Thanks{" "}
              </label>
              <br />
              <input
                type="checkbox"
                name="sport1"
                className="mt-4  "
                value="cricket"
              />
              The content exposes personal data while violating Terms & Conditions
              and/or Privacy Policy of concerned website.
              <br />
              <input
                type="checkbox"
                name="sport2"
                className="mt-3"
                value="tennis"
              />
              The content is grossly harmful, harassing, blasphemous, defamatory,
              obscene, pornographic and/or unlawful in any manner.
              <br />
              <input
                type="checkbox"
                name="sport3"
                className="mt-3"
                value="football"
              />
              The content threatens the unity, integrity, defence, security or
              sovereignty of India and/or friendly relations with foreign states.
              <br />
              <input
                type="checkbox"
                name="sport4"
                className="mt-3"
                value="baseball"
              />
              The content infringes a patent, trademark, copyright or other
              proprietary rights.
              <br />
              <input
                type="checkbox"
                name="sport5"
                className="mt-3"
                value="badminton"
              />
              The content encourages money laundering or gambling.
              <br />
              <input
                type="checkbox"
                name="sport5"
                className="mt-3"
                value="badminton"
              />
              The content hosts software viruses or any other computer code
              designed to harm the functionality of any computer resource.
              <br />
              <input
                type="checkbox"
                name="sport5"
                className="mt-3"
                value="badminton"
              />
              The content harms minors in any way.
              <br />
              <div className="mt-5">
                <label htmlFor="issueDescription" className="text-xs">
                  <span className="text-red-600">*</span>
                  Please describe your complaint/concern in detail:
                </label>
                <br />
                <textarea
                  rows="10"
                  cols="50"
                  className="border p-2 mt-4"
                ></textarea>
              </div>
              <div className="flex mt-10">
                <div className=" border text-3xl text-red-700 bg-slate-50 font-extrabold p-3 w-[25%] text-center">
                  9T268H
                </div>
                <div>
                  <img
                    src="https://www.bharatmatrimony.com/safe-matrimony/images/refresh.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="mt-5">
                <input
                  type="text"
                  className=" placeholder: w-[23%] p-2"
                  placeholder="Enter Verification Code"
                />
              </div>
            <button type="submit" className="border p-1 mt-5 bg-[#f2090b] font-bold text-white rounded-md shadow-xl">SUBMIT</button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  export default Abuse;
