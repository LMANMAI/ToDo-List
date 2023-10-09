import React from "react";
import { ContainerDashboard } from "./styles";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
function Container() {
  return (
    <>
      <ContainerDashboard>
        <Outlet />
      </ContainerDashboard>
      <ToastContainer />
    </>
  );
}

export default Container;
