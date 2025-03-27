import React, { useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import Email1 from "./Email1";
import SMS from "./SMS";

export const Alert = () => {
  const [selectedOption, setSelectedOption] = useState("alerts");

  return (
    <div>
      {selectedOption === "alerts" && (
        <div>
          <h2 className="text-xl font-semibold border-b pb-2 border-gray-400">
            Alerts & Updates
          </h2>
          <div
            className="flex mt-3 justify-between items-center border-b border-gray-300 pb-4 cursor-pointer"
            onClick={() => setSelectedOption("email")}
          >
            <div className="flex flex-col">
              <div>E-Mail</div>
              <div className="text-gray-500 text-sm">
                Choose what updates you receive on your e-mail
              </div>
            </div>
            <MdArrowForwardIos className="text-lg text-gray-400" />
          </div>
          <div
            className="flex mt-3 justify-between items-center border-b border-gray-300 pb-4 cursor-pointer"
            onClick={() => setSelectedOption("sms")}
          >
            <div className="flex flex-col">
              <div>SMS</div>
              <div className="text-gray-500 text-sm">
                Choose what updates you get via SMS
              </div>
            </div>
            <MdArrowForwardIos className="text-lg text-gray-400" />
          </div>
        </div>
      )}

      {selectedOption === "email" && <Email1 goBack={() => setSelectedOption("alerts")} />}
      {selectedOption === "sms" && <SMS goBack={() => setSelectedOption("alerts")} />}
    </div>
  );
};
