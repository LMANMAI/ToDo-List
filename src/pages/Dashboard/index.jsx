import React, { useContext, useEffect } from "react";
import SideBar from "./auxiliars/SideBar";
import TaskBody from "./auxiliars/task/TaskBody";
import Container from './auxiliars/Container';
import ProyectoContext from "../../context/proyects/proyectoContext";
import AuthContext from "../../context/auth/authContext";
import AlertaContext from "../../context/alertas/alertaContext";
import "./index.scss";

const DashboardPage = () => {
  const proyectoContext = useContext(ProyectoContext);
  const { panelproyecto, mensaje } = proyectoContext;

  const authContext = useContext(AuthContext);
  const { userAuth } = authContext;

  const alertacontext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertacontext;

  useEffect(() => {
    userAuth();
    if (mensaje) {
      mostrarAlerta(mensaje.msg, mensaje.categoria);
    }
  }, [mensaje]);
  return (
    <>
      <div className="Dashboard">
        {alerta ? <div className={alerta.categoria}>{alerta.msg}</div> : null}
        <div className="Dashboard_box">
          <SideBar />
          <Container/>          
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
