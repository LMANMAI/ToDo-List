import instance from "../config/axios";

const addTask = async (proyect: any) => {
  try {
    const { data, status } = await instance.post("/task", proyect);
    return { data, status };
  } catch (error: any) {
    const mensaje = {
      msg: error.response,
      categoria: "alerta-error",
    };
    return { data: [], mensaje };
  }
};

export default addTask;
