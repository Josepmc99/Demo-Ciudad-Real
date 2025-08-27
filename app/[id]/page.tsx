// app/[id]/page.tsx
import ProjectList from "@/data/projects";
import PropertyDetail from "@/components/PropertyDetail";

export async function generateStaticParams() {
  return ProjectList.map((p) => ({
    id: p.id.toString(),
  }));
}

// 🔑 Haz la función async y espera los params si es necesario
export default function ProjectPage(props: any) {
  const { params } = props;
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
