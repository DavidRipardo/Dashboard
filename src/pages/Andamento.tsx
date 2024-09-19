import { InProgressTasks } from '../components/AndamentoTask';

export function Andamento() {
    return (
        	<div className="flex gap-5">
         
          <main className="flex-1">
            <InProgressTasks />
          </main>
        </div>
      );
}

