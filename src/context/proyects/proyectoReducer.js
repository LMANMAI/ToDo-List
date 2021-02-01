//importo los types
import {
    MOSTRAR_FORMULARIO,
    AGREGAR_PROYECTO
    } from '../../types';

export default (state, action ) =>{
    switch(action.type){
        case MOSTRAR_FORMULARIO:
            return{
                ...state,
                panel: !state.panel
            }
        case AGREGAR_PROYECTO:
            return{
                ...state,
                proyectos: [action.payload, ...state.proyectos],
                panel: false
            }
        default:
            return state;
    }
}