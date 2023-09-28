import React, { useContext, useState, useEffect } from "react";
import TaskContext from "../../../../context/task/taskContext";
import ProyectoContext from "../../../../context/proyects/proyectoContext";
import {
  FormTaskContainer,
  Form,
  Input,
  InputSearch,
  Description,
} from "./styles";
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
    proyecto: "",
  });
  const { nombre } = tarea;
  useEffect(() => {
    if (tareaactual !== null) {
      setTarea(tareaactual);
    } else {
      setTarea({
        nombre: "",
        proyecto: "",
      });
    }
  }, [tareaactual]);

  //Capturar lo que ingresa el usuario
  const handleChange = (e: any) => {
    setTarea({
      ...tarea,
      [e.target.name]: e.target.value,
    });
  };
  //Submit
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (nombre.trim() === "") {
      validarTarea();
      return;
    }
    //estoy agregando una nueva tarea
    if (tareaactual === null) {
      tarea.proyecto = proyectoActual._id;

      agregarTarea(tarea);
    } else {
      //de lo contrario estoy actualizando la tarea
      actualizarTask(tarea);
    }
    obtenerTareas(proyectoActual.id);
    setTarea({
      nombre: "",
      proyecto: "",
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
