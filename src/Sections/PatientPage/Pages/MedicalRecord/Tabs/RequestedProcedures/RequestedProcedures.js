import React from 'react';
//OWN COMPONENTS
import RequestedProceduresCard from './Components/RequestedProceduresCard';

const RequestedProcedures = () => {
    return ( 
        <div className="row">
            <div className="col-md-12">
                <RequestedProceduresCard 
                title="GLICOSE"
                />
            </div>
        </div>
    );
}
 
export default RequestedProcedures;