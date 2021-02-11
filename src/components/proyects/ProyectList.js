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

    
    return ( 
    <div className="list_container">
        <div className={panelproyecto ?"dashboard_panel active" :"dashboard_panel"}>
            {proyectos.length === 0 ?<p className="object_list">Todavia no creaste ningun proyecto!</p> 
            
            :(<ul>
                {   proyectos.map(proyecto => (
                    <Proyect key={proyecto.id} proyecto={proyecto}/>))
                }               
            </ul>
            )}    
           
        </div>
    </div>
     );
}
 
export default ProyectList;