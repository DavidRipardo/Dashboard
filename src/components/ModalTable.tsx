import React, { useState, FormEvent } from "react";
import MaskedInput from "react-text-mask";
import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Select,
  FormControl,
  FormLabel,
  Flex,
  Box,
  Divider,
  IconButton,
} from "@chakra-ui/react";
import { User } from "./UsersTable";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri"; // Importando ícones de olho

interface ModalTableProps {
  user: User | null;
  onSave: (user: User) => void;
  onClose: () => void;
}

export const ModalTable: React.FC<ModalTableProps> = ({
  user,
  onSave,
  onClose,
}) => {
  const [name, setName] = useState(user?.name || "");
  const [category, setCategory] = useState<"Cliente" | "Funcionário">(
    user?.category || "Cliente"
  );
  const [email, setEmail] = useState(user?.email || "");
  const [phone, setPhone] = useState(user?.phone || "");
  const [status, setStatus] = useState<"Ativo" | "Inativo">(
    user?.status || "Ativo"
  );
  const [role, setRole] = useState(user?.role || "");
  const [cpf, setCpf] = useState(user?.cpf || "");
  const [password, setPassword] = useState(user?.password || "");
  const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/esconder senha

  const handleSave = (e: FormEvent) => {
    e.preventDefault();
    onSave({ name, category, email, phone, status, role, cpf, password });
  };

  return (
    <ChakraModal isOpen={true} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        bg="white"
        border="1px"
        borderColor="gray.200"
        borderRadius="3xl"
        boxShadow="lg"
        minWidth="800px"
      >
        <ModalHeader borderTopRadius="lg" fontSize="lg" fontWeight="bold">
          {user ? "Informações do usuário" : "Editar Usuário"}
        </ModalHeader>
        <ModalCloseButton fontWeight="900" fontSize="lg" />
        <Divider borderColor="gray.400" />

        <ModalBody>
          <form onSubmit={handleSave}>
            {/* Campos do formulário */}
            <FormControl mb={4}>
              <FormLabel>
                Categoria (Selecione a categoria Ex: Cliente)
              </FormLabel>
              <Select
                value={category}
                onChange={(e) =>
                  setCategory(e.target.value as "Cliente" | "Funcionário")
                }
                required
                bg="#f7f9fc"
                borderColor="#5867dd"
                _focus={{
                  borderColor: "#5867dd",
                  boxShadow: "0 0 0 1px #5867dd",
                }}
                borderRadius="md"
                width="full"
                _hover={{ borderColor: "#5867dd" }}
              >
                <option value="Cliente">Cliente</option>
                <option value="Funcionário">Funcionário</option>
              </Select>
            </FormControl>
            <Flex mb={4}>
              <Box flex="1" mr={2}>
                <FormControl>
                  <FormLabel>Nome</FormLabel>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    bg="#f7f9fc"
                    borderColor="#5867dd"
                    _focus={{
                      borderColor: "#5867dd",
                      boxShadow: "0 0 0 1px #5867dd",
                    }}
                    borderRadius="md"
                    placeholder="Digite o nome completo"
                    _hover={{ borderColor: "#5867dd" }}
                  />
                </FormControl>
              </Box>
              <Box flex="1" ml={2}>
                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    bg="#f7f9fc"
                    borderColor="#5867dd"
                    _focus={{
                      borderColor: "#5867dd",
                      boxShadow: "0 0 0 1px #5867dd",
                    }}
                    borderRadius="md"
                    placeholder="Digite o email"
                    _hover={{ borderColor: "#5867dd" }}
                  />
                </FormControl>
              </Box>
            </Flex>
            <Flex mb={4}>
              <Box flex="1" mr={2}>
                <FormControl>
                  <FormLabel>Telefone</FormLabel>
                  <MaskedInput
                    mask={[
                      "(",
                      /[1-9]/,
                      /\d/,
                      ")",
                      " ",
                      /\d/,
                      /\d/,
                      /\d/,
                      /\d/,
                      /\d/,
                      "-",
                      /\d/,
                      /\d/,
                      /\d/,
                      /\d/,
                    ]}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    render={(ref, props) => (
                      <Input
                        ref={ref as React.LegacyRef<HTMLInputElement>}
                        {...props}
                        required
                        bg="#f7f9fc"
                        borderColor="#5867dd"
                        _focus={{
                          borderColor: "#5867dd",
                          boxShadow: "0 0 0 1px #5867dd",
                        }}
                        borderRadius="md"
                        placeholder="Digite o telefone"
                        _hover={{ borderColor: "#5867dd" }}
                      />
                    )}
                  />
                </FormControl>
              </Box>
              <Box flex="1" ml={2}>
                <FormControl>
                  <FormLabel>CPF</FormLabel>
                  <MaskedInput
                    mask={[
                      /\d/,
                      /\d/,
                      /\d/,
                      ".",
                      /\d/,
                      /\d/,
                      /\d/,
                      ".",
                      /\d/,
                      /\d/,
                      /\d/,
                      "-",
                      /\d/,
                      /\d/,
                    ]}
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                    render={(ref, props) => (
                      <Input
                        ref={ref as React.LegacyRef<HTMLInputElement>}
                        {...props}
                        required
                        bg="#f7f9fc"
                        borderColor="#5867dd"
                        _focus={{
                          borderColor: "#5867dd",
                          boxShadow: "0 0 0 1px #5867dd",
                        }}
                        borderRadius="md"
                        placeholder="Digite o CPF"
                        _hover={{ borderColor: "#5867dd" }}
                      />
                    )}
                  />
                </FormControl>
              </Box>
            </Flex>
            <FormControl mb={4}>
              <FormLabel>Status</FormLabel>
              <Select
                value={status}
                onChange={(e) =>
                  setStatus(e.target.value as "Ativo" | "Inativo")
                }
                required
                bg="#f7f9fc"
                borderColor="#5867dd"
                _focus={{
                  borderColor: "#5867dd",
                  boxShadow: "0 0 0 1px #5867dd",
                }}
                borderRadius="md"
                width="full"
                _hover={{ borderColor: "#5867dd" }}
              >
                <option value="Ativo">Ativo</option>
                <option value="Inativo">Inativo</option>
              </Select>
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Cargo</FormLabel>
              <Select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                bg="#f7f9fc"
                borderColor="#5867dd"
                _focus={{
                  borderColor: "#5867dd",
                  boxShadow: "0 0 0 1px #5867dd",
                }}
                borderRadius="md"
                width="full"
                placeholder="Selecione o cargo"
                _hover={{ borderColor: "#5867dd" }}
              >
                <option value="UI/UX">UI/UX</option>
                <option value="QA">QA</option>
                <option value="Front-End">Front-End</option>
                <option value="Back-End">Back-End</option>
                <option value="Fullstack">Fullstack</option>
              </Select>
            </FormControl>
            <Flex mb={4} align="center">
              <Box flex="1" mr={2}>
                <FormControl>
                  <FormLabel>Senha</FormLabel>
                  <Flex>
                    <Input
                      type={showPassword ? "text" : "password"} // Alterna o tipo do input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      bg="#f7f9fc"
                      borderColor="#5867dd"
                      _focus={{
                        borderColor: "#5867dd",
                        boxShadow: "0 0 0 1px #5867dd",
                      }}
                      borderRadius="md"
                      placeholder="Digite a senha"
                      _hover={{ borderColor: "#5867dd" }}
                      pr="4.5rem" // Adiciona padding à direita para o ícone
                    />
                    <IconButton
                      aria-label={
                        showPassword ? "Esconder senha" : "Mostrar senha"
                      }
                      icon={showPassword ? <RiEyeLine /> : <RiEyeOffLine />}
                      onClick={() => setShowPassword(!showPassword)}
                      position="absolute"
                      right="1rem"
                      top="73%"
                      transform="translateY(-50%)"
                      zIndex="1000"
                      variant="link"
                      fontSize="1.6rem"
                      color="#5867dd"
                      _hover={{ color: "#374bae" }}
                    />
                  </Flex>
                </FormControl>
              </Box>
            </Flex>
            <ModalFooter>
              <Button onClick={onClose} ml={3}>
                Cancelar
              </Button>
              <Button
                colorScheme="purple"
                type="submit"
                ml={3}
                bg="#5867dd"
                _hover={{ bg: "#374bae" }}
              >
                {user ? "Salvar" : "Adicionar"}
              </Button>
            </ModalFooter>
          </form>
        </ModalBody>
      </ModalContent>
    </ChakraModal>
  );
};
