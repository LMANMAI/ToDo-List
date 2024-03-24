import instance from "../config/axios";

const EditTask = async (tarea: any) => {
  try {
    const { data, status } = await instance.put(`/task/${tarea._id}`, tarea);
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
