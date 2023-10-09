import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../../redux/store";
import {
  FormTaskContainer,
  Input,
  Description,
  ButtonContainer,
} from "./styles";
import { addTask, getTask } from "../../../../services";
import { setTareasProyecto } from "../../../../redux/slices/task";

const FormTask = () => {
  const dispatch = useDispatch();
  const currentproyect = useSelector(
    (state: RootState) => state.proyects.currentproyect
  );
  const tareaactual = useSelector((state: RootState) => state.task.tareaactual);

  const [tarea, setTarea] = useState({
    nombre: "",
    proyecto: "",
    estado: "borrador",
  });
  const [errortarea, setErrorTarea] = useState<boolean>(false);
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

  const handleChange = (e: any) => {
    setErrorTarea(false);
    setTarea({
      ...tarea,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    if (nombre.trim() === "") {
      setErrorTarea(true);
      return;
    }
    tarea.proyecto = currentproyect._id;
    await addTask(tarea);
    const res = await getTask(currentproyect._id);
    dispatch(setTareasProyecto(res.data));
    setTarea({
      nombre: "",
      proyecto: "",
      estado: "borrador",
    });
    const selectElement = document.getElementById(
      "form__select"
    ) as HTMLSelectElement | null;
    if (selectElement) {
      selectElement.value = "";
    }
  };

  const handleSelectChange = (event: any) => {
    const nuevoEstado = event.target.value;
    setTarea({
      ...tarea,
      estado: nuevoEstado,
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
          <select
            name=""
            id="form__select"
            className="form__select content"
            onChange={handleSelectChange}
          >
            <option value="">Elige el estado de la tarea</option>
            <option value="borrador">Borrador</option>
            <option value="pendiente">En curso</option>
            <option value="completa">Terminado</option>
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
        {currentproyect && currentproyect.desc ? (
          <div className="description">
            <h4>Descripcion de la tarea</h4>
            <p>{currentproyect ? currentproyect.desc : " "}</p>
          </div>
        ) : (
          <p>No agregaste una descripcion</p>
        )}
      </Description>
    </FormTaskContainer>
  );
};

export default FormTask;
