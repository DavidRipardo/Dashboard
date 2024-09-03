import { useState } from 'react';
import TodoForm from './TodoForm';
import { Search } from './Search';
import { Filter } from './Filter';

interface Todo {
  id: number;
  category: string;
  text: string;
  isCompleted: boolean;
}

export function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, category: "Baixa", text: 'Estudar React', isCompleted: false },
    { id: 2, category: "Alta", text: 'Estudar Vue', isCompleted: false },
    { id: 3, category: "Baixa", text: 'Estudar Java', isCompleted: false },
    { id: 4, category: "Média", text: 'Estudar Python', isCompleted: false },
    { id: 5, category: "Baixa", text: 'Estudar Node.js', isCompleted: false },
  ]);

  const [search, setSearch] = useState<string>('');
  const [filter, setFilter] = useState<string>('All');
  const [sort, setSort] = useState<string>('Asc');

  const addTodo = (text: string, category: string) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      },
    ];
    setTodos(newTodos);
  };

  const removeTodo = (id: number) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };

  const completeTodo = (id: number) => {
    const newTodos = todos.map(todo =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(newTodos);
  };

  return (
    <div className='flex flex-col p-8 w-[90%] m-auto px-5 py-8 shadow-xl rounded-xl'>
      <TodoForm addTodo={addTodo} />
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
      <div className='flex flex-col gap-5 p-2'>
        {todos
          .filter(todo =>
            filter === "All"
              ? true
              : filter === "Completed"
              ? todo.isCompleted
              : !todo.isCompleted
          )
          .filter(todo =>
            todo.text.toLowerCase().includes(search.toLowerCase())
          )
          .sort((a, b) =>
            sort === "Asc"
              ? a.text.localeCompare(b.text)
              : b.text.localeCompare(a.text)
          )
          .map(todo => (
            <div
              key={todo.id}
              className='flex shadow-md p-3 rounded-xl'
              style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
            >
              <div className='w-[80%]'>
                <p>{todo.text}</p>
                <p className='my-2'>({todo.category})</p>
              </div>
              <div className='mt-2'>
                <button
                  className='bg-lilac-300 py-2 p-3 hover:bg-lilac-500 rounded-lg text-white mr-2 shadow-md'
                  onClick={() => completeTodo(todo.id)}
                >
                  Finalizar
                </button>
                <button
                  className='bg-lilac-500 hover:bg-lilac-300 text-white py-2 px-4 font-bold rounded-lg'
                  onClick={() => removeTodo(todo.id)}
                >
                  X
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
