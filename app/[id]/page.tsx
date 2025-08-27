import ProjectList from "@/data/projects";
import PropertyDetail from "@/components/PropertyDetail";

type ProjectPageProps = {
  params: {
    id: string; // siempre string en rutas dinámicas
  };
};

export async function generateStaticParams() {
  return ProjectList.map((p) => ({
    id: p.id.toString(), // genera rutas estáticas como strings
  }));
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = ProjectList.find((p) => p.id.toString() === params.id);

  if (!project) {
    return <div>Proyecto no encontrado</div>;
  }

  return (
    <div className="container mx-auto p-8">
      <PropertyDetail project={project} />
    </div>
  );
}
