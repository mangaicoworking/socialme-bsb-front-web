import React from 'react';
import { Link } from 'react-router-dom';

const DefaultSidebar = () => {
    return (
        <nav style={{ overflow: 'hidden' }} className="sidenav navbar navbar-vertical fixed-left navbar-expand-xs navbar-light bg-white" id="sidenav-main">
            <div className="sidenav-header d-flex align-items-center">
                <Link style={{ display: 'block', margin: '0px auto' }} className="navbar-brand" to="!">
                    <img src="/assets/img/brand/logoSocialMeVermelha2.png" className="navbar-brand-img" alt="..." />
                </Link>
                {/* 
                    <div className="ml-auto">
                        <div className="sidenav-toggler d-none d-xl-block active" data-action="sidenav-unpin" data-target="#sidenav-main">
                            <div className="sidenav-toggler-inner">
                                <i className="sidenav-toggler-line"></i>
                                <i className="sidenav-toggler-line"></i>
                                <i className="sidenav-toggler-line"></i>
                            </div>
                        </div>
                    </div>
                    */}
            </div>
            <div className="navbar-inner">
                <div className="collapse navbar-collapse" id="sidenav-collapse-main">
                    <hr className="my-0 mb-2" />
                    {/* <h6 className="navbar-heading p-0 text-muted">PAINEL DO GESTOR</h6> */}
                    <ul className="navbar-nav mb-md-3">
                        <li className="nav-item">
                            <Link to="/me/dashboard" className={"nav-link " + (window.location.pathname === "/me/dashboard" || window.location.pathname === "/me/dashboard/" ? 'sidebarMenuItemActive' : 'sidebarMenuItemNotActive')}>
                                <i style={{ color: 'var(--primary)' }} className="fas fa-chart-pie"></i>
                                <span className="nav-link-text">Dashboard</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/me/pacientes" className={"nav-link " + (window.location.pathname === "/me/pacientes" || window.location.pathname === "/me/pacientes/" ? 'sidebarMenuItemActive' : 'sidebarMenuItemNotActive')}>
                                <i style={{ color: 'var(--primary)' }} className="fas fa-user-injured"></i>
                                <span className="nav-link-text">Pacientes</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/me/alertas" className={"nav-link " + (window.location.pathname === "/me/alertas" || window.location.pathname === "/me/alertas/" ? 'sidebarMenuItemActive' : 'sidebarMenuItemNotActive')}>
                                <i style={{ color: 'var(--primary)' }} className="fas fa-exclamation-triangle"></i>
                                <span className="nav-link-text">Alertas</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default DefaultSidebar;