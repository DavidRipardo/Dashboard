import React from 'react';

interface FilterProps {
  filter: string;
  setFilter: (value: string) => void;
  setSort: (value: string) => void;
}

export const Filter: React.FC<FilterProps> = ({ filter, setFilter, setSort }) => {
  return (
    <div className="mb-5 p-5 border-b-2">
      <h2 className="text-xl font-bold py-3">Filtrar:</h2>
      <div className="flex w-full justify-between">
        <div className="flex flex-col text-lg gap-3">
          <p>Status</p>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="flex gap-3 bg-lilac-300 w-28 hover:bg-lilac-500 text-white p-2 rounded-md shadow-md mb-4 focus:outline-none focus:ring-2 focus:ring-white focus:border-white focus:shadow-[0_0_5px_#8b5cf6]"
          >
            <option value="All">Todas</option>
            <option value="Completed">Finalizadas</option>
            <option value="Incomplete">Em andamento</option>
          </select>
        </div>
        <div className="flex flex-col gap-2 text-lg">
          <p>Ordem Alfabética:</p>
          <div className="flex gap-3 md:gap-6">
            <button
              onClick={() => setSort("Asc")}
              className="bg-lilac-500 hover:bg-lilac-300 text-white py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-white focus:shadow-[0_0_5px_#374bae]"
            >
              Asc
            </button>
            <button
              onClick={() => setSort("Desc")}
              className="bg-lilac-500 hover:bg-lilac-300 text-white py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-white focus:shadow-[0_0_5px_#374bae]"
            >
              Desc
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
