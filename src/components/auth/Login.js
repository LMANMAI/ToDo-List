import React from 'react';
import { Link } from 'react-router-dom';
const Login = () => {
    return ( 
       <>
       
        <div className="container">
            <div className="form_wraper">           
               <div className="form_container"> 
               <h2>Iniciar Sesion</h2>                  
                   <form>
                        <div className="input_container">
                            <input 
                                type="email"
                                placeholder="Ingresa con tu Email"
                            />
                        </div>

                        <div className="input_container">
                            <input 
                                type="password" 
                                placeholder="Contraseña"
                            />
                        </div>

                   </form>
                   <div className="btn_container">
                            <Link 
                                className="btn btn_sec"
                                to="/singin"
                            >Obtener Cuenta</Link>
                            <button 
                                className="btn btn_primario"
                            >Iniciar Sesion</button>                             
                    </div>
               </div>
            </div>
           
        </div>
       </>
       
     );
}
 
export default Login;