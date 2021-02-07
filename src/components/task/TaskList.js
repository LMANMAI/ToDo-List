import React,{useContext, useEffect} from 'react';
import Task from './Task';
import TaskContext from '../../context/task/taskContext';

const TaskList = () => {
    const taskContext = useContext(TaskContext);
    const { tareasproyecto } = taskContext;
    useEffect(()=>{

    });
    return (  
        <>
        <div className="listado_tareas">
            {tareasproyecto.length === 0 
            ?(<p className="ntarea">No hay tareas comenza creando una!</p>) 
            :(
                 <ul >
                {tareasproyecto.map(tarea=> (
                     <Task 
                        tarea={tarea}
                        key={tarea.id}/> 
                     ))}
                </ul>
            )}
       
        </div>
       
        </>
    );
}
 
export default TaskList;