import React, { useContext, useState, useEffect } from "react";
import TaskContext from "../../../../context/task/taskContext";
import ProyectoContext from "../../../../context/proyects/proyectoContext";
import {
  FormTaskContainer,
  Input,
  Description,
  ButtonContainer,
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
  const handleSubmit = () => {
    if (nombre.trim() === "") {
      validarTarea();
      return;
    }
    //estoy agregando una nueva tarea
    if (tareaactual === null) {
      tarea.proyecto = proyectoActual._id;
      agregarTarea(tarea);
      obtenerTareas(proyectoActual._id);
    } else {
      //de lo contrario estoy actualizando la tarea
      actualizarTask(tarea);
    }
    obtenerTareas(proyectoActual._id);
    setTarea({
      nombre: "",
      proyecto: "",
    });
  };

  return (
    <FormTaskContainer>
      <div className="form_task_container">
        <div
          className={`input__container content ${
            errortarea ? "error_status" : ""
          }`}
        >
          <label htmlFor="nombre" className="form__label">
            Nombre de la tarea
          </label>
          <Input
            type="text"
            name="nombre"
            value={nombre}
            onChange={handleChange}
            placeholder="Agregar una tarea"
            className="form__input"
          />
          {errortarea ? (
            <p
              style={{
                fontSize: "12px",
                position: "absolute",
                color: "#e74c3c",
              }}
            >
              El nombre para guardar la tarea es necesario
            </p>
          ) : null}
        </div>

        <div className="content">
          <select name="" id="form__select" className="form__select content">
            <option value="">Elige el estado de la tarea</option>
            <option value="">Borrador</option>
            <option value="">En curso</option>
            <option value="">Terminado</option>
          </select>
        </div>
        <ButtonContainer className="form__btn_container">
          <button
            className="btn btn_submit"
            title="Guardar proyecto"
            onClick={() => handleSubmit()}
          >
            {tareaactual ? "Guardar cambios" : "Agregar Nueva Tarea"}
          </button>
        </ButtonContainer>
      </div>
      <Description>
        {proyectoActual.desc ? (
          <div className="description">
            <h4>Descripcion de la tarea</h4>
            <p>{proyectoActual.desc}</p>
          </div>
        ) : (
          <p>No agregaste una descripcion</p>
        )}
      </Description>
    </FormTaskContainer>
  );
};

export default FormTask;
