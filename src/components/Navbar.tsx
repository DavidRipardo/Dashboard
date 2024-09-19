import { useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";

import imgLogo from "/src/assets/logonavbar.png";
import imgMonitoramento from "/src/assets/monitoramento.png";
import imgUsuarios from "/src/assets/todos.png";
import imgClientes from "/src/assets/clientes.png";
import imgtarefas from "/src/assets/finalizadas.png";
import imgFuncionario from "/src/assets/funcionario.png";
import imgTarefas from "/src/assets/tarefas.png";
import imgLogout from "/src/assets/logout.png";
import { AuthContext } from "../context/AuthContext";
import { TfiAngleDoubleLeft } from "react-icons/tfi";
import { TfiAngleDoubleRight } from "react-icons/tfi";

interface NavbarProps {
  filter: string;
  setFilter: (filter: string) => void;
}

export function Navbar({ setFilter }: NavbarProps) {
  useParams<{ id: string }>();

  const { logoutUser } = useContext(AuthContext);

  // Estado para controlar se a navbar está expandida ou reduzida
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <aside
      className={` my-2 ml-1 z-50 transition-all duration-300    ${
        isExpanded ? "w-[16%]" : "w-16"
      }`}
    >
      <nav
        className={`rounded-3xl bg-lilac-300 flex flex-col text-white py-2 md:py-4 transition-transform transform md:block`}
      >
        {/* Botão de expansão/redução */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mb-4 self-end mx-4 text-white focus:outline-none"
        >
          {isExpanded ? (
            <TfiAngleDoubleLeft className="text-2xl" />
          ) : (
            <TfiAngleDoubleRight className="text-2xl" />
          )}
        </button>

        {/* Logo e título */}
        <div
          className={`flex items-center px-8 gap-2 mb-5 transition-all ${
            isExpanded ? "opacity-100" : "opacity-0"
          }`}
        >
          <img className="size-9" src={imgLogo} alt="Admin Panel Icon" />
          {isExpanded && (
            <h1 className="font-bold text-left leading-tight text-base">
              Painel Administrativo
            </h1>
          )}
        </div>

        {/* Links da navbar */}
        <Link
          to={`/dashboard/`}
          className={`flex mx-3 items-center gap-3.5 p-1.5 mb-2 text-base text-white hover:bg-lilac-500 focus:bg-lilac-500 rounded-lg hover:shadow-lg hover:transition ease-in-out duration-300 ${
            !isExpanded ? "justify-center mb-1" : ""
          }`}
        >
          <img
            src={imgMonitoramento}
            alt="Monitoring Icon"
            className="w-8 h-8 rounded-full"
          />
          {isExpanded && <span className="pr-14">Monitoramentos</span>}
        </Link>

        {/* Exibe os títulos apenas se a navbar estiver expandida */}
        {isExpanded && (
          <>
            <h2 className="font-nunito text-base font-semibold mb-1 uppercase px-4 transition-all">
              Pessoas
            </h2>
          </>
        )}

        <Link
          to={`/usuarios/`}
          className={`flex items-center mx-3 gap-3.5 p-1.5 mb-2.5 text-white text-base hover:bg-lilac-500 focus:bg-lilac-500 rounded-lg hover:shadow-lg hover:transition ease-in-out duration-300 ${
            !isExpanded ? "justify-center mb-1" : ""
          }`}
        >
          <img
            src={imgUsuarios}
            alt="Users Icon"
            className="w-7 h-7 rounded-full"
          />
          {isExpanded && <span>Usuários</span>}
        </Link>

        <Link
          to={`/clientes/`}
          onClick={() => setFilter("Cliente")}
          className={`flex items-center mx-3 gap-3.5 p-1.5 mb-2.5 text-base text-white hover:bg-lilac-500 focus:bg-lilac-500 rounded-lg hover:shadow-lg hover:transition ease-in-out duration-300 ${
            !isExpanded ? "justify-center mb-1" : ""
          }`}
        >
          <img
            src={imgClientes}
            alt="Clients Icon"
            className="w-7 h-7 rounded-full"
          />
          {isExpanded && <span>Clientes</span>}
        </Link>

        <Link
          to={`/funcionarios/`}
          onClick={() => setFilter("Funcionário")}
          className={`flex mx-3 items-center gap-3.5 p-1.5 mb-2.5 text-base text-white hover:bg-lilac-500 focus:bg-lilac-500 rounded-lg hover:shadow-lg hover:transition ease-in-out duration-300 ${
            !isExpanded ? "justify-center mb-1" : ""
          }`}
        >
          <img
            src={imgFuncionario}
            alt="Employees Icon"
            className="w-7 h-7 rounded-full"
          />
          {isExpanded && <span>Funcionários</span>}
        </Link>

        {/* Exibe os títulos apenas se a navbar estiver expandida */}
        {isExpanded && (
          <h2 className="font-nunito text-base mb-1 font-semibold uppercase px-4 transition-all">
            Tarefas
          </h2>
        )}

        <Link
          to={`/tarefas/`}
          onClick={() => setFilter("all")}
          className={`flex items-center text-base mx-3 gap-3.5 p-1.5 mb-2.5 text-white focus:bg-lilac-500 rounded-lg hover:bg-lilac-500 hover:shadow-lg hover:transition ease-in-out duration-300 ${
            !isExpanded ? "justify-center mb-1" : ""
          }`}
        >
          <img
            src={imgTarefas}
            alt="Tasks Icon"
            className="w-7 h-7 rounded-full"
          />
          {isExpanded && <span>Todas</span>}
        </Link>

        <Link
          to={`/finalizadas/`}
          onClick={() => setFilter("in-progress")}
          className={`flex items-center text-base mx-3 gap-3.5 p-1.5 mb-2.5 text-white focus:bg-lilac-500 rounded-lg hover:bg-lilac-500 hover:shadow-lg hover:transition ease-in-out duration-300 ${
            !isExpanded ? "justify-center mb-1" : ""
          }`}
        >
          <img
            src={imgtarefas}
            alt="Tasks Icon"
            className="w-7 h-7 rounded-full"
          />
          {isExpanded && <span>Finalizadas</span>}
        </Link>

        <Link
          to={`/emAndamento/`}
          onClick={() => setFilter("completed")}
          className={`flex items-center text-base mx-3 gap-3.5 p-1.5 mb-2.5 text-white focus:bg-lilac-500 rounded-lg hover:bg-lilac-500 hover:shadow-lg hover:transition ease-in-out duration-300 ${
            !isExpanded ? "justify-center mb-1" : ""
          }`}
        >
          <img
            src={imgtarefas}
            alt="Tasks Icon"
            className="w-7 h-7 rounded-full"
          />
          {isExpanded && <span>Em andamento</span>}
        </Link>

        {/* Exibe os títulos apenas se a navbar estiver expandida */}
        {isExpanded && (
          <h2 className="font-nunito text-base mb-1 font-semibold uppercase px-4 transition-all">
            Cargos
          </h2>
        )}

        <Link
          to={`/cargos/`}
          onClick={() => setFilter("completed")}
          className={`flex items-center text-base mx-3 gap-3.5 p-1.5 mb-2.5 text-white focus:bg-lilac-500 rounded-lg hover:bg-lilac-500 hover:shadow-lg hover:transition ease-in-out duration-300 ${
            !isExpanded ? "justify-center mb-1" : ""
          }`}
        >
          <img
            src={imgClientes}
            alt="Tasks Icon"
            className="w-7 h-7 rounded-full"
          />
          {isExpanded && <span>Cargos</span>}
        </Link>

        <Link
          onClick={logoutUser}
          className="flex items-center gap-3.5 mx-3 pl-3 w-68 p-1.5 text-base ml-1.5 mt-[16%] text-white rounded-lg hover:bg-lilac-500 hover:shadow-lg hover:transition ease-in-out duration-300"
          to={""}
        >
          <img
            src={imgLogout}
            alt="Logout Icon"
            className="w-7 h-7 rounded-full"
          />
          {isExpanded && <span className="font-semibold uppercase">Sair</span>}
        </Link>
      </nav>
    </aside>
  );
}
