import React, { useContext, useEffect } from "react";
import Task from "./Task";
import TaskContext from "../../../../context/task/taskContext";
import styled from "@emotion/styled";

const ListadoTareas = styled.div`
  /* border: 1px solid blue; */
  width: 100%;
  max-height: 80%;
  padding: 0.2rem;
  //verflow: hidden;
  overflow-y: scroll;
  ul {
    padding: 0.5rem;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(150px,1fr));
    grid-gap: 1rem;
  }
`;


const TaskList = () => {
  const taskContext = useContext(TaskContext);
  const { tareasproyecto } = taskContext;

  useEffect(() => {
    console.log(tareasproyecto.length);
  }, [tareasproyecto]);

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
