import React from "react";

// Definindo a interface para as props do SearchBar
interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="mb-4 flex justify-end w-full">
      <input
        type="text"
        placeholder="Pesquisar..."
        value={searchTerm}
        onChange={onSearchChange}
        className="w-[30%] p-2 border border-gray-300 rounded"
      />
    </div>
  );
};

export default SearchBar;
