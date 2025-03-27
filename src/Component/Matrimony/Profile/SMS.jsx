import React from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

const SMS = ({ goBack }) => {
  return (
    <div>
      <div className="flex items-center gap-x-2 border-b pb-3 border-gray-300">
        <div className="cursor-pointer" onClick={goBack}>
          <MdOutlineArrowBackIosNew className="text-lg mt-1 text-gray-500" />
        </div>
        <div className="text-xl ">SMS</div>
      </div>
      <div className="my-6">
        <div className="text-green-600">Member Activity</div>
        <div className="text-gray-500">
        If you turn these off, you won't get any SMS about member activity on your profile


        </div>
      </div>
      <div className="flex justify-between items-center border-b pb-3 border-gray-300">
        <div>
          <div>Phone Number Views</div>
          <div className="text-gray-500">When members view your number</div>
        </div>
        <div>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  defaultChecked
                  sx={{
                    "& .MuiSwitch-thumb": { color: "" },
                    "& .Mui-checked": { color: "#1BA260" },
                    "& .Mui-checked + .MuiSwitch-track": {
                      backgroundColor: "#1BA260",
                    },
                  }}
                />
              }
            />
          </FormGroup>
        </div>
      </div>
      <div className="flex justify-between mt-5 items-center border-b pb-3 border-gray-300">
        <div>
          <div>Express Interest
          </div>
          <div className="text-gray-500">
          When members send an interest

</div>
        </div>
        <div>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  defaultChecked
                  sx={{
                    "& .MuiSwitch-thumb": { color: "" },
                    "& .Mui-checked": { color: "#1BA260" },
                    "& .Mui-checked + .MuiSwitch-track": {
                      backgroundColor: "#1BA260",
                    },
                  }}
                />
              }
            />
          </FormGroup>
        </div>
      </div>
      <div className="flex justify-between mt-5 items-center border-b pb-3 border-gray-300">
        <div>
          <div>Personalized Messages
          </div>
          <div className="text-gray-500">When members shortlist you
          </div>
        </div>
        <div>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  defaultChecked
                  sx={{
                    "& .MuiSwitch-thumb": { color: "" },
                    "& .Mui-checked": { color: "#1BA260" },
                    "& .Mui-checked + .MuiSwitch-track": {
                      backgroundColor: "#1BA260",
                    },
                  }}
                />
              }
            />
          </FormGroup>
        </div>
      </div>
    </div>
  );
};

export default SMS;
