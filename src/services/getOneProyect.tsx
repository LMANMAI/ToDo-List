import instance from "../config/axios";
import authentication from "./authentication";
const getOneProyect = async (id: string) => {
  await authentication();
  try {
    const { data, status } = await instance.get(`/proyect/${id}`);
    return { data, status };
  } catch (error: any) {
    const mensaje = {
      msg: error.response,
      categoria: "alerta-error",
    };
    return { data: [], mensaje };
  }
};

export default getOneProyect;
