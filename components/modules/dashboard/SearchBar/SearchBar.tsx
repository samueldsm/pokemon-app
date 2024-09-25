"use client";
import { ChangeEvent } from "react";
import { CircularProgress } from "@nextui-org/progress";
import { Input } from "@nextui-org/input";

interface SearchBarProps {
  isLoading: boolean;
  searchQuery: string;
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
const SearchBar = ({
  isLoading,
  searchQuery,
  handleSearchChange,
}: SearchBarProps) => (
  <div className="flex flex-row items-start justify-end mb-4 gap-3">
    {isLoading && <CircularProgress size="sm" />}
    <Input
      aria-label="search"
      className="mb-4 w-2/3 sm:w-1/2"
      placeholder="Search Pokémon..."
      size="lg"
      value={searchQuery}
      onChange={handleSearchChange}
    />
  </div>
);

export default SearchBar;
