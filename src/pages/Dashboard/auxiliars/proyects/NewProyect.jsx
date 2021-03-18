import React, { useContext, useState } from "react";
import ProyectoContext from "../../../../context/proyects/proyectoContext";


const NewProyect = () => {
  const [proyect, createProyect] = useState({
    nombre: "",
    desc: "",
  });

  const proyectoContext = useContext(ProyectoContext);
  const {
    panel,
    errorformulario,
    agregarProyecto,
    validarFormulario,
  } = proyectoContext;

  const { nombre, desc } = proyect;

  const handleChange = (e) => {
    createProyect({
      ...proyect,
      [e.target.name]: e.target.value,
    });
  };
  //enviar lo que envia el usuario
  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre.trim() === "") {
      validarFormulario();
      return;
    }
    createProyect({
      nombre: "",
      desc: "",
    });
    agregarProyecto(proyect);
    // //console.log(proyect)
  };

  return (
    // <div className={panel ? "dashboard_panel active" : "dashboard_panel"}>
    <div className="NewProyect">
      <form onSubmit={handleSubmit} className="NewProyect_Form">
        <input
          type="text"
          placeholder="Nombre del proyecto"
          name="nombre"
          value={nombre}
          onChange={handleChange}
          className="NewProyect_Form_input"
        />
        <textarea
          type="text"
          maxLength= '120'
          placeholder="Descripcion breve"
          name="desc"
          value={desc}
          onChange={handleChange}
          className="NewProyect_Form_TextArea"
        />
        {errorformulario ? (
          <p className="input_errorP">El nombre es necesario!</p>
        ) : null}
        <input type="submit" value="Guardar" className="NewProyect_Btn" />
      </form>
    </div>
  );
};

export default NewProyect;
