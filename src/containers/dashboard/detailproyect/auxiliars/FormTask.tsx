import React, { useContext, useState, useEffect } from "react";
import TaskContext from "../../../../context/task/taskContext";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import {
  FormTaskContainer,
  Input,
  Description,
  ButtonContainer,
} from "./styles";

const FormTask = () => {
  const {
    tareaactual,
    errortarea,
    agregarTarea,
    validarTarea,
    obtenerTareas,
    actualizarTask,
  } = useContext(TaskContext);

  const proyectoactivo = useSelector(
    (state: RootState) => state.proyects.proyectoactivo
  );
  const [tarea, setTarea] = useState({
    nombre: "",
    proyecto: "",
    estado: "borrador",
  });

  const { nombre } = tarea;

  useEffect(() => {
    if (tareaactual !== null) {
      setTarea(tareaactual);
    } else {
      setTarea({
        nombre: "",
        proyecto: "",
        estado: "borrador",
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
      tarea.proyecto = proyectoactivo._id;
      tarea.estado = agregarTarea(tarea);
      obtenerTareas(proyectoactivo._id);
    } else {
      //de lo contrario estoy actualizando la tarea
      actualizarTask(tarea);
    }
    obtenerTareas(proyectoactivo._id);
    setTarea({
      nombre: "",
      proyecto: "",
      estado: "borrador",
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
            <option value="borrador">Borrador</option>
            <option value="curso">En curso</option>
            <option value="terminado">Terminado</option>
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
        {proyectoactivo && proyectoactivo.desc ? (
          <div className="description">
            <h4>Descripcion de la tarea</h4>
            <p>{proyectoactivo ? proyectoactivo.desc : " "}</p>
          </div>
        ) : (
          <p>No agregaste una descripcion</p>
        )}
      </Description>
    </FormTaskContainer>
  );
};

export default FormTask;
