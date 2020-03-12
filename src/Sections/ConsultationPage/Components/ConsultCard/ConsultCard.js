import React from 'react';
import './ConsultCard.css';

const ConsultCard = (props) => {
    return (
        <div className="card card-profile ConsultCard-GeneralContainer" style={{ paddingBottom: '10px', marginBottom: '10px' }}>
            <div className="ConsultCard-Id" style={{ display: 'flex', alignItems: 'center' }}>
                <p><strong>Atendimento: </strong> EM-22349017</p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <i className="fas fa-user-injured fa-fw"></i>
                <p><strong>Paciente: </strong> Maria da Silva José</p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <i className="fas fa-clinic-medical fa-fw"></i>
                <p><strong>Instituição: </strong> POLICLINICA ASA NORTE</p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <i className="fas fa-user-md fa-fw"></i>
                <p><strong>Profissional: </strong> VERÔNICA MATTOS</p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <i className="fas fa-calendar-day fa-fw"></i>
                <p><strong>Data: </strong> 03/02/2019</p>
            </div>

        </div>
    );
}

export default ConsultCard;