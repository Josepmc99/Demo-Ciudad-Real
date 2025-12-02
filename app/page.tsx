"use client";

import "mapbox-gl/dist/mapbox-gl.css";
import PropertiesDisplay from "@/components/PropertiesDisplay";
import { useTheme } from "next-themes";
import LightIcon from "@/public/marker-light.svg";
import DarkIcon from "@/public/marker-dark.svg";
import { useState } from "react";
import ProjectList from "@/data/projects";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Marker } from "react-map-gl/mapbox";

// IMPORT DINÁMICO DEL MAPA
const Map = dynamic(
  () => import("react-map-gl/mapbox").then((m) => m.default),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center text-sm text-slate-500">
        Cargando mapa...
      </div>
    ),
  }
);

export default function Home() {
  const { theme } = useTheme();
  const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

  const [hoveredMarkerId, setHoveredMarkerId] = useState<number | null>(null);

  return (
    <div className="min-h-screen w-full bg-slate-50">
      {/* Layout principal: columna en móvil/tablet, fila en escritorio */}
      <div className="flex flex-col lg:flex-row h-full pt-2">
        {/* MAPA */}
        <div className="w-full lg:flex-1 h-[50vh] sm:h-[55vh] lg:h-[calc(100vh-1rem)]">
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
            style={{ width: "100%", height: "100%" }}
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
                  className={`relative cursor-pointer w-10 h-10 transform transition-transform duration-200 
                    ${
                      hoveredMarkerId === marker.id ? "scale-120" : "scale-100"
                    }`}
                >
                  {/* Marcador circular con imagen */}
                  <div
                    className={`rounded-full border-2 overflow-hidden w-full h-full
                      ${
                        hoveredMarkerId === marker.id
                          ? "border-green-500"
                          : "border-gray-500"
                      }`}
                  >
                    <Image
                      src={marker.image}
                      alt={marker.name}
                      className="w-full h-full object-cover"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
              </Marker>
            ))}
          </Map>
        </div>

        {/* PANEL DE PROYECTOS */}
        <div
          className="
            w-full 
            lg:w-[360px] xl:w-[420px] 2xl:w-[500px] 
            h-[50vh] sm:h-[45vh] lg:h-[calc(100vh-1rem)]
            border-t lg:border-t-0 lg:border-l border-slate-200 
            bg-white/80 backdrop-blur-sm
          "
        >
          <PropertiesDisplay hoveredMarkerId={hoveredMarkerId} />
        </div>
      </div>
    </div>
  );
}
