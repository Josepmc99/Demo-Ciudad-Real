import React from "react";
import house1 from "@/public/house1.jpg";
import house2 from "@/public/house2.jpg";
import house3 from "@/public/house3.jpg";
import house4 from "@/public/house4.jpg";
import house5 from "@/public/house5.jpg";
import house6 from "@/public/house6.jpg";
import HouseCard from "./HouseCard";

const houseList = [
  {
    id: 1,
    image: house1,
    price: "500.000€",
    houseStats: "3 hab. 2 bañ. 3.200 m²",
    address: "Carrer del Mar, 03700 Dénia, Alicante, España",
  },
  {
    id: 5,
    image: house2,
    price: "700.000€",
    houseStats: "4 hab. 3 bañ. 3.700 m²",
    address: "Carrer de la Mar, 03700 Dénia, Alicante, España",
  },
  {
    id: 3,
    image: house3,
    price: "1.200.000€",
    houseStats: "3 hab. 3 bañ. 4.000 m²",
    address: "Carrer de la Sènia, 03700 Dénia, Alicante, España",
  },
  {
    id: 4,
    image: house4,
    price: "1.700.000€",
    houseStats: "5 hab. 2 bañ. 4.200 m²",
    address: "Avinguda de la Marina, 03700 Dénia, Alicante, España",
  },
  {
    id: 2,
    image: house5,
    price: "2.000.000€",
    houseStats: "4 hab. 3 bañ. 2.500 m²",
    address: "Carrer de la Xara, 03700 Dénia, Alicante, España",
  },
  {
    id: 6,
    image: house6,
    price: "4.200.000€",
    houseStats: "5 hab. 4 bañ. 6.000 m²",
    address: "Carrer de les Creus, 03700 Dénia, Alicante, España",
  },
];


interface PropertiesDisplayProps {
  hoveredMarkerId: number | null;
}

const PropertiesDisplay = ({ hoveredMarkerId }: PropertiesDisplayProps) => {
  return (
    <div className="grid grid-cols-2 w-[500px] gap-1 overflow-auto">
      {houseList.map((house) => (
        <HouseCard
          key={house.id}
          id={house.id}
          image={house.image}
          price={house.price}
          houseStats={house.houseStats}
          address={house.address}
          highlighted={hoveredMarkerId === house.id}
        />
      ))}
    </div>
  );
};

export default PropertiesDisplay;
