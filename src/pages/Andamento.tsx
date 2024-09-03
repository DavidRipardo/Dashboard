import { Header, Navbar } from '../components';
import { InProgressTasks } from '../components/AndamentoTask';

export function Andamento() {
    return (
        	<div className="flex gap-5">
          <Navbar filter={''} setFilter={function (_filter: string): void {
                throw new Error('Function not implemented.');
            } } />
          <main className="ml-[290px] w-full">
            <Header />
            <InProgressTasks />
          </main>
        </div>
      );
}

