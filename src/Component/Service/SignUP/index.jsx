import axios from "axios";
import { BaseUrl1 } from "../../Config";
import { ApiUrl } from "../../Config/APIurl";

export const SignUP = async (req) => {
  console.log("this is service data", req);
  try {
    const response = await axios.post(BaseUrl1 + ApiUrl.signUp, req, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token ff0c6f62e77b4a3a7d0df35b3ec7f891580f37c2",
      },
    });

    return response || [];
  } catch (e) {
    console.log(e);
  }
};

//ByReact Query
export const veriPro = async (req) => {
  console.log("this is service data", req);
  try {
    const response = await axios.post(BaseUrl1 + ApiUrl.ver_pro, req, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
    });

    return response || [];
  } catch (e) {
    console.log(e);
  }
};

export const Req_Sent = async (req) => {
  console.log("this is service data", req);
  try {
    const response = await axios.post(BaseUrl1 + ApiUrl.sendRequest, req, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
    });

    return response || [];
  } catch (e) {
    console.log(e);
  }
};
