import { useState } from "react";
import { CardStatus } from "../components/CardStatus"; // Ajuste o caminho se necessário
import { Header, Navbar, TaskCard } from "../components";

export function Dashboard() {
    const [filter, setFilter] = useState<string>("all");

	// const [totalUsers, setTotalUsers] = useState<number>(0);
	// const [totalClients, setTotalClients] = useState<number>(0);
	// const [totalOffices, setTotalOffices] = useState<number>(0);
	// const [totalTasks, setTotalTasks] = useState<number>(0);

	// async function getDashboardStatus(): Promise<void> {
	// 	try {
	// 		const [resUsers, resClients, resOffices, resTasks] = await Promise.all([
	// 			api.get(`/usuarios`),
	// 			api.get(`/clientes`),
	// 			api.get(`/cargos`),
	// 			api.get(`/tarefas`),
	// 		]);

	// 		setTotalUsers(resUsers.data.length);
	// 		setTotalClients(resClients.data.length);
	// 		setTotalOffices(resOffices.data.length);
	// 		setTotalTasks(resTasks.data.length);
	// 	} catch (error) {
	// 		console.error(error);
	// 	}
	// }

	// useEffect(() => {
	// 	getDashboardStatus();
	// }, []);

    
	return (
		<div className="flex gap-5">
			<Navbar filter={filter} setFilter={setFilter} />
			<main className="ml-[320px] pr-5">
				<Header />
				<CardStatus totalUsers={0} totalClients={0} totalOffices={0} totalTasks={0}					// totalUsers={totalUsers}
					// totalClients={totalClients}
					// totalOffices={totalOffices}
					// totalTasks={totalTasks}
				/>
				<TaskCard />
			</main>
		</div>
	);
}
