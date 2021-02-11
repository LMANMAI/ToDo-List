import React,{useContext} from 'react';
import ProyectoContext from '../../context/proyects/proyectoContext';

const EndProyects = () => {
    const proyectoContext = useContext(ProyectoContext);
    const { panelterminados, proyectosterminados } = proyectoContext;
 
    return ( 
      <div className={panelterminados ?"dashboard_panel active width" :"dashboard_panel"}>
       <ul className="lista_terminados">
          {proyectosterminados.map(proyecto => (
                <li key={proyecto.id}>
                   {proyecto.nombre}
                </li>
                ))}               
            </ul>
      </div>
     );
}
 
export default EndProyects;