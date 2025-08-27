import ProjectList from "@/src/data/projects";
import PropertyDetail from "@/components/PropertyDetail";

export async function generateStaticParams() {
  return ProjectList.map((p) => ({
    id: p.id.toString(), // genera rutas estáticas /projects/1, /projects/2...
  }));
}

export default function ProjectPage({ params }: { params: { id: string } }) {
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
