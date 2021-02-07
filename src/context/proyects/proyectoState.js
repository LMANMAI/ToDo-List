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
        ELIMINAR_PROYECTO
        } from '../../types';

const ProyectoState = props =>{
    const proyectos = [
        {id: 1,nombre: 'Arq App'},
        {id: 2,nombre: 'Pokemon APP'},
        {id: 3,nombre: 'Portfolio'}
    ]
    const InitialState = {
        panel: false,
        panelproyecto: false,
        proyectos: [],
        errorformulario: false,
        proyectoactivo: null,

    }
  
    const [ state, dispatch ]= useReducer(ProyectoReducer, InitialState);
    //mis funciones
    const showPanel = () =>{
        dispatch({
            type : MOSTRAR_FORMULARIO
        })
     }
     //mostarar el panel de proyectos
     const mostrarPanel = () =>{
         dispatch({
             type: MOSTRAR_PROYECTOS
         })
     }
     //obtener los proyectos
     const obtenerProyectos = () =>{
         dispatch({
            type :OBTENER_PROYECTOS,
            payload: proyectos
         })
     }
     //Agrega Proyectos
     const agregarProyecto = proyect =>{
        console.log('desde agregar proyecto')
        dispatch({
            type: AGREGAR_PROYECTO,
            payload: proyect
        })
     }
     //Valido el formulario
     const validarFormulario = () =>{
         dispatch({
             type: VALIDAR_FORMULARIO
         })
     }
     //Seleccionar y poner un proyecto como activo
     const proyectoActual = proyectoId =>{
        
         dispatch({
             type: PROYECTO_ACTIVO,
             payload: proyectoId
         })
     }
     //Eliminar las tareas
     const terminarProyecto = proyectoID => {
        
         dispatch({
            type: ELIMINAR_PROYECTO,
            payload: proyectoID
         })
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
                mostrarPanel,
                obtenerProyectos,
                agregarProyecto,
                showPanel,
                validarFormulario,
                proyectoActual,
                terminarProyecto
            }}
        >
            {props.children}
        </ProyectoContext.Provider>
    )
}

export default ProyectoState;