import React, { useContext } from "react";
import { BsFolder, BsFolderPlus, BsFolderCheck } from "react-icons/bs";
import AuthContext from "../../../../context/auth/authContext";
import AnimationContext from "../../../../context/animations/AnimationContext";
import {
  SideBarContainer,
  SideBarDatos,
  Brand,
  SidebarButtonContainer,
  Button,
  EndSesionButton,
} from "./styles";

const SideBar = () => {
  const animationContext = useContext(AnimationContext);
  const {
    movePanelNuevoProyecto,
    movePanelProyectos,
    movePanelProyectosTermiandos,
  } = animationContext;

  const authContext = useContext(AuthContext);
  const { user, EndSesion } = authContext;

  const Exit = () => {
    setTimeout(() => {
      EndSesion();
    }, 1000);
  };
  return (
    <SideBarContainer>
      <SideBarDatos>
        <Brand>
          TASK <p>app</p>
        </Brand>

        <div>
          {user ? (
            <p>
              Hola! <span>{user.nombre}</span>
            </p>
          ) : null}
        </div>
      </SideBarDatos>

      <SidebarButtonContainer>
        <Button
          onClick={() => movePanelNuevoProyecto()}
          className="DashboardSideBar_botones_btn"
        >
          <BsFolderPlus />
          <p>Crear Proyecto</p>
        </Button>

        <Button
          onClick={() => movePanelProyectos()}
          className="DashboardSideBar_botones_btn"
        >
          <BsFolder />
          <p> Mis proyectos</p>
        </Button>

        <Button
          onClick={() => movePanelProyectosTermiandos()}
          className="DashboardSideBar_botones_btn"
        >
          <BsFolderCheck />
          <p>Proyectos Terminados</p>
        </Button>
      </SidebarButtonContainer>
      <EndSesionButton onClick={() => Exit()}>Cerrar Sesión</EndSesionButton>
    </SideBarContainer>
  );
};

export default SideBar;
