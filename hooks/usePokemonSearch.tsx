import { useState } from "react";

export const usePokemonSearch = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [countPage, setCountPage] = useState(0);

  return {
    countPage,
    currentPage,
    setCurrentPage,
    setCountPage,
  };
};
