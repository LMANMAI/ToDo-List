import React from 'react'
import Task from './Task';
const TaskList = () => {
    const tareas = [
        {nombre: 'Elegir Lenguaje', estado: true},
        {nombre: 'Hacer Diseño en Figma', estado: false},
        {nombre: 'Comenzar el Proyecto', estado: false},
        {nombre: 'Elegir Lenguaje', estado: true},
        {nombre: 'Hacer Diseño en Figma', estado: false},
        {nombre: 'Comenzar el Proyecto', estado: false},
        {nombre: 'Elegir Lenguaje', estado: true},
        {nombre: 'Hacer Diseño en Figma', estado: false},
        {nombre: 'Comenzar el Proyecto', estado: false},
        {nombre: 'Elegir Lenguaje', estado: true},
        {nombre: 'Hacer Diseño en Figma', estado: false},
        {nombre: 'Comenzar el Proyecto', estado: false}
    ]
    return (  
        <>
        <div className="listado_tareas">
        <ul >
            {tareas.length === 0 
                ?(<li className="ntarea"><p>No hay tareas!</p></li>)
                :(tareas.map(tarea=> (
                    <Task tarea={tarea}/>
                )))
            }
        </ul>
        </div>
       
        </>
    );
}
 
export default TaskList;