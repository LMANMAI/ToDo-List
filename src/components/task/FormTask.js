import React, { Fragment, useContext, useState, useEffect } from 'react';
import TaskContext from '../../context/task/taskContext';
import ProyectoContext from '../../context/proyects/proyectoContext';

const FormTask = () => {
    const taskContext = useContext(TaskContext);
    const { tareaactual, errortarea, agregarTarea, validarTarea, obtenerTareas, actualizarTask } = taskContext;

    const proyectoContext = useContext(ProyectoContext);
    const {proyectoactivo } = proyectoContext;
    const [ proyectoActual ] = proyectoactivo;
      
    const [ tarea, setTarea ] = useState({
        nombre:''
    });
    const { nombre } = tarea;
    // console.log(proyectoActual)
    useEffect(()=>{
        if(tareaactual !== null){
            setTarea(tareaactual);
        }else{
            setTarea({
                nombre:''
            })
        }
    },[tareaactual]);
  
    //Capturar lo que ingresa el usuario
    const handleChange = e =>{
        setTarea({
            ...tarea,
            [e.target.name]: e.target.value
        })
    }
    //Submit
    const handleSubmit = e =>{
        e.preventDefault();

        if(nombre.trim() === ''){
            validarTarea();
            return;
        }
        //estoy agregando una nueva tarea
       if(tareaactual === null){
           console.log(tarea)
        tarea.proyecto = proyectoActual._id;
        
        agregarTarea(tarea);
       }else{
        //de lo contrario estoy actualizando la tarea
        actualizarTask(tarea);
       }
        obtenerTareas(proyectoActual.id);
        setTarea({
            nombre:''
        })
    }
    // console.log(proyectoActual)
    return (        
        <Fragment> 
            {errortarea ?<p>El nombre para guardar la tarea es necesario</p> :null}
            <div className="form_task_container">
                <form onSubmit={handleSubmit} >
                    <input 
                        type="text" 
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                        placeholder="Agregar una tarea!" 
                        className="input_task"  
                    />
                    <input 
                        type="submit" 
                        value={tareaactual ? 'Guardar cambios' :'Agregar Nueva Tarea'} 

                        className="btn btn_submit"/> 
                </form>
                <div className="description"><p>{proyectoActual.desc}</p></div>
            </div>
        </Fragment>
     );
}
 
export default FormTask;