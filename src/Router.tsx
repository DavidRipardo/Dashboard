import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { TableUsers } from "./pages/Usuarios";
import { Tarefas } from "./pages/Tarefas";
import { Finalizadas } from "./pages/Finalizadas";
import { Andamento } from "./pages/Andamento";
import { Clientes } from "./pages/Clientes";
import { Funcionario } from "./pages/Funcionarios";
import { Cargos } from "./pages/Cargos";
import { ErrorPage } from "./pages/Errorpage";
import PrivateRoute from "./components/PrivateRoute";
import { Routes, Route } from "react-router-dom";


export function AppRoutes() {
  return (
      <Routes>
        {/* Rota pública para o Login */}
        <Route path="/" element={<Login />} />
        
        {/* Rotas privadas */}
        <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
        <Route path="/usuarios" element={<PrivateRoute element={<TableUsers />} />} />
        <Route path="/tarefas" element={<PrivateRoute element={<Tarefas />} />} />
        <Route path="/finalizadas" element={<PrivateRoute element={<Finalizadas />} />} />
        <Route path="/emAndamento" element={<PrivateRoute element={<Andamento />} />} />
        <Route path="/clientes" element={<PrivateRoute element={<Clientes />} />} />
        <Route path="/funcionarios" element={<PrivateRoute element={<Funcionario />} />} />
        <Route path="/cargos" element={<PrivateRoute element={<Cargos />} />} />

        {/* Rota para página não encontrada */}
        <Route path="*" element={<ErrorPage errorMessage="Página não encontrada" />} />
      </Routes>
  );
}