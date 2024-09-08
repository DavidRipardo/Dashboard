import { Header, Navbar } from '../components';
import { TodoList } from '../components/TodoList';

export function Tarefas() {
    return (
        	<div className="flex gap-5">
          <Navbar filter={''} setFilter={function (_filter: string): void {
                throw new Error('Function not implemented.');
            } } />
          <main className="flex-1 mt-9 md:ml-[305px]">
            <Header />
            <TodoList />
          </main>
        </div>
      );
}

