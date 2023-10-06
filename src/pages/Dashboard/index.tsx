import React, { useEffect } from "react";
import { Container, SideBar } from "./auxiliars";
import { DashboardContainer } from "./styles";
import { authentication } from "../../services";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { setCurrentProyect } from "../../redux/slices/proyects";
const DashboardPage = () => {
  const dispatch = useDispatch();
  const panelnuevoproyecto = useSelector(
    (state: RootState) => state.ui.panelnuevoproyecto
  );
  const panelproyectos = useSelector(
    (state: RootState) => state.ui.panelproyectos
  );
  const panelterminados = useSelector(
    (state: RootState) => state.ui.panelterminados
  );

  useEffect(() => {
    const handleAuth = async () => {
      await authentication();
    };
    if (panelnuevoproyecto || panelproyectos || panelterminados) {
      dispatch(setCurrentProyect(null));
    }
    handleAuth();
  }, []);
  return (
    <DashboardContainer>
      <SideBar />
      <Container />
    </DashboardContainer>
  );
};

export default DashboardPage;
