import React, { useState } from "react";
import Mobile_Pri from "./Mobile_Pri";
import Photo_Pri from "./Photo_Pri";
import Horo from "./Horo";

const Privacy = () => {
  const [selectedPic, setSelectedPic] = useState("Mobile");

  const file = {
    Mobile: () => <Mobile_Pri />,
    Photo: () => <Photo_Pri />,
    Horo: () => <Horo />,
  };

  const SelectedComponent = file[selectedPic];

  return (
    <div>
      <div className="flex gap-x-2 mb-2 border-b-2 ">
        <div
          className={`cursor-pointer border font-semibold bg-gray-200 p-1  ${
            selectedPic === "Mobile" ? " text-blue-500 border-b-2 border-white" : ""
          }`}
          onClick={() => setSelectedPic("Mobile")}
        >
          Mobile Privacy
        </div>
        <div
          className={`cursor-pointer border font-semibold bg-gray-200 p-1 ${
            selectedPic === "Photo" ? " text-blue-500 border-b-2 border-white" : ""
          }`}
          onClick={() => setSelectedPic("Photo")}
        >
          Photo Privacy
        </div>
        <div
          className={`cursor-pointer border font-semibold bg-gray-200 p-1 ${
            selectedPic === "Horo" ? "text-blue-500 border-b-2 border-white" : " "
          }`}
          onClick={() => setSelectedPic("Horo")}
        >
          Horoscope Privacy
        </div>
      </div>

      <div>{SelectedComponent && <SelectedComponent />}</div>
    </div>
  );
};

export default Privacy;
