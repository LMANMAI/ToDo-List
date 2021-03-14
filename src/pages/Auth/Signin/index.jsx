import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AlertaContext from '../../../context/alertas/alertaContext';
import AuthContext from '../../../context/auth/authContext';
import SpinKit from '../../../components/layout/SpinKit';

const SignIn = (props) => {
    //contexts
    const alertaContext = useContext(AlertaContext);
    const {alerta, mostrarAlerta} = alertaContext;

    const authContext = useContext(AuthContext);
    const { mensaje, autenticado, cargandoSpin, registerUser } = authContext;

    useEffect(()=>{
        if(autenticado){
           setTimeout(() => {
            props.history.push('/dashboard');
           }, 2000);
        }
        if(mensaje){
            mostrarAlerta( mensaje.msg, mensaje.categoria);
        }
        
    },[autenticado, mensaje, props.history]);

    const [ usern, setUserN ] = useState({
        nombre:'',
        email:'',
        password:'',
        confirmar: ''
    });
    const {nombre, email, password, confirmar} = usern;

    const handleChange = e =>{
        setUserN({
            ...usern,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = e => {
        e.preventDefault();
        if(nombre.trim() === '' || email.trim() ==='' || password.trim() === '' || confirmar.trim() ===''){
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
            return;
        }
        //pasword minimo de 6 caracteres
        if(password.length < 6){
            mostrarAlerta('el password debe ser de al menos 6 caracteres', 'alerta-error');
            return;
        }
        //los dos passwords iguales
        if(password.trim() !== confirmar.trim()){
            mostrarAlerta('Los passwords deben ser iguales', 'alerta-error');
            return;
        }
        //pasarlo al action
        registerUser({
            nombre,
            email,
            password
        });
    }
    
    return (  
        <div className="container">
            <div className="form_wraper">     
            {alerta ?(<div className={alerta.categoria}>{alerta.msg}</div>) :null}  
            {cargandoSpin ?<SpinKit /> :(
                <div className="form_container"> 
                <h2>Obtener una Cuenta</h2>                  
                    <form onSubmit={handleSubmit}>
                        <div className="input_container">
                            <input 
                                type="text"
                                name="nombre"
                                value={nombre}
                                onChange={handleChange}
                                placeholder="Nombre"
                            />
                         </div>
                         <div className="input_container">
                             <input 
                                 type="email"
                                 name="email"
                                 value={email}
                                 onChange={handleChange}
                                 placeholder="Email"
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
                         <div className="input_container">
                             <input 
                                 type="password" 
                                 name="confirmar"
                                 value={confirmar}
                                 onChange={handleChange}
                                 placeholder="Repetir Contraseña"
                             />
                         </div>
                        <div className="btn_container">
                            <Link 
                                className="btn btn_sec"
                                to="/"
                            >Ya tengo una Cuenta</Link>
                            <input 
                                type="submit"
                                className="btn btn_primario btn_auth"
                                value="Obtener Cuenta"
                            />                                           
                        </div>
                    </form>
                </div>
            )}    
                
             </div>                   
         </div>
        
    );
}
 
export default SignIn;