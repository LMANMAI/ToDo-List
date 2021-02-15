import React, {useContext, useEffect}  from 'react';
import Proyect from './Proyect';
import ProyectoContext from '../../context/proyects/proyectoContext';
import { motion, useCycle } from 'framer-motion';
const ProyectList = () => {
    const proyectoContext = useContext(ProyectoContext);
    const { panelproyecto, proyectos, obtenerProyectos } = proyectoContext;

    //obtener proyectos cuando carga el componente    
    useEffect(() => {
        obtenerProyectos();
        //eslint
    }, []);     
    const variants = {
        open: {
          transition: { staggerChildren: 0.07, delayChildren: 0.1 }
        },
        closed: {
          transition: { staggerChildren: 0.05, delayChildren: 0.1 }
        }
      };

    return ( 
    <div className={panelproyecto ?"list_container active" : "list_container"}>
      {proyectos.length === 0 ?<p className="object_list">Todavia no creaste ningun proyecto!</p> 
        :(<motion.ul
            initial={false}
            animate={panelproyecto ?"open" : "close"}
            variants={variants}
            >
            {   proyectos.map(proyecto => (
                <Proyect key={proyecto.id} proyecto={proyecto}/>))
            }               
            </motion.ul>
            )}   
    </div>
     );
}
 
export default ProyectList;