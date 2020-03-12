import React from 'react';
import { Link } from 'react-router-dom';

const AttendanceCard = (props) => {
    return (
        <div className="card MedicalRecord-CardSimple-3">
            <div className="card-header">
                <div className="cardTitle">
                    <i className="fas fa-user-md"></i>
                    <p>Profissional não informado</p>
                </div>
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

            </div>
            <div className="card-body">
                <p>{props.text}</p>
            </div>
        </div>
    );
}

export default AttendanceCard;