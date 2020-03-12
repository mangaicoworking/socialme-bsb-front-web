import React from 'react';
import './ConsultationPage.css';
//OWN COMPONENTS
import { ConsultCard } from './Components/ConsultCard';
//COMPONENTS
import { DefaultNavbar } from './../../Components/Layout/Dashboard/Navbar/DefaultNavbar';
import { LoaderDefault } from './../../Components/Loader/LoaderDefault';
//PAGES
import { BasicInformation } from './Pages/BasicInformation';
import { Documents } from './Pages/Documents';
import { Adresses } from './Pages/Adresses';
import { Records } from './Pages/Records';
import { Location } from './Pages/Location';
import { MedicalRecord } from './Pages/MedicalRecord';

const ConsultationPageView = (props) => {

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
                            <ConsultCard
                                patient={props.patient}
                            />

                            <div className="nav-wrapper mt-3" style={{ padding: '0px' }}>
                                <ul className="nav nav-pills nav-pills-primary flex-column PersonalDashboard-NavPills" role="tablist">
                                    <li className="nav-item p-0 text-center">
                                        <a className="nav-link active" data-toggle="tab" href="#basicInformation" role="tablist">
                                            <i className="ni fas fa-file-medical mr-2"></i>
                                            Dados Gerais
                                        </a>
                                    </li>
                                    <li className="nav-item text-center">
                                        <a className="nav-link" data-toggle="tab" href="#documents" role="tablist">
                                            <i className="ni fas fa-stethoscope mr-2"></i>
                                            Alta Médica
                                        </a>
                                    </li>
                                    <li className="nav-item text-center">
                                        <a className="nav-link" data-toggle="tab" href="#adresses" role="tablist">
                                            <i className="ni fas fa-info-circle mr-2"></i>
                                            Informações Adicionais
                                        </a>
                                    </li>
                                    <li className="nav-item p-0 text-center">
                                        <a className="nav-link" data-toggle="tab" href="#registros" role="tablist">
                                            <i className="ni fas fa-stream mr-2"></i>
                                            Observações
                                        </a>
                                    </li>
                                    <li className="nav-item p-0 text-center">
                                        <a className="nav-link" data-toggle="tab" href="#location" role="tablist">
                                            <i className="ni fas fa-map-marker-alt mr-2"></i>
                                            Localizações
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
                                <div className="tab-pane fade" id="location">
                                    <Location />
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

export default ConsultationPageView;