import { useState } from "react";
import { Navbar, Header } from "../components";
import { Table } from "../components/UsersTable";

export function TableUsers() {
  const [filter, setFilter] = useState<string>("all");
  return (
    <div className="flex">
      <Navbar filter={filter} setFilter={setFilter} />
      <div className="flex-1 mt-9 md:ml-[305px]">
        <div className="flex bg-white w-full gap-[770px] md:gap-[900px] lg:gap-[673px] xl:gap-[673px]">
          <Header />
        </div>
        <Table />
      </div>
    </div>
  );
}

// simular backend de login com jwt com react e typescript e axios(promps)
