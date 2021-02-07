import React,{useContext} from 'react';
import TaskContext from '../../context/task/taskContext';
import ProyectoContext from '../../context/proyects/proyectoContext';

const Task = ({tarea}) => {
    const taskContext = useContext(TaskContext);
    const { eliminarTarea, obtenerTareas, estadoTarea, tareaActual } = taskContext;

    const proyectContext = useContext(ProyectoContext);
    const {proyectoactivo} = proyectContext;
    //extraigo el proyecto activo para tener la referencia cuando actualice los proyectos
    const [proyectoActual] =proyectoactivo;

    const handleClickRemove = id => {
        eliminarTarea(id);
        obtenerTareas(proyectoActual.id);
    }
    const cambiarEstadoTarea = tarea => {
        if(tarea.estado){
            tarea.estado = false;
        }else{
            tarea.estado = true;
        }
        estadoTarea(tarea);
    }
    return ( 
        <li className="object_task">
            <p>{tarea.nombre}</p>
            <div className="estado">
                {tarea.estado 
                ?(<button
                    onClick={() => cambiarEstadoTarea(tarea)}
                    type="button"
                    className="btn btn_estado task_completa"
                >Completa</button>) 
                :(<button
                    onClick={() => cambiarEstadoTarea(tarea)}
                    type="button"
                    className="btn btn_estado task_pendiente"
                >Pendiente</button>)
                }
            
            
                <button
                    type="button"
                    className="btn btn_eliminar"
                    onClick ={()=>handleClickRemove(tarea.id)}
                >eliminar</button>
                <button
                    type="button"
                    className="btn btn_editar"
                    onClick={ ()=> tareaActual(tarea)}
                >editar</button>
            </div>
        </li>
     );
}
 
export default Task;