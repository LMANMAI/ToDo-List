import React, { useEffect, useState } from "react";
import { BsChevronLeft, BsGear } from "react-icons/bs";
import { FormTask, TaskList } from "./auxiliars";
import { FormTaskContainer, FormConfigMenu, SkeletonContainer } from "./styles";
import { RootState } from "../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import {
  setOpenMenu,
  setBgUi,
  setEditMode,
  setDeleteMode,
  setEditDescMode,
} from "../../../redux/slices/ui";
import { setTareasProyecto } from "../../../redux/slices/task";
import { setCurrentProyect } from "../../../redux/slices/proyects";
import { getTask, getOneProyect, deleteProyect } from "../../../services";
import { useParams } from "react-router-dom";
import EditProyect from "../../../services/editProyect";

const Task = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const openmenu = useSelector((state: RootState) => state.ui.openmenu);
  const bg = useSelector((state: RootState) => state.ui.editmode);
  const deletemode = useSelector((state: RootState) => state.ui.deletemode);
  const currentproyect = useSelector(
    (state: RootState) => state.proyects.currentproyect
  );
  const tareasproyecto = useSelector(
    (state: RootState) => state.task.tareasproyecto
  );
  const [proyectname, setProyectName] = useState<string>("");
  const [msg, setMsg] = useState<string>("");
  const [modalmode, setModalMode] = useState<boolean>(false);
  const [load, setLoad] = useState<boolean>(false);

  useEffect(() => {
    getTasks(id);
  }, [id]);

  useEffect(() => {
    handleModalAnimation(false);
    dispatch(setDeleteMode(false));
    setModalMode(false);
  }, []);
  const getTasks = async (id: any) => {
    const resProyect = await getOneProyect(id);
    const res = await getTask(id);
    if (resProyect.data) {
      setProyectName(resProyect.data.nombre);
    }
    if (res.data) {
      dispatch(setTareasProyecto(res.data));
    }

    if (res.data && resProyect.data) {
      setLoad(true);
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

  const handleModalAnimation = (bgui: boolean) => {
    dispatch(setBgUi(bgui));
  };

  const handleEndCurrentProyect = async (currentProyect: any) => {
    const updatedCurrentProyect = { ...currentProyect };
    updatedCurrentProyect.estado = true;
    const res = await EditProyect(updatedCurrentProyect);
    if (res.status === 200) {
      window.location.replace("/finishedpanel");
      dispatch(setDeleteMode(false));
    }
  };

  const handleDeleteProyect = async (proyecto: any) => {
    const res = await deleteProyect(proyecto);
    if (res.status === 200) {
      window.history.back();
      dispatch(setDeleteMode(false));
    }
  };

  const handleEditProyect = async (currentproyect: any) => {
    dispatch(setBgUi(false));
    dispatch(setEditMode(false));
    const updatedCurrentProyect = { ...currentproyect };
    updatedCurrentProyect.nombre = proyectname;
    await EditProyect(updatedCurrentProyect);
  };

  console.log(currentproyect.desc);
  return (
    <>
      {!load ? (
        <SkeletonContainer>
          <div className="skeleton-box header"></div>
          <div className="skeleton-box form">
            <div className="skeleton-box"></div>
            <div className="skeleton-box"></div>
            <div className="skeleton-box"></div>
          </div>
          <div className="skeleton-box "></div>
          <div className="skeleton-box list"></div>
        </SkeletonContainer>
      ) : (
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
                    handleEditProyect(currentproyect);
                  }}
                  title="Guardar cambios en la edición"
                >
                  Guardar cambios
                </button>
              </h3>
              <div style={{ position: "relative" }}>
                <button
                  title="Opciones del proyecto."
                  className={`form__task_btn options ${
                    openmenu ? "picked" : ""
                  }`}
                  onClick={() => {
                    dispatch(setOpenMenu(!openmenu));
                  }}
                >
                  <BsGear />
                </button>
                <FormConfigMenu openmenu={openmenu}>
                  <li
                    onClick={() => {
                      handleModalAnimation(true);
                      dispatch(setEditMode(true));
                    }}
                  >
                    Cambiar nombre del proyecto
                  </li>
                  <li
                    onClick={() => {
                      dispatch(setEditDescMode(true));
                      handleModalAnimation(true);
                    }}
                  >
                    {currentproyect.desc != ""
                      ? "Cambiar descripción"
                      : "Agregar descripción"}
                  </li>
                  <li
                    onClick={() => {
                      setMsg(`¿Esta seguro que desea eliminar completamente el proyecto del
                  historial de proyectos?`);
                      handleModalAnimation(true);
                      dispatch(setDeleteMode(true));
                      setModalMode(true);
                    }}
                  >
                    Eliminar proyecto
                  </li>

                  <li
                    onClick={() => {
                      setMsg(`¿Esta seguro que desea finalizar el proyecto?`);
                      handleModalAnimation(true);
                      dispatch(setDeleteMode(true));
                      setModalMode(false);
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

          <div
            className={`modal__finishedproyects ${
              deletemode ? "hightlight" : "hidden"
            }`}
          >
            <div>
              <p>{msg}</p>
              <div className="button__finishedcontainerbuttons">
                <button
                  className="cancelbutton"
                  title="Cerrar ventana"
                  onClick={() => {
                    handleModalAnimation(false);
                    dispatch(setDeleteMode(false));
                  }}
                >
                  Cancelar
                </button>
                {modalmode ? (
                  <button
                    className="actionbutton"
                    title="Eliminar proyecto"
                    onClick={() => handleDeleteProyect(currentproyect)}
                  >
                    Eliminar
                  </button>
                ) : (
                  <button
                    className="actionbutton"
                    title="Eliminar proyecto"
                    onClick={() => handleEndCurrentProyect(currentproyect)}
                  >
                    Finalizar
                  </button>
                )}
              </div>
            </div>
          </div>
        </FormTaskContainer>
      )}
    </>
  );
};

export default Task;
