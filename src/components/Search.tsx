import { ChangeEvent } from 'react';

interface SearchProps {
  search: string;
  setSearch: (value: string) => void;
}

export const Search: React.FC<SearchProps> = ({ search, setSearch }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold">Pesquisar:</h2>
      <input
        type="text"
        value={search}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
        placeholder="Digite sua tarefa"
        className="w-full p-3 rounded-lg mb-8 mt-2 shadow-md text-black  focus:outline-none focus:ring-2 focus:ring-white focus:border-white focus:shadow-[0_0_5px_#374bae]"
      />
    </div>
  );
};
