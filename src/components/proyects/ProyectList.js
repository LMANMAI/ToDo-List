import React, {useContext, useEffect}  from 'react';
import Proyect from './Proyect';
import ProyectoContext from '../../context/proyects/proyectoContext';
const ProyectList = () => {
    const proyectoContext = useContext(ProyectoContext);
    const { panelproyecto, proyectos, obtenerProyectos } = proyectoContext;

    //obtener proyectos cuando carga el componente    
    useEffect(() => {
        obtenerProyectos();
    }, []); 

    if(proyectos.length === 0) return <p className="object_list">Todavia no creaste ningun proyecto!</p>;
    return ( 
    <div className={panelproyecto ?"dashboard_panel active" :"dashboard_panel"}>
        <ul>
        {proyectos.map(proyecto => (
           <Proyect key={proyecto.id} proyecto={proyecto}/>
        ))}               
    </ul>
    </div>
     );
}
 
export default ProyectList;