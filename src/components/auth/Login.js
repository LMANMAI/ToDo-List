import React, {useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/auth/authContext';

const Login = (props) => {
    const authContext = useContext(AuthContext);
    const { mensaje, autenticado, loginUser } = authContext;

    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;
    useEffect(()=>{
        if(autenticado){
            props.history.push('/dashboard');
        }
        if(mensaje){
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }
    },[mensaje, autenticado, props.history]);

    const [ user, setUser ] = useState({
        email:'',
        password:''
    });
    const { email, password }= user;

    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }
    const handleSubmit = e =>{
        e.preventDefault();
        //valido que no tenga campos vacios
        if(email.trim()==='' || password.trim()===''){
            mostrarAlerta('Todos los campos son necesarios', 'alerta-error');
            return;
        }
        loginUser(user);
    }
    return ( 
        <div className="container">
            <div className="form_wraper">           
            {alerta ?(<div className={alerta.categoria}>{alerta.msg}</div>) :null}
               <div className="form_container"> 
               <h2>Iniciar Sesion</h2>                  
                   <form onSubmit={handleSubmit}>
                       <div className="input_auth_container">
                            <div className="input_container">
                                <input 
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={handleChange}
                                    placeholder="Ingresa con tu Email"
                                />
                            </div>

                            <div className="input_container">
                                <input 
                                    type="password" 
                                    name="password"
                                    value={password}
                                    onChange={handleChange}
                                    placeholder="Contraseña"
                                />
                        </div>
                    </div>
                   <div className="btn_container">
                        <Link 
                            className="btn btn_sec"
                            to="/singin"
                        >Obtener Cuenta</Link>
                        <input 
                            type="submit"
                             className="btn btn_primario btn_auth"
                             value="Iniciar Sesion"
                        />                        
                    </div>
                </form>
               </div>
            </div>          
        </div>
       
     );
}
 
export default Login;