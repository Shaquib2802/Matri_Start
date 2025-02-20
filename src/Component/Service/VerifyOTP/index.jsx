import axios from "axios";
import { BaseUrl1 } from "../../Config";
import { ApiUrl } from "../../Config/APIurl";

export const Ver_Post = async (req) => {
  console.log("this is service data", req);
  try {
    const response = await axios.post(BaseUrl1 + ApiUrl.verOTP, req, {
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
