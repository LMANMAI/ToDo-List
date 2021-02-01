import React, { useReducer } from 'react'
//importo el context y el reducer
import ProyectoContext from './proyectoContext';
import ProyectoReducer from './proyectoReducer';
//importo mis types
import {
        MOSTRAR_FORMULARIO,
        AGREGAR_PROYECTO
        } from '../../types';

const ProyectoState = props =>{
    const InitialState = {
        panel: false,
        proyectos: [
            {id: 1,nombre: 'Proyecto 1'},
            {id: 2,nombre: 'Proyecto 2'},
            {id: 3,nombre: 'Proyecto 3'}
        ],
    }
  
    const [ state, dispatch ]= useReducer(ProyectoReducer, InitialState);
    //mis funciones
    const showPanel = () =>{
        dispatch({
            type : MOSTRAR_FORMULARIO
        })
     }

     const agregarProyecto = proyect =>{
        console.log('desde agregar proyecto')
        dispatch({
            type: AGREGAR_PROYECTO,
            payload: proyect
        })
     }
    return(
        <ProyectoContext.Provider
            value={{
                //valores del state o las funciones a compartir con el arbol de componentes
                panel: state.panel,
                proyectos: state.proyectos,
                agregarProyecto,
                showPanel
            }}
        >
            {props.children}
        </ProyectoContext.Provider>
    )
}

export default ProyectoState;