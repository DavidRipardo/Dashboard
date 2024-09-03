import { Header, Navbar } from '../components';
import { TodoList } from '../components/TodoList';

export function Tarefas() {
    return (
        	<div className="flex gap-5">
          <Navbar filter={''} setFilter={function (_filter: string): void {
                throw new Error('Function not implemented.');
            } } />
          <main className="ml-[290px] w-full">
            <Header />
            <TodoList />
          </main>
        </div>
      );
}

