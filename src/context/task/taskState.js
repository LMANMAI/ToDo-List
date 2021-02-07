import React, {useReducer} from 'react'

//import el context y el reducer
import TaskContext from './taskContext';
import taskReducer from './taskReducer';
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
const TaskState = props => {
    //state inicial
    const initialState = {
        tareas:[
            {id:1 ,proyectoId: 1 ,nombre: 'Elegir Lenguaje', estado: true},
            {id:2 ,proyectoId: 1,nombre: 'Hacer Diseño en Figma', estado: false},
            {id:3 ,proyectoId: 3 ,nombre: 'Comenzar el Proyecto', estado: false},
            {id:4 ,proyectoId: 2,nombre: 'Elegir Lenguaje', estado: true},
            {id:5 ,proyectoId: 2,nombre: 'Hacer Diseño en Figma', estado: false},
            {id:6 ,proyectoId: 3,nombre: 'Comenzar el Proyecto', estado: false},
            {id:7 ,proyectoId: 3,nombre: 'Elegir Lenguaje', estado: true},
            {id:8 ,proyectoId: 1,nombre: 'Hacer Diseño en Figma', estado: false},
            {id:9 ,proyectoId: 3,nombre: 'Comenzar el Proyecto', estado: false},
            {id:10 ,proyectoId: 1,nombre: 'Elegir Lenguaje', estado: true},
            {id:11 ,proyectoId: 2,nombre: 'Hacer Diseño en Figma', estado: false},
            {id:12 ,proyectoId: 1,nombre: 'Comenzar el Proyecto', estado: false}
        ],
        tareasproyecto: null,
        errortarea: false,
        tareaactual: null
    }
    const [ state, dispatch ] = useReducer(taskReducer, initialState);
    //Funciones 
    //obtener las tareas relacionadas con el id del proyecto
    const obtenerTareas = Id => {
       
        dispatch({
            type: TASK_PROYECTO,
            payload: Id
        })
    }

    //Agregar nueva tarea
    const agregarTarea = tarea => {
       
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    }
    //validar la tarea
    const validarTarea = ()=> {
        dispatch({
            type: VALIDAR_TAREA
        })
    }

    //eliminar tarea
    const eliminarTarea = id => {        
        dispatch({
            type: DELETE_TASK,
            payload: id
        })
    }
    //cambiar estado de la tarea
    const estadoTarea = tarea => {
        dispatch({
            type: TASK_STATE,
            payload: tarea
        })
    }
    const tareaActual = tarea => {
      
        dispatch({
            type: TASK_ACTUAL,
            payload: tarea
        })
    }
    //editar la tarea
    const actualizarTask = tarea => {
        dispatch({
            type: ACTUALIZAR_TASK,
            payload: tarea
        })
    }
    return (
        <TaskContext.Provider
            value = {{
                //valores del state
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea,
                tareaactual: state.tareaactual,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                estadoTarea,
                tareaActual,
                actualizarTask
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}
export default TaskState;