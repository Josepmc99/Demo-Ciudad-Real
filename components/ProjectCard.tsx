import Image from "next/image";
import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";

interface ProjectCardProps {
  id: number;
  name: string;
  location: string;
  latitude: number;
  longitude: number;
  cost: string;
  squareMeters: string;
  state: string;
  year_ejecucion: string;
  year_finalizacion: string;
  budget: string;
  description: string;
  amenities?: string[];
  features: string[];
  image: string;
  additionalImages: string[];
  highlighted: boolean;
}

const ProjectCard = ({
  id,
  name,
  location,
  state,
  year_ejecucion,
  year_finalizacion,
  image,
  highlighted,
}: ProjectCardProps) => {
  return (
    <Card
      className={`
        py-0 overflow-hidden h-full flex flex-col
        ${highlighted ? "border-2 border-green-500 shadow-md" : ""}
      `}
    >
      {/* Imagen responsiva */}
      <div className="relative w-full h-36 sm:h-40 md:h-44 lg:h-48">
        <Image
          alt={name}
          src={image}
          fill
          className="object-cover rounded-t-md mt-0"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
        />
      </div>

      <CardHeader className="pb-3">
        <CardTitle className="text-base sm:text-lg md:text-xl">
          {name}
        </CardTitle>

        <hr className="my-2" />

        <CardDescription className="mt-2 text-xs sm:text-sm font-bold">
          {location}
        </CardDescription>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-3 mt-3 text-xs sm:text-sm">
          <CardDescription>Estado: {state}</CardDescription>
          {/* <CardDescription>
            Fecha de ejecución: {year_ejecucion}
          </CardDescription>
          <CardDescription>
            Fecha de finalización: {year_finalizacion}
          </CardDescription> */}
        </div>
      </CardHeader>

      <div className="flex justify-end px-2 pb-3 mt-auto">
        <Link href={`/${id}`}>
          <Button
            size="sm"
            className={`cursor-pointer hover:bg-green-500 text-xs sm:text-sm px-3 sm:px-4 ${
              highlighted ? "bg-green-500" : ""
            }`}
          >
            Ver detalles
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default ProjectCard;
