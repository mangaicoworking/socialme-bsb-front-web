import React, { useState, useEffect, useContext } from 'react';
import PatientPageView from './PatientPageView';
//CONTEXTS
import { AxiosContext } from './../../Contexts/AxiosContext';

const PatientPage = () => {
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
        <PatientPageView
            render={render}
            load={load}
            patient={patient}
        />
    );
}

export default PatientPage;