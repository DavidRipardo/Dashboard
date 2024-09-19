import { FuncionariosTable } from "../components/FuncionariosTable";

export function Funcionario () {
    return (
        <div className="flex gap-5">
        <div className="flex-1">
          <FuncionariosTable />
        </div>
      </div>
    )
}