import React, { useEffect } from "react";
import { ContainerDashboard } from "./styles";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { allFalse } from "../../../../redux/slices/ui";
import { RootState } from "../../../../redux/store";
function Container() {
  const dispatch = useDispatch();
  const currentproyect = useSelector(
    (state: RootState) => state.proyects.currentproyect
  );
  useEffect(() => {
    if (currentproyect) {
      dispatch(allFalse());
    }
  }, [currentproyect]);
  return (
    <ContainerDashboard>
      <Outlet />
    </ContainerDashboard>
  );
}

export default Container;
