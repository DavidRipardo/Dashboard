import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ChakraProvider } from '@chakra-ui/react';
import { PrimeReactProvider } from 'primereact/api';
import { AuthProvider } from './context/AuthProvider'
import { AppRoutes } from './Router'
import {BrowserRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <PrimeReactProvider>
        <BrowserRouter>
          <AuthProvider> 
            <AppRoutes/>
          </AuthProvider>
        </BrowserRouter>
      </PrimeReactProvider>
    </ChakraProvider>
  </React.StrictMode>
);
