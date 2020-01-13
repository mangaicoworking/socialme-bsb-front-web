import React, { createContext, useState } from 'react';
import { AlertSimple } from './../AppWeb/Components/StatelessComponents/AlertSimple';

export const AlertContext = createContext();

const AlertContextProvider = (props) => {
    const [show, setShow] = useState(false);
    const [params, setParams] = useState({
        type: '',
        text: '',
        position: ''
    });

    const showAlert = (type, text, position) => {
        setParams({
            type: type,
            text: text,
            position: position
        })
        setShow(!show)
    }

    const renderAlert = () => {
        if(show){
            setTimeout(
                function() {
                    setShow(!show)
                    setParams({
                        type: '',
                        text: '',
                        position: ''
                    })
                }, 6000
            );
            return(
                <AlertSimple
                    type={params.type ? params.type : 'plain'}
                    text={params.text ? params.text : 'Lorem ipsum'}
                    position={params.position ? params.position : 'top-right'}
                />
            )
        }
        
    }

    return ( 
        <AlertContext.Provider value={{ showAlert:showAlert }}>
            {renderAlert()}
            {props.children}
        </AlertContext.Provider>
     );
}
 
export default AlertContextProvider;