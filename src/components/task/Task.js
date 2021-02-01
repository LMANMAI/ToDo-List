import React from 'react'

const Task = ({tarea}) => {
    return ( 
        <li className="object_task">
            <p>{tarea.nombre}</p>
            <div className="estado">
                {tarea.estado 
                ?(<button
                    type="button"
                    className="btn btn_estado task_completa"
                >Completa</button>) 
                :(<button
                    type="button"
                    className="btn btn_estado task_pendiente"
                >Pendiente</button>)
                }
            
            
                <button
                    type="button"
                    className="btn btn_eliminar"
                >eliminar</button>
                <button
                    type="button"
                    className="btn btn_editar"
                >editar</button>
            </div>
        </li>
     );
}
 
export default Task;