"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";

interface Property {
  id: number;
  name: string;
  location: string;
  price: string;
  squareMeters: string;
  bedrooms: number;
  bathrooms: number;
  kitchen: number;
  description: string;
  amenities: string[];
  features: string[];
  image: StaticImageData;
  additionalImages: StaticImageData[];
  mapCoordinates: { latitude: number; longitude: number };
}

const PropertyDetail = ({ property }: { property: Property }) => {
  return (
    <div className="container mx-auto p-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row mb-8">
        <div className="w-full md:w-1/2">
          <Image
            src={property.image}
            alt={property.name}
            width={680}
            height={400}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-2 mt-4 md:mt-0">
          <h1 className="text-4xl font-bold text-gray-800 pl-4">{property.name}</h1>

          {/* Ubicación con ícono */}
          <div className="flex items-center text-lg text-gray-600 mt-2 pl-4">
            <MapPin className="text-gray-600" size={24} />
            <p className="ml-2">{property.location}</p>
          </div>

          <div className="flex items-center mt-4 pl-4">
            <span className="font-semibold">Coste de la propiedad: </span>
            <span className="text-2xl font-bold text-gray-900 px-2 pb-1">
              {property.price}
            </span>
          </div>
          <div className="flex space-x-14 mt-10">
            <div className="flex flex-col items-center pl-4">
              <h3 className="font-semibold">Habitaciones</h3>
              <p>{property.bedrooms} hab.</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="font-semibold">Baños</h3>
              <p>{property.bathrooms} bañ.</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="font-semibold">Cocina</h3>
              <p>{property.kitchen} coc.</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="font-semibold">Metros cuadrados</h3>
              <p>{property.squareMeters}</p>
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
              {property.additionalImages.map((img, index) => (
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
          Sobre {property.name}
        </h2>
        <p className="text-lg text-gray-700 mt-4">{property.description}</p>
      </div>

      {/* Características de la propiedad */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
        <div className="flex flex-col items-center">
          <h3 className="font-semibold text-gray-800">
            Características de la propiedad
          </h3>
          <ul className="mt-4 text-gray-600">
            {property.amenities.map((amenity, index) => (
              <li key={index} className="flex items-center space-x-2 mb-2">
                <span className="text-blue-500">✓</span>
                <span>{amenity}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="font-semibold text-gray-800">Highlights</h3>
          <ul className="mt-4 text-gray-600">
            {property.features.map((feature, index) => (
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

export default PropertyDetail;
