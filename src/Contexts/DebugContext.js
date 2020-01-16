import React, { useState, createContext } from 'react';

export const DebugContext = createContext();

const DebugContextProvider = (props) => {
    const [console] = useState({
        AuthContext: false,
        Login: true,
        Dashboards: {
            Beneficiary:{
                MyResgister:{
                    Relantionships: false
                }
            }
        }
    });

    return ( 
        <DebugContext.Provider value={{ DebugContextConsole: console }}>
            {props.children}
        </DebugContext.Provider>
     );
}
 
export default DebugContextProvider;