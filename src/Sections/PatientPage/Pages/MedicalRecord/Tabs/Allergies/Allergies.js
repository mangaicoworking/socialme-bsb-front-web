import React from 'react';

const Allergies = () => {
    return (
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <span className="alert-inner--text">Não existem <strong>alergias</strong> para este paciente.</span>
        </div>
    );
}

export default Allergies;