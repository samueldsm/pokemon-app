"use client";
import { ChangeEvent, FC, useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { useQuery } from "react-query";
import axios from "axios";

import { isAuthenticated } from "@/utils/auth";
import { usePokemonSearch } from "@/hooks/usePokemonSearch";
import { Navbar } from "@/components/navbar";
import Pagination from "@/components/common/Pagination/Pagination";

import SearchBar from "./SearchBar/SearchBar";
import PokemonGrid from "./PokemonGrid/PokemonGrid";

const ITEMS_PER_PAGE = 20;

const fetchPokemons = async (page: number, perPage: number, query: string) => {
  const offset = (page - 1) * perPage;
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon`, {
    params: { limit: perPage, offset },
  });

  const filteredResults = response.data.results.filter((pokemon: any) =>
    query ? pokemon.name.includes(query.toLowerCase()) : true,
  );

  const pokemonDetails = await Promise.all(
    filteredResults.map((pokemon: any) =>
      axios.get(pokemon.url).then((res) => res.data),
    ),
  );

  return { ...response.data, results: pokemonDetails };
};

const DashboardContent: FC = () => {
  const { currentPage, searchQuery, setCurrentPage, setSearchQuery } =
    usePokemonSearch();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (!isAuthenticated()) {
      redirect("/login");
    }
    setIsClient(true);
  }, []);

  const { isLoading, error, data } = useQuery(
    ["pokemons", currentPage, ITEMS_PER_PAGE, searchQuery],
    () => fetchPokemons(currentPage, ITEMS_PER_PAGE, searchQuery),
    { enabled: isClient },
  );

  const handlePageChange = (page: number) => setCurrentPage(page);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto sm:px-4 py-8">
        <h1 className="font-bold mb-4 text-4xl">Pokémons</h1>
        <SearchBar
          handleSearchChange={handleSearchChange}
          isLoading={isLoading}
          searchQuery={searchQuery}
        />
        <PokemonGrid data={data} error={error} isLoading={isLoading} />
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(data?.count / ITEMS_PER_PAGE) || 0}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default DashboardContent;
