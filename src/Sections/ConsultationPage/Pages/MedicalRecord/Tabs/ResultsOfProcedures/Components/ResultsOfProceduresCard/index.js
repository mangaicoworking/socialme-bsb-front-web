import React from 'react';
import { Link } from 'react-router-dom';

const AttendanceCard = (props) => {
    return (
        <div className="card MedicalRecord-CardSimple-4">
            <div className="card-header">
                <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                    <div style={{ display: 'flex', alignItems: 'center', flex: '1' }}>
                        <Link style={{ display: 'flex', alignContent: 'center', alignItems: 'center' }} to="/consulta/123" target="_blank">
                            <i className="fas fa-file-medical"></i>
                            <p>EM-22349017</p>
                        </Link>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', flex: '1', color: 'var(--textGray)' }}>
                        <i className="fas fa-clinic-medical"></i>
                        <p>HRPA - Hospital Regional do Paranoa</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', flex: '1', color: 'var(--textGray)' }}>
                        <i style={{ marginLeft: 'auto' }} className="fas fa-calendar-day"></i>
                        <p>10/01/2020</p>
                    </div>
                </div>
                <div className="cardTitle">
                    <p>{props.title}</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                    <div style={{ display: 'flex', alignItems: 'center', flex: '1' }}>
                        <i className="fas fa-exclamation-triangle"></i>
                        <p>Prioridade não informada</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', flex: '1', color: 'var(--textGray)' }}>
                        <i className="far fa-calendar"></i>
                        <p>Inicio: 01/01/2020</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', flex: '1', color: 'var(--textGray)' }}>
                        <i className="far fa-calendar"></i>
                        <p>Final: 30/03/2020</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', flex: '1', color: 'var(--textGray)' }}>
                        <i style={{ marginLeft: 'auto' }} className="fas fa-info"></i>
                        <p>Status não informado</p>
                    </div>
                </div>
            </div>
            <div className="card-body">

                <div style={{ display: 'flex', alignContent: 'center', alignItems: 'center' }}>
                    <i className="fas fa-user-md"></i>
                    <p>Profissional Responsável pelo Procedimento: </p>
                </div>
                <p style={{ marginLeft: '30px', fontWeight: '400' }}>Não foi informado profissional que realizou o procedimento</p>

                <div style={{ display: 'flex', alignContent: 'center', alignItems: 'center' }}>
                    <i className="far fa-file-alt"></i>
                    <p>Resultado do Procedimento:</p>
                </div>
                <p style={{ marginLeft: '30px', fontWeight: '400' }}>25</p>

                <div style={{ display: 'flex', alignContent: 'center', alignItems: 'center' }}>
                    <i className="far fa-file-alt"></i>
                    <p>Observação do Resultado:</p>
                </div>
                <p style={{ marginLeft: '30px', fontWeight: '400' }}>UREIA</p>

                <div style={{ display: 'flex', alignContent: 'center', alignItems: 'center' }}>
                    <i className="far fa-file-alt"></i>
                    <p>Profissional Solicitação:</p>
                </div>
                <p style={{ marginLeft: '30px', fontWeight: '400' }}>Não foi informado o profissional que realizou a solicitação.</p>

                <div style={{ display: 'flex', alignContent: 'center', alignItems: 'center' }}>
                    <i className="fas fa-exclamation-circle"></i>
                    <p>Motivo:</p>
                </div>
                <p style={{ marginLeft: '30px', fontWeight: '400' }}>Não foi informado motivo para a solicitação.</p>

                <div style={{ display: 'flex', alignContent: 'center', alignItems: 'center' }}>
                    <i className="far fa-file-alt"></i>
                    <p>Anotações da Solicitação do Procedimento:</p>
                </div>
                <p style={{ marginLeft: '30px', fontWeight: '400' }}>Não foi informado anotação para o procedimento.</p>

                <div style={{ display: 'flex', alignContent: 'center', alignItems: 'center' }}>
                    <i className="far fa-file-alt"></i>
                    <p>Observações da Solicitação:</p>
                </div>
                <p style={{ marginLeft: '30px', fontWeight: '400' }}>Não foi informado anotações para a solicitação</p>
            </div>
        </div>
    );
}

export default AttendanceCard;