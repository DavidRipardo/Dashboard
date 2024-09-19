import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";

export const Header: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const location = useLocation();
  const [name, setName] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  const determineTitle = (path: string) => {
    switch (path) {
      case "/dashboard/":
        return "Dashboard";
      case "/usuarios/":
        return "Usuários";
      case "/clientes/":
        return "Clientes";
      case "/funcionarios/":
        return "Funcionários";
      case "/tarefas/":
        return "Tarefas";
      case "/finalizadas/":
        return "Finalizadas";
      case "/emAndamento/":
        return "Em Andamento";
      case "/cargos/":
        return "Cargos";
      default:
        return "Painel Administrativo";
    }
  };

  async function getUser() {
    try {
      if (id) {
        // Substitua pela função real que você vai usar para buscar os dados do usuário
        const response = await fetch(`/api/users/${id}`);
        const data = await response.json();
        const nome = data.nome;
        setName(nome);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUser();
  }, [id]);

  useEffect(() => {
    setTitle(determineTitle(location.pathname));
  }, [location.pathname]);

  return (
    <div className="flex flex-row h-14 py-14 justify-between items-center gap-5 w-full">
      <h1 className="text-3xl font-bold">{title}</h1>
      <div className="flex items-center">
        <h2 className="text-2xl font-semibold">Bem vindo, {name}!</h2>
      </div>
    </div>
  );
};
