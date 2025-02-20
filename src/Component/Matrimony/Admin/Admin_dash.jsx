import React from "react";
import { RiAdminFill } from "react-icons/ri";


const Admin_dash = () => {
  return <div className="w-[100%] flex ">
    <div className="w-[20%] border flex justify-center items-center py-3">
        <div><RiAdminFill className="text-xl"/></div>
        <div>Admin</div>
    </div>
    <div className="w-[80%] border">1</div>
  </div>;
};

export default Admin_dash;
