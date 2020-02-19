import React from 'react';

const Header = () => {
    return (
        <div className="header bg-primary pb-6">
            <div className="container-fluid">
                <div className="header-body">
                    <div className="row align-items-center py-2">
                        <div className="col-lg-8 col-7">
                            <h6 className="h2 text-white d-inline-block mb-0">Pacientes</h6>
                            {/* 
                            <nav aria-label="breadcrumb" className="d-none d-md-inline-block">
                                <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
                                    <li className="breadcrumb-item">
                                        <Link to="/me">
                                            <i className="fas fa-home"></i>
                                        </Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">Pacientes</li>
                                </ol>
                            </nav>
                            */}
                        </div>
                        <div className="col-lg-4 col-5 text-right">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;