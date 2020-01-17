import React, { useState, useContext, createContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { DebugContext } from './DebugContext';
//import { AlertContext } from './AlertContext';
import { AxiosContext } from './AxiosContext';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    //CONTEXTS
    const { DebugContextConsole } = useContext(DebugContext);
    const DebugConsole = DebugContextConsole.AuthContext;
    //const { showAlert } = useContext(AlertContext);
    const { CallForSomeApi, CatchResponseCode } = useContext(AxiosContext);

    const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'));
    const [token, setToken] = useState();
    const [user, setUser] = useState();
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        if(redirect){
            setRedirect(false)
        }else{
            let tokenLocalStorage = localStorage.getItem('login-token');
            if(tokenLocalStorage){
                if(DebugConsole){console.log('Token found in LocalStorage')};
                if(user === undefined){
                    if(DebugConsole)console.log("Check Token Function Start");
                    const params = {
                        operation: 'Verify'
                    }
                    CallForSomeApi((params),(axiosResponse) => {
                        if(DebugConsole)console.log('Route "/checkToken" Inquiry Result ->  ', axiosResponse );
                        if(axiosResponse === 401){
                            if(DebugConsole)console.log("Returned with status 401");
                            logout()
                            if(DebugConsole)console.log("Logout!");
                            setRedirect(true);
                            if(DebugConsole)console.log("Redirect to Home Page");
                        }else{
                            setUser(axiosResponse.header.user)
                        }
                    });
                }else{
                    if(DebugConsole)console.log('User already defined in context');
                }
            }else{
                if(DebugConsole)console.log('Token not found in LocalStorage');
                logout()
            }
        }
    }, [CallForSomeApi, CatchResponseCode, DebugConsole, redirect, setRedirect, user])

    const populateAuth = (tokenValue, UserData) => {
        if(DebugConsole)console.log('Function Populate Auth');
        localStorage.setItem('login-token', tokenValue);
        localStorage.setItem('isAuth', true);
        setToken(tokenValue);
        setUser(UserData);
    }

    const logout = () => {
        setToken(null);
        setUser(null);
        setIsAuth(false);
        localStorage.clear();
    }

    const redirectToHome = () => {
        if(redirect){
            if(DebugConsole)console.log('Redirecting to HomePage');
            return(
                <Redirect to="/" />
            )
        }
    }

    return ( 
        <AuthContext.Provider value={{ token, user, isAuth, populateAuth: populateAuth, logout: logout }}>
            {redirectToHome()}
            {props.children}
        </AuthContext.Provider>
    );
}
 
export default AuthContextProvider;