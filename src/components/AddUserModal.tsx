import React from "react";

// Definindo a interface para as props do AddUserModal
interface User {
  nome: string;
  categoria: "Funcionário" | "Cliente";
  email: string;
  telefone: string;
  status: "Ativo" | "Inativo";
  cargo: "UI/UX" | "QA" | "Front-End" | "Back-End" | "Fullstack";
}

interface AddUserModalProps {
  isOpen: boolean;
  newUser: User;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onSubmit: () => void;
  onCancel: () => void;
}

const AddUserModal: React.FC<AddUserModalProps> = ({ isOpen, newUser, onChange, onSubmit, onCancel }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="bg-white w-[50%] p-6 rounded shadow-lg z-60">
          <h2 className="text-xl mb-4">Adicionar Novo Usuário</h2>
          <form className="flex flex-col">
            <div className="mb-4">
              <label className="block text-gray-700">Nome:</label>
              <input
                type="text"
                name="nome"
                value={newUser.nome}
                onChange={onChange}
                className="w-full p-2 border border-l-padrao rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Categoria:</label>
              <select
                name="categoria"
                value={newUser.categoria}
                onChange={onChange}
                className="w-full p-2 border border-l-padrao rounded"
              >
                <option value="Funcionário">Funcionário</option>
                <option value="Cliente">Cliente</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email:</label>
              <input
                type="email"
                name="email"
                value={newUser.email}
                onChange={onChange}
                className="w-full p-2 border border-l-padrao rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Telefone:</label>
              <input
                type="text"
                name="telefone"
                value={newUser.telefone}
                onChange={onChange}
                className="w-full p-2 border border-l-padrao rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Status:</label>
              <select
                name="status"
                value={newUser.status}
                onChange={onChange}
                className="w-full p-2 border border-l-padrao rounded"
              >
                <option value="Ativo">Ativo</option>
                <option value="Inativo">Inativo</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Cargo:</label>
              <select
                name="cargo"
                value={newUser.cargo}
                onChange={onChange}
                className="w-full p-2 border border-l-padrao rounded"
              >
                <option value="UI/UX">UI/UX</option>
                <option value="QA">QA</option>
                <option value="Front-End">Front-End</option>
                <option value="Back-End">Back-End</option>
                <option value="Fullstack">Fullstack</option>
              </select>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={onCancel}
                type="button"
                className="mr-4 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancelar
              </button>
              <button
                onClick={onSubmit}
                type="button"
                className="px-4 py-2 bg-padrao text-white rounded hover:bg-padrao2"
              >
                Salvar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddUserModal;
