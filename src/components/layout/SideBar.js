import React, {useContext, useState} from 'react';
import NewProyect from '../proyects/NewProyect';
import EndProyects from '../proyects/EndProyects';
import ProyectoContext from '../../context/proyects/proyectoContext';
import AuthContext from '../../context/auth/authContext';

const SideBar = () => {
    const proyectoContext = useContext(ProyectoContext);
    const { panel, panelproyecto, panelterminados, badge, showPanel, mostrarPanel, mostrarTerminados } = proyectoContext;
    
    const authContext = useContext(AuthContext);
    const { user, EndSesion } = authContext;
    
    
    return (         
        <div className={panel || panelproyecto || panelterminados ?"dashboard_sidebar active" :"dashboard_sidebar"} >
            <div className="brand_logo">
                <h2>TASK</h2><span>app</span>
            </div>
            <div className="name_container">
                {user ?(<p className="name">Hola! <span>{user.nombre}</span></p>) :null}
                
            </div>
            <div className="btn_container_dashboard">
                <button 
                    onClick={()=> showPanel()}
                    className="btn btn_crear">Crear Proyecto</button>
                               
                <div className="badge">
                    <button 
                        data-badge="!"
                        onClick={()=> mostrarPanel()}
                        className={badge ?"btn btn_crear show" :"btn btn_crear"}>Mis proyectos</button>
                </div>
                <div className="badge">
                    <button 
                        data-badge="!"
                        onClick={()=>mostrarTerminados()}
                        className="btn btn_crear">Proyectos Terminados</button> 
                </div>          
            </div>
        <NewProyect />        
        <EndProyects />
         <button 
            className="btn btn_exit"
            onClick={()=> EndSesion()}
        >Cerrar Sesión</button>
        </div>
     );
}
 
export default SideBar;
