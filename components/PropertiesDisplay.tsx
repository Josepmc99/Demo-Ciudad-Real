import React, { useEffect, useRef } from "react";

import ProjectCard from "./ProjectCard";
import ProjectList from "@/data/projects";

interface PropertiesDisplayProps {
  hoveredMarkerId: number | null;
}

const PropertiesDisplay = ({ hoveredMarkerId }: PropertiesDisplayProps) => {
  const cardRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  useEffect(() => {
    if (hoveredMarkerId && cardRefs.current[hoveredMarkerId]) {
      cardRefs.current[hoveredMarkerId]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [hoveredMarkerId]);

  return (
    <div className="grid grid-cols-1 w-[500px] gap-3 overflow-auto px-2">
      {ProjectList.map((project) => (
        <div
          key={project.id}
          ref={(el) => {
            cardRefs.current[project.id] = el;
          }}
        >
          <ProjectCard
            key={project.id}
            id={project.id}
            name={project.name}
            location={project.location}
            latitude={project.latitude}
            longitude={project.longitude}
            cost={project.cost}
            squareMeters={project.squareMeters}
            year={project.year}
            budget={project.budget}
            description={project.description}
            amenities={project.amenities}
            features={project.features}
            image={project.image}
            additionalImages={project.additionalImages}
            highlighted={hoveredMarkerId === project.id}
          />
        </div>
      ))}
    </div>
  );
};

export default PropertiesDisplay;
