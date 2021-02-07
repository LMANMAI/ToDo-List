//importo los types
import {
    MOSTRAR_FORMULARIO,
    MOSTRAR_PROYECTOS,
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO,
    VALIDAR_FORMULARIO,
    PROYECTO_ACTIVO,
    ELIMINAR_PROYECTO
    } from '../../types';

export default (state, action ) =>{
    switch(action.type){
        case MOSTRAR_FORMULARIO:
            return{
                ...state,
                panel: !state.panel,
                errorformulario: false,
                panelproyecto: false
            }
        case MOSTRAR_PROYECTOS:
            return{
                ...state,
                panel: false,
                panelproyecto: !state.panelproyecto
            }
        case OBTENER_PROYECTOS: 
            return{
                ...state,
                proyectos: action.payload
            }
        case AGREGAR_PROYECTO:
            return{
                ...state,
                proyectos: [action.payload, ...state.proyectos],
                panel: false,
                errorformulario: false
            }
        case VALIDAR_FORMULARIO:
            return{
                ...state,
                errorformulario: true
            }
        case PROYECTO_ACTIVO:
            return{
                ...state, 
                proyectoactivo : state.proyectos.filter( proyecto => (proyecto.id === action.payload)),
                panel: false,
                panelproyecto: false

            }
        case ELIMINAR_PROYECTO:
            return{
                ...state,
                proyectos :state.proyectos.filter(proyecto => (proyecto.id !== action.payload)),
                proyectoactivo: null
            }
        default:
            return state;
    }
}