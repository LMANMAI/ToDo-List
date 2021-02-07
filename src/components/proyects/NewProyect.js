import React,{ useContext, useState } from 'react';
import ProyectoContext from '../../context/proyects/proyectoContext';

const NewProyect = () => {
    const [proyect, createProyect ] = useState({
        nombre:''
    });
    
    const proyectoContext = useContext(ProyectoContext);
    const { panel, errorformulario, agregarProyecto, validarFormulario } = proyectoContext;

    const { nombre } = proyect;
  
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
            nombre:''
        })
    }
    return ( 
        <div className={panel ?'dashboard_panel active' :'dashboard_panel'}>
                <form  onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        placeholder="Nombre del proyecto"
                        name = 'nombre'
                        value = {nombre}
                        onChange={handleChange}
                        className={errorformulario ?'inputForm_active' :null}
                    />
                    {errorformulario ?<p className="input_errorP">El nombre es necesario!</p> :null}
                    <input 
                        type="submit"
                        value="Guardar"
                        className="btn btn_primario"                      
                    />
                </form>            
            </div>
     );
}
 
export default NewProyect;