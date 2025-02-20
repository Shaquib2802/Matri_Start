import axios from "axios";
import { BaseUrl1 } from "../../Config";
import { ApiUrl } from "../../Config/APIurl";

export const Pref_Update = async (req) => {
  console.log("this is service data", req);
  try {
    const response = await axios.patch(BaseUrl1 + ApiUrl.pref, req, {
      headers: {
        "Content-Type": "application/json",
/*         Authorization: "Token 08c47b9e031405a269957a3411278495a5f66eb8"*/
        Authorization: `Token ${localStorage.getItem("token")}`,

      },
    });

    return response || [];
  } catch (e) {
    console.log(e);
  }
};

export const Edit_Update = async (req) => {
  console.log("this is service data", req);
  try {
    const response = await axios.patch(BaseUrl1 + ApiUrl.edit, req, {
      headers: {
        /* "Content-Type": "application/json", */
        "Content-Type": "multipart/form-data",
/*         Authorization: "Token 08c47b9e031405a269957a3411278495a5f66eb8"*/
        Authorization: `Token ${localStorage.getItem("token")}`,

      },
    });

    return response || [];
  } catch (e) {
    console.log(e);
  }
};
