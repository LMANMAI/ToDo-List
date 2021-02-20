import React,{useContext} from 'react';
import ProyectoContext from '../../context/proyects/proyectoContext';
import {motion} from 'framer-motion';

const EndProyects = () => {
    const proyectoContext = useContext(ProyectoContext);
    const { panelterminados, proyectosterminados } = proyectoContext;
    
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
          {proyectosterminados.map(proyecto => (
                <motion.li 
                  key={proyecto._id}
                  
               >{proyecto.nombre}</motion.li>
                ))}               
            </ul>
      </motion.div>
     );
}
 
export default EndProyects;