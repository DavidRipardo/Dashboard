import React, { useState } from "react";
import { Box } from "@chakra-ui/react";

export interface User {
  name: string;
  category: "Cliente" | "Funcionário";
  role: string;
}

const initialUsers: User[] = [
  {
    name: "John Doe",
    category: "Funcionário",
    role: "Back-End Developer",
  },
  {
    name: "Jane Smith",
    category: "Cliente",
    role: "UI/UX Designer",
  },
];

export const CargosTable: React.FC = () => {
  const [users] = useState<User[]>(initialUsers);

  return (
    <Box p={4}>
    
      <table className="min-w-full table-auto divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Nome</th>
            <th className="px-4 py-2 text-left">Categoria</th>
            <th className="px-4 py-2 text-left">Cargo</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.name}>
              <td className="px-4 py-2">{user.name}</td>
              <td className="px-4 py-2">{user.category}</td>
              <td className="px-4 py-2">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Box>
  );
};
