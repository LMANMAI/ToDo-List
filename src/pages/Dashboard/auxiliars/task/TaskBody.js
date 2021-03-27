import React, { useContext } from "react";
import FormTask from "./FormTask";
import TaskList from "./TaskList";
import ProyectList from "../proyects/ProyectList";

import ProyectoContext from "../../../../context/proyects/proyectoContext";

const TaskBody = () => {
  const proyectoContext = useContext(ProyectoContext);
  const {
    panel,
    panelproyecto,
    panelterminados,
    proyectoactivo,
    eliminarProyecto,
    terminarProyecto,
  } = proyectoContext;

//   if (!proyectoactivo)
//     return (
//       <div className="TaskBody_inactive">
//         <p>Comienza creando tareas</p>
//       </div>
//     );

  const handdleProyectState = (proyecto) => {
    if (!proyecto.estado) {
      proyecto.estado = true;
    }
    terminarProyecto(proyecto);
  };

  const [proyectoActual] = proyectoactivo;

  return (
    <>
      <main>
        {/* {panelproyecto && <ProyectList />} */}
        <h2>{proyectoActual.nombre}</h2>
        <FormTask />
        <div className="contenedor_tareas">
          <TaskList />
        </div>

        <div className="button_wraper">
          <button
            type="button"
            className="btn btn_terminar"
            onClick={() => handdleProyectState(proyectoActual)}
          >
            Terminar Proyecto
          </button>
          <button
            type="button"
            className="btn btn_eliminar"
            onClick={() => eliminarProyecto(proyectoActual._id)}
          >
            Eliminar Proyecto
          </button>
        </div>
      </main>
    </>
  );
};

export default TaskBody;
