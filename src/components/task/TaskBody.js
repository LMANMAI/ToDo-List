import React,{ useContext, useEffect } from 'react';
import FormTask from './FormTask';
import TaskList from './TaskList';
import ProyectoContext from '../../context/proyects/proyectoContext'

const TaskBody = () => {
    const proyectoContext = useContext(ProyectoContext);
    const { panel, panelproyecto, proyectoactivo, terminarProyecto } = proyectoContext;
    
    if(!proyectoactivo) return <div className="inactivo"><h2>Selecciona un Proyecto</h2></div>

    const [proyectoActual] = proyectoactivo;
    return ( 
        <main className={panel || panelproyecto ?"dashboard_taskbody active" :"dashboard_taskbody"} >
            <h2>Proyecto : <span>{proyectoActual.nombre}</span></h2>
            <FormTask />

            <div className="contenedor_tareas">
                <TaskList/>
             </div>
             <button
                type="button"
                className="btn btn_terminar"
                onClick={()=> terminarProyecto(proyectoActual.id)}
             >Terminar Proyecto</button>           
        </main>
     );
}
 
export default TaskBody;