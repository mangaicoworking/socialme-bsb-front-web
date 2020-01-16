import React, { useEffect, useState } from 'react';

const ProfileProgress = (props) => {
    const [percentage, setPercentage] = useState(0)
    useEffect(() => {
        setTimeout(
            function() {
                setPercentage(props.percentage)
            },500
        );
    },[props.percentage]);
    return (
        <div className="progress-wrapper" style={{ paddingTop: '0px' }}>
            <div className="progress-info">
                <div className="progress-percentage">
                    <span className="text-primary">Porcentagem do Perfil</span>
                </div>
                <div className="progress-percentage">
                    <span className="text-primary">{percentage}%</span>
                </div>
            </div>
            <div className="progress">
                <div className="progress-bar bg-primary" role="progressbar" aria-valuenow={percentage} aria-valuemin="0" aria-valuemax="100" style={{ width: `${percentage}%` }}></div>
            </div>
        </div>
    );
}

export default ProfileProgress;