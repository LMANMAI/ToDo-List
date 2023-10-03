import instance from "../config/axios";

const getProyects = async () => {
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
