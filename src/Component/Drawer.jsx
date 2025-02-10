import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { MdKeyboardArrowUp } from "react-icons/md";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { GoArrowRight } from "react-icons/go";

const Drawer1 = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const DrawerList = (
    <Box className="w-[75vw]">
      <div className="bg-gradient-to-t from-red-500 to-orange-500 h-20">
        <div className="flex justify-between">
          <div className="w-8 ml-3 mt-4">
            <img
              src="	https://www.crazzyhub.com/static/media/weblogo.77a9ceab0e5b281d7a91.png"
              alt=""
              srcset=""
            />
          </div>
          <div onClick={toggleDrawer(false)} className="cursor-pointer">
            <GoArrowRight className="text-white text-3xl font-extrabold mr-2 mt-6" />
          </div>
        </div>
      </div>
      <div className="flex justify-start gap-x-3 ">
        <div className="bg-orange-500 text-white text-xl font-semibold w-10 mt-4 ml-4 p-1 rounded-md ">
          ALL
        </div>
        <div className="font-semibold text-xl mt-5">All Products</div>
      </div>
      <div className="flex justify-between gap-x-3  ">
        <div className="flex gap-x-3">
          <div className="w-10 rounded-md">
            <img
              className="rounded-lg ml-4 mt-3"
              src="https://crazzyhub.s3.amazonaws.com/media/maincat/image/mobile_9uce9lj.jpg"
              alt=""
            />
          </div>
          <div className="font-semibold text-xl mt-5 ml-4">
            Mobiles & Tablet
          </div>
        </div>
        <div>
            <MdKeyboardArrowUp className="text-2xl mr-2 mt-4" />
          </div>
      </div>
      <div className="flex justify-between gap-x-3  ">
        <div className="flex gap-x-3">
          <div className="w-10 rounded-md">
            <img
              className="rounded-lg ml-4 mt-3"
              src="	https://crazzyhub.s3.amazonaws.com/media/maincat/image/tv_3PbwT80.jpg"
              alt=""
            />
          </div>
          <div className="font-semibold text-xl mt-5 ml-4">
            TV's & Electronics
          </div>
        </div>
        <div>
            <MdKeyboardArrowUp className="text-2xl mr-2 mt-4" />
          </div>
      </div>
      <div className="flex justify-between gap-x-3  ">
        <div className="flex gap-x-3">
          <div className="w-10 rounded-md">
            <img
              className="rounded-lg ml-4 mt-3"
              src="	https://crazzyhub.s3.amazonaws.com/media/maincat/image/laptop_fXiBXlk.jpg"
              alt=""
            />
          </div>
          <div className="font-semibold text-xl mt-5 ml-4">
            Laptop & Accessories
          </div>
        </div>
        <div>
            <MdKeyboardArrowUp className="text-2xl mr-2 mt-4" />
          </div>
      </div>
      <div className="flex justify-between gap-x-3  ">
        <div className="flex gap-x-3">
          <div className="w-10 rounded-md">
            <img
              className="rounded-lg ml-4 mt-3"
              src="	https://crazzyhub.s3.amazonaws.com/media/maincat/image/computer-and-speaker_OpTRCiD.jpg"
              alt=""
            />
          </div>
          <div className="font-semibold text-xl mt-5 ml-4">
           Computer & Pheripherals
          </div>
        </div>
        <div>
            <MdKeyboardArrowUp className="text-2xl mr-2 mt-4" />
          </div>
      </div>
      <div className="flex justify-between gap-x-3  ">
        <div className="flex gap-x-3">
          <div className="w-10 rounded-md">
            <img
              className="rounded-lg ml-4 mt-3"
              src="		https://crazzyhub.s3.amazonaws.com/media/maincat/image/smart-technology.jpg"
              alt=""
            />
          </div>
          <div className="font-semibold text-xl mt-5 ml-4">
           Smart Technology
          </div>
        </div>
        <div>
            <MdKeyboardArrowUp className="text-2xl mr-2 mt-4" />
          </div>
      </div>
      <div className="flex justify-between gap-x-3  ">
        <div className="flex gap-x-3">
          <div className="w-10 rounded-md">
            <img
              className="rounded-lg ml-4 mt-3"
              src="	https://crazzyhub.s3.amazonaws.com/media/maincat/image/Mobile-accessories.jpg"
              alt=""
            />
          </div>
          <div className="font-semibold text-xl mt-5 ml-4">
           Mobile & Accesories
          </div>
        </div>
        <div>
            <MdKeyboardArrowUp className="text-2xl mr-2 mt-4" />
          </div>
      </div>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Open drawer</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default Drawer1;
