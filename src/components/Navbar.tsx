import { useParams, Link } from "react-router-dom";

// Importação das imagens para os ícones
import imgLogo from "/src/assets/logonavbar.png";
import imgMonitoramento from "/src/assets/monitoramento.png";
import imgUsuarios from "/src/assets/todos.png";
import imgClientes from "/src/assets/clientes.png";
import imgtarefas from "/src/assets/finalizadas.png";
import imgFuncionario from "/src/assets/funcionario.png";
import imgTarefas from "/src/assets/tarefas.png";
import imgLogout from "/src/assets/logout.png";

// Definição das props esperadas pelo componente Navbar
interface NavbarProps {
  filter: string;
  setFilter: (filter: string) => void;
}
export function Navbar({ setFilter }: NavbarProps) {
  useParams<{ id: string }>(); // Tipagem do parâmetro da rota

  return (
    <aside className="fixed my-2 ml-1 w-[16%]">
      <nav className="rounded-3xl bg-lilac-300 flex flex-col text-white py-2">
        {/* Cabeçalho do Sidebar com o logo e o título */}
        <div className="flex items-center px-8 gap-2 mb-5">
          <img className="size-9" src={imgLogo} alt="Admin Panel Icon" />
          <h1 className="font-bold text-left leading-tight text-base">
            Painel Administrativo
          </h1>
        </div>

        {/* Seção do Monitoramento */}
        <Link
          to={`/dashboard/`}
          className="flex mx-3 items-center gap-3.5 p-1.5 mb-2 text-base text-white hover:bg-lilac-500 focus:bg-lilac-500 rounded-lg hover:shadow-lg hover:transition ease-in-out duration-300"
        >
          <img
            src={imgMonitoramento}
            alt="Monitoring Icon"
            className="w-8 h-8 rounded-full"
          />
          <span className="pr-14">Monitoramentos</span>
        </Link>

        {/* Seção de Pessoas com seus respectivos itens */}
        <h2 className="font-nunito text-base font-semibold mb-1 uppercase px-4">
          Pessoas
        </h2>
        <Link
          to={`/usuarios/`}
          className="flex items-center mx-3 gap-3.5 p-1.5 text-white text-base hover:bg-lilac-500 focus:bg-lilac-500 rounded-lg hover:shadow-lg hover:transition ease-in-out duration-300"
        >
          <img
            src={imgUsuarios}
            alt="Users Icon"
            className="w-7 h-7 rounded-full"
          />
          <span>Usuários</span>
        </Link>
        <Link
          to={`/clientes/`}
          onClick={() => setFilter("Cliente")}
          className="flex items-center mx-3 gap-3.5 p-1.5 mb-2.5 text-base text-white hover:bg-lilac-500 focus:bg-lilac-500 rounded-lg hover:shadow-lg hover:transition ease-in-out duration-300"
        >
          <img
            src={imgClientes}
            alt="Clients Icon"
            className="w-7 h-7 rounded-full"
          />
          <span>Clientes</span>
        </Link>
        <Link
          to={`/funcionarios/`}
          onClick={() => setFilter("Funcionário")}
          className="flex mx-3 items-center gap-3.5 p-1.5 mb-2.5 text-base text-white hover:bg-lilac-500 focus:bg-lilac-500 rounded-lg hover:shadow-lg hover:transition ease-in-out duration-300"
        >
          <img
            src={imgFuncionario}
            alt="Employees Icon"
            className="w-7 h-7 rounded-full"
          />
          <span>Funcionários</span>
        </Link>

        {/* Seção de Tarefas com seus respectivos itens */}
        <h2 className="font-nunito text-base mb-1 font-semibold uppercase px-4">
          Tarefas
        </h2>
        <Link
          to={`/tarefas/`}
          onClick={() => setFilter("all")}
          className="flex items-center text-base mx-3 gap-3.5 p-1.5 mb-2.5 text-white hover:bg-lilac-500 rounded-lg hover:shadow-lg hover:transition ease-in-out duration-300"
        >
          <img
            src={imgTarefas}
            alt="Tasks Icon"
            className="w-7 h-7 rounded-full"
          />
          <span>Todas</span>
        </Link>
        <Link
        to={`/finalizadas/`}
          onClick={() => setFilter("in-progress")}
          className="flex items-center text-base mx-3 gap-3.5 p-1.5 mb-2.5 text-white hover:bg-lilac-500 rounded-lg hover:shadow-lg hover:transition ease-in-out duration-300"
        >
          <img
            src={imgtarefas}
            alt="Tasks Icon"
            className="w-7 h-7 rounded-full"
          />
          <span>Finalizadas</span>
        </Link>
        <Link
          onClick={() => setFilter("completed")}
          className="flex items-center text-base mx-3 gap-3.5 p-1.5 mb-2.5 text-white hover:bg-lilac-500 rounded-lg hover:shadow-lg hover:transition ease-in-out duration-300"
          to={`/emAndamento/`}
        >
          <img
            src={imgtarefas}
            alt="Tasks Icon"
            className="w-7 h-7 rounded-full"
          />
          <span>Em andamento</span>
        </Link>

        {/* Seção de Cargos */}
        <h2 className="font-nunito text-base mb-1 font-semibold uppercase px-4">
          Cargos
        </h2>
        <Link
          to={`/cargos/`}
          onClick={() => setFilter("completed")}
          className="flex items-center text-base mx-3 gap-3.5 p-1.5 mb-2.5 text-white hover:bg-lilac-500 rounded-lg hover:shadow-lg hover:transition ease-in-out duration-300"
        >
          <img
            src={imgClientes}
            alt="Tasks Icon"
            className="w-7 h-7 rounded-full"
          />
          <span>Cargos</span>
        </Link>

        {/* Item de Logout no final do Sidebar */}
        <Link
          to={"/"}
          className="flex items-center gap-3.5 mx-3 pl-3 w-68 p-1.5 text-base ml-1.5 mt-[39%] text-white rounded-lg hover:bg-lilac-500 hover:shadow-lg hover:transition ease-in-out duration-300"
        >
          <img
            src={imgLogout}
            alt="Logout Icon"
            className="w-7 h-7 rounded-full"
          />
          <span className="font-semibold uppercase">Sair</span>
        </Link>
      </nav>
    </aside>
  );
}