import React from 'react';
import BasicInformationView from './BasicInformationView';

const BasicInformation = (props) => {
    return ( 
        <BasicInformationView 
            patient={props.patient}
        />
    );
}
 
export default BasicInformation;

/* 
<button onClick={() => UpdateFast()}>VAI FILHÃO</button>
<BasicInformationView 
            user={props.user ? props.user : ''}
        />
*/