import instance from "../config/axios";
import authentication from "./authentication";

const getProyects = async () => {
  await authentication();
  try {
    const { data, status } = await instance.get("/proyect");
    return { data, status };
  } catch (error: any) {
    const mensaje = {
      msg: error.response,
      categoria: "alerta-error",
    };
    return { data: [], mensaje };
  }
};

export default getProyects;
