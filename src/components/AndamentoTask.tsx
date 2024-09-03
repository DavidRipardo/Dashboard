import { useState } from 'react';
import { Search } from './Search'; // Importando o componente Search

interface Todo {
  id: number;
  category: string;
  text: string;
  isCompleted: boolean;
}

export function InProgressTasks() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, category: "Baixa", text: 'Estudar React', isCompleted: false },
    { id: 2, category: "Alta", text: 'Estudar Vue', isCompleted: true },
    { id: 3, category: "Baixa", text: 'Estudar Java', isCompleted: false },
    { id: 4, category: "Média", text: 'Estudar Python', isCompleted: true },
    { id: 5, category: "Baixa", text: 'Estudar Node.js', isCompleted: false },
  ]);

  const [search, setSearch] = useState<string>(''); // Estado para busca

  const removeTodo = (id: number) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className='flex flex-col p-8 w-[90%] m-auto px-5 py-8 shadow-xl rounded-xl'>
      <h2 className="text-xl font-bold mb-5">Tarefas em Andamento</h2>
      <Search search={search} setSearch={setSearch} /> {/* Passando search e setSearch */}
      <div className='flex flex-col gap-5 p-2'>
        {todos
          .filter(todo => !todo.isCompleted) // Filtra apenas as tarefas em andamento
          .filter(todo =>
            todo.text.toLowerCase().includes(search.toLowerCase())
          )
          .map(todo => (
            <div
              key={todo.id}
              className='flex justify-between shadow-md p-3 rounded-xl items-center'
            >
              <div className='w-[80%]'>
                <p>{todo.text}</p>
                <p className='my-2'>({todo.category})</p>
              </div>
              <button
                className='bg-lilac-500 hover:bg-lilac-300 text-white py-2 px-4 font-bold rounded-lg'
                onClick={() => removeTodo(todo.id)}
              >
                X
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
