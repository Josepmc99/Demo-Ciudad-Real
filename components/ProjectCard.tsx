import Image, { StaticImageData } from "next/image";
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
  year: number;
  budget: string;
  description: string;
  amenities: string[];
  features: string[];
  image: string;
  additionalImages: string[];
  highlighted: boolean;
}

const ProjectCard = ({
  id,
  name,
  location,
  latitude,
  longitude,
  cost,
  squareMeters,
  year,
  budget,
  description,
  amenities,
  features,
  image,
  additionalImages,
  highlighted,
}: ProjectCardProps) => {
  return (
    <Card className={`py-0 overflow-hidden ${highlighted ? " border-3" : ""}`}>
      <div className="relative w-full h-48">
        <Image
          alt="Project"
          src={image}
          layout="fill"
          objectFit="cover"
          className="rounded-t-md mt-0"
        />
      </div>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>Ejercicio: {year}</CardDescription>
        <CardDescription>{location}</CardDescription>
      </CardHeader>
      <div className="flex justify-end px-2 pb-3">
        <Link href={`/${id}`}>
          <Button
            size="sm"
            className={`cursor-pointer hover:bg-green-500 ${
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
