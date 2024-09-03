import { Header, Navbar } from '../components';
import { CompletedTasks } from '../components/FinalizadasTask';

export function Finalizadas() {
    return (
        	<div className="flex gap-5">
          <Navbar filter={''} setFilter={function (_filter: string): void {
                throw new Error('Function not implemented.');
            } } />
          <main className="ml-[290px] w-full">
            <Header />
            <CompletedTasks />
          </main>
        </div>
      );
}

