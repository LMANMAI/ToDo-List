import React, { useEffect } from "react";
import { ContainerDashboard } from "./styles";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { allFalse } from "../../../../redux/slices/ui";
import { RootState } from "../../../../redux/store";
function Container() {
  const dispatch = useDispatch();
  const proyectoactivo = useSelector(
    (state: RootState) => state.proyects.proyectoactivo
  );
  useEffect(() => {
    if (proyectoactivo) {
      dispatch(allFalse());
    }
  }, [proyectoactivo]);
  return (
    <ContainerDashboard>
      <Outlet />
    </ContainerDashboard>
  );
}

export default Container;
