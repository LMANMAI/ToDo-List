import instance from "../config/axios";

const addProyect = async (proyect: any) => {
  console.log(proyect);
  try {
    const { data, status } = await instance.post("/proyect", proyect);
    return { data, status };
  } catch (error: any) {
    const mensaje = {
      msg: error.response,
      categoria: "alerta-error",
    };
    return { data: [], mensaje };
  }
};

export default addProyect;
