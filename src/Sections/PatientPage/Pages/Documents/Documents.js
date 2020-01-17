import React from 'react';
import './Documents.css';
//SERVICES
import { cpfMask } from './../../../../Services/masks';

const Documents = (props) => {
    return (
        <div className="card">
            <div className="card-header bg-transparent">
                <div className="BasicInformation-Header">
                    <img src={'/assets/img/figures/ImageProfileDocuments.svg'} alt="description" />
                    <div className="BasicInformation-TitleContainer">
                        <h1 className="mb-0">Documentos</h1>
                        <span>Curabitur magna ante, vehicula quis dui vel, feugiat lacinia diam.</span>
                    </div>

                </div>
            </div>
            <div className="card-body PageDocuments">

                <div className="table-responsive">
                    <table className="table align-items-center table-flush">
                        <thead className="thead-light">
                            <tr>
                                <th>Documento</th>
                                <th>Número</th>
                            </tr>
                        </thead>
                        <tbody className="list">

                            {/* CPF */}
                            <tr>
                                <th scope="row">
                                    <div className="media align-items-center">
                                        <img style={{ height: '30px', marginRight: '10px' }} alt="Implaceholder" src="/assets/img/documents/cpf.png" />
                                        <div className="media-body" style={{ display: 'grid' }}>
                                            <span className="name mb-0 text-sm">{`CPF (Cadastro de Pessoas Físicas)`}</span>
                                        </div>
                                    </div>
                                </th>
                                <td>{props.patient.mainDocument ? cpfMask(props.patient.mainDocument.number) : ''}</td>
                            </tr>
                             {/* CNS */}
                             <tr>
                                <th scope="row">
                                    <div className="media align-items-center">
                                        <img style={{ height: '30px', marginRight: '10px' }} alt="Implaceholder" src="/assets/img/documents/cns.jpg" />
                                        <div className="media-body" style={{ display: 'grid' }}>
                                            <span className="name mb-0 text-sm">{`CNS (Cartão Nacional de Saúde)`}</span>
                                        </div>
                                    </div>
                                </th>
                                <td>{props.patient.documents && props.patient.documents[0] ?  props.patient.documents[0].number : ''}</td>
                            </tr>
                            {/* RG */}
                            <tr>
                                <th scope="row">
                                    <div className="media align-items-center">
                                        <img style={{ height: '30px', marginRight: '10px' }} alt="Implaceholder" src="/assets/img/documents/rg.jpg" />
                                        <div className="media-body" style={{ display: 'grid' }}>
                                            <span className="name mb-0 text-sm">{`RG (Registro Geral)`}</span>
                                        </div>
                                    </div>
                                </th>
                                <td>{props.patient.documents && props.patient.documents[1] ? props.patient.documents[1].number : ''}</td>
                            </tr>
                            {/* TITULO */}
                            <tr>
                                <th scope="row">
                                    <div className="media align-items-center">
                                        <img style={{ height: '30px', marginRight: '10px' }} alt="Implaceholder" src="/assets/img/documents/tituloeleitoral.jpg" />
                                        <div className="media-body" style={{ display: 'grid' }}>
                                            <span className="name mb-0 text-sm">{`Título de eleitor`}</span>
                                        </div>
                                    </div>
                                </th>
                                <td>{props.patient.documents && props.patient.documents[2] ? props.patient.documents[2].number : ''}</td>
                            </tr>

                        </tbody>
                    </table>
                </div>

            </div>{/* /card-body */}
        </div>
    );
}

export default Documents;