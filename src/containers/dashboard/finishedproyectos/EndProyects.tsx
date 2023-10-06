import React, { useEffect, useState } from "react";
import { EndProyectsContainer, List, Item, EliminarButton } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../redux/store";
import { deleteProyect, getProyects } from "../../../services";
import { setFinishedProyects } from "../../../redux/slices/proyects";
import { setBgUi, setEditMode } from "../../../redux/slices/ui";
import { BackgroundUI } from "../detailproyect/auxiliars/styles";
const EndProyects = () => {
  const [currentproyect, setcurrentproyect] = useState<any>();
  const [msg, setMsg] = useState<string>("");
  const proyects = useSelector(
    (state: RootState) => state.proyects.finishedpryects
  );
  const bg_position = useSelector((state: RootState) => state.ui.bg);
  const dispatch = useDispatch();
  const handleGetProyects = async () => {
    const request = await getProyects();
    if (request.status === 200) {
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
      setTimeout(() => {
        handleModalAnimation(false, false);
      }, 3000);
    }
  };
  const handleModalAnimation = (bgui: boolean, editmode: boolean) => {
    dispatch(setBgUi(bgui));
    dispatch(setEditMode(editmode));
  };
  useEffect(() => {
    handleGetProyects();
    console.log(bg_position);
  }, []);
  return (
    <EndProyectsContainer>
      <List>
        {proyects.length === 0 ? (
          <Item>Todavia no terminaste ningun proyecto</Item>
        ) : null}
        {proyects.map((proyecto: any) => (
          <Item key={proyecto._id} className="proyecto_terminado">
            <p>{proyecto.nombre}</p>
            <EliminarButton
              type="button"
              className="btn btn_eliminar"
              onClick={() => {
                setMsg(`¿Esta seguro que desea eliminar completamente el proyecto del
                  historial de proyectos?`);
                setcurrentproyect(proyecto);
                handleModalAnimation(true, true);
              }}
            >
              Borrar
            </EliminarButton>
          </Item>
        ))}
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
              title="Eliminar proyecto"
              onClick={() => handleDeleteProyect(currentproyect)}
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </EndProyectsContainer>
  );
};

export default EndProyects;
