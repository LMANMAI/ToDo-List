import React,{ useContext, useEffect } from 'react';
import Task from './Task';
import TaskContext from '../../context/task/taskContext';
import { motion } from 'framer-motion';
const TaskList = () => {
    const taskContext = useContext(TaskContext);
    const { tareasproyecto } = taskContext; 

    useEffect(()=>{
      //  //console.log(tareasproyecto.length)
    },[tareasproyecto]);  
    
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
          }
        }
      }
    return (  
         <div className="listado_tareas">
            {tareasproyecto.length === 0 
            ?(<p className="ntarea">No hay tareas comenza creando una!</p>) 
            :( <motion.ul 
                variants={container}
                initial="hidden"
                animate="visible"                
                >{tareasproyecto.map(tarea=> ( <Task tarea={tarea}  key={tarea._id} />))} 
            </motion.ul> )}       
        </div>
    );
}
 
export default TaskList;