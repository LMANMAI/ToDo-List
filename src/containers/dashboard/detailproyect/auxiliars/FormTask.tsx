import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../../redux/store";
import {
  FormTaskContainer,
  Input,
  Description,
  ButtonContainer,
  InputDesc,
} from "./styles";
import { addTask, getTask } from "../../../../services";
import { setTareasProyecto } from "../../../../redux/slices/task";
import EditProyect from "../../../../services/editProyect";
import { setBgUi, setEditDescMode } from "../../../../redux/slices/ui";

const FormTask = () => {
  const dispatch = useDispatch();
  const currentproyect = useSelector(
    (state: RootState) => state.proyects.currentproyect
  );
  const tareaactual = useSelector((state: RootState) => state.task.tareaactual);
  const editdescmode = useSelector((state: RootState) => state.ui.editdescmode);
  const [tarea, setTarea] = useState({
    nombre: "",
    proyecto: "",
    estado: "borrador",
  });
  const [errortarea, setErrorTarea] = useState<boolean>(false);
  const [editedDesc, setEditedDesc] = useState<string>("");
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

  useEffect(() => {
    if (currentproyect && currentproyect.desc) {
      setEditedDesc(currentproyect.desc);
    }
  }, [currentproyect]);
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

  const handleEditProyect = async (currentproyect: any) => {
    dispatch(setBgUi(false));
    dispatch(setEditDescMode(false));
    const updatedCurrentProyect = { ...currentproyect };
    updatedCurrentProyect.desc = editedDesc;
    console.log(updatedCurrentProyect);
    await EditProyect(updatedCurrentProyect);
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
        {currentproyect &&
        currentproyect?.desc !== null &&
        currentproyect?.desc ? (
          <div className="description">
            <h4>Descripcion de la tarea</h4>
            <InputDesc
              editdescmode={editdescmode}
              type="text"
              name="desc"
              value={editedDesc}
              onChange={(e) => {
                setEditedDesc(e.target.value);
              }}
            />
            {editdescmode && (
              <button
                className="save__desc"
                onClick={() => {
                  handleEditProyect(currentproyect);
                }}
              >
                Guardar
              </button>
            )}
          </div>
        ) : (
          <div className="description">
            <p>No agregaste una descripcion</p>
            <InputDesc
              editdescmode={editdescmode}
              type="text"
              name="desc"
              value={editedDesc}
              onChange={(e) => {
                setEditedDesc(e.target.value);
              }}
            />
            {editdescmode && (
              <button
                className="save__desc"
                onClick={() => {
                  handleEditProyect(currentproyect);
                  window.location.reload();
                }}
              >
                Guardar
              </button>
            )}
          </div>
        )}
      </Description>
    </FormTaskContainer>
  );
};

export default FormTask;
