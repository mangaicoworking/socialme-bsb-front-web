import React from 'react';

const Vaccines = () => {
    return ( 
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <span className="alert-inner--text">Não existem <strong>vacinas</strong> para este paciente.</span>
        </div>
    );
}
 
export default Vaccines;