import React, { useReducer } from 'react'
//importo el context y el reducer
import ProyectoContext from './proyectoContext';
import ProyectoReducer from './proyectoReducer';
//importo mis types
import {
        MOSTRAR_FORMULARIO,
        MOSTRAR_PROYECTOS,
        OBTENER_PROYECTOS,
        AGREGAR_PROYECTO,
        VALIDAR_FORMULARIO,
        PROYECTO_ACTIVO,
        ELIMINAR_PROYECTO,
        MOSTRAR_TERMINADOS,
        TERMINAR_PROYECTO,
        PROYECTO_ERROR
        } from '../../types';
import clienteAxios from '../../config/axios';

const ProyectoState = props =>{
    const InitialState = {
        panel: false,
        panelproyecto: false,
        proyectos: [],
        errorformulario: false,
        proyectoactivo: null,
        panelterminados: false,
        proyectosterminados: [],
        mensaje: null,
        badge: false,
        badgeT: false
    }
  
    const [ state, dispatch ]= useReducer(ProyectoReducer, InitialState);
    //mis funciones
    const showPanel = () =>{
        dispatch({
            type : MOSTRAR_FORMULARIO
        })
     }
     //mostarar el componente de proyectos
     const mostrarPanel = () =>{
         dispatch({
             type: MOSTRAR_PROYECTOS
         })
     }
     const mostrarTerminados = ()=> {
        dispatch({
        type: MOSTRAR_TERMINADOS
        })

    }
     //obtener los proyectos
     const obtenerProyectos = async() =>{
      try {
        const requestP = await clienteAxios.get('/api/proyect');
        // //console.log(requestP.data);
        dispatch({
            type :OBTENER_PROYECTOS,
            payload: requestP.data
         });

      } catch (error) {
        const alerta = {
            msg:  error.response.data.msg,
            categoria: 'alerta-error'
        }
        dispatch({
            type: PROYECTO_ERROR,
            payload: alerta
        })
      }
     }
     //Agrega Proyectos
     const agregarProyecto = async proyect =>{      
        try {
            const requestP = await clienteAxios.post('/api/proyect', proyect)
            // //console.log(requestP.data.proyect);
            dispatch({
                type: AGREGAR_PROYECTO,
                 payload: requestP.data.proyect
            })
        } catch (error) {
            const alerta = {
                msg:  error.response.data.msg,
                categoria: 'alerta-error'
            }
            dispatch({
                type: PROYECTO_ERROR,
                payload: alerta
            })
        }
     }
     //Valido el formulario
     const validarFormulario = () =>{
         dispatch({
             type: VALIDAR_FORMULARIO
         })
     }
     //Seleccionar y poner un proyecto como activo
     const proyectoActual = proyecto =>{        
         dispatch({
             type: PROYECTO_ACTIVO,
             payload: proyecto
         });
     }
     //Eliminar las tareas
    const eliminarProyecto = async proyectoID => {
    //    //console.log (proyectoID)
       try {
        await clienteAxios.delete(`/api/proyect/${proyectoID}`);
        dispatch({
            type: ELIMINAR_PROYECTO,
            payload: proyectoID
         });
       } catch (error) {           
        //    //console.log(error.response.data.msg);
           const alerta = {
               msg:  error.response.data.msg,
               categoria: 'alerta-error dash'
           }
           dispatch({
               type: PROYECTO_ERROR,
               payload: alerta
           })
       }
     }    
    const terminarProyecto = async proyecto => {
        //console.log(proyecto)
       try {
        const consulta = await clienteAxios.put(`/api/proyect/${proyecto._id}`, proyecto);
        //console.log(consulta)
        dispatch({
            type: TERMINAR_PROYECTO,
            payload: proyecto
        });
       } catch (error) {
           //console.log(error.response);
       }
        
    }
            
    return(
        <ProyectoContext.Provider
            value={{
                //valores del state o las funciones a compartir con el arbol de componentes
                panel: state.panel,
                panelproyecto: state.panelproyecto,
                proyectos: state.proyectos,
                errorformulario: state.errorformulario,
                proyectoactivo : state.proyectoactivo,
                panelterminados : state.panelterminados,
                proyectosterminados: state.proyectosterminados,
                mensaje: state.mensaje,
                badge:state.badge,
                badgeT:state.badgeT,
                mostrarPanel,
                obtenerProyectos,
                agregarProyecto,
                showPanel,
                validarFormulario,
                proyectoActual,
                eliminarProyecto,
                mostrarTerminados,
                terminarProyecto
            }}
        >
            {props.children}
        </ProyectoContext.Provider>
    )
}

export default ProyectoState;