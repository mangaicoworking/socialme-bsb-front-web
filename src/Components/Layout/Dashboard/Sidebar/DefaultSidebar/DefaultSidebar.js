import React from 'react';

const DefaultSidebar = () => {
    return (
        <nav className="sidenav navbar navbar-vertical fixed-left navbar-expand-xs navbar-light bg-white" id="sidenav-main">
            <div className="scroll-wrapper scrollbar-inner" style={{ position: 'relative' }}><div className="scrollbar-inner scroll-content scroll-scrolly_visible" style={{ height: 'auto', marginBottom: '0px', marginRight: '0px', maxHeight: '404px' }}>
                <div className="sidenav-header d-flex align-items-center">
                    <a className="navbar-brand" href="../../pages/dashboards/dashboard.html">
                        <img src="../../assets/img/brand/blue.png" className="navbar-brand-img" alt="..." />
                    </a>
                    <div className="ml-auto">
                        <div className="sidenav-toggler d-none d-xl-block active" data-action="sidenav-unpin" data-target="#sidenav-main">
                            <div className="sidenav-toggler-inner">
                                <i className="sidenav-toggler-line"></i>
                                <i className="sidenav-toggler-line"></i>
                                <i className="sidenav-toggler-line"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar-inner">
                    <div className="collapse navbar-collapse" id="sidenav-collapse-main">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" href="#navbar-dashboards" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="navbar-dashboards">
                                    <i className="ni ni-shop text-primary"></i>
                                    <span className="nav-link-text">Dashboards</span>
                                </a>
                                <div className="collapse show" id="navbar-dashboards">
                                    <ul className="nav nav-sm flex-column">
                                        <li className="nav-item">
                                            <a href="../../pages/dashboards/dashboard.html" className="nav-link">Dashboard</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="../../pages/dashboards/alternative.html" className="nav-link">Alternative</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#navbar-examples" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="navbar-examples">
                                    <i className="ni ni-ungroup text-orange"></i>
                                    <span className="nav-link-text">Examples</span>
                                </a>
                                <div className="collapse" id="navbar-examples">
                                    <ul className="nav nav-sm flex-column">
                                        <li className="nav-item">
                                            <a href="../../pages/examples/pricing.html" className="nav-link">Pricing</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="../../pages/examples/login.html" className="nav-link">Login</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="../../pages/examples/register.html" className="nav-link">Register</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="../../pages/examples/lock.html" className="nav-link">Lock</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="../../pages/examples/timeline.html" className="nav-link">Timeline</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="../../pages/examples/profile.html" className="nav-link">Profile</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#navbar-components" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="navbar-components">
                                    <i className="ni ni-ui-04 text-info"></i>
                                    <span className="nav-link-text">Components</span>
                                </a>
                                <div className="collapse" id="navbar-components">
                                    <ul className="nav nav-sm flex-column">
                                        <li className="nav-item">
                                            <a href="../../pages/components/buttons.html" className="nav-link">Buttons</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="../../pages/components/cards.html" className="nav-link">Cards</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="../../pages/components/grid.html" className="nav-link">Grid</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="../../pages/components/notifications.html" className="nav-link">Notifications</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="../../pages/components/icons.html" className="nav-link">Icons</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="../../pages/components/typography.html" className="nav-link">Typography</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#navbar-multilevel" className="nav-link" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="navbar-multilevel">Multi level</a>
                                            <div className="collapse show" id="navbar-multilevel">
                                                <ul className="nav nav-sm flex-column">
                                                    <li className="nav-item">
                                                        <a href="#!" className="nav-link ">Third level menu</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="#!" className="nav-link ">Just another link</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="#!" className="nav-link ">One last link</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#navbar-forms" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="navbar-forms">
                                    <i className="ni ni-single-copy-04 text-pink"></i>
                                    <span className="nav-link-text">Forms</span>
                                </a>
                                <div className="collapse" id="navbar-forms">
                                    <ul className="nav nav-sm flex-column">
                                        <li className="nav-item">
                                            <a href="../../pages/forms/elements.html" className="nav-link">Elements</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="../../pages/forms/components.html" className="nav-link">Components</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="../../pages/forms/validation.html" className="nav-link">Validation</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#navbar-tables" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="navbar-tables">
                                    <i className="ni ni-align-left-2 text-default"></i>
                                    <span className="nav-link-text">Tables</span>
                                </a>
                                <div className="collapse" id="navbar-tables">
                                    <ul className="nav nav-sm flex-column">
                                        <li className="nav-item">
                                            <a href="../../pages/tables/tables.html" className="nav-link">Tables</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="../../pages/tables/sortable.html" className="nav-link">Sortable</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="../../pages/tables/datatables.html" className="nav-link">Datatables</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#navbar-maps" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="navbar-maps">
                                    <i className="ni ni-map-big text-primary"></i>
                                    <span className="nav-link-text">Maps</span>
                                </a>
                                <div className="collapse" id="navbar-maps">
                                    <ul className="nav nav-sm flex-column">
                                        <li className="nav-item">
                                            <a href="../../pages/maps/google.html" className="nav-link">Google</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="../../pages/maps/vector.html" className="nav-link">Vector</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="../../pages/widgets.html">
                                    <i className="ni ni-archive-2 text-green"></i>
                                    <span className="nav-link-text">Widgets</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="../../pages/charts.html">
                                    <i className="ni ni-chart-pie-35 text-info"></i>
                                    <span className="nav-link-text">Charts</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="../../pages/calendar.html">
                                    <i className="ni ni-calendar-grid-58 text-red"></i>
                                    <span className="nav-link-text">Calendar</span>
                                </a>
                            </li>
                        </ul>
                        <hr className="my-3" />
                        <h6 className="navbar-heading p-0 text-muted">Documentation</h6>
                        <ul className="navbar-nav mb-md-3">
                            <li className="nav-item">
                                <a className="nav-link" href="../../docs/getting-started/overview.html" target="_blank">
                                    <i className="ni ni-spaceship"></i>
                                    <span className="nav-link-text">Getting started</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="../../docs/foundation/colors.html" target="_blank">
                                    <i className="ni ni-palette"></i>
                                    <span className="nav-link-text">Foundation</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="../../docs/components/alerts.html" target="_blank">
                                    <i className="ni ni-ui-04"></i>
                                    <span className="nav-link-text">Components</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="../../docs/plugins/charts.html" target="_blank">
                                    <i className="ni ni-chart-pie-35"></i>
                                    <span className="nav-link-text">Plugins</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div><div className="scroll-element scroll-x scroll-scrolly_visible"><div className="scroll-element_outer"><div className="scroll-element_size"></div><div className="scroll-element_track"></div><div className="scroll-bar" style={{ width: '0px', left: '0px' }}></div></div></div><div className="scroll-element scroll-y scroll-scrolly_visible"><div className="scroll-element_outer"><div className="scroll-element_size"></div><div className="scroll-element_track"></div><div className="scroll-bar" style={{ height: '191px', top: '0px' }}></div></div></div></div>
        </nav>
    );
}

export default DefaultSidebar;