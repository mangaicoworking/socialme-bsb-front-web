import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './routes';

import DebugContextProvider from './Contexts/DebugContext';
import AxiosContextProvider from './Contexts/AxiosContext';
import AuthContextProvider from './Contexts/AuthContext';

const App = () => {
  return ( 
    <Router>
      <DebugContextProvider>
        <AxiosContextProvider>
          <AuthContextProvider>
                
                
                  <Routes/>
                
          </AuthContextProvider>
        </AxiosContextProvider>
      </DebugContextProvider>
    </Router>
   );
}
 
export default App;