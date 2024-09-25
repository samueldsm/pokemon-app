"use client";
import React, { useState } from "react";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import Image from "next/image";
import { Skeleton } from "@nextui-org/skeleton";

import { Pokemon } from "@/types";

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  const { name, sprites, types, base_experience, height, weight } = pokemon;
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Card
      isHoverable
      className="max-w-[300px] w-full  transition-transform duration-300 hover:scale-105"
    >
      <CardBody className="p-2 relative justify-center items-center">
        {isLoading && (
          <Skeleton className="absolute inset-0 w-full h-full rounded-lg " />
        )}
        <Image
          alt={name}
          className="object-cover"
          height={140}
          loading="lazy"
          src={sprites?.front_default || "/assets/images/no_image.png"}
          width={200}
          onLoadingComplete={() => setIsLoading(false)}
        />
      </CardBody>
      <CardFooter className="justify-center flex-col items-center">
        <h2 className="text-lg uppercase font-extrabold pb-2">{name}</h2>

        {/* Display types, height, and weight in a column */}
        <div className="flex flex-col items-start space-y-1">
          {/* Changed to flex-col */}
          <p className=" text-sm">
            Type:
            <span className="text-gray-500 font-semibold text-sm">
              {" "}
              {types.map((type) => type.type.name).join(", ")}
            </span>
          </p>
          <p className="text-sm">
            Height:
            <span className="text-gray-500 font-semibold text-sm">
              {" "}
              {height}
            </span>
          </p>
          <p className="text-sm">
            Weight:{" "}
            <span className="text-gray-500 font-semibold text-sm">
              {" "}
              {weight}
            </span>
          </p>
          <p className="text-sm">
            Base Experience:
            <span className="text-gray-500 font-semibold text-sm">
              {" "}
              {base_experience || "N/A"}
            </span>
          </p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PokemonCard;
