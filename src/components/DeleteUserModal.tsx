import React from "react";

// Definindo a interface para as props do DeleteModal
interface DeleteModalProps {
  isOpen: boolean;
  userToDelete: {
    nome: string;
  };
  onConfirm: () => void;
  onCancel: () => void;
};

const DeleteModal: React.FC<DeleteModalProps> = ({ isOpen, userToDelete, onConfirm, onCancel }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded shadow-lg z-60">
          <h2 className="text-xl mb-4">Confirmar exclusão</h2>
          <p>Você tem certeza que deseja excluir o usuário "{userToDelete.nome}"?</p>
          <div className="mt-6 flex justify-end">
            <button
              onClick={onCancel}
              className="mr-4 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Cancelar
            </button>
            <button
              onClick={onConfirm}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Confirmar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteModal;

