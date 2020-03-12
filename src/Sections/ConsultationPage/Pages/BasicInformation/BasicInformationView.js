import React from 'react';
import './BasicInformation.css';

const BasicInformationView = (props) => {

    return (
        <div className="card Profile-BasicInformation-Card">
            <div className="card-header bg-transparent">
                <div className="BasicInformation-Header">
                    {/* <img src={'/assets/img/figures/ImageProfileData.svg'} alt="description" /> */}
                    <div className="BasicInformation-TitleContainer">
                        <h1 className="mb-0">Dados Gerais do Atendimento</h1>
                    </div>
                </div>
            </div>
            <div className="card-body">

                <div style={{ display: 'flex', alignItems: 'center' }} className="mb-3">
                    <p style={{ margin: '0px' }}><strong>Tipo de Atendimento: </strong> C</p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center' }} className="mb-3">
                    <p style={{ margin: '0px' }}><strong>Caráter do Atendimento: </strong> Dado não informado</p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center' }} className="mb-3">
                    <p style={{ margin: '0px' }}><strong>Equipe: </strong> Dado não informado</p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center' }} className="mb-3">
                    <p style={{ margin: '0px' }}><strong>Motivo do Atendimento: </strong> Dado não informado</p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center' }} className="mb-3">
                    <p style={{ margin: '0px' }}><strong>Modelo Assistêncial: </strong> Dado não informado</p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center' }} className="mb-3">
                    <p style={{ margin: '0px' }}><strong>Situação: </strong> Dado não informado</p>
                </div>

            </div>
        </div>
    );
}

export default BasicInformationView;