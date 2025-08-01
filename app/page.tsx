"use client";

import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Marker } from "react-map-gl/mapbox";
import Header from "@/components/Header";
import PropertiesDisplay from "@/components/PropertiesDisplay";
import { useTheme } from "next-themes";
import LightIcon from "@/public/home-light.svg";
import DarkIcon from "@/public/home-dark.svg";
import HoverIcon from "@/public/home-color.svg";
import { useState } from "react";
import Image from "next/image";


const markers = [
  { id: 1, latitude: 38.85, longitude: 0.06 },
  { id: 2, latitude: 38.85, longitude: 0.09},
  { id: 3, latitude: 38.84, longitude: 0.09},
  { id: 4, latitude: 38.82, longitude: 0.13},
  { id: 5, latitude: 38.82, longitude: 0.11},
  { id: 6, latitude: 38.83, longitude: 0.06}
];

export default function Home() {
  const { theme } = useTheme();
  const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

  // Estado para manejar la imagen del marcador
  const [hoveredMarkerId, setHoveredMarkerId] = useState<number | null>(null);

  // Determina cuál es el ícono del marcador según el tema
  const markerIcon = theme === "light" ? DarkIcon : LightIcon;

  return (
    <div className="flex flex-col h-screen w-full">
      <Header />
      <div className="flex h-full pt-2">
        <div className="flex-grow h-screen">
          <Map
            mapboxAccessToken={mapboxToken}
            initialViewState={{
              longitude: 0.10,
              latitude: 38.83,
              zoom: 13,
            }}
            mapStyle={
              theme === "light" ? "mapbox://styles/mapbox/light-v10" : "mapbox://styles/mapbox/dark-v10"
            }
          >
            {markers.map((marker) => (
              <Marker
                key={marker.id}
                longitude={marker.longitude}
                latitude={marker.latitude}
                anchor="bottom"
              >
                {/* Eventos de hover */}
                <div
                  onMouseEnter={() => setHoveredMarkerId(marker.id)}
                  onMouseLeave={() => setHoveredMarkerId(null)}
                  style={{
                    cursor: "pointer",
                    width: "30px",
                    height: "30px",
                  }}
                >
                  <Image
                    src={hoveredMarkerId === marker.id ? HoverIcon : markerIcon}
                    alt="Custom Marker"
                    width={30}
                    height={30}
                  />
                </div>
              </Marker>
            ))}
          </Map>
        </div>
        <div className="min-w-[500px] overflow-scroll">
          <PropertiesDisplay hoveredMarkerId={hoveredMarkerId} />
        </div>
      </div>
    </div>
  );
}
