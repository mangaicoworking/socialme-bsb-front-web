import React from 'react';
import { Redirect } from 'react-router-dom';
//SERVICES
import { MakeRouteWithSubRoutes } from '../../Services/MakeRouteWithSubRoutes';
//COMPONENTS
import { DefaultSidebar } from './../../Components/Layout/Dashboard/Sidebar/DefaultSidebar';
import { DefaultNavbar } from './../../Components/Layout/Dashboard/Navbar/DefaultNavbar';

const Dashboard = (props) => {
    return ( 
        <div className="g-sidenav-show g-sidenav-pinned">

            <DefaultSidebar />
            
            <div className="main-content" id="panel">
                <DefaultNavbar />
                
                {window.location.pathname === "/me" || window.location.pathname === "/me/" ?
                    <Redirect to="/me/dashboard" />
                :
                    props.routes.map((route, index) => <MakeRouteWithSubRoutes key={index} {...route} />)
                }

            </div>

        </div>
     );
}
 
export default Dashboard;