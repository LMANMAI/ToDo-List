//importo los types
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
    PROYECTO_ERROR,
    PROYECTO_NULL
    } from '../../types';
// eslint-disable-next-line
export default (state, action ) =>{
    switch(action.type){
        case MOSTRAR_FORMULARIO:
            return{
                ...state,
                panel: !state.panel,
                errorformulario: false,
                panelproyecto: false,
                panelterminados: false
            }
        case MOSTRAR_PROYECTOS:
            return{
                ...state,
                panel: false,
                panelproyecto: !state.panelproyecto,
                panelterminados: false,
                badge: false
            }
        case MOSTRAR_TERMINADOS:
            return{
                ...state,  
                panel: false,
                panelproyecto: false,
                panelterminados: !state.panelterminados ,
                badgeT: false              
            }
        case OBTENER_PROYECTOS: 
            return{
                ...state,
                // proyectos: action.payload,
                proyectos: action.payload.filter(proyecto => ( proyecto.estado ?null :action.payload)),
                proyectosterminados: action.payload.filter(proyecto => ( proyecto.estado ?action.payload :null)),
                mensaje: null
            }
        case AGREGAR_PROYECTO:
            return{
                ...state,
                proyectos: [action.payload, ...state.proyectos],
                panel: false,
                errorformulario: false,
                mensaje: null,
                badge: true
            }
        case VALIDAR_FORMULARIO:
            return{
                ...state,
                errorformulario: true
            }
        case PROYECTO_ACTIVO:
            return{
                ...state, 
                proyectoactivo : state.proyectos.filter( proyecto => (proyecto._id === action.payload._id)),
                panel: false,
                panelproyecto: false
            }                   
        case TERMINAR_PROYECTO:
            return{
                ...state,
                proyectos :state.proyectos.filter(proyecto => (proyecto._id !== action.payload._id)),
                proyectosterminados: [ ...state.proyectosterminados,  action.payload],
                proyectoactivo: null,
                mensaje: null,
                badgeT: true
            }
        case ELIMINAR_PROYECTO:
            return{
                ...state,
                proyectos :state.proyectos.filter(proyecto => (proyecto._id !== action.payload)),
                proyectosterminados: state.proyectosterminados.filter(proyecto => (proyecto._id !== action.payload)),
                proyectoactivo: null,
                mensaje: null
            }
        case PROYECTO_ERROR:
            return{
                ...state,
                mensaje: action.payload
            }
        case PROYECTO_NULL:
            return{
                ...state,
                proyectoactivo: null
            }
       
        default:
            return state;
    }
}