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
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <div className="min-h-screen w-full bg-slate-50">
      {/* Layout principal: columna en móvil/tablet, fila en escritorio */}
      <div className="flex flex-col lg:flex-row h-full pt-2">
        {/* MAPA */}
        <div className="w-full lg:flex-1 h-[50vh] sm:h-[55vh] lg:h-[calc(100vh-1rem)]">
          <Map
            mapboxAccessToken={mapboxToken}
            initialViewState={{
              longitude: -3.926759247802383,
              latitude: 38.98839899477801,
              zoom: 12,
            }}
            mapStyle={
              theme === "light"
                ? "mapbox://styles/mapbox/light-v10"
                : "mapbox://styles/mapbox/dark-v10"
            }
            style={{ width: "100%", height: "100%" }}
            onLoad={() => setMapLoaded(true)}
          >
            {mapLoaded &&
              ProjectList.map((project) => {
                // lista de varias ubicaciones para un mismo proyecto
                const locations = [
                  { lat: project.latitude, lon: project.longitude }, // ubicación principal

                  ...(project.latitude1 != null && project.longitude1 != null
                    ? [{ lat: project.latitude1, lon: project.longitude1 }]
                    : []),

                  ...(project.latitude2 != null && project.longitude2 != null
                    ? [{ lat: project.latitude2, lon: project.longitude2 }]
                    : []),
                  // si algún día hace falta añadir latitude3/longitude3, etc, hay que seguir el mismo patrón
                ];

                return locations.map((loc, idx) => (
                  <Marker
                    key={`${project.id}-${idx}`}
                    longitude={loc.lon}
                    latitude={loc.lat}
                    anchor="bottom"
                  >
                    <div
                      onMouseEnter={() => setHoveredMarkerId(project.id)}
                      onMouseLeave={() => setHoveredMarkerId(null)}
                      className={`relative cursor-pointer w-10 h-10 transform transition-transform duration-200 
            ${hoveredMarkerId === project.id ? "scale-120" : "scale-100"}`}
                    >
                      {/* Marcador circular con imagen del proyecto */}
                      <div
                        className={`rounded-full border-2 overflow-hidden w-full h-full
              ${
                hoveredMarkerId === project.id
                  ? "border-green-500"
                  : "border-gray-500"
              }`}
                      >
                        <Image
                          src={project.image}
                          alt={project.name}
                          className="w-full h-full object-cover"
                          width={64}
                          height={64}
                        />
                      </div>
                    </div>
                  </Marker>
                ));
              })}
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
