import React, {useContext} from 'react';
import ProyectList from '../proyects/ProyectList';
import NewProyect from '../proyects/NewProyect';
import ProyectoContext from '../../context/proyects/proyectoContext';

const SideBar = () => {
    const proyectoContext = useContext(ProyectoContext);
    const { panel, panelproyecto,showPanel, mostrarPanel } = proyectoContext;
   
    return ( 
        
        <div className={panel || panelproyecto ?"dashboard_sidebar active" :"dashboard_sidebar"} >
            <div className="brand_logo">
                <h2>TASK</h2><span>app</span>
            </div>
            <div className="name_container">
                <p className="name">Hola! <span>Lucas</span></p>
            </div>
            <div className="btn_container_dashboard">
            <button 
                onClick={()=> showPanel()}
                className="btn btn_crear">Crear Proyecto</button>
           
           
            <button 
                 onClick={()=> mostrarPanel()}
                className="btn btn_crear">Mis proyectos</button>
            <button 
                //  onClick={()=> mostrarPanel()}
                className="btn btn_crear">Proyectos Terminados</button>           
            </div>
         <NewProyect />  
         <div className="list_container">
            <ProyectList />
         </div> 
         <button 
            className="btn btn_exit"
        >Cerrar Sesión</button>
        </div>
     );
}
 
export default SideBar;
