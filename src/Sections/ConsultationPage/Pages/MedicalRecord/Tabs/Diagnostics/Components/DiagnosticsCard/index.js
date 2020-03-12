import React from 'react';
import { Link } from 'react-router-dom';

const AttendanceCard = (props) => {
    return (
        <div className="card MedicalRecord-CardSimple-2">
            <div className="card-header">
                <div style={{ display: 'flex', alignContent: 'center', alignItems: 'center' }}>
                    <Link style={{ display: 'flex', alignContent: 'center', alignItems: 'center' }} to="/consulta/123" target="_blank">
                        <i className="fas fa-file-medical"></i>
                        <p>EM-22349017 <span> - CID - F</span></p>
                    </Link>
                </div>
                <div style={{ minHeight: '44px', display: 'flex', alignContent: 'center', alignItems: 'center' }}>
                    <h4>{props.title}</h4>
                </div>
            </div>
            <div className="card-body">
                <div style={{ display: 'flex', alignContent: 'center', alignItems: 'center' }}>
                    <i className="fas fa-calendar-day"></i>
                    <p>10/01/2020</p>
                </div>
                <div style={{ display: 'flex', alignContent: 'center', alignItems: 'center' }}>
                    <i className="fas fa-user-md"></i>
                    <p>Profissional não informado</p>
                </div>
                <div style={{ display: 'flex', alignContent: 'center', alignItems: 'center' }}>
                    <i className="fas fa-clinic-medical"></i>
                    <p>HRPA - Hospital Regional do Paranoa</p>
                </div>
            </div>
        </div>
    );
}

export default AttendanceCard;