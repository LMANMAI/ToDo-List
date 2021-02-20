import React,{useContext} from 'react';
import ProyectoContext from '../../context/proyects/proyectoContext';
import TaskContext from '../../context/task/taskContext';
import { motion } from 'framer-motion';

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}
const Proyect = ({proyecto}) => {
    const proyectoContext = useContext(ProyectoContext);
    const {proyectoActual } = proyectoContext;

    const taskContext = useContext(TaskContext);
    const { obtenerTareas } = taskContext;

    const handleClick = proyecto => {
        proyectoActual(proyecto);
        obtenerTareas(proyecto._id);
    }

    return ( 
        <motion.li  
            className="object_list" 
            key={proyecto._id}
            variants={item}        >
            <button onClick={ ()=> handleClick( proyecto )} className="btn btn_proyect">{proyecto.nombre}</button>
         </motion.li>
     );
}
 
export default Proyect;
