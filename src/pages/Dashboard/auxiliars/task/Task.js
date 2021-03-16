import React,{useContext, useEffect} from 'react';
import TaskContext from '../../../../context/task/taskContext';
import ProyectoContext from '../../../../context/proyects/proyectoContext';
import { motion } from 'framer-motion';

const Task = ({tarea}) => {

    const taskContext = useContext(TaskContext);
    const { eliminarTarea, obtenerTareas, actualizarTask, tareaActual } = taskContext;

    const proyectContext = useContext(ProyectoContext);
    const {proyectoactivo} = proyectContext;
    //extraigo el proyecto activo para tener la referencia cuando actualice los proyectos
    const [proyectoActual] =proyectoactivo;
    useEffect(()=>{
        obtenerTareas(proyectoActual._id);
    },[]);
    const handleClick = id => {
        eliminarTarea(id, proyectoActual._id);
        // obtenerTareas(proyectoActual._id);
    }
    const cambiarEstadoTarea = tarea => {
        if(tarea.estado){
            tarea.estado = false;
        }else{
            tarea.estado = true;
        }
        actualizarTask(tarea);
    }
    
const item = {
     hidden: { y: 20, opacity: 0 },
     visible: {
       y: 0,
       opacity: 1
     }
   };

    return ( 
        <motion.li 
            key={tarea._id}           
            className="object_task"
            variants={item}
        >
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
                    onClick ={()=>handleClick(tarea._id)}
                >Eliminar</button>
                <button
                    type="button"
                    className="btn btn_editar"
                    onClick={ ()=> tareaActual(tarea)}
                >Editar</button>
            </div>
        </motion.li>
     );
}
 
export default Task;