import PokemonCard from "@/components/common/Card/PokemonCard/PokemonCard";
import PokemonCardSK from "@/components/common/Card/PokemonCard/PokemonCardSK";
import { IPokemonResponse, Pokemon } from "@/types";

interface PokemonGridProps {
  isLoading: boolean;
  data: IPokemonResponse;
  error: any;
}
const PokemonGrid = ({ isLoading, data, error }: PokemonGridProps) => {
  return (
    <div className="gap-2 justify-center flex flex-wrap">
      {isLoading ? (
        Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 sm:justify-stretch justify-center flex p-1"
          >
            <PokemonCardSK />
          </div>
        ))
      ) : data?.results ? (
        data.results.map((pokemon: Pokemon) => (
          <div
            key={pokemon.name}
            className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 sm:justify-stretch justify-center flex p-1"
          >
            <PokemonCard pokemon={pokemon} />
          </div>
        ))
      ) : !isLoading && !data ? (
        <p>No Pokemon found</p>
      ) : null}
      {error && <p className="text-error">Error: {(error as Error).message}</p>}
    </div>
  );
};

export default PokemonGrid;
