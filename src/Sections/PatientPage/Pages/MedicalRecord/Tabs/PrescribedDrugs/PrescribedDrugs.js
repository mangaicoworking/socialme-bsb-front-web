import React from 'react';
//OWN COMPONENTS
import PrescribedDrugsCard from './Components/PrescribedDrugsCard';

const PrescribedDrugs = () => {
    return ( 
        <div className="row">
            <div className="col-md-12">
                <PrescribedDrugsCard 
                title="CLORETO DE SODIO 0,9% SOLUÇÃO INJETAVEL BOLSA OU FRASCO 1000 ML SISTEMA FECHADO DE  INFUSAO"
                />
            </div>
        </div>
    );
}
 
export default PrescribedDrugs;