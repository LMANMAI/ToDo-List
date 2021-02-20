import React, {useContext, useEffect}  from 'react';
import Proyect from './Proyect';
import ProyectoContext from '../../context/proyects/proyectoContext';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1
    }
  }
}

const ProyectList = () => {
    const proyectoContext = useContext(ProyectoContext);
    const { panelproyecto, proyectos, obtenerProyectos } = proyectoContext;

    //obtener proyectos cuando carga el componente    
    useEffect(() => {
        obtenerProyectos(); 
        proyectos.map(proyecto => ( proyecto.estado ?console.log(proyecto) :console.log("en curso")))       
    }, []);     

    return ( 
    <div className={panelproyecto ?"list_container" :null}>
      {proyectos.length === 0 
      ?<p className="object_list">Todavia no creaste ningun proyecto!</p> 
      :(<motion.ul
          variants={container}
          initial="hidden"
          animate="visible"
          >{ proyectos.map(proyecto => (<Proyect key={proyecto._id} proyecto={proyecto}/>))
          }</motion.ul> )}   
    </div>
     );
}
 
export default ProyectList;