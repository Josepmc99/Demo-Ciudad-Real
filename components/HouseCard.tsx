import Image, { StaticImageData } from "next/image";
import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";

interface HouseCardProps {
  image: StaticImageData;
  price: string;
  houseStats: string;
  address: string;
  highlighted?: boolean;
  id: number;
}

const HouseCard = ({ image, price, houseStats, address, highlighted, id }: HouseCardProps) => {
  return (
    <Card
      className={`py-0 overflow-hidden ${highlighted ? ' border-2 border-orange-200' : ''}`}
    >
      <div className="relative w-full h-48">
        <Image
          alt="house"
          src={image}
          layout="fill"
          objectFit="cover"
          className="rounded-t-md mt-0"
        />
      </div>
      <CardHeader>
        <CardTitle>{price}</CardTitle>
        <CardDescription>{houseStats}</CardDescription>
        <CardDescription>{address}</CardDescription>
      </CardHeader>
      <div className="flex justify-end px-2 pb-3">
        <Link href={`/house/`}>
          <Button size="sm" className="cursor-pointer hover:bg-orange-400">
            Ver detalles
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default HouseCard;
