import React, { useContext, useState } from "react";
import {
  BsFolder,
  BsFolderPlus,
  BsFolderCheck,
  BsHouseDoor,
  BsDoorClosed,
  BsPerson,
} from "react-icons/bs";
import { CgMenu } from "react-icons/cg";
import AnimationContext from "../../../../context/animations/AnimationContext";
import { SideBarContainer } from "./styles";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";

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
  const currentUser = useSelector((state: RootState) => state.user.currentUser);
  const Exit = () => {
    setTimeout(() => {
      localStorage.removeItem("token");
      window.location.reload();
    }, 1000);
  };

  const sideBarMenuItems = [
    {
      path: "newproyects",
      name: "Crear proyecto",
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
      name: "Proyectos terminados",
      icon: <BsFolderCheck />,
      function: movePanelProyectosTermiandos,
    },
  ];

  return (
    <SideBarContainer width={isOpen}>
      <div className="top_section">
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

        <div>
          {sideBarMenuItems.map((item, index) => (
            <NavLink
              key={index}
              className="button link"
              to={item.path}
              title={item.name}
            >
              <div className="icon">{item.icon}</div>
              <div className="name link_text">{item.name}</div>
            </NavLink>
          ))}
        </div>

        <div className="bottom__section">
          <div className="user_info p8 button link" title="Datos del usuario">
            <div className="icon">
              <BsPerson />
            </div>
            <div className="name link_text">
              <p>{currentUser?.name}</p>
              <span>{currentUser?.email}</span>
            </div>
          </div>
          <div
            className="button p8 link"
            onClick={() => Exit()}
            title="Cerrar sesión"
          >
            <div className="icon">
              <BsDoorClosed />
            </div>
            <div className="name link_text">Cerrar sesión</div>
          </div>
        </div>
      </div>
    </SideBarContainer>
  );
};

export default SideBar;
