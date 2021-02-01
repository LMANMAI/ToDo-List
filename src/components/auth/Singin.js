import React from 'react';
import { Link } from 'react-router-dom';

const Singin = () => {
    return (  
        <>
        <div className="container_auth login"></div>
         <div className="container">
         <div className="form_wraper">           
                <div className="form_container"> 
                <h2>Obtener una Cuenta</h2>                  
                    <form>
                        <div className="input_container">
                            <input 
                                type="text"
                                placeholder="Nombre"
                            />
                         </div>
                         <div className="input_container">
                             <input 
                                 type="email"
                                 placeholder="Email"
                             />
                         </div> 
                         <div className="input_container">
                             <input 
                                 type="password" 
                                 placeholder="Contraseña"
                             />
                         </div>
                         <div className="input_container">
                             <input 
                                 type="password" 
                                 placeholder="Repetir Contraseña"
                             />
                         </div>
 
                    </form>
                    <div className="btn_container">
                             <Link 
                                 className="btn btn_sec"
                                 to="/"
                             >Ya tengo una Cuenta</Link>
                             <button 
                                 className="btn btn_primario"
                             >Iniciar Sesion</button>                             
                     </div>
                </div>
             </div>
             
             <div className="glass"></div>
             
         </div>
        </>
    );
}
 
export default Singin;