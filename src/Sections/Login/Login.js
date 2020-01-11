import React from 'react';

const Login = () => {
    return ( 
        <div className="main-content" style={{ height: '100vh', backgroundColor: 'var(--backgroundColor)', paddingTop: '30px' }}>
            <div className="container pb-5">
                <div className="row justify-content-center">
                    <div className="col-lg-5 col-md-7">
                        <div style={{ backgroundColor: 'var(--primary)' }} className="card border-0 mb-0">
                            <div className="card-body px-lg-5 py-lg-5">
                                <img style={{ height: '50px', display: 'block', margin: '0px auto' }} src={'/assets/img/brand/LogoBrancaFundoVermelho.png'} alt="Logo Social Me" />
                                <div className="text-center text-muted mb-4">
                                    <small style={{ color: 'white'}}>Entre com as suas credenciais</small>
                                </div>

                                <div className="form-group mb-3">
                                    <div className="input-group input-group-merge input-group-alternative">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="ni ni-email-83"></i></span>
                                        </div>
                                        <input className="form-control" placeholder="Email" type="email"/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="input-group input-group-merge input-group-alternative">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="ni ni-lock-circle-open"></i></span>
                                        </div>
                                        <input className="form-control" placeholder="Password" type="password"/>
                                    </div>
                                </div>

                                <div className="custom-control custom-control-alternative custom-checkbox">
                                    <input className="custom-control-input" id=" customCheckLogin" type="checkbox"/>
                                    <label className="custom-control-label" htmlFor=" customCheckLogin">
                                        <span style={{ color: 'white' }}>Lembrar Senha</span>
                                    </label>
                                </div>

                                <div className="text-center">
                                    <button style={{ backgroundColor: 'white', color: 'var(--primary)'}} type="button" className="btn my-4">Entrar</button>
                                </div>
                        
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Login;