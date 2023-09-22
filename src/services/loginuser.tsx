import instance from "../config/axios";
import authentication from "./authentication";

const loginuser = async (user: any) => {
  try {
    const { data, status } = await instance.post("/api/auth", user);
    authentication();
    return { data, status };
  } catch (error: any) {
    const mensaje = {
      msg: error.response.data.msg,
      categoria: "alerta-error",
    };

    return { data: [], mensaje };
  }
};

export default loginuser;
