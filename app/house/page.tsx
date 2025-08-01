"use client";

import React from "react";
import PropertyDetail from "@/components/PropertyDetail";
import house5 from "@/public/house5.jpg";
import Interior1 from "@/public/house-interior-1.jpg";
import Interior2 from "@/public/house-interior-2.jpg";
import Interior3 from "@/public/house-interior-3.jpg";

const houseList = [
  {
    id: 1,
    name: "Casa Soleada junto a la playa en Dénia",
    location: "Dénia, Comunitat Valenciana, España",
    price: "2.000.000€",
    squareMeters: "2.500 m²",
    bedrooms: 4,
    bathrooms: 3,
    kitchen: 2,
    description:
      "Una hermosa casa en el corazón de Dénia, a pocos minutos de la playa y con fácil acceso a todos los servicios que la ciudad ofrece. Esta propiedad cuenta con amplios espacios interiores llenos de luz natural, ideales para disfrutar del clima mediterráneo. Con cuatro habitaciones, dos baños, dos cocinas y un jardín privado con piscina, es el lugar perfecto para vivir con confort y tranquilidad. Además, la zona es conocida por su ambiente relajado, ideal para aquellos que buscan calidad de vida en un entorno natural y vibrante.",
    amenities: ["Aire acondicionado", "Lavadora", "Garaje", "Piscina", "Calefacción"],
    features: [
      "Internet de alta velocidad",
      "Cerca de transporte público",
      "A pocos minutos de la playa",
      "Zona tranquila y residencial",
    ],
    image: house5,
    additionalImages: [Interior1, Interior2, Interior3],
    mapCoordinates: { latitude: 38.85, longitude: -77.0369 },
  },
];

const HouseListPage = () => {
  return (
    <div className="container mx-auto p-8">
      {houseList.map((house) => (
        <PropertyDetail key={house.id} property={house} />
      ))}
    </div>
  );
};

export default HouseListPage;
