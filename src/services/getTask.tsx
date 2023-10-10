import instance from "../config/axios";

const getTask = async (id: any) => {
  try {
    const { data, status } = await instance.get("/task", {
      params: { proyecto: id },
    });
    return { data, status };
  } catch (error: any) {
    const mensaje = {
      msg: error.response,
      categoria: "alerta-error",
    };
    return { data: [], mensaje };
  }
};

export default getTask;
