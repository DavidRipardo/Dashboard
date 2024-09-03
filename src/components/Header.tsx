import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { getUser } from "../../../services/api-users";

export const Header: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const [name, setName] = useState<string>("");

  async function getUser() {
    try {
      if (id) {
        // Substitua pela função real que você vai usar para buscar os dados do usuário
        const response = await fetch(`/api/users/${id}`);
        const data = await response.json();
        const nome = data.nome;
        console.log(data);
        setName(nome);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUser();
  }, [id]);

  return (
    <div className="flex flex-row h-14 py-14 justify-between items-center gap-5 w-full">
      <h1 className="text-3xl font-bold">Monitoramento</h1>
      <div className="flex items-center">
        <h2 className="text-2xl font-semibold">Bem vindo, {name}!</h2>
      </div>
    </div>
  );
};
