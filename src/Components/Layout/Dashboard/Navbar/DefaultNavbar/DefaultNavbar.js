import React, { useContext, useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
//CONTEXTS
import { AuthContext } from './../../../../../Contexts/AuthContext';
//COMPONENTS
import { LoaderDefault } from './../../../../Loader/LoaderDefault';

const DefaultNavbar = () => {
    const { user, logout } = useContext(AuthContext);
    const [redirect, setRedirect] = useState(false);
    const Logout = () => {
        logout();
        setRedirect(true);
    }
    const renderRedirect = () => {
        if (redirect) {
            return (
                <Redirect to="/" />
            )
        }
    }
    return (
        <nav style={{ padding: '0px', backgroundColor: 'var(--primary)' }} className="navbar navbar-top navbar-expand navbar-dark border-bottom">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    {user ?
                        <>
                            <ul className="navbar-nav align-items-center ml-md-auto"></ul>
                            <ul className="navbar-nav align-items-center ml-auto ml-md-0">
                                <li className="nav-item dropdown">
                                    <a className="nav-link pr-0" href="!#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <div className="media align-items-center">
                                            <span className="avatar avatar-sm rounded-circle"
                                                style={{
                                                    backgroundImage: `url('/assets/img/figures/user.png')`,
                                                    backgroundPosition: 'center',
                                                    backgroundRepeat: 'no-repeat',
                                                    backgroundSize: 'cover'
                                                }}
                                            >
                                            </span>
                                            <div className="media-body ml-2 d-none d-lg-block">
                                                <span className="mb-0 text-sm  font-weight-bold">
                                                    {user ? user : ''}
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                    <div style={{ margin: '1px 0px' }} className="dropdown-menu dropdown-menu-right">
                                        <div className="dropdown-header noti-title">
                                            <h6 className="text-overflow m-0">Bem vindo {user ? user : ''} !</h6>
                                        </div>
                                        <Link to="/me" className="dropdown-item" >
                                            <i className="fas fa-chart-pie"></i>
                                            <span>Painel</span>
                                        </Link>
                                        <Link to="/perfil" className="dropdown-item" >
                                            <i className="fas fa-chart-pie"></i>
                                            <span>Perfil</span>
                                        </Link>
                                        <div className="dropdown-divider"></div>
                                        <Link to="/" className="dropdown-item" onClick={() => Logout()}>
                                            <i className="ni ni-user-run"></i>
                                            <span>Logout</span>
                                            {renderRedirect()}
                                        </Link>
                                    </div>
                                </li>
                            </ul>
                        </>
                        :
                        <>
                            <ul className="navbar-nav align-items-center ml-md-auto"></ul>
                            <ul className="navbar-nav align-items-center ml-auto ml-md-0" style={{ height: '45px' }}>
                                <LoaderDefault
                                    type={'Simple-1'}
                                    border={'3px solid var(--primary)'}
                                    width={'1em'}
                                    height={'1em'}
                                    margin={'10px auto'}
                                    borderBottomColor={'white'}
                                />
                            </ul>
                        </>
                    }





                </div>
            </div>
        </nav>
    );
}

export default DefaultNavbar;