import React from "react";
import { HomeContainer } from "./styles";

// Componente reutilizable para los elementos de la lista
const ListItem = ({ title, items }: any) => (
  <div className="home__item">
    <h4>{title}</h4>
    <ul>
      {items.map((item: string, index: number) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

const HomePage = () => {
  return (
    <HomeContainer>
      <h3 className="home__title">Panelify</h3>
      <div className="home__content">
        <ListItem
          title="Creación y Administración de Paneles"
          items={[
            "Permite a los usuarios crear paneles dentro de cada proyecto.",
            "Los paneles pueden tener nombres y descripciones personalizadas.",
            "Facilita la organización de tareas dentro de los paneles.",
          ]}
        />
        <ListItem
          title="Gestión de Tareas"
          items={[
            "Permite a los usuarios crear tareas dentro de los paneles.",
            "Las tareas pueden tener nombres, descripciones y prioridades.",
            "Ofrece funciones de arrastrar y soltar para reorganizar las tareas.",
          ]}
        />
        <ListItem
          title="Seguimiento de Progreso"
          items={[
            "Permite a los usuarios marcar tareas como completadas y realizar un seguimiento del progreso del proyecto.",
          ]}
        />
        <ListItem
          title="Historial de Actividades"
          items={[
            "Registra un historial de actividades para cada proyecto, panel y tarea.",
          ]}
        />
      </div>
    </HomeContainer>
  );
};

export default HomePage;
