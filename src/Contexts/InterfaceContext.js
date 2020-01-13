import React, { createContext, useState } from 'react';

export const InterfaceContext = createContext();

const InterfaceContextProvider = (props) => {
    const [overlay, setOverlay] = useState(true)

    const ToggleOverlay = () => {
        setOverlay(!overlay);
    }


    return ( 
        <InterfaceContext.Provider value={{ ToggleOverlay }}>
            {props.children}
        </InterfaceContext.Provider>
     );
}

export default InterfaceContextProvider;