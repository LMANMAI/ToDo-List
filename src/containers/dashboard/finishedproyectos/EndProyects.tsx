import React, { useEffect } from "react";
import { EndProyectsContainer, List, Item, EliminarButton } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../redux/store";
import { deleteProyect, getProyects } from "../../../services";
import { setFinishedProyects } from "../../../redux/slices/proyects";
const EndProyects = () => {
  const proyects = useSelector(
    (state: RootState) => state.proyects.finishedpryects
  );
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
    }
    handleGetProyects();
    console.log(res);
  };

  useEffect(() => {
    handleGetProyects();
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
              onClick={() => handleDeleteProyect(proyecto)}
            >
              Borrar
            </EliminarButton>
          </Item>
        ))}
      </List>
    </EndProyectsContainer>
  );
};

export default EndProyects;
