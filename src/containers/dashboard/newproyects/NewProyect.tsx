import React, { useState } from "react";
import { NewProyectContainer, Input, Text } from "./styles";
import { addProyect } from "../../../services";
import { toast, ToastContainer } from "react-toastify";
import OpenAI from "openai";

const NewProyect = () => {
  const [disabled, setDisabled] = useState<boolean>(true);
  const [proyect, createProyect] = useState({
    nombre: "",
    desc: "",
  });

  const { nombre, desc } = proyect;

  const handleChange = (e: any) => {
    createProyect({
      ...proyect,
      [e.target.name]: e.target.value,
    });
    setDisabled(e.target.nombre === "name" && e.target.value === "");
  };

  const handleSaveProyects = async () => {
    console.log(proyect);
    const response = await addProyect(proyect);
    if (response.status === 200) {
      toast.success("Panel guardado exitosamente", {
        position: "bottom-right",
        autoClose: 3000,
      });
      createProyect({
        nombre: "",
        desc: "",
      });
      setDisabled(true);
    } else {
      toast.error("Hubo un error al guardar el panel", {
        position: "bottom-right",
        autoClose: 3000,
      });
    }
  };
  const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_KEY, // defaults to process.env["OPENAI_API_KEY"]
  });

  const obtenerDescripcionConIA = async () => {
    try {
      // Envia una solicitud a la API de ChatGPT para generar la descripción
      const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: "user", content: "Say this is a test" }],
        model: "gpt-3.5-turbo",
      });

      console.log(chatCompletion.choices);

      // La respuesta se encuentra en response.choices[0].message.content
      // const descripcionGenerada = response.choices[0].message.content;

      // Actualiza el estado con la descripción generada
      // createProyect({
      //   ...proyect,
      //   desc: descripcionGenerada,
      // });
    } catch (error) {
      console.error("Error al generar la descripción con IA:", error);
      toast.error("Hubo un error al generar la descripción con IA", {
        position: "bottom-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <NewProyectContainer>
      <h3 className="formt__task_title">Agregar un nuevo panel</h3>
      <div className="newproyect__form">
        <div className="input__container">
          <label htmlFor="name" className="newproyect__label">
            Nombre del panel
          </label>

          <Input
            type="text"
            name="nombre"
            value={nombre}
            onChange={handleChange}
            className="newproyect__input"
          />
        </div>

        <div className="input__container">
          <label htmlFor="name" className="newproyect__label label_text">
            Descripcion breve
          </label>
          <Text
            type="text"
            name="desc"
            value={desc}
            onChange={handleChange}
            className="newproyect__textarea"
          />
        </div>

        <div className="newproyect__btn_container">
          <button
            className="newproyect__btn submit"
            title="Guardar proyecto"
            onClick={() => handleSaveProyects()}
            disabled={disabled}
          >
            Guardar
          </button>
          <button
            className="newproyect__btn desc"
            title="Generar descripción con IA"
            disabled={disabled}
            onClick={() => obtenerDescripcionConIA()}
          >
            Generar descripción
          </button>
        </div>
      </div>
      <ToastContainer />
    </NewProyectContainer>
  );
};

export default NewProyect;
