import instance from "../config/axios";
import authentication from "./authentication";

const registeruser = async (user: any) => {
  try {
    const respuesta = await instance.post("/users", user);
    authentication();
  } catch (error: any) {
    const alerta = {
      msg: error.response,
      categoria: "alerta-error",
    };
  }
};

export default registeruser;
