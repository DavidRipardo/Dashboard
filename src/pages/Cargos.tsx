import { useState } from "react";
import {  Navbar, Header } from "../components";
import { CargosTable } from "../components/CargosTable";

export function Cargos () {
    const [filter, setFilter] = useState<string>("all");
    return (
        <div className="flex gap-5">
        <Navbar  filter={filter} setFilter={setFilter} />
        <div className="flex-1 mt-9 md:ml-[305px]">
          <div className="flex bg-white w-full gap-[770px] md:gap-[900px] lg:gap-[673px] xl:gap-[673px]">
            <Header/>
          </div>
          <CargosTable />
        </div>
      </div>
    )
}