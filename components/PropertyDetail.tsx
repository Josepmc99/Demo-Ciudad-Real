"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { Project } from "@/data/projects";

const ProjectDetail = ({ project }: { project: Project }) => {
  return (
    <div className="container mx-auto p-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row mb-8">
        <div className="w-full md:w-1/2">
          <Image
            src={project.image}
            alt={project.name}
            width={680}
            height={400}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-2 mt-4 md:mt-0">
          <h1 className="text-4xl font-bold text-gray-800 pl-4">
            {project.name}
          </h1>

          {/* Ubicación con ícono */}
          <div className="flex items-center text-lg text-gray-600 mt-2 pl-4">
            <MapPin className="text-gray-600" size={24} />
            <p className="ml-2">{project.location}</p>
          </div>

          <div className="flex items-center mt-4 pl-4">
            <span className="font-semibold">Fondos destinados: </span>
            <span className="text-2xl font-bold text-gray-900 px-2 pb-1">
              {project.cost}
            </span>
          </div>
          <div className="flex items-center mt-4 pl-4">
            <span className="font-semibold">
              Financiado a través de fondos:{" "}
            </span>
            <span className="text-2xl font-bold text-gray-900 px-2 pb-1">
              {project.budget}
            </span>
          </div>
          <div className="flex space-x-14 mt-10">
            <div className="flex flex-col items-center pl-4">
              <h3 className="font-semibold">Fecha de ejecución:</h3>
              <p>{project.year}</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="font-semibold">Metros cuadrados</h3>
              <p>{project.squareMeters}</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 mt-15">
            {/* Flecha izquierda */}
            <ChevronLeft
              className="text-gray-600 cursor-pointer hover:text-blue-500"
              style={{ fontSize: "60px" }}
            />

            {/* Imágenes adicionales */}
            <div className="flex gap-4 justify-center pt-10">
              {project.additionalImages.map((img, index) => (
                <div key={index} className="w-48 h-38">
                  <Image
                    src={img}
                    alt={`Imagen adicional ${index + 1}`}
                    layout="responsive"
                    width={350}
                    height={250}
                    className="rounded-lg shadow-md object-cover cursor-pointer"
                  />
                </div>
              ))}
            </div>

            {/* Flecha derecha */}
            <ChevronRight
              className="text-gray-600 cursor-pointer hover:text-blue-500"
              style={{ fontSize: "60px" }}
            />
          </div>
        </div>
      </div>

      {/* Descripción */}
      <div className="relative bg-gray-100 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          Sobre {project.name}
        </h2>
        <p className="text-lg text-gray-700 mt-4">{project.description}</p>
      </div>

      {/* Características de la propiedad */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
        <div className="flex flex-col items-center">
          <h3 className="font-semibold text-gray-800">
            Características del proyecto
          </h3>
          <ul className="mt-4 text-gray-600">
            {project.amenities.map((amenity, index) => (
              <li key={index} className="flex items-center space-x-2 mb-2">
                <span className="text-blue-500">✓</span>
                <span>{amenity}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="font-semibold text-gray-800"> </h3>
          <ul className="mt-4 text-gray-600 pt-6">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-center space-x-2 mb-2">
                <span className="text-blue-500">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
