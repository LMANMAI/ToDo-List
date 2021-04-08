import React, { Fragment, useContext, useState, useEffect } from "react";
import TaskContext from "../../../../context/task/taskContext";
import ProyectoContext from "../../../../context/proyects/proyectoContext";
import styled from "@emotion/styled";

const FormTaskContainer = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: row;
  //border: 1px solid red;
  @media(min-width: 768px){
      flex-direction: column;
  }
`;

const Form = styled.form`
  width: 100%;
  @media(min-width: 768px){
    width: fit-content;
    margin: 0 auto;
  }
`;
const Input = styled.input`
    width: 100%;
    margin-bottom: .5rem;
    border: none;
    background-color: #f2f2f2;
    border-radius: 35px;
    padding: .5rem;
    padding-left: 1rem;
    outline: none;    
    &::placeholder{
      padding: 1rem;
    }
    @media(min-width: 768px){
    // width: 20%;
  }
`;
const InputSearch = styled.input`
  width: 100%;
  border: none;
  padding: .6rem;
  border-radius: 35px;
  color: white;
  background-color: #f02d7b;
  outline: none;
  cursor: pointer;
  @media(min-width: 768px){
    // width: 20%;
  }
`;
const Description = styled.div`
    padding: .2rem;
    text-align: center;
    margin: .2rem 0;
`;
const FormTask = () => {
  const taskContext = useContext(TaskContext);
  const {
    tareaactual,
    errortarea,
    agregarTarea,
    validarTarea,
    obtenerTareas,
    actualizarTask,
  } = taskContext;

  const proyectoContext = useContext(ProyectoContext);
  const { proyectoactivo } = proyectoContext;
  const [proyectoActual] = proyectoactivo;

  const [tarea, setTarea] = useState({
    nombre: "",
  });
  const { nombre } = tarea;
  // //console.log(proyectoActual)
  useEffect(() => {
    if (tareaactual !== null) {
      setTarea(tareaactual);
    } else {
      setTarea({
        nombre: "",
      });
    }
  }, [tareaactual]);

  //Capturar lo que ingresa el usuario
  const handleChange = (e) => {
    setTarea({
      ...tarea,
      [e.target.name]: e.target.value,
    });
  };
  //Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre.trim() === "") {
      validarTarea();
      return;
    }
    //estoy agregando una nueva tarea
    if (tareaactual === null) {
      //    //console.log(tarea)
      tarea.proyecto = proyectoActual._id;

      agregarTarea(tarea);
    } else {
      //de lo contrario estoy actualizando la tarea
      actualizarTask(tarea);
    }
    obtenerTareas(proyectoActual.id);
    setTarea({
      nombre: "",
    });
  };
  return (
    <FormTaskContainer>
      {errortarea ? <p>El nombre para guardar la tarea es necesario</p> : null}
      <div className="form_task_container">
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="nombre"
            value={nombre}
            onChange={handleChange}
            placeholder="Agregar una tarea!"
            className="input_task"
          />
          <InputSearch
            type="submit"
            value={tareaactual ? "Guardar cambios" : "Agregar Nueva Tarea"}
            className="btn btn_submit"
          />
        </Form>
        <Description>
          {proyectoActual.desc ? (
            <p>{proyectoActual.desc}</p>
          ) : (
            <p>No agregaste una descripcion</p>
          )}
        </Description>
      </div>
    </FormTaskContainer>
  );
};

export default FormTask;
