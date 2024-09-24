import { useState } from "react";

export const usePokemonSearch = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  return {
    currentPage,
    searchQuery,
    setCurrentPage,
    setSearchQuery,
  };
};
