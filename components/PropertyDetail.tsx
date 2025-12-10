"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, MapPin, CheckCircle2 } from "lucide-react";
import { Project } from "@/data/projects";

const ProjectDetail = ({ project }: { project: Project }) => {
  // Colores para el estado
  const getStateBadgeClass = (state: string) => {
    const s = state.toLowerCase();
    if (s.includes("finaliz"))
      return "bg-emerald-100 text-emerald-700 border-emerald-200";
    if (s.includes("ejec"))
      return "bg-amber-100 text-amber-700 border-amber-200";
    if (s.includes("licit")) return "bg-sky-100 text-sky-700 border-sky-200";
    return "bg-slate-100 text-slate-700 border-slate-200";
  };

  // Normalizar las properties que vienen en un solo string con guiones
  const normalizeProperties = (properties?: string[]) => {
    if (!properties || properties.length === 0) return [];
    if (properties.length === 1 && properties[0].includes("-")) {
      return properties[0]
        .split("-")
        .map((item) => item.trim())
        .filter(Boolean);
    }
    return properties;
  };

  const isAcupuntura =
    project.id === 8 || project.name === "B6: Acupuntura Verde en Barrios";

  // ----- LÓGICA GENERAL (para todos excepto B6) -----
  let featureGroups: { title: string; properties: string[] }[] = [];

  if (!isAcupuntura) {
    featureGroups = (project.features || [])
      .map((title, idx) => {
        const propKey = `properties${idx + 1}` as keyof Project;
        const rawProps = project[propKey] as string[] | undefined;

        return {
          title,
          properties: normalizeProperties(rawProps),
        };
      })
      .filter(
        (group) =>
          group.title && group.properties && group.properties.length > 0
      );
  }

  // ----- CASO ESPECIAL B6: ACUPUNTURA VERDE -----
  const generalInfoAcupuntura = isAcupuntura
    ? normalizeProperties(project.properties1)
    : [];

  const actuacionesAcupuntura = isAcupuntura
    ? ([
        {
          title: project.actuacion1,
          properties: [
            ...normalizeProperties(project.properties3),
            ...normalizeProperties(project.properties4),
          ],
        },
        {
          title: project.actuacion2,
          properties: [...normalizeProperties(project.properties5)],
        },
        {
          title: project.actuacion3,
          properties: [
            ...normalizeProperties(project.properties7),
            ...normalizeProperties(project.properties8),
          ],
        },
      ].filter((g) => g.title && g.properties && g.properties.length > 0) as {
        title: string;
        properties: string[];
      }[])
    : [];

  // Helper para obtener URL en caso de usar StaticImageData o string
  const getImageUrl = (img: any): string => {
    if (!img) return "";
    if (typeof img === "string") return img;
    if (typeof img === "object" && "src" in img) {
      return (img as { src: string }).src;
    }
    return "";
  };

  // Estado del slide
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = project.additionalImages?.length ?? 0;

  const goToPrev = () => {
    if (!totalImages) return;
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const goToNext = () => {
    if (!totalImages) return;
    setCurrentIndex((prev) => Math.min(prev + 1, totalImages - 1));
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* HERO CON IMAGEN (clickable, abre en nueva pestaña) */}
      <div className="relative h-[220px] sm:h-[260px] md:h-[320px] lg:h-[420px]">
        <a
          title="Banner"
          href={getImageUrl(project.image)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover"
            priority
          />
        </a>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/0" />

        <div className="absolute inset-x-0 bottom-0">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6">
            <div className="max-w-3xl">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-sm">
                {project.name}
              </h1>

              <div className="mt-2 sm:mt-3 flex flex-wrap items-center gap-2 sm:gap-3 text-slate-100">
                <div className="inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 text-xs sm:text-sm backdrop-blur">
                  <MapPin size={18} className="shrink-0" />
                  <span className="truncate max-w-[240px] sm:max-w-xs md:max-w-sm">
                    {project.location}
                  </span>
                </div>

                <span
                  className={`inline-flex items-center rounded-full border px-3 py-1 text-[10px] sm:text-xs font-medium uppercase tracking-wide ${getStateBadgeClass(
                    project.state
                  )}`}
                >
                  {project.state}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENIDO – margen bajo el hero */}
      <div className="pb-12 sm:pb-16 mt-6 sm:mt-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Grid principal: 1 col en móvil/tablet, 3 en desktop */}
          <div className="grid gap-6 md:gap-8 lg:grid-cols-3">
            {/* Columna izquierda: características (ocupa 2 columnas en desktop) */}
            <div className="space-y-6 md:space-y-8 lg:col-span-2">
              {/* ==== CASO B6: ACUPUNTURA VERDE ==== */}
              {isAcupuntura ? (
                <>
                  {/* Información general (properties1) */}
                  {generalInfoAcupuntura.length > 0 && (
                    <section>
                      <h2 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3 sm:mb-4">
                        Información general del proyecto
                      </h2>
                      <div className="rounded-2xl bg-white p-4 sm:p-5 shadow-sm ring-1 ring-slate-100">
                        <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                          {generalInfoAcupuntura.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2
                                size={14}
                                className="mt-[3px] shrink-0 text-blue-500"
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </section>
                  )}

                  {/* Actuaciones */}
                  {actuacionesAcupuntura.length > 0 && (
                    <section>
                      <h2 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3 sm:mb-4">
                        Actuaciones del proyecto
                      </h2>

                      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
                        {actuacionesAcupuntura.map((group, idx) => (
                          <div
                            key={idx}
                            className="flex flex-col rounded-2xl bg-white p-4 sm:p-5 shadow-sm ring-1 ring-slate-100"
                          >
                            <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-slate-500">
                              {group.title}
                            </h3>
                            <ul className="mt-3 space-y-2 text-xs sm:text-sm text-slate-700">
                              {group.properties.map((property, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <CheckCircle2
                                    size={14}
                                    className="mt-[3px] shrink-0 text-blue-500"
                                  />
                                  <span>{property}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}
                </>
              ) : (
                /* ==== RESTO DE PROYECTOS ==== */
                featureGroups.length > 0 && (
                  <section>
                    <h2 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3 sm:mb-4">
                      Características del proyecto
                    </h2>

                    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
                      {featureGroups.map((group, idx) => (
                        <div
                          key={idx}
                          className="flex flex-col rounded-2xl bg-white p-4 sm:p-5 shadow-sm ring-1 ring-slate-100"
                        >
                          <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-slate-500">
                            {idx + 1}. {group.title}
                          </h3>
                          <ul className="mt-3 space-y-2 text-xs sm:text-sm text-slate-700">
                            {group.properties.map((property, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <CheckCircle2
                                  size={14}
                                  className="mt-[3px] shrink-0 text-blue-500"
                                />
                                <span>{property}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </section>
                )
              )}
            </div>

            {/* Columna derecha: resumen + galería (1 columna) */}
            <div className="space-y-4 sm:space-y-6">
              {/* Spacer invisible SOLO en desktop para alinear con el h2 izquierdo */}
              <h2 className="hidden lg:block text-xl font-semibold text-slate-900 mb-4 opacity-0 pointer-events-none select-none">
                Características del proyecto
              </h2>

              {/* Tarjeta resumen */}
              <section className="rounded-2xl bg-white p-4 sm:p-6 shadow-sm ring-1 ring-slate-100">
                <h2 className="text-base sm:text-lg font-semibold text-slate-900">
                  Información del proyecto
                </h2>

                <dl className="mt-4 space-y-3 text-xs sm:text-sm">
                  <div className="flex items-start justify-between gap-3">
                    <dt className="text-slate-500">Fondos destinados</dt>
                    <dd className="font-semibold text-slate-900 text-right">
                      {project.cost}
                    </dd>
                  </div>
                  <div className="flex items-start justify-between gap-3">
                    <dt className="text-slate-500">Financiado a través de</dt>
                    <dd className="text-right text-slate-900">
                      {project.budget}
                    </dd>
                  </div>
                  <div className="h-px bg-slate-100 my-2" />
                  <div className="flex items-center justify-between gap-3">
                    <dt className="text-slate-500">Fecha de ejecución</dt>
                    <dd className="font-medium text-slate-900">
                      {project.year_ejecucion}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <dt className="text-slate-500">Fecha de finalización</dt>
                    <dd className="font-medium text-slate-900">
                      {project.year_finalizacion}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <dt className="text-slate-500">Superficie</dt>
                    <dd className="font-medium text-slate-900">
                      {project.squareMeters}
                    </dd>
                  </div>
                </dl>
              </section>

              {/* Galería de imágenes adicionales con slide suave */}
              {project.additionalImages &&
                project.additionalImages.length > 0 && (
                  <section className="rounded-2xl bg-white p-3 sm:p-4 shadow-sm ring-1 ring-slate-100">
                    <div className="flex items-center justify-between mb-2 sm:mb-3 px-1">
                      <h2 className="text-xs sm:text-sm font-semibold text-slate-900">
                        Imágenes del proyecto
                      </h2>

                      <div className="flex items-center gap-1 text-slate-500">
                        <button
                          type="button"
                          className="inline-flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full hover:bg-slate-100 disabled:opacity-40 cursor-pointer"
                          aria-label="Imagen anterior"
                          onClick={goToPrev}
                          disabled={currentIndex === 0}
                        >
                          <ChevronLeft size={18} />
                        </button>
                        <button
                          type="button"
                          className="inline-flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full hover:bg-slate-100 disabled:opacity-40 cursor-pointer"
                          aria-label="Imagen siguiente"
                          onClick={goToNext}
                          disabled={currentIndex === totalImages - 1}
                        >
                          <ChevronRight size={18} />
                        </button>
                      </div>
                    </div>

                    <div className="relative overflow-hidden pb-1">
                      <div
                        className="flex"
                        style={{
                          transform: `translateX(-${currentIndex * 100}%)`,
                          transition: "transform 400ms ease-in-out",
                        }}
                      >
                        {project.additionalImages.map((img, index) => (
                          <a
                            key={index}
                            title="Imágenes del proyecto"
                            href={getImageUrl(img)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative w-full min-w-full overflow-hidden rounded-xl border border-slate-100 h-44 sm:h-52 md:h-56 lg:h-60"
                          >
                            <Image
                              src={img}
                              alt={`Imagen adicional ${index + 1}`}
                              fill
                              className="object-cover"
                              unoptimized
                            />
                          </a>
                        ))}
                      </div>
                    </div>
                  </section>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
