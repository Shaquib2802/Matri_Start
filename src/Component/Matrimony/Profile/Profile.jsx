import React, { useEffect } from "react";
import Pro_Head from "./Pro_Head";
import Body_Pro from "./Body_Pro";

const Profile = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <Pro_Head />
      <Body_Pro />
    </div>
  );
};

export default Profile;
