import instance from "../config/axios";

const deleteProyect = async (proyect: any) => {
  try {
    const { data, status } = await instance.delete("/proyect", proyect);
    return { data, status };
  } catch (error: any) {
    const mensaje = {
      msg: error.response,
      categoria: "alerta-error",
    };
    return { data: [], mensaje };
  }
};

export default deleteProyect;
