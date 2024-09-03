import { createBrowserRouter } from 'react-router-dom';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { TableUsers } from './pages/Usuarios';
import { Tarefas } from './pages/Tarefas';
import { Finalizadas } from './pages/Finalizadas';
import { Andamento } from './pages/Andamento';
import { Clientes } from './pages/Clientes';
import { Funcionario } from './pages/Funcionarios';
import { Cargos } from './pages/Cargos';

// Configura o roteador
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/usuarios',
    element: <TableUsers />,
  },
  {
    path: '/tarefas',
    element: <Tarefas />,
  },
  {
    path: '/finalizadas',
    element: <Finalizadas />,
  },
  {
    path: '/emAndamento',
    element: <Andamento />,
  },
  {
    path: "/clientes",
    element: <Clientes />,
  },
  {
    path: "/funcionarios",
    element: <Funcionario />,
  },
  {
    path: "/cargos",
    element: <Cargos />,
  },
 
]);