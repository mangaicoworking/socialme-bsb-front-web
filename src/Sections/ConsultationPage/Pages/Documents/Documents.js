import React from 'react';
import './Documents.css';

const Documents = (props) => {
    return (
        <div className="card">
            <div className="card-header bg-transparent">
                <div className="BasicInformation-Header">
                  {/*   <img src={'/assets/img/figures/ImageProfileDocuments.svg'} alt="description" /> */}
                    <div className="BasicInformation-TitleContainer">
                        <h1 className="mb-0">Alta Médica</h1>
                    </div>

                </div>
            </div>
            <div className="card-body">

            <div style={{ display: 'flex', alignItems: 'center' }} className="mb-3">
                    <p style={{ margin: '0px' }}><strong>Data da Alta: </strong> 13/03/2019 às 19:20</p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center' }} className="mb-3">
                    <p style={{ margin: '0px' }}><strong>Motivo da Alta: </strong> Dado não informado</p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center' }} className="mb-3">
                    <p style={{ margin: '0px' }}><strong>Profissional: </strong> Dado não informado</p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center' }} className="mb-3">
                    <p style={{ margin: '0px' }}><strong>Observações: </strong> Dado não informado</p>
                </div>

                <hr/>

                <p style={{ margin: '0px 0px 20px 0px' }}><strong>Alta do paciente possui registro de encaminhamento</strong></p>

                <div style={{ display: 'flex', alignItems: 'center' }} className="mb-3">
                    <p style={{ margin: '0px' }}><strong>Tipo de instituição: </strong> Dado não informado</p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center' }} className="mb-3">
                    <p style={{ margin: '0px' }}><strong>Especialidade: </strong> Dado não informado</p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center' }} className="mb-3">
                    <p style={{ margin: '0px' }}><strong>Profissional: </strong> Dado não informado</p>
                </div>

            </div>{/* /card-body */}
        </div>
    );
}

export default Documents;