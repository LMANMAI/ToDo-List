import instance from "../config/axios";
import authentication from "./authentication";

const loginuser = async (user: any) => {
  try {
    const { data, status } = await instance.post("/auth", user);
    const response = await authentication();
    localStorage.setItem("token", data.token);

    return { response, status };
  } catch (error: any) {
    const mensaje = {
      msg: error.response.data.msg,
      categoria: "error",
    };

    return { data: [], mensaje };
  }
};

export default loginuser;
