import React, { useState } from "react";
import { NewProyectContainer, Input, Text } from "./styles";
import { addProyect } from "../../../services";

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
    const response = await addProyect(proyect);
    if (response.status === 200) {
    }
    createProyect({
      nombre: "",
      desc: "",
    });
  };

  return (
    <NewProyectContainer>
      <div className="newproyect__form">
        <div className="input__container">
          <label htmlFor="name" className="newproyect__label">
            Nombre del proyecto
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
          >
            Generar descripción
          </button>
        </div>
      </div>
    </NewProyectContainer>
  );
};

export default NewProyect;
