import React,{ useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
//importo los types
import {
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    OBTENER_USUARIO,
    CERRAR_SESION
} from '../../types';
//importo el cliente axios para hacer las consultas
import clienteAxios from '../../config/axios';
import tokenAuth from '../../config/tokenAuth';

const AuthState = props =>{
    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: null,
        user: null,
        mensaje: null,
        cargando: true,
        cargandoSpin: false
    }
    const [ state, dispatch ] = useReducer(AuthReducer, initialState);
    //Funciones
    //registro usuario
    const registerUser = async user =>{
        try {
            const respuesta = await clienteAxios.post('/api/users', user);
            // //console.log(respuesta)
            dispatch({
                type: REGISTRO_EXITOSO,
                payload: respuesta.data
            });
            //obtenfo el usuario
            userAuth();
        } catch (error) {
            // //console.log(error.response.data.msg);
            const alerta = {
                msg: error.response,
                categoria: 'alerta-error'
            }
            dispatch({
                type: REGISTRO_ERROR,
                payload: alerta
            })
        }
    }
   //retorna el usuario que esta autenticado
    const userAuth = async () =>{
        const token = localStorage.getItem('token');
        if(token){
            //envio el token por header para verificar auth
            tokenAuth(token);
        }
        try {
            const respuesta = await clienteAxios.get('/api/auth');
            // //console.log(respuesta);
            dispatch({
                type: OBTENER_USUARIO,
                payload: respuesta.data.user
            })
        } catch (error) {
            // //console.log(error.response);
            dispatch({
                type: LOGIN_ERROR
            });
        }
    }
     //login de usuario
     const loginUser = async user =>{
          //  //console.log(user)
        try {
            const consulta = await clienteAxios.post('/api/auth', user);
            // //console.log(consulta);
            dispatch({
                type: LOGIN_EXITOSO,
                payload: consulta.data
            });
            userAuth();

        } catch (error) {
            //console.log(error.response);
            const mensaje = {
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            }
            dispatch({
                type: LOGIN_ERROR,
                payload: mensaje
            })
        }
    }
    //cerrar la sesion
    const EndSesion = async ()=>{
        dispatch({
            type: CERRAR_SESION
        })
    } 
    
    return(
        <AuthContext.Provider
            value={{
                //valores del state y las funciones
                token: state.token,
                autenticado: state.autenticado,
                user: state.user,
                mensaje : state.mensaje,
                cargando: state.cargando,
                cargandoSpin: state.cargandoSpin,
                registerUser,
                userAuth, 
                loginUser,
                EndSesion
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthState;