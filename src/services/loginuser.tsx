import instance from "../config/axios";
import authentication from "./authentication";

const loginuser = async (user: any) => {
  try {
    const { data } = await instance.post("/auth", user);
    const response = await authentication();
    if (response.status === 200) {
      localStorage.setItem("token", data.token);
    }

    return response;
  } catch (error: any) {
    const mensaje = {
      msg: error.response.data.msg,
      categoria: "alerta-error",
    };

    return { data: [], mensaje };
  }
};

export default loginuser;
