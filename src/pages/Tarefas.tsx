import { TodoList } from '../components/TodoList';

export function Tarefas() {
    return (
        	<div className="flex gap-5">
          <main className="flex-1">
            <TodoList />
          </main>
        </div>
      );
}

