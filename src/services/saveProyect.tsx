import instance from "../config/axios";
import authentication from "./authentication";

const saveProyect = async (proyect: any) => {
  try {
    const { data, status } = await instance.post("/users", proyect);
    const response = await authentication();

    localStorage.setItem("token", data.token);

    return { response, status };
  } catch (error: any) {
    const mensaje = {
      msg: error.response,
      categoria: "alerta-error",
    };
    return { data: [], mensaje };
  }
};

export default saveProyect;
