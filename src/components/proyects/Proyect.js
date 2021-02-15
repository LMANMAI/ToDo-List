import React,{useContext} from 'react';
import ProyectoContext from '../../context/proyects/proyectoContext';
import TaskContext from '../../context/task/taskContext';
import { motion } from 'framer-motion';

const Proyect = ({proyecto}) => {
    const proyectoContext = useContext(ProyectoContext);
    const {proyectoActual } = proyectoContext;

    const taskContext = useContext(TaskContext);
    const { obtenerTareas } = taskContext;

    const handleClick = proyecto => {
        proyectoActual(proyecto);
        obtenerTareas(proyecto.id);
    }
    const variants ={   
        open:{
            y: 0,
            opacity: 1,
            transition: {
            y: { stiffness: 100, velocity: -50 }
        },
        scale: 0.9
        },
        close: {
            y: 50,
            opacity: 0,
            transition: {
                y: { stiffness: 100 }
            }
        }
    }
    return ( 
        <motion.li  
            className="object_list" 
            key={proyecto.id} 
            initial={{y: 280}}
            variants={variants}
        >
            <button onClick={ ()=> handleClick( proyecto )} className="btn btn_proyect">{proyecto.nombre}</button>
         </motion.li>
     );
}
 
export default Proyect;
