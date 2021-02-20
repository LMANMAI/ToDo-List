import React,{ useContext, useEffect } from 'react'
import SideBar from '../layout/SideBar';
import TaskBody from '../task/TaskBody';
import ProyectList from '../proyects/ProyectList';
import ProyectoContext from '../../context/proyects/proyectoContext';
import AuthContext from '../../context/auth/authContext';
import AlertaContext from '../../context/alertas/alertaContext';

const DashboardIndex = () => {
    const proyectoContext = useContext(ProyectoContext);
    const {panelproyecto, mensaje} = proyectoContext;

    const authContext = useContext(AuthContext);
    const { userAuth } = authContext;

    const alertacontext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertacontext;

    useEffect(()=>{
      userAuth();
      if(mensaje){ mostrarAlerta(mensaje.msg, mensaje.categoria) }

    }, [mensaje]);
    return ( 
        <>
          <div className="dashboard_wraper">
              {alerta ?(<div className={alerta.categoria}>{alerta.msg}</div>) :null}
                <div className="glass_dashboard">
                    <SideBar/>     
                   <div className="wraper">
                   {panelproyecto ? <ProyectList/> :null}
                    <TaskBody />
                   </div>
                </div>
            </div>
        </>
     );
}
 
export default DashboardIndex;