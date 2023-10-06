import React, { useContext, useEffect, useState } from "react";
import { BsChevronLeft, BsGear } from "react-icons/bs";
import { FormTask, TaskList } from "./auxiliars";
import { FormTaskContainer, FormConfigMenu } from "./styles";
import { RootState } from "../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { setOpenMenu, setBgUi, setEditMode } from "../../../redux/slices/ui";
import { setTareasProyecto } from "../../../redux/slices/task";
import { setCurrentProyect } from "../../../redux/slices/proyects";
import { getTask, getOneProyect } from "../../../services";
import { useParams } from "react-router-dom";
import EditProyect from "../../../services/editProyect";

const Task = (tarea: any) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  //const { terminarProyecto, eliminarProyecto } = useContext(ProyectoContext);

  const openmenu = useSelector((state: RootState) => state.ui.openmenu);
  const bg = useSelector((state: RootState) => state.ui.editmode);
  const currentproyect = useSelector(
    (state: RootState) => state.proyects.currentproyect
  );
  const tareasproyecto = useSelector(
    (state: RootState) => state.task.tareasproyecto
  );
  const [proyectname, setProyectName] = useState<string>("");

  useEffect(() => {
    getTasks(id);
  }, [id]);

  const handleDelteTask = (id: any) => {
    //eliminarProyecto(id);
  };
  const getTasks = async (id: any) => {
    const resProyect = await getOneProyect(id);
    const res = await getTask(id);
    if (resProyect.data) {
      setProyectName(resProyect.data.nombre);
    }
    if (res.data) {
      dispatch(setTareasProyecto(res.data));
      //setTasks();
    }
    dispatch(setCurrentProyect(resProyect.data));
  };
  const handleChange = (e: any) => {
    setProyectName(e.target.value);
    const updatedProyecto = {
      ...currentproyect,
      nombre: e.target.value,
    };
    dispatch(setCurrentProyect(updatedProyecto));
  };

  const handleEditMode = () => {
    dispatch(setBgUi(true));
    dispatch(setEditMode(true));
  };

  const handleEndCurrentProyect = async (currentProyect: any) => {
    const updatedCurrentProyect = { ...currentProyect };
    updatedCurrentProyect.estado = true;
    const res = await EditProyect(updatedCurrentProyect);
    if (res.status === 200) {
      window.history.back();
    }
    console.log(res);
  };
  return (
    <FormTaskContainer
      onClick={() => {
        if (openmenu) {
          dispatch(setOpenMenu(false));
        }
      }}
    >
      <div className="form__task">
        <div className="form__task_header">
          <button
            title="Regresar al menu anterior."
            className="form__task_btn"
            onClick={() => {
              window.history.back();
            }}
          >
            <BsChevronLeft />
          </button>
          <h3 className="formt__task_title">
            <input
              type="text"
              name="nombre"
              id="input__edit"
              value={proyectname}
              onChange={(e) => handleChange(e)}
              disabled={!bg}
              className={`form__input ${bg ? "edit__mode" : ""}`}
            />
            <button
              className={`edit__mode_button ${bg ? "btn_edit" : ""}`}
              onClick={() => {
                dispatch(setBgUi(false));
                dispatch(setEditMode(false));

                //  terminarProyecto(currentproyect);
              }}
              title="Guardar cambios en la edición"
            >
              Guardar cambios
            </button>
          </h3>
          <div style={{ position: "relative" }}>
            <button
              title="Opciones del proyecto."
              className={`form__task_btn options ${openmenu ? "picked" : ""}`}
              onClick={() => {
                dispatch(setOpenMenu(!openmenu));
              }}
            >
              <BsGear />
            </button>
            <FormConfigMenu openmenu={openmenu}>
              <li
                onClick={() => {
                  handleEditMode();
                }}
              >
                Cambiar nombre del proyecto
              </li>
              <li onClick={() => {}}>Agregar descripción</li>
              <li
                onClick={() => {
                  handleDelteTask(tarea._id);
                }}
              >
                Eliminar proyecto
              </li>

              <li
                onClick={() => {
                  handleEndCurrentProyect(currentproyect);
                }}
              >
                Finalizar proyecto
              </li>
            </FormConfigMenu>
          </div>
        </div>
        <FormTask />
      </div>
      <TaskList tareasproyecto={tareasproyecto} />
    </FormTaskContainer>
  );
};

export default Task;
