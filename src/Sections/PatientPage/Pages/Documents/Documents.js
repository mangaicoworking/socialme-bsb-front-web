import React from 'react';
import './Documents.css';
//SERVICES
import { cpfMask } from './../../../../Services/masks';

const Documents = (props) => {
    return (
        <div className="card">
            <div className="card-header bg-transparent">
                <div className="BasicInformation-Header">
                  {/*   <img src={'/assets/img/figures/ImageProfileDocuments.svg'} alt="description" /> */}
                    <div className="BasicInformation-TitleContainer">
                        <h1 className="mb-0">Documentos</h1>
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
                                <td>{props.patient.document.cpf.number ? cpfMask(props.patient.document.cpf.number) : ''}</td>
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
                                <td>{props.patient.document.cns.number ?  props.patient.document.cns.number : ''}</td>
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
                                <td>{props.patient.document.rg.number ? props.patient.document.rg.number : ''}</td>
                            </tr>
                            {/* TITULO 
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
                            */}

                        </tbody>
                    </table>
                </div>

            </div>{/* /card-body */}
        </div>
    );
}

export default Documents;