import React from 'react';
import { Link } from 'react-router-dom';

const DefaultSidebar = () => {
    return (
        <nav className="sidenav navbar navbar-vertical fixed-left navbar-expand-xs navbar-light bg-white" id="sidenav-main">
            <div className="scroll-wrapper scrollbar-inner" style={{ position: 'relative' }}><div className="scrollbar-inner scroll-content scroll-scrolly_visible" style={{ height: 'auto', marginBottom: '0px', marginRight: '0px' }}>
                <div className="sidenav-header d-flex align-items-center">
                    <a className="navbar-brand" href="../../pages/dashboards/dashboard.html">
                        <img src="../../assets/img/brand/logoSocialMeVermelha2.png" className="navbar-brand-img" alt="..." />
                    </a>
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
                        <h6 className="navbar-heading p-0 text-muted">PAINEL DO GESTOR</h6>
                        <ul className="navbar-nav mb-md-3">
                            <li className="nav-item">
                                <Link to="/me/dashboard" className={"nav-link " + (window.location.pathname === "/me/dashboard" || window.location.pathname === "/me/dashboard/" ? 'sidebarMenuItemActive' : '')}>
                                    <i style={{ color: 'var(--primary)' }} className="fas fa-chart-pie"></i>
                                    <span className="nav-link-text">Dashboard</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/me/pacientes" className={"nav-link " + (window.location.pathname === "/me/pacientes" || window.location.pathname === "/me/pacientes/" ? 'sidebarMenuItemActive' : '')}>
                                    <i style={{ color: 'var(--primary)' }}  className="fas fa-user-injured"></i>
                                    <span className="nav-link-text">Pacientes</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/me/alertas" className={"nav-link " + (window.location.pathname === "/me/alertas" || window.location.pathname === "/me/alertas/" ? 'sidebarMenuItemActive' : '')}>
                                    <i style={{ color: 'var(--primary)' }}  className="fas fa-exclamation-triangle"></i>
                                    <span className="nav-link-text">Alertas</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div><div className="scroll-element scroll-x scroll-scrolly_visible"><div className="scroll-element_outer"><div className="scroll-element_size"></div><div className="scroll-element_track"></div><div className="scroll-bar" style={{ width: '0px', left: '0px' }}></div></div></div><div className="scroll-element scroll-y scroll-scrolly_visible"><div className="scroll-element_outer"><div className="scroll-element_size"></div><div className="scroll-element_track"></div><div className="scroll-bar" style={{ height: '191px', top: '0px' }}></div></div></div></div>
        </nav>
    );
}

export default DefaultSidebar;