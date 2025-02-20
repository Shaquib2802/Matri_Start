import React from "react";

const Hover = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="w-[25%]   mx-auto my-5  border h-fit rounded-xl shadow-sm flex flex-col">
      <div className="text-xl font-semibold text-center mt-1">Mohd Arfat</div>
      <div className="text-gray-950 mt-2  font-medium text-sm text-center">
        H14160846       
      </div>
      <div className="text-gray-950 mt-4  font-semibold text-sm text-center">
        Membership: Free
      </div>
      <div className="text-black mt-2  font-normal text-sm text-center">
        Become a paid member now6
      </div>
      <div
        onClick={() => navigate("/upg")}
        className="border cursor-pointer p-1 border-orange-600 mt-3 rounded-3xl w-20 text-center font-semibold text-sm text-orange-500 mx-auto"
      >
        Upgrade
      </div>
      <div className="border flex mt-5  gap-y-5 flex-col p-5">
        <div className="flex  gap-x-3">
          <div>
            <img
              className="w-5"
              src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/edit-profile.svg"
              alt=""
            />
          </div>
          <div
            onClick={() => navigate("/pro")}
            className="text-sm cursor-pointer font-medium text-gray-600"
          >
            Edit Profile
          </div>
        </div>

        <div className="flex  gap-x-3">
          <div>
            <img
              className="w-5"
              src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/edit-preference.svg"
              alt=""
            />
          </div>
          <div
            onClick={() => navigate("/pre")}
            className="text-sm cursor-pointer font-medium text-gray-600"
          >
            Edit Preferences
          </div>
        </div>

        <div className="flex  gap-x-3">
          <div>
            <img
              className="w-5"
              src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/menu_identity.svg"
              alt=""
            />
          </div>
          <div
            onClick={() => navigate("/ver")}
            className="text-sm cursor-pointer font-medium text-gray-600"
          >
            Verify Your Profile
          </div>
        </div>
      </div>
      <div className=" flex   gap-y-5 flex-col p-5">
        <div className="flex gap-x-3">
          <div>
            <img
              className="w-5"
              src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/help.svg"
              alt=""
            />
          </div>
          <div
            className="text-sm font-medium text-gray-600 cursor-pointer"
            onClick={() => navigate("/help")}
          >
            Help
          </div>
        </div>

        <div className="flex  gap-x-3">
          <div>
            <img
              className="w-5"
              src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/safe-matrimony.svg"
              alt=""
            />
          </div>
          <div
            onClick={() => navigate("/safe")}
            className="text-sm font-medium text-gray-600"
          >
            Safe Matrimony
          </div>
        </div>

        <div className="flex  gap-x-3">
          <div>
            <img
              className="w-5"
              src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/setting.svg"
              alt=""
            />
          </div>
          <div
            onClick={() => navigate("/set")}
            className="text-sm font-medium text-gray-600 cursor-pointer"
          >
            Setting
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hover;
