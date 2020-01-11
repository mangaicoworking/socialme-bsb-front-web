import React from 'react';
//COMPONENTS
import { DefaultSidebar } from './../../Components/Layout/Dashboard/Sidebar/DefaultSidebar';

const Dashboard = () => {
    return ( 
        <div className="g-sidenav-show g-sidenav-pinned">
            <DefaultSidebar />
        </div>
     );
}
 
export default Dashboard;