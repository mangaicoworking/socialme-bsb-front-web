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
                        <i className="fas fa-prescription-bottle-alt"></i>
                        <p>MILILITRO: 1000</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', flex: '1', color: 'var(--textGray)' }}>
                        <i className="fas fa-info"></i>
                        <p>Status não informado</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', flex: '1', color: 'var(--textGray)' }}>
                        <i className="fas fa-box"></i>
                        <p>Lote não informada</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', flex: '1', color: 'var(--textGray)' }}>
                        <i style={{ marginLeft: 'auto' }} className="far fa-calendar"></i>
                        <p>Validade: 22/02/2021</p>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <div style={{ display: 'flex', alignContent: 'center', alignItems: 'center' }}>
                    <i className="fas fa-user-md"></i>
                    <p>Profissional Administração: </p>
                </div>
                <p style={{ marginLeft: '30px', fontWeight: '400' }}>LARA LUIZA ALCHIMIM</p>

                <div style={{ display: 'flex', alignContent: 'center', alignItems: 'center' }}>
                    <i className="far fa-file-alt"></i>
                    <p>Observação Administração:</p>
                </div>
                <p style={{ marginLeft: '30px', fontWeight: '400' }}>Não foi informado observação da administração</p>

                <div style={{ display: 'flex', alignContent: 'center', alignItems: 'center' }}>
                    <i className="far fa-file-alt"></i>
                    <p>Anotação de Prescrição do Medicamento:</p>
                </div>
                <p style={{ marginLeft: '30px', fontWeight: '400' }}>Não foi informado anotação para o medicamento</p>

                <div style={{ display: 'flex', alignContent: 'center', alignItems: 'center' }}>
                    <i className="far fa-file-alt"></i>
                    <p>Anotações da Prescrição da Solicitação:</p>
                </div>
                <p style={{ marginLeft: '30px', fontWeight: '400' }}>Não foi informado anotações para a prescrição</p>
            </div>
        </div>
    );
}

export default AttendanceCard;