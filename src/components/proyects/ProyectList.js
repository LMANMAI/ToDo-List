import React, {useContext}  from 'react'
import ProyectoContext from '../../context/proyects/proyectoContext';
const ProyectList = () => {
    const proyectoContext = useContext(ProyectoContext);
    const { proyectos } = proyectoContext;
    console.log(proyectos)
    return ( 
        <div className="list_container">
           <ul>
               {proyectos.map(proyecto => (
                   <li  className="object_list" key={proyecto.id}>
                       <button className="btn btn_proyect">{proyecto.nombre}</button>
                   </li>
               ))}
               
           </ul>
       </div>
     );
}
 
export default ProyectList;