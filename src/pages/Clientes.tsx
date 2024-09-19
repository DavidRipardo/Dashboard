import { ClientesTable } from "../components/ClientesTable";

export function Clientes () {
    return (
        <div className="flex gap-5">
       
        <div className="flex-1">
          <ClientesTable />
        </div>
      </div>
    )
}