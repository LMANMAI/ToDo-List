import instance from "../config/axios";
import tokenAuth from "../config/tokenAuth";

const authentication = async () => {
  const token = localStorage.getItem("token");
  if (token) {
    //envio el token por header para verificar auth
    tokenAuth(token);
  }
  try {
    const { data, status } = await instance.get("/api/auth");
    return { data, status };
  } catch (error: any) {
    const mensaje = {
      msg: error.response.data.msg,
      categoria: "alerta-error",
    };
    return { data: {}, mensaje };
  }
};

export default authentication;
