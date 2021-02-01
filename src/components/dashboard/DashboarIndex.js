import React from 'react'
import SideBar from '../layout/SideBar';
import TaskBody from '../task/TaskBody';

const DashboarIndex = () => {
    return ( 
        <>
             <div className="container_auth login"></div>
             <div className="dashboard_wraper">
                <div className="glass_dashboard">
                  <SideBar/>       
                  <TaskBody />
                </div>
             </div>
        </>
     );
}
 
export default DashboarIndex;