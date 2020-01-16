import React, { useState, useEffect, useContext } from 'react';
//LIBRARYS
import { format } from 'date-fns';
//COMPONENTS
import { LoaderDefault } from './../../Components/Loader/LoaderDefault';
//CONTEXTS
import { AxiosContext } from './../../Contexts/AxiosContext';
//SERVICES
import { cpfMaskContinuos  } from './../../Services/masks';

const BrasiliaManagerDashboardPatients = () => {
    //CONTEXTS
    const { CallForSomeApi } = useContext(AxiosContext);
    //VARIABLES
    const [render, setRender] = useState(false);
    const [load, setLoad] = useState(true);
    const [patient, setPatient] = useState();

    useEffect(() => {
        setLoad(true);
        let iDPatient = window.location.pathname.split('/')[2];
        const params = {
            operation: 'ShowPatient',
            url: `/person/${iDPatient}`,
        }
        CallForSomeApi((params),(axiosResponse) => {
            console.log(axiosResponse);
            setPatient(axiosResponse.body);
            setLoad(false);
            setRender(true);
        });
    },[CallForSomeApi]);

    const renderRandomImage = (item) => {
        let age;
        let sex;

        if(item.birth && item.birth.date){ age = new Date().getFullYear() - format(new Date(item.birth.date), 'yyyy');
        }else{age = null}

        if(item.sex){sex = item.sex
        }else{sex = null}
        
        if( age === null && sex === null){
            return('/assets/img/people/ambos.png')
        }else{
            if(sex === 'M'){
                if(age <= 12){
                    let random = Math.floor(Math.random() * 9) + 1;
                    return(`/assets/img/people/HomemCrianca/${random}.png`);
                } 
                if(age > 12 && age < 30){
                    let random = Math.floor(Math.random() * 3) + 1;
                    return(`/assets/img/people/HomemJovem/${random}.png`);
                }
                if(age >= 30 && age < 60){
                    let random = Math.floor(Math.random() * 5) + 1;
                    return(`/assets/img/people/HomemAdulto/${random}.png`);
                }
                if(age >= 60){
                    let random = Math.floor(Math.random() * 3) + 1;
                    return(`/assets/img/people/HomemIdoso/${random}.png`);
                }
            }else{
                if(age <= 12){
                    let random = Math.floor(Math.random() * 4) + 1;
                    return(`/assets/img/people/MulherCrianca/${random}.png`);
                } 
                if(age > 12 && age < 30){
                    let random = Math.floor(Math.random() * 11) + 1;
                    return(`/assets/img/people/MulherJovem/${random}.png`);
                }
                if(age >= 30 && age < 60){
                    let random = Math.floor(Math.random() * 12) + 1;
                    return(`/assets/img/people/MulherAdulto/${random}.png`);
                }
                if(age >= 60){
                    let random = Math.floor(Math.random() * 2) + 1;
                    return(`/assets/img/people/MulherIdoso/${random}.png`);
                }
            }
        }
    }

    const renderPage = () => {
        if (load) {
            return (
                <div style={{ height: '300px', display: 'flex', alignItems: 'center' }}>
                    <LoaderDefault
                        type={'Simple-1'}
                        border={'3px solid var(--primary)'}
                        width={'3em'}
                        height={'3em'}
                        margin={'0px auto'}
                        borderBottomColor={'white'}
                    />
                </div>
            )
        } else {
            if (render) {
                return (
                    <div className="row">
                        <div className="col-xl-4 order-xl-2">
                            {/* CARD USER */}
                            <div className="card card-profile">
                                <img src="../../assets/img/theme/img-1-1000x600.jpg" alt="placeholder" className="card-img-top" />
                                <div className="row justify-content-center">
                                    <div className="col-lg-3 order-lg-2">
                                        <div className="card-profile-image">
                                            <a href="!#">
                                                <img style={{ backgroundColor: 'white' }} src={renderRandomImage(patient)}className="rounded-circle" alt="Descri" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                                    <div className="d-flex justify-content-between">
                                        <a href="!#" className="btn btn-sm btn-info mr-4">Ver no mapa</a>
                                        <a href="!#" className="btn btn-sm btn-default float-right">Mensagem</a>
                                    </div>
                                </div>
                                <div className="card-body pt-0">
                                    <div className="row">
                                        <div className="col">
                                            <div className="card-profile-stats d-flex justify-content-center">
                                                <div>
                                                    <span className="heading">22</span>
                                                    <span className="description">Atendimentos</span>
                                                </div>
                                                <div>
                                                    <span className="heading">10</span>
                                                    <span className="description">Repetições</span>
                                                </div>
                                                <div>
                                                    <span className="heading">89</span>
                                                    <span className="description">Outra coisa</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <h5 className="h3">
                                            {patient.name}
                                            <span className="font-weight-light">, {patient.birth && patient.birth.date ? `${new Date().getFullYear() - format(new Date(patient.birth.date), 'yyyy')}` : 'Sem Data de Nascimento' } </span>
                                            {patient.sex  ?
                                                patient.sex === 'M' ?
                                                    <img style={{ width: 'auto', height: '20px' }} src="/assets/img/icons/common/male.png" alt="Male" />
                                                    :
                                                    <img style={{ width: 'auto', height: '20px' }} src="/assets/img/icons/common/female.png" alt="female" />
                                            :
                                            <></>
                                            }
                                        </h5>
                                        <div className="h5 font-weight-300">
                                            <i className="ni location_pin mr-2"></i>
                                            Boa Vista, Roraima - <strong>Brasil</strong>
                                        </div>
                                        <div className="h5 mt-4">
                                            <i className="ni business_briefcase-24 mr-2"></i>Profisão - Empresa onde trabalha
                                        </div>
                                        <div>
                                            <i className="ni education_hat mr-2"></i>
                                            Escolaridade
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* CARD ORGINS */}
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="h3 mb-0">Origens</h5>
                                </div>
                                <div className="card-body">
                                    <ul className="list-group list-group-flush list my--3">

                                        {patient.originIds.map((origin,index) => (
                                            <li key={'index'} className="list-group-item px-0">
                                                <div className="row align-items-center">
                                                    <div className="col-auto">
                                                        <a href="!#" className="avatar rounded-circle">
                                                            <img alt="placeholder" src={`/assets/img/theme/user${origin.system}.jpg`} />
                                                        </a>
                                                    </div>
                                                    <div className="col">
                                                        <h5 style={{ margin: '0px' }}>{origin.system}</h5>
                                                        <small><strong>Id: </strong> {origin.id}</small>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8 order-xl-1">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="card bg-gradient-info border-0">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col">
                                                    <h5 className="card-title text-uppercase text-muted mb-0 text-white">Total traffic</h5>
                                                    <span className="h2 font-weight-bold mb-0 text-white">350,897</span>
                                                </div>
                                                <div className="col-auto">
                                                    <div className="icon icon-shape bg-white text-dark rounded-circle shadow">
                                                        <i className="ni ni-active-40"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="mt-3 mb-0 text-sm">
                                                <span className="text-white mr-2"><i className="fa fa-arrow-up"></i> 3.48%</span>
                                                <span className="text-nowrap text-light">Since last month</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="card bg-gradient-danger border-0">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col">
                                                    <h5 className="card-title text-uppercase text-muted mb-0 text-white">Performance</h5>
                                                    <span className="h2 font-weight-bold mb-0 text-white">49,65%</span>
                                                </div>
                                                <div className="col-auto">
                                                    <div className="icon icon-shape bg-white text-dark rounded-circle shadow">
                                                        <i className="ni ni-spaceship"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="mt-3 mb-0 text-sm">
                                                <span className="text-white mr-2"><i className="fa fa-arrow-up"></i> 3.48%</span>
                                                <span className="text-nowrap text-light">Since last month</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <div className="row align-items-center">
                                        <div className="col-8">
                                            <h3 className="mb-0">Edit profile </h3>
                                        </div>
                                        <div className="col-4 text-right">
                                            <a href="#!" className="btn btn-sm btn-primary">Settings</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <h6 className="heading-small text-muted mb-4">User information</h6>
                                        <div className="pl-lg-4">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <label className="form-control-label" for="input-username">Username</label>
                                                        <input type="text" id="input-username" className="form-control" placeholder="Username" value="lucky.jesse" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <label className="form-control-label" for="input-email">Email address</label>
                                                        <input type="email" id="input-email" className="form-control" placeholder="jesse@example.com" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <label className="form-control-label" for="input-first-name">First name</label>
                                                        <input type="text" id="input-first-name" className="form-control" placeholder="First name" value="Lucky" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <label className="form-control-label" for="input-last-name">Last name</label>
                                                        <input type="text" id="input-last-name" className="form-control" placeholder="Last name" value="Jesse" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className="my-4" />
                                        <h6 className="heading-small text-muted mb-4">Contact information</h6>
                                        <div className="pl-lg-4">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label className="form-control-label" for="input-address">Address</label>
                                                        <input id="input-address" className="form-control" placeholder="Home Address" value="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09" type="text" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <div className="form-group">
                                                        <label className="form-control-label" for="input-city">City</label>
                                                        <input type="text" id="input-city" className="form-control" placeholder="City" value="New York" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="form-group">
                                                        <label className="form-control-label" for="input-country">Country</label>
                                                        <input type="text" id="input-country" className="form-control" placeholder="Country" value="United States" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="form-group">
                                                        <label className="form-control-label" for="input-country">Postal code</label>
                                                        <input type="number" id="input-postal-code" className="form-control" placeholder="Postal code" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className="my-4" />
                                        <h6 className="heading-small text-muted mb-4">About me</h6>
                                        <div className="pl-lg-4">
                                            <div className="form-group">
                                                <label className="form-control-label">About Me</label>
                                                <textarea rows="4" className="form-control" placeholder="A few words about you ...">A beautiful premium dashboard for Bootstrap 4.</textarea>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        }
    }
    return (
        <>
            <div className="header pb-6 d-flex align-items-center" style={{ minHeight: '100px', backgroundColor: 'var(--primary)' }}></div>
            <div className="container-fluid mt--6">
                {renderPage()}
            </div>
        </>
    );
}

export default BrasiliaManagerDashboardPatients;