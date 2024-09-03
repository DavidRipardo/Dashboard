import React, { useState, ChangeEvent } from "react";
import { Checkbox, Button, Box, Stack, Tooltip, Input } from "@chakra-ui/react";
import { FaEllipsisV, FaTrash, FaEdit } from "react-icons/fa";
import { ModalTable } from "./ModalTable";

export interface User {
  name: string;
  category: "Cliente" | "Funcionário";
  email: string;
  phone: string;
  status: "Ativo" | "Inativo";
  role?: string;
  cpf?: string;
  password?: string;
}

const initialUsers: User[] = [
  {
    name: "Jane Smith",
    category: "Funcionário",
    email: "jane.smith@example.com",
    phone: "987-654-3210",
    status: "Ativo",
  },
  // Adicione outros usuários aqui para testes
];

export const FuncionariosTable: React.FC = () => {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [selectedUsers, setSelectedUsers] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<
    "Todos" | "Ativo" | "Inativo"
  >("Todos");
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  const handleOpenModal = (user?: User) => {
    setSelectedUser(
      user || {
        name: "",
        category: "Funcionário",
        email: "",
        phone: "",
        status: "Ativo",
      }
    );
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  const handleSaveUser = (user: User) => {
    if (user.email) {
      setUsers((prevUsers) => {
        const existingUserIndex = prevUsers.findIndex(
          (u) => u.email === user.email
        );
        if (existingUserIndex >= 0) {
          const updatedUsers = [...prevUsers];
          updatedUsers[existingUserIndex] = user;
          return updatedUsers;
        } else {
          return [...prevUsers, user];
        }
      });
    }
    handleCloseModal();
  };

  const handleRowDoubleClick = (user: User) => {
    handleOpenModal(user);
  };

  const handleCheckboxChange = (email: string, checked: boolean) => {
    setSelectedUsers((prev) => {
      const newSelectedUsers = new Set(prev);
      if (checked) {
        newSelectedUsers.add(email);
      } else {
        newSelectedUsers.delete(email);
      }
      return newSelectedUsers;
    });
  };

  const handleSelectAllChange = (checked: boolean) => {
    if (checked) {
      setSelectedUsers(new Set(users.filter(user => user.category === "Funcionário").map((user) => user.email)));
    } else {
      setSelectedUsers(new Set());
    }
  };

  const handleDeleteSelected = () => {
    if (selectedUsers.size === 0) {
      alert("Selecione pelo menos um funcionário para excluir.");
      return;
    }
    setUsers(users.filter((user) => !selectedUsers.has(user.email)));
    setSelectedUsers(new Set());
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleStatusFilterChange = (status: "Todos" | "Ativo" | "Inativo") => {
    setStatusFilter(status);
  };

  const filteredUsers = users.filter((user) => {
    const matchesSearchQuery =
      user.name.toLowerCase().includes(searchQuery) ||
      user.email.toLowerCase().includes(searchQuery) ||
      user.phone.toLowerCase().includes(searchQuery);

    const matchesStatusFilter =
      statusFilter === "Todos" || user.status === statusFilter;

    return user.category === "Funcionário" && matchesSearchQuery && matchesStatusFilter;
  });

  const handleEditUser = (user: User) => {
    handleOpenModal(user);
    setDropdownOpen(null);
  };

  const handleDeactivateUser = (email: string) => {
    setUsers(
      users.map((user) =>
        user.email === email ? { ...user, status: "Inativo" } : user
      )
    );
    setDropdownOpen(null);
  };

  const handleDeleteUser = (email: string) => {
    setUsers(users.filter((user) => user.email !== email));
    setDropdownOpen(null);
  };

  const toggleDropdown = (email: string) => {
    setDropdownOpen((prev) => (prev === email ? null : email));
  };

  const handleActivateUser = (email: string) => {
    setUsers(
      users.map((user) =>
        user.email === email ? { ...user, status: "Ativo" } : user
      )
    );
    setDropdownOpen(null);
  };
  

  return (
    <Box p={4}>
      <Input
        placeholder="Pesquisar..."
        value={searchQuery}
        onChange={handleSearchChange}
        _focus={{ borderColor: "#374bae", boxShadow: "0 0 0 1px #5867dd" }}
        className="border border-gray-300 rounded mb-3"
      />
      <Stack direction="row" spacing={4} mb={4} align="center">
        <Button
          colorScheme="blue"
          leftIcon={<FaTrash />}
          onClick={handleDeleteSelected}
          bg="#5867dd"
          _hover={{ bg: "#374bae", color: "white" }}
          color="white"
        >
          Excluir
        </Button>
        <select
          value={statusFilter}
          onChange={(e) =>
            handleStatusFilterChange(
              e.target.value as "Todos" | "Ativo" | "Inativo"
            )
          }
          className="border border-gray-300 rounded p-2"
        >
          <option value="Todos">Todos</option>
          <option value="Ativo">Ativo</option>
          <option value="Inativo">Inativo</option>
        </select>
        <Button
          colorScheme="blue"
          onClick={() => handleOpenModal()}
          bg="#5867dd"
          _hover={{ bg: "#374bae", color: "white" }}
          color="white"
        >
          <span className="text-2xl pr-3 pb-1">+</span> Adicionar Funcionário
        </Button>
      </Stack>
      <table className="min-w-full table-auto divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">
              <Checkbox
                onChange={(e) => handleSelectAllChange(e.target.checked)}
                isChecked={
                  filteredUsers.length > 0 &&
                  selectedUsers.size === filteredUsers.length
                }
                colorScheme="purple"
                size="lg"
                sx={{
                  "& .chakra-checkbox__control": {
                    borderRadius: "6px",
                  },
                  "& .chakra-checkbox__control[data-checked]": {
                    backgroundColor: "#5867dd",
                    borderColor: "#5867dd",
                  },
                }}
              />
            </th>
            <th className="px-4 py-2 text-left">Nome</th>
            <th className="px-4 py-2 text-left">Categoria</th>
            <th className="px-4 py-2 text-left">Email</th>
            <th className="px-4 py-2 text-left">Telefone</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 text-left"></th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr
              key={user.email}
              onDoubleClick={() => handleRowDoubleClick(user)}
            >
              <td className="px-4 py-2">
                <Checkbox
                  isChecked={selectedUsers.has(user.email)}
                  onChange={(e) =>
                    handleCheckboxChange(user.email, e.target.checked)
                  }
                  colorScheme="purple"
                  size="lg"
                  sx={{
                    "& .chakra-checkbox__control": {
                      borderRadius: "6px",
                      backgroundColor: selectedUsers.has(user.email)
                        ? "#5867dd"
                        : "transparent",
                      color: "white",
                    },
                    "& .chakra-checkbox__control[data-checked]": {
                      backgroundColor: "#5867dd",
                      borderColor: "#5867dd",
                    },
                  }}
                />
              </td>
              <td className="px-4 py-2">{user.name}</td>
              <td className="px-4 py-2">{user.category}</td>
              <td className="px-4 py-2">{user.email}</td>
              <td className="px-4 py-2">{user.phone}</td>
              <td className="px-4 py-2">
                <div className="flex items-center">
                  <div
                    className={`inline-block w-3 h-3 rounded-full mr-2 ${
                      user.status === "Ativo" ? "bg-green-500" : "bg-red-500"
                    }`}
                  ></div>
                  {user.status}
                </div>
              </td>
              <td className="px-4 py-2 text-right">
                <Tooltip label="Mais opções" aria-label="More options">
                  <Button
                    variant="outline"
                    onClick={() => toggleDropdown(user.email)}
                    size="sm"
                    bg="#5867dd"
                    _hover={{ bg: "#374bae", color: "white" }}
                    color="white"
                  >
                    <FaEllipsisV />
                  </Button>
                </Tooltip>
                {dropdownOpen === user.email && (
  <div className="absolute mt-2 right-0 w-48 bg-white text-left border border-gray-300 rounded shadow-lg z-50">
    <Button
      onClick={() => handleEditUser(user)}
      leftIcon={<FaEdit />}
      variant="ghost"
      colorScheme="purple"
      className="w-full text-left px-2 py-2"
    >
      Editar
    </Button>
    {user.status === "Ativo" ? (
      <Button
        onClick={() => handleDeactivateUser(user.email)}
        variant="ghost"
        colorScheme="purple"
        className="w-full text-left px-4 py-2 hover:bg-gray-100"
      >
        Desativar usuário
      </Button>
    ) : (
      <Button
        onClick={() => handleActivateUser(user.email)}
        variant="ghost"
        colorScheme="purple"
        className="w-full text-left px-4 py-2 hover:bg-gray-100"
      >
        Ativar usuário
      </Button>
    )}
    <Button
      onClick={() => handleDeleteUser(user.email)}
      leftIcon={<FaTrash />}
      variant="ghost"
      colorScheme="red"
      className="w-full text-left px-4 py-2 hover:bg-gray-100"
    >
      Excluir
    </Button>
  </div>
)}

              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpen && (
        <ModalTable
          user={selectedUser}
          onClose={handleCloseModal}
          onSave={handleSaveUser}
        />
      )}
    </Box>
  );
};
