import { Header, Navbar } from '../components';
import { InProgressTasks } from '../components/AndamentoTask';

export function Andamento() {
    return (
        	<div className="flex gap-5">
          <Navbar filter={''} setFilter={function (_filter: string): void {
                throw new Error('Função não implementada.');
            } } />
          <main className="flex-1 mt-9 md:ml-[305px]">
            <Header />
            <InProgressTasks />
          </main>
        </div>
      );
}

