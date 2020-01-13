import React, { useState, createContext } from 'react';
import POR from "./../Languages/POR/index";
import ENG from './../Languages/ENG/index';

export const LanguageContext = createContext();

const LanguageContextProvider = (props) => {
    const [language, setLanguage] = useState({
        activeLanguage: 'POR',
        translate: POR
    })

    const ChangeLanguage = (newLanguage) => {
        switch(newLanguage) {
            case 'BRA':
            default:
                return setLanguage({ ...language, activeLanguage: newLanguage, translate: POR })
            case 'USA':
                return setLanguage({ ...language, activeLanguage: newLanguage, translate: ENG })
        }
    }
    
    return ( 
        <LanguageContext.Provider value={{ language, ChangeLanguage }}>
            {props.children}
        </LanguageContext.Provider>
     );
}
 
export default LanguageContextProvider;