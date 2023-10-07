import React from "react";
import { ContainerDashboard } from "./styles";
import { Outlet } from "react-router-dom";
function Container() {
  return (
    <ContainerDashboard>
      <Outlet />
    </ContainerDashboard>
  );
}

export default Container;
