import React,{ useContext, useState } from 'react';
import ProyectoContext from '../../context/proyects/proyectoContext';
import {motion} from 'framer-motion';


const NewProyect = () => {
    const [proyect, createProyect ] = useState({
        nombre:'',
        desc: ''
    });
    
    const proyectoContext = useContext(ProyectoContext);
    const { panel, errorformulario, agregarProyecto, validarFormulario } = proyectoContext;

    const { nombre, desc } = proyect;
  
    const handleChange = e =>{
        createProyect({
            ...proyect,
            [e.target.name]: e.target.value
        });
    }
    //enviar lo que envia el usuario
    const handleSubmit = e =>{
        e.preventDefault();

        if(nombre.trim()===''){
            validarFormulario();
            return;
        }
        agregarProyecto(proyect);
        createProyect({
            nombre:'',
            desc:''
        })
    }
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
            className={panel ?'dashboard_panel active' :'dashboard_panel'}
            variants={variants}
            animate={panel ?'open' :'close'}           
        >
            <form  onSubmit={handleSubmit} className="form_newProyect">
                <input 
                    type="text"
                    placeholder="Nombre del proyecto"
                    name = 'nombre'
                    value = {nombre}
                    onChange={handleChange}
                    className={errorformulario ?'inputForm_active' :null}
                />
                    <textarea 
                    type="text"
                    placeholder="Descripcion breve"
                    name = 'desc'
                    value = {desc}
                    onChange={handleChange}
                    className= "textArea"
                />
                {errorformulario ?<p className="input_errorP">El nombre es necesario!</p> :null}
                <input 
                    type="submit"
                    value="Guardar"
                    className="btn btn_primario"                      
                />
            </form> 
        </motion.div>   
     );
}
 
export default NewProyect;