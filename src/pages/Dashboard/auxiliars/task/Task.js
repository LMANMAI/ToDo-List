import React,{useContext, useEffect} from 'react';
import TaskContext from '../../../../context/task/taskContext';
import ProyectoContext from '../../../../context/proyects/proyectoContext';
import styled from '@emotion/styled';

const Tarea = styled.div`
   // border: 1px solid green;
    padding: .8rem;
    height: 200px;
    border-radius: 25px;
    box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.14) , 0px 1px 10px 0px rgba(0,0,0,0.12) , 0px 2px 4px -1px rgba(0,0,0,0.2) ;
    //filter: drop-shadow(0px 2px 5px 0px rgba(0,0,0,0.14) , 0px 1px 10px 0px rgba(0,0,0,0.12) , 0px 2px 4px -1px rgba(0,0,0,0.2) );
`;

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
    
return ( 
        <Tarea>
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
        </Tarea>
     );
}
 
export default Task;