import React, { useContext, useEffect } from "react";
import { VscChromeClose } from "react-icons/vsc";
import ProyectoContext from "../../../../context/proyects/proyectoContext";
import AnimationContext from "../../../../context/animations/AnimationContext";
import Proyect from "./Proyect";
//import "./index.scss";
import styled from "@emotion/styled";

const ProyectListContainer = styled.div`
  width: 95%;
  margin: 0 auto;
  justify-content: center;
  display: flex;
  z-index: 3;
  @media (min-width: 768px) {
    padding: 0.5rem;
    width: 95%;
    overflow-y: auto;
    height: 90%;
    padding: 0.5rem;
    &::-webkit-scrollbar {
      -webkit-appearance: none;
    }
    &::-webkit-scrollbar:vertical {
      width: 10px;
    }
    &::-webkit-scrollbar:horizontal {
      height: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #797979;
      border-radius: 20px;
      border: 2px solid #f1f2f3;
    }
    &::-webkit-scrollbar-track {
      border-radius: 10px;
    }
  }
`;
const ButtonClose = styled.button`
 background-color: #f02d7b;
    border: none;
    outline: none;
    width: 50px;
    height: 50px;
    border-radius: 35px;
    cursor: pointer;
    margin: 0.5rem;
    svg {
      color: white;
    }
`;
const ProyectMessage = styled.p``;
const LisContainer = styled.ul`
  width: 95%;
  @media (min-width: 768px) {
    margin: 0 auto;
    width: 95%;
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    align-items: center;
  }
`;
const ProyectList = () => {
  const proyectoContext = useContext(ProyectoContext);
  const { proyectos, obtenerProyectos } = proyectoContext;

  const animationContext = useContext(AnimationContext);
  const { movePanelAuth } = animationContext;

  //obtener proyectos cuando carga el componente
  useEffect(() => {
    obtenerProyectos();
  }, []);

  return (
    <>
      <ButtonClose onClick={() => movePanelAuth()}>
        <VscChromeClose />
      </ButtonClose>
      <ProyectListContainer>
        {proyectos.length === 0 ? (
          <ProyectMessage className="object_list">Todavia no creaste ningun proyecto!</ProyectMessage>
        ) : (
          <LisContainer>
            {proyectos.map((proyecto) => (
              <Proyect key={proyecto._id} proyecto={proyecto} />
            ))}
          </LisContainer>
        )}
      </ProyectListContainer>
    </>
  );
};

export default ProyectList;
