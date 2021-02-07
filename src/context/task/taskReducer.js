//import los types
import {
    TASK_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    DELETE_TASK,
    TASK_STATE,
    TASK_ACTUAL,
    ACTUALIZAR_TASK
} from '../../types';

export default (state, action) => {
    switch(action.type){
        case TASK_PROYECTO:
            return{
                ...state,
                tareasproyecto: state.tareas.filter( tarea => (tarea.proyectoId === action.payload))
            } 
        case AGREGAR_TAREA:
            return{
                ...state,
                tareas:[...state.tareas, action.payload],
                errortarea: false
            }
        case VALIDAR_TAREA:
            return{
                ...state,
                errortarea: true
            }
        case DELETE_TASK:
            return{
                ...state,
                tareas: state.tareas.filter(tarea => tarea.id !== action.payload)
            }
        case TASK_STATE:
        case ACTUALIZAR_TASK:
            return{
                ...state,
                tareas: state.tareas.map( tarea => (tarea.id === action.payload.id ?action.payload : tarea)),
                tareaactual: null
            }
        case TASK_ACTUAL:
            return{
                ...state,
                tareaactual: action.payload
            }
       
        default:
            return{
                ...state
            }
    }
}