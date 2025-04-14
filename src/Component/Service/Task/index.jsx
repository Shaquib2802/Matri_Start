import axios from "axios";
import { BaseUrl1 } from "../../Config";
import { ApiUrl } from "../../Config/APIurl";

export const Get_Task = async () => {
  console.log("this is service data1");
  try {
    const response = await axios.get(BaseUrl1 + ApiUrl.medical, {
      /* params:{

      }, */
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token 9187bde044f87c7be7e444f6462d7fa865ba0d86",
        /*   Authorization: `Token ${localStorage.getItem("token")}`, */
      },
    });

    return response || [];
  } catch (e) {
    console.log(e);
  }
};

export const Task_Update = async (req) => {
  console.log("this is service data", req);
  try {
    const response = await axios.patch(BaseUrl1 + ApiUrl.medical, req, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token  9187bde044f87c7be7e444f6462d7fa865ba0d86",
      },
    });

    return response || [];
  } catch (e) {
    console.log(e);
  }
};
