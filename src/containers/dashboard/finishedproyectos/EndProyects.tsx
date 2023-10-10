import React, { useEffect, useState } from "react";
import { EndProyectsContainer, List, Item, EliminarButton } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../redux/store";
import { deleteProyect, getProyects } from "../../../services";
import { setFinishedProyects } from "../../../redux/slices/proyects";
import { setBgUi, setEditMode } from "../../../redux/slices/ui";
import { BackgroundUI } from "../detailproyect/auxiliars/styles";
import { CiMenuKebab } from "react-icons/ci";
import EditProyect from "../../../services/editProyect";
interface IProyectEnd {
  proyecto: any;
  handleModalAnimation: Function;
  setMsg: Function;
  setcurrentproyect: Function;
  setShowDeleteButton: Function;
}

const FinishProyect: React.FC<IProyectEnd> = ({
  proyecto,
  handleModalAnimation,
  setMsg,
  setcurrentproyect,
  setShowDeleteButton,
}) => {
  return (
    <Item key={proyecto._id} className="proyecto_terminado">
      <p>{proyecto.nombre}</p>
      <EliminarButton type="button" className="btn btn_eliminar">
        <CiMenuKebab />
      </EliminarButton>

      <ul className="menu__endpanel">
        <li
          onClick={() => {
            setMsg(`¿Esta seguro que desea eliminar completamente el panel del
          historial de paneles finalizados?`);
            setcurrentproyect(proyecto);
            handleModalAnimation(true, true);
            setShowDeleteButton(true);
          }}
        >
          Eliminar panel
        </li>
        <li
          onClick={() => {
            setMsg(
              `¿Esta seguro que desea regresar el panel a los que estan en curso?`
            );
            setcurrentproyect(proyecto);
            handleModalAnimation(true, true);
            setShowDeleteButton(false);
          }}
        >
          Regresar a mis paneles
        </li>
      </ul>
    </Item>
  );
};

const EndProyects = () => {
  const [currentproyect, setcurrentproyect] = useState<any>();
  const [msg, setMsg] = useState<string>("");
  const [load, setLoad] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [showDeleteButton, setShowDeleteButton] = useState(true);

  const proyects = useSelector(
    (state: RootState) => state.proyects.finishedpryects
  );
  const bg_position = useSelector((state: RootState) => state.ui.bg);
  const dispatch = useDispatch();
  const handleGetProyects = async () => {
    const request = await getProyects();
    if (request.status === 200) {
      setLoad(false);
      dispatch(
        setFinishedProyects(
          request.data.filter((item: any) => item.estado === true)
        )
      );
    }
  };
  const handleDeleteProyect = async (proyecto: any) => {
    const res = await deleteProyect(proyecto);
    if (res.status === 200) {
      handleGetProyects();
      setMsg(
        "Proyecto eliminado correctamente (esta ventana se cerrara automaticamente)."
      );
      setDisabled(true);
      setTimeout(() => {
        handleModalAnimation(false, false);
        setDisabled(false);
      }, 3000);
    }
  };

  const handleRegresarProyecto = async (currentproyect: any) => {
    const updatedCurrentProyect = { ...currentproyect };
    updatedCurrentProyect.estado = false;
    const res = await EditProyect(updatedCurrentProyect);
    if (res.status === 200) {
      window.location.replace("/panel");
    }
  };

  const handleModalAnimation = (bgui: boolean, editmode: boolean) => {
    dispatch(setBgUi(bgui));
    dispatch(setEditMode(editmode));
  };

  useEffect(() => {
    setLoad(true);
    handleGetProyects();
    handleModalAnimation(false, false);
  }, []);

  return (
    <EndProyectsContainer>
      <List>
        {load ? (
          <div className="skeleton-box"></div>
        ) : proyects.length === 0 ? (
          <Item>Todavia no terminaste ningun proyecto</Item>
        ) : (
          proyects.map((proyecto: any) => (
            <FinishProyect
              proyecto={proyecto}
              handleModalAnimation={handleModalAnimation}
              setMsg={setMsg}
              setcurrentproyect={setcurrentproyect}
              setShowDeleteButton={setShowDeleteButton}
            />
          ))
        )}
      </List>
      <BackgroundUI
        bg_position={bg_position}
        onClick={() => {
          dispatch(setBgUi(false));
          dispatch(setEditMode(false));
        }}
      />
      <div
        className={`modal__finishedproyects ${
          bg_position ? "hightlight" : "hidden"
        }`}
      >
        <div>
          <p>{msg}</p>
          <div className="button__finishedcontainerbuttons">
            <button
              className="cancelbutton"
              title="Cerrar ventana"
              onClick={() => handleModalAnimation(false, false)}
            >
              Cancelar
            </button>
            <button
              className="actionbutton"
              title={showDeleteButton ? "Eliminar panel" : "Regresar panel"}
              onClick={() =>
                showDeleteButton
                  ? handleDeleteProyect(currentproyect)
                  : handleRegresarProyecto(currentproyect)
              }
              disabled={disabled}
            >
              {showDeleteButton ? "Eliminar" : "Regresar"}
            </button>
          </div>
        </div>
      </div>
    </EndProyectsContainer>
  );
};

export default EndProyects;
