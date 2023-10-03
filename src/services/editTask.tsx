import instance from "../config/axios";

const EditTask = async (proyect: any) => {
  try {
    const { data, status } = await instance.put("/task", proyect);
    return { data, status };
  } catch (error: any) {
    const mensaje = {
      msg: error.response,
      categoria: "alerta-error",
    };
    return { data: [], mensaje };
  }
};

export default EditTask;
