import instance from "../config/axios";

const deleteTask = async (proyect: any, id: string) => {
  try {
    const { data, status } = await instance.delete(
      `/task/${id}?proyecto=${proyect}`
    );
    return { data, status };
  } catch (error: any) {
    const mensaje = {
      msg: error.response,
      categoria: "alerta-error",
    };
    return { data: [], mensaje };
  }
};

export default deleteTask;
