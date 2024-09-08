import React from 'react';

interface ErrorPageProps {
  errorMessage: string;
}

 export const ErrorPage: React.FC<ErrorPageProps> = ({  errorMessage }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-3xl text-gray-600">{errorMessage}</h2>
      <p className="text-lg text-gray-400 mb-4">
        Oops, algo deu errado. Por favor, tente novamente mais tarde.
      </p>
      <button
        className="bg-lilac-300 hover:bg-lilac-500 text-white font-bold py-2 px-4 rounded"
        onClick={() => window.location.reload()}
      >
        Recarregar
      </button>
    </div>
  );
};

