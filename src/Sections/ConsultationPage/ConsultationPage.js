import React, { useState, useEffect, useContext } from 'react';
import ConsultationPageView from './ConsultationPageView';
//CONTEXTS
import { AxiosContext } from './../../Contexts/AxiosContext';

const patientFake = {
    birth: '1993-06-15',
    phones: [
        {
            description: 'fixo',
            number: '9536268426'
        }
    ],
    addresses: [
        {
            street: 'Tota Terêncio',
            country: 'Brasil'
        }
    ]
}

const ConsultationPage = () => {
    //CONTEXTS
    const { CallForSomeApi } = useContext(AxiosContext);
    //VARIABLES
    const [render, setRender] = useState(false);
    const [load, setLoad] = useState(true);
    const [patient, setPatient] = useState();

    useEffect(() => {
        setLoad(true);
        let iDPatient = window.location.pathname.split('/')[2];
        const params = {
            operation: 'ShowPatient',
            url: `/person/${iDPatient}`,
        }
        CallForSomeApi((params), (axiosResponse) => {
            console.log(axiosResponse);
            setPatient(axiosResponse.body);
            setLoad(false);
            setRender(true);
        });
    }, [CallForSomeApi]);

    return (
        <ConsultationPageView
            render={true}
            load={false}
            patient={patientFake}
        />
    );
}

export default ConsultationPage;