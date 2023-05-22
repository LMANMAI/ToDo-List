import React, { useContext, useState } from "react";
import {
  BsFolder,
  BsFolderPlus,
  BsFolderCheck,
  BsHouseDoor,
} from "react-icons/bs";
import { CgMenu } from "react-icons/cg";
import AuthContext from "../../../../context/auth/authContext";
import AnimationContext from "../../../../context/animations/AnimationContext";
import { SideBarContainer } from "./styles";
import { NavLink } from "react-router-dom";
const SideBar = () => {
  const {
    panelDashboard,
    movePanelNuevoProyecto,
    movePanelProyectos,
    movePanelProyectosTermiandos,
    setPanelDashboard,
  } = useContext(AnimationContext);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = () => {
    setIsOpen(!isOpen);
    setPanelDashboard(isOpen);
  };
  const { user, EndSesion } = useContext(AuthContext);

  const Exit = () => {
    setTimeout(() => {
      EndSesion();
    }, 1000);
  };

  const sideBarMenuItems = [
    {
      path: "newproyects",
      name: "Crear Proyecto",
      icon: <BsFolderPlus />,
      function: movePanelNuevoProyecto,
    },
    {
      path: "proyects",
      name: "Mis proyectos",
      icon: <BsFolder />,
      function: movePanelProyectos,
    },
    {
      path: "finishedproyectos",
      name: "Proyectos Terminados",
      icon: <BsFolderCheck />,
      function: movePanelProyectosTermiandos,
    },
  ];
  return (
    <SideBarContainer width={isOpen}>
      <div className="top_section">
        <h2 className="logo">Mern Task</h2>
        <div
          className="menu_button bars"
          title={isOpen ? "Cerrar menu" : "Abrir menu"}
        >
          <CgMenu
            onClick={() => {
              toggle();
            }}
          />
        </div>
      </div>

      <div style={{ marginTop: "40px" }}>
        <NavLink className="button link" to={"/"} title="Inicio">
          <div className="icon">
            <BsHouseDoor />
          </div>
          <div className="name link_text">Inicio</div>
        </NavLink>

        <div style={{ marginTop: "45px" }}>
          {sideBarMenuItems.map((item, index) => (
            <NavLink
              key={index}
              className="button link"
              to={item.path}
              title={item.name}
              // onClick={() => {
              //   item.function();
              // }}
            >
              <div className="icon">{item.icon}</div>
              <div className="name link_text">{item.name}</div>
            </NavLink>
          ))}
        </div>
      </div>
    </SideBarContainer>
  );
};

export default SideBar;
