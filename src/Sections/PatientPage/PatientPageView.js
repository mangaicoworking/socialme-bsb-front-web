import React from 'react';
import './PatientPage.css';
//OWN COMPONENTS
import { UserCard } from './Components/UserCard';
//LIBRARYS
import { format } from 'date-fns';
//COMPONENTS
import { DefaultNavbar } from './../../Components/Layout/Dashboard/Navbar/DefaultNavbar';
import { LoaderDefault } from './../../Components/Loader/LoaderDefault';
import { DefaultProgress } from './../../Components/Progress/DefaultProgress';
//PAGES
import { BasicInformation } from './Pages/BasicInformation';
import { Documents } from './Pages/Documents';
import { Adresses } from './Pages/Adresses';
import { Records } from './Pages/Records';
import { MedicalRecord } from './Pages/MedicalRecord';

const PatientPageView = (props) => {
    const renderRandomImage = (patient) => {
        let age;
        let sex;

        if (patient.birth && patient.birth.date) {
            age = new Date().getFullYear() - format(new Date(patient.birth.date), 'yyyy');
        } else { age = null }

        if (patient.sex) {
            sex = patient.sex
        } else { sex = null }

        if (age === null && sex === null) {
            return ('/assets/img/people/ambos.png')
        } else {
            if (sex === 'M') {
                if (age <= 12) {
                    let random = Math.floor(Math.random() * 6) + 1;
                    return (`/assets/img/people/HomemCrianca/${random}.png`);
                }
                if (age > 12 && age < 30) {
                    let random = Math.floor(Math.random() * 3) + 1;
                    return (`/assets/img/people/HomemJovem/${random}.png`);
                }
                if (age >= 30 && age < 60) {
                    let random = Math.floor(Math.random() * 4) + 1;
                    return (`/assets/img/people/HomemAdulto/${random}.png`);
                }
                if (age >= 60) {
                    let random = Math.floor(Math.random() * 3) + 1;
                    return (`/assets/img/people/HomemIdoso/${random}.png`);
                }
            } else {
                if (age <= 12) {
                    let random = Math.floor(Math.random() * 2) + 1;
                    return (`/assets/img/people/MulherCrianca/${random}.png`);
                }
                if (age > 12 && age < 30) {
                    let random = Math.floor(Math.random() * 8) + 1;
                    return (`/assets/img/people/MulherJovem/${random}.png`);
                }
                if (age >= 30 && age < 60) {
                    let random = Math.floor(Math.random() * 8) + 1;
                    return (`/assets/img/people/MulherAdulto/${random}.png`);
                }
                if (age >= 60) {
                    let random = Math.floor(Math.random() * 2) + 1;
                    return (`/assets/img/people/MulherIdoso/${random}.png`);
                }
            }
        }
    }
    const renderPage = () => {
        if (props.load) {
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
            if (props.render) {
                return (
                    <div className="row">
                        <div className="col-md-3">
                            <UserCard
                                patient={props.patient}
                                randomImage={renderRandomImage(props.patient)}
                            />
                            <DefaultProgress percentage={80} />
                            <div className="nav-wrapper" style={{ padding: '0px' }}>
                                <ul className="nav nav-pills nav-pills-primary flex-column PersonalDashboard-NavPills" role="tablist">
                                    <li className="nav-item p-0 text-center">
                                        <a className="nav-link active" data-toggle="tab" href="#basicInformation" role="tablist">
                                            <i className="ni far fa-user-circle mr-2"></i>
                                            Informações Básicas
                                        </a>
                                    </li>
                                    <li className="nav-item text-center">
                                        <a className="nav-link" data-toggle="tab" href="#documents" role="tablist">
                                            <i className="ni far fa-address-card mr-2"></i>
                                            Documentos
                                    </a>
                                    </li>
                                    <li className="nav-item text-center">
                                        <a className="nav-link" data-toggle="tab" href="#adresses" role="tablist">
                                            <i className="ni fas fa-map-marker-alt mr-2"></i>
                                            Endereços
                                        </a>
                                    </li>
                                    <li className="nav-item p-0 text-center">
                                        <a className="nav-link" data-toggle="tab" href="#registros" role="tablist">
                                            <i className="ni fas fa-stream mr-2"></i>
                                            Registros
                                        </a>
                                    </li>
                                    <li className="nav-item p-0 text-center">
                                        <a className="nav-link" data-toggle="tab" href="#medicalRecord" role="tablist">
                                            <i className="ni fas fa-notes-medical mr-2"></i>
                                            Prontuário
                                        </a>
                                    </li>
                                    {/* 
                                    <li className="nav-item text-center">
                                        <a className="nav-link" data-toggle="tab" href="#relationships" role="tablist">
                                            <i className="ni fas fa-user-friends mr-2"></i>
                                            Relacionamentos
                                        </a>
                                    </li>
                                    */}
                                </ul>
                            </div>
                        </div>
                        {/* COL-MD-9 */}
                        <div className="col-md-9 PersonalDashboard-RightEffect">
                            <div className="tab-content">
                                <div className="tab-pane fade active show" id="basicInformation">
                                    <BasicInformation patient={props.patient} />
                                </div>
                                <div className="tab-pane fade" id="documents">
                                    <Documents patient={props.patient} />
                                </div>
                                <div className="tab-pane" id="adresses">
                                    <Adresses patient={props.patient} />
                                </div>
                                <div className="tab-pane fade" id="registros">
                                    <Records />
                                </div>
                                <div className="tab-pane fade" id="medicalRecord">
                                    <MedicalRecord />
                                </div>
                                {/* 
                                <div className="tab-pane fade" id="relationships">
                                    <p>RELACIONAMENTOS</p>
                                </div>
                                */}
                            </div>
                            {/* FOOTER HERE */}
                        </div>
                    </div>
                )
            }
        }
    }
    return (
        <>
            <DefaultNavbar />
            <div className="header pb-6 d-flex align-items-center" style={{ minHeight: '100px', backgroundColor: 'var(--primary)' }}></div>
            <div className="container-fluid mt--6" style={{ overflow: 'hidden' }}>
                {renderPage()}
            </div>
        </>
    );
}

export default PatientPageView;