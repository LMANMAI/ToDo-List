import React,{ useContext, useEffect } from 'react';
import FormTask from './FormTask';
import TaskList from './TaskList';
import ProyectoContext from '../../context/proyects/proyectoContext'

const TaskBody = () => {
    const proyectoContext = useContext(ProyectoContext);
    const { panel } = proyectoContext;
    return ( 
        <main className={panel ?"dashboard_taskbody active" :"dashboard_taskbody"} >
            <h2>Proyecto : <span>Proyecto</span></h2>
            <FormTask />
            <div className="contenedor_tareas">
                <TaskList/>
             </div>
             <button
                type="button"
                className="btn btn_terminar"
             >Terminar Proyecto</button>
           
        </main>
     );
}
 
export default TaskBody;