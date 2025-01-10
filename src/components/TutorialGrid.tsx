import { Code2, Palette, Box, Globe, Database, Layout } from "lucide-react";
import { TutorialCard } from "./TutorialCard";

const tutorials = [
  {
    title: "HTML",
    description: "Aprende los fundamentos del lenguaje de marcado que da estructura a la web.",
    icon: Layout,
    difficulty: "Principiante",
    path: "/tutorial/html"
  },
  {
    title: "CSS",
    description: "Domina el diseño y estilizado de páginas web con CSS moderno.",
    icon: Palette,
    difficulty: "Principiante",
    path: "/tutorial/css"
  },
  {
    title: "JavaScript",
    description: "Añade interactividad y dinamismo a tus sitios web con JavaScript.",
    icon: Code2,
    difficulty: "Intermedio",
    path: "/tutorial/javascript"
  },
  {
    title: "Python",
    description: "Descubre el lenguaje más versátil para backend y ciencia de datos.",
    icon: Box,
    difficulty: "Intermedio",
    path: "/tutorial/python"
  },
  {
    title: "Frontend",
    description: "Crea interfaces de usuario modernas y responsivas.",
    icon: Globe,
    difficulty: "Avanzado",
    path: "/tutorial/frontend"
  },
  {
    title: "Backend",
    description: "Desarrolla la lógica y bases de datos de aplicaciones web.",
    icon: Database,
    difficulty: "Avanzado",
    path: "/tutorial/backend"
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