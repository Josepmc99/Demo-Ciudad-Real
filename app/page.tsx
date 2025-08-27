"use client";

import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Marker } from "react-map-gl/mapbox";
import PropertiesDisplay from "@/components/PropertiesDisplay";
import { useTheme } from "next-themes";
import LightIcon from "@/public/marker-light.svg";
import DarkIcon from "@/public/marker-dark.svg";
import { useState } from "react";
import ProjectList from "@/data/projects";

export default function Home() {
  const { theme } = useTheme();
  const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

  // Estado para manejar la imagen del marcador
  const [hoveredMarkerId, setHoveredMarkerId] = useState<number | null>(null);

  // Determina cuál es el ícono del marcador según el tema
  const markerIcon = theme === "light" ? DarkIcon : LightIcon;

  return (
    <div className="flex flex-col h-screen w-full">
      <div className="flex h-full pt-2">
        <div className="flex-grow h-screen">
          <Map
            mapboxAccessToken={mapboxToken}
            initialViewState={{
              longitude: -3.93,
              latitude: 38.98,
              zoom: 13,
            }}
            mapStyle={
              theme === "light"
                ? "mapbox://styles/mapbox/light-v10"
                : "mapbox://styles/mapbox/dark-v10"
            }
          >
            {ProjectList.map((marker) => (
              <Marker
                key={marker.id}
                longitude={marker.longitude}
                latitude={marker.latitude}
                anchor="bottom"
              >
                <div
                  onMouseEnter={() => setHoveredMarkerId(marker.id)}
                  onMouseLeave={() => setHoveredMarkerId(null)}
                  className={`relative cursor-pointer w-15 h-15 transform transition-transform duration-200 
      ${hoveredMarkerId === marker.id ? "scale-120" : "scale-100"}`}
                >
                  {/* Círculo principal con imagen */}
                  <div
                    className={`rounded-full border-4 overflow-hidden w-full h-full
        ${
          hoveredMarkerId === marker.id ? "border-green-500" : "border-gray-500"
        }`}
                  >
                    <img
                      src={`/${marker.id}.jpg`}
                      alt="Marker"
                      className="w-full h-full object-cover"
                    />
                  </div>
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
