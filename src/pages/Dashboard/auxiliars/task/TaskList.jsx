import React, { useContext, useEffect } from "react";
import Task from "./Task";
import TaskContext from "../../../../context/task/taskContext";
import styled from "@emotion/styled";

const ListadoTareas = styled.div`
  /* border: 1px solid blue; */
  width: 100%;
  height: 90%;
  padding: 0.2rem;
  overflow-y: auto;
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
  ul {
    padding: 0.5rem;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-gap: 0.7rem 0.5rem;
    padding-bottom: 1rem;
    @media (min-width: 768px) {
      padding: 1rem;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      grid-gap: 1.4rem;
    }
  }
`;

const TaskList = () => {
  const taskContext = useContext(TaskContext);
  const { tareasproyecto } = taskContext;

  return (
    <ListadoTareas>
      {tareasproyecto.length === 0 ? (
        <p className="ntarea">No hay tareas comenza creando una!</p>
      ) : (
        <ul>
          {tareasproyecto.map((tarea) => (
            <Task tarea={tarea} key={tarea._id} />
          ))}
        </ul>
      )}
    </ListadoTareas>
  );
};

export default TaskList;
