import React, { useState, createContext, useEffect } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
    const [Theme, setTheme] = useState('Default')

    useEffect(() => {
        const style = document.getElementById('theme');
        style.href = `./Themes/${Theme}/index.css`;
    }, [Theme])

    const ChangeTheme = (newTheme) => {
        setTheme(newTheme);
    }
    
    return ( 
        <ThemeContext.Provider value={{ Theme, ChangeTheme }}>
            {props.children}
        </ThemeContext.Provider>
     );
}
 
export default ThemeContextProvider;