import React,{useContext} from 'react';
import ProyectoContext from '../../context/proyects/proyectoContext';
import TaskContext from '../../context/task/taskContext';
import {motion} from 'framer-motion';

const EndProyects = () => {
    const proyectoContext = useContext(ProyectoContext);
    const { panelterminados, proyectosterminados, eliminarProyecto } = proyectoContext;
    const taskContext = useContext(TaskContext);
    const { counttask } = taskContext;
    //animacion
     const variants = {
      open:{
          x: 260,
          opacity: 1,
          transition: { x: { stiffness: 100, velocity: 50 }}
      },
      close:{
          x: 0,
          opacity: 0,
          transition: { x: { stiffness: 100, velocity: 70  }}
      }
  }
   
    return ( 
      <motion.div 
         className={panelterminados ?"dashboard_panel active width" :"dashboard_panel"}
         variants={variants}
         animate={panelterminados ?'open' :'close'}
      >
       <ul className="lista_terminados">
         {proyectosterminados.length === 0 ?(<li>Todavia no terminaste ningun proyecto</li>) :null}
         {proyectosterminados.map(proyecto => (
            <motion.li 
              key={proyecto._id}
              className="proyecto_terminado"
            ><p>{proyecto.nombre}</p>
           <button
                type="button"
                className="btn btn_eliminar"
                  onClick ={()=>eliminarProyecto(proyecto._id)}
            >Eliminar</button>
            </motion.li> ))} </ul>
      </motion.div>
     );
}
 
export default EndProyects;