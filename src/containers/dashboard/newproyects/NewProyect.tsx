import React, { useContext, useState } from "react";
import ProyectoContext from "../../../context/proyects/proyectoContext";
import { NewProyectContainer, Input, Text } from "./styles";

const NewProyect = () => {
  const [disabled, setDisabled] = useState<boolean>(true);
  //Context
  const { agregarProyecto } = useContext(ProyectoContext);
  //states internos
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

  const handleSubmit = () => {
    createProyect({
      nombre: "",
      desc: "",
    });
    agregarProyecto(proyect);
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
            onClick={() => handleSubmit()}
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
