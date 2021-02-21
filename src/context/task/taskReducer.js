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
// eslint-disable-next-line
export default (state, action) => {
    switch(action.type){
        case TASK_PROYECTO:
            return{
                ...state,
                tareasproyecto: action.payload
            } 
        case AGREGAR_TAREA:
            return{
                ...state,
                tareasproyecto:[action.payload, ...state.tareasproyecto],
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
                tareasproyecto: state.tareasproyecto.filter(tarea => tarea._id !== action.payload)
            }       
        case ACTUALIZAR_TASK:
            return{
                ...state,
                tareasproyecto: state.tareasproyecto.map( tarea => (tarea._id === action.payload._id ?action.payload : tarea)),
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