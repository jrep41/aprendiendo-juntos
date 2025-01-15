import { Code2, Palette, Box, Globe, Database, Layout } from "lucide-react";
import { TutorialCard } from "./TutorialCard";

const tutorials = [
  {
    title: "HTML",
    description: "Aprende HTML con este Curso COMPLETO de HTML GRATIS desde cero: SEO, semántica y más",
    icon: Layout,
    difficulty: "Principiante",
    path: "https://www.youtube.com/watch?v=3nYLTiY5skU",
  },
  {
    title: "CSS",
    description: "Domina CSS con el canal de ManzDev.",
    icon: Palette,
    difficulty: "Principiante",
    path: "https://www.youtube.com/@ManzDev",
  },
  {
    title: "JavaScript",
    description: "Añade interactividad y dinamismo a tus sitios web con JavaScript.",
    icon: Code2,
    difficulty: "Intermedio",
    path: "https://www.youtube.com/watch?v=z95mZVUcJ-E",
  },
  {
    title: "Python",
    description: "Descubre el lenguaje más versátil para backend y ciencia de datos.",
    icon: Box,
    difficulty: "Intermedio",
    path: "https://www.youtube.com/watch?v=nKPbfIU442g",
  },
  {
    title: "Frontend",
    description: "Crea interfaces de usuario modernas y responsivas.",
    icon: Globe,
    difficulty: "Avanzado",
    path: "https://www.youtube.com/watch?v=wTpuKOhGfJE",
  },
  {
    title: "Backend",
    description: "Desarrolla la lógica y bases de datos de aplicaciones web.",
    icon: Database,
    difficulty: "Avanzado",
    path: "https://www.youtube.com/watch?v=Wn_Kb3MR_cU",
  },
] as const;

export const TutorialGrid = () => {
  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        Nuestros Tutoriales
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tutorials.map((tutorial) => (
          <TutorialCard key={tutorial.title} {...tutorial} />
        ))}
      </div>
    </div>
  );
};