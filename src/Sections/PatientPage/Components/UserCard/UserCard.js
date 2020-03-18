import React from 'react';
import { Link } from 'react-router-dom';
//SERVICES
import { cpfMask } from './../../../../Services/masks';

const UserCard = (props) => {
    return ( 
        <div className="card card-profile" style={{ paddingBottom: '10px', marginBottom: '10px'  }}>
            <div className="PersonalDashboard-ProfileCardCover" style={{ backgroundImage: `url('/assets/img/theme/img-1-1000x600.jpg')` }}></div>
                <div className="row justify-content-center">
                    <Link to="#" style={{ marginTop: '-50px' }}>
                        <div className="PersonalDashboard-ProfileCardPhoto rounded-circle" style={{ backgroundImage: `url('${props.randomImage}')` }}></div>
                    </Link>
                </div>
            <div className="card-body pt-0 PersonalDashboard-card-body">
                <div className="PersonalDashboard-NameContainer">
                    <p style={{ textTransform: 'uppercase' }}>
                        {props.patient.name}
                    </p>
                    <span><strong>CPF: </strong>
                    {props.patient.document.cpf.number ? cpfMask(props.patient.document.cpf.number) : 'CPF não informado'} </span>
                </div>
            </div>
        </div>
     );
}
 
export default UserCard;