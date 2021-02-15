import React from 'react'
import SideBar from '../layout/SideBar';
import TaskBody from '../task/TaskBody';
import ProyectList from '../proyects/ProyectList';

const DashboardIndex = () => {
    return ( 
        <>
          <div className="dashboard_wraper">
                <div className="glass_dashboard">
                    <SideBar/>     
                    <ProyectList/>  
                    <TaskBody />
                </div>
            </div>
        </>
     );
}
 
export default DashboardIndex;