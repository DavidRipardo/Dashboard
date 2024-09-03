import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { PrimeReactProvider } from 'primereact/api';
import { ChakraProvider } from '@chakra-ui/react'; // Importa o ChakraProvider
import { router } from './Router'; // Importa o roteador configurado

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <PrimeReactProvider>
        <RouterProvider router={router} />
      </PrimeReactProvider>
    </ChakraProvider>
  );
};

export default App;
