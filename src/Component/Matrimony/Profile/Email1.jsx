import React, { useState } from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import More_Email from "./More_Email";

const Email1 = ({ goBack }) => {
    const [selectedOption, setSelectedOption] = useState("email");
  
  return (
    <div>
       {selectedOption === "email" && (
      <div>
      <div className="flex items-center gap-x-2 border-b pb-3 border-gray-300">
        <div className="cursor-pointer"  onClick={goBack}>
          <MdOutlineArrowBackIosNew className="text-lg mt-1 text-gray-500" />
        </div>
        <div className="text-xl ">E-Mail</div>
      </div>
      <div className="my-6">
        <div className="text-green-600">Member Activity</div>
        <div className="text-gray-500">
          {" "}
          If you turn these off, you won't get any mails about member activity
          on your profile
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
          <div>Requests</div>
          <div className="text-gray-500">
            When members request for your information
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
          <div>Shortlists</div>
          <div className="text-gray-500">When members shortlist you</div>
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
      <div    onClick={() => setSelectedOption("more")} className="text-[#FF9700] cursor-pointer my-4 ">More Alert</div>
      <div className="my-6">
        <div className="text-green-600">Member Response</div>
        <div className="text-gray-500">
          {" "}
          If you turn these off, you will not know when members respond to you
        </div>
      </div>
      <div className="flex justify-between items-center border-b pb-3 border-gray-300">
        <div>
          <div>Accepts</div>
          <div className="text-gray-500">
            When members accept your interests or requests
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
          <div>Declines</div>
          <div className="text-gray-500">
            When members decline your interests or requests
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
      <div className="my-6">
        <div className="text-green-600">Matches</div>
        <div className="text-gray-500">
          {" "}
          If you turn these off, you might miss out on our recommendations based on your preferences
        </div>
      </div>
      <div className="flex justify-between items-center border-b pb-3 border-gray-300">
        <div>
          <div>Horoscope Matches
          </div>
          <div className="text-gray-500">Weekly</div>
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
          <div>Premium Matches
          </div>
          <div className="text-gray-500">
          Everyday
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
          <div>Matches with new photo
          </div>
          <div className="text-gray-500">Weekly</div>
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
          <div>New Matches

          </div>
          <div className="text-gray-500">Everyday</div>
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
       )}
             {selectedOption === "more" && <More_Email goBack1={() => setSelectedOption("email")} />}
       
    </div>
  );
};

export default Email1;
