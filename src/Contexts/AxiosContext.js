import React, { createContext } from 'react';
import axios from 'axios';
import Requests from './../Services/Requests';

export const AxiosContext = createContext();

const AxiosContextProvider = (props) => {

    const UrlForError = Requests.UrlForError;
    
    const CallForSomeApi = (params, axiosCallback) => {
        let operationParams = Requests[params.operation];
        operationParams.data = params.data;
        if(params.url) operationParams.url = params.url;
        if(localStorage.getItem('login-token')){
            operationParams.headers = {'login-token': localStorage.getItem('login-token')};
        }
        //operationParams.headers = {'login-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZTFmMTYwYmI0ZTA5NDM1OWM3MTk4ODkiLCJpYXQiOjE1NzkwOTc5OTUsImV4cCI6MzM3OTA5Nzk5NX0.F_LuIWjyfUNK8GbYlcAq3mPmQsfaVnl_wRE0Y5OxcMo' };
        axios(operationParams)
        .then(res => {
            axiosCallback(res.data)
        })
        .catch(function (error) {
            if (error &&  error.response && error.response.status === 401) {
                axiosCallback(401)
            }
            /*
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            }
            */
        })
        /*
        axios(operationParams)
        .then(res => {
            axiosCallback(res.data)
        })
        .catch(function (error) {
            axiosCallback(error)
        })
        */
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