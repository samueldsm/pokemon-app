"use client";
import { FC, useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { useQuery } from "react-query";
import axios from "axios";

import { isAuthenticated } from "@/utils/auth";
import { usePokemonSearch } from "@/hooks/usePokemonSearch";
import { Navbar } from "@/components/navbar";
import Pagination from "@/components/common/Pagination/Pagination";

import PokemonGrid from "./PokemonGrid/PokemonGrid";

const ITEMS_PER_PAGE = 20;

const fetchPokemons = async (page: number, perPage: number) => {
  const offset = (page - 1) * perPage;
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon`, {
    params: { limit: perPage, offset },
  });

  const pokemonDetails = await Promise.all(
    response.data.results.map((pokemon: any) =>
      axios.get(pokemon.url).then((res) => res.data),
    ),
  );

  return { ...response.data, results: pokemonDetails };
};

const DashboardContent: FC = () => {
  const { currentPage, setCurrentPage, countPage, setCountPage } =
    usePokemonSearch();

  const [isClient, setIsClient] = useState(false);

  const { isLoading, error, data } = useQuery(
    ["pokemons", currentPage, ITEMS_PER_PAGE, ""],
    () => fetchPokemons(currentPage, ITEMS_PER_PAGE),
    { enabled: isClient },
  );

  useEffect(() => {
    if (!isAuthenticated()) {
      redirect("/login");
    }
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (data) setCountPage(Math.ceil(data?.count / ITEMS_PER_PAGE) || 0);
  }, [data?.count]);

  return (
    <>
      <Navbar />
      <div className="container mx-auto sm:px-4 py-8">
        <h1 className="font-bold mb-4 text-4xl">Pokémons</h1>
        <PokemonGrid data={data} error={error} isLoading={isLoading} />
        {data && countPage > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={countPage}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
    </>
  );
};

export default DashboardContent;
