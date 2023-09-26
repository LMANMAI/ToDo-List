import instance from "../config/axios";
import tokenAuth from "../config/tokenAuth";

const authentication = async () => {
  const token = localStorage.getItem("token");
  if (token) {
    tokenAuth(token);
  }
  try {
    const { data } = await instance.get("/auth");
    return data.user;
  } catch (error: any) {
    const mensaje = {
      msg: error.response.data.msg,
      categoria: "alerta-error",
    };
    return { data: {}, mensaje };
  }
};

export default authentication;
