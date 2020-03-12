import React from 'react';
//OWN COMPONENTS
import DiagnosticsCard from './Components/DiagnosticsCard';

const Diagnostics = () => {
    return (
        <div className="row">
            <div className="col-md-6">
                <DiagnosticsCard title="B35 - B35 DERMATOFITOSE" />
            </div>
            <div className="col-md-6">
                <DiagnosticsCard title="H10 - H10 CONJUNTIVITE" />
            </div>
            <div className="col-md-6">
                <DiagnosticsCard title="M54.5 - M54.5 DOR LOMBAR BAIXA" />
            </div>
            <div className="col-md-6">
                <DiagnosticsCard title="J01.0 - J01.0 SINUSITE MAXILAR AGUDA" />
            </div>
            <div className="col-md-6">
                <DiagnosticsCard title="Z54.0 - Z54.0 CONVALESCENCA APOS CIRURGIA" />
            </div>
            <div className="col-md-6">
                <DiagnosticsCard title="R51 - R51 CEFALEIA" />
            </div>
        </div>
    );
}

export default Diagnostics;