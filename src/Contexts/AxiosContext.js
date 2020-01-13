import React, { createContext } from 'react';
import axios from 'axios';
import Requests from './../Services/Requests';

export const AxiosContext = createContext();

const AxiosContextProvider = (props) => {

    const UrlForError = Requests.UrlForError;
    
    const CallForSomeApi = (params, axiosCallback) => {
        let operationParams = Requests[params.operation];
        operationParams.data = params.data;
        if(localStorage.getItem('token')){
            operationParams.headers = {'mundo-data-token': localStorage.getItem('token')};
        }
        axios(operationParams)
        .then(res => {
            axiosCallback(res.data)
        })
        .catch(function (error) {
            axiosCallback(error)
        })
    }

    const CatchResponseCode = (operation, response) => {
        for (let i = 0; i < Requests[operation].responses.length; i++){
            if (Requests[operation].responses[i].response === response){
                return Requests[operation].responses[i].code;
            }
        }
    }

    return ( 
        <AxiosContext.Provider value={{ CallForSomeApi, CatchResponseCode, UrlForError }}>
            {props.children}
        </AxiosContext.Provider>
     );
}

export default AxiosContextProvider;