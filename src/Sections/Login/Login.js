import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
//CONTEXTS
import { AxiosContext } from './../../Contexts/AxiosContext';
import { AuthContext } from './../../Contexts/AuthContext';
//SERVICES
import { cpfMaskContinuos, cnpjMask  } from './../../Services/masks';
//COMPONENTS
import { LoaderDefault } from './../../Components/Loader/LoaderDefault';

const Login = () => {
    //CONTEXT'S
    const { CatchResponseCode, CallForSomeApi  } = useContext(AxiosContext);
    const { user, populateAuth } = useContext(AuthContext);
    //VARIABLES
    const [mainDocument, setMainDocument] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [consultingAPI, setConsultingAPI] = useState(false);
    //MAIN DOCUMENT
    const HandleChangeMainDocument = () => event =>  {
        if(event.target.value.length > 18){
            return;
        }
        if(event.target.value.length  <= 14){
            return(
                setMainDocument(cpfMaskContinuos(event.target.value))
            )
            
        }else if(event.target.value.length  > 14){
            return(
                setMainDocument(cnpjMask(event.target.value))
            )
        }
    }
    //PASSWORD
    const HandleChangePassword = () => event =>  {
        setPassword(event.target.value)
    }
    const RenderRedirect = () => {
        if(redirect || user){
            return(
                <Redirect to="/me" />
            )
        }
    }
    //LOGIN
    const Login = () => {
        setConsultingAPI(true)
        const params = {
            operation: 'Login',
            data: {
                login: mainDocument.replace(/[^\d]+/g,''),
                password: password
            }
        }
        CallForSomeApi((params),(axiosResponse) => {
            if (axiosResponse.header){
                const code = axiosResponse.header.code.substr(-5);
                switch(code){
                    case CatchResponseCode('Login','Person found'):
                        let tokenValue = axiosResponse.data['mundo-data-token'];
                        let UserData = axiosResponse.data.person;
                        return(
                            populateAuth(tokenValue, UserData),
                            setRedirect(true),
                            setConsultingAPI(false)
                        )
                    default:
                        setConsultingAPI(false)
                        return;
                }
            }
        });
    }
    return ( 
        <div className="main-content" style={{ height: '100vh', backgroundColor: 'var(--backgroundColor)', paddingTop: '30px' }}>
            {RenderRedirect()}
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
                                            <span className="input-group-text"><i className="fas fa-user-lock"></i></span>
                                        </div>
                                        <input className="form-control" 
                                        placeholder="Digite seu CPF ou CNPJ" 
                                        type="text"
                                        value={mainDocument}
                                        onChange={HandleChangeMainDocument()}
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="input-group input-group-merge input-group-alternative">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas fa-key"></i></span>
                                        </div>
                                        <input
                                        className="form-control" 
                                        placeholder="Senha" 
                                        type="password"
                                        value={password}
                                        onChange={HandleChangePassword()}
                                        />
                                    </div>
                                </div>

                                <div className="custom-control custom-control-alternative custom-checkbox">
                                    <input className="custom-control-input" id=" customCheckLogin" type="checkbox"/>
                                    <label className="custom-control-label" htmlFor=" customCheckLogin">
                                        <span style={{ color: 'white' }}>Lembrar Senha</span>
                                    </label>
                                </div>

                                <div className="text-center">

                                {(mainDocument.length === 14 && password.length > 1) || (mainDocument.length === 18 && password.length > 1) ?
                                    consultingAPI ?
                                        <button
                                        type="button" 
                                        className={"btn my-4 btnLoad"}
                                        style={{ 
                                            height: '43px',
                                            opacity: '0.8',
                                            cursor: 'default'
                                        }}
                                        > 
                                        <LoaderDefault 
                                        type={'Simple-1'} 
                                        border={'3px solid white'}
                                        width={'1.2em'}
                                        height={'1.2em'}
                                        margin={'2px 0px 0px 0px'}
                                        />
                                        </button>
                                    :
                                        <button 
                                        style={{ backgroundColor: 'white', color: 'var(--primary)'}} 
                                        type="button" 
                                        className="btn my-4"
                                        onClick={() => Login()}
                                        >Entrar</button>
                                :
                                    <button 
                                    style={{ backgroundColor: 'white', color: 'var(--primary)'}} 
                                    type="button" 
                                    className="btn my-4 ml-auto disabled"
                                    >Entrar</button>
                                    }


                                    
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