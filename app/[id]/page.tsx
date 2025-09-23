import ProjectList from "@/data/projects";
import PropertyDetail from "@/components/PropertyDetail";

// Tipo de params como Promise, obligatorio en Next.js 15
type Params = Promise<{ id: string }>;

export async function generateStaticParams() {
  return ProjectList.map((p) => ({
    id: p.id.toString(), // rutas estáticas como /projects/1, /projects/2...
  }));
}

export default async function ProjectPage({ params }: { params: Params }) {
  // ⚡ Esperamos los params
  const { id } = await params;

  // Buscamos el proyecto correspondiente
  const project = ProjectList.find((p) => p.id.toString() === id);

  if (!project) {
    return <div>Proyecto no encontrado</div>;
  }

  return (
    <div className="container mx-auto p-8">
      <PropertyDetail project={project} />
    </div>
  );
}
