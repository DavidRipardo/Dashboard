import { useState, ChangeEvent, FormEvent } from 'react';

interface TodoFormProps {
  addTodo: (value: string, category: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [value, setValue] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value || !category) return;
    addTodo(value, category);
    setValue("");
    setCategory("");
  };

  return (
    <div className='mb-4 pb-4 border-b-2'>
      <h2>Criar Tarefa:</h2>
      <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
      <input
  className='p-2 shadow-md rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-white focus:border-white focus:shadow-[0_0_5px_#8b5cf6]'
  type="text"
  name="todo"
  placeholder="Digite sua tarefa"
  value={value}
  onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
/>

<select
  value={category}
  onChange={(e: ChangeEvent<HTMLSelectElement>) => setCategory(e.target.value)}
  className='bg-lilac-300 hover:bg-lilac-500 shadow-[0_0_5px_#374bae] text-white rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-white focus:border-white focus:shadow-[0_0_5px_#374bae]'
>
  <option value="" disabled selected hidden>Prioridade da tarefa:</option>
  <option value="Alta">Alta</option>
  <option value="Media">Média</option>
  <option value="Baixa">Baixa</option>
</select>

        <button
          className='bg-lilac-300 text-white text-lg hover:bg-lilac-500 p-3 w-[20%] rounded-lg mx-auto'
          type='submit'
        >
          Criar tarefa!
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
