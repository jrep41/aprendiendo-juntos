import { Code2, Palette, Box, Globe, Database, Layout, MonitorCheck } from "lucide-react";
import { TutorialCard } from "./TutorialCard";

const tutorials = [
  {
    title: "HTML",
    description: "Aprende HTML con MIDUDEV en su canal midulive con su Curso COMPLETO de HTML GRATIS desde cero: SEO, semántica y más",
    icon: Layout,
    difficulty: "Principiante",
    path: "/html",
    videoUrl: "https://www.youtube.com/watch?v=3nYLTiY5skU",
    tutorialUrl: "https://developer.mozilla.org/es/docs/Web/HTML",
    practiceUrl: "https://www.w3schools.com/html/html_exercises.asp",
  },
  {
    title: "CSS",
    description: "Domina CSS con el canal de ManzDev.",
    icon: Palette,
    difficulty: "Principiante",
    path: "/css",
    videoUrl: "https://www.youtube.com/@ManzDev",
    tutorialUrl: "https://developer.mozilla.org/es/docs/Web/CSS",
    practiceUrl: "https://www.w3schools.com/css/css_exercises.asp",
  },
  {
    title: "JavaScript",
    description: "Añade interactividad y dinamismo a tus sitios web con JavaScript de la mano de Carlos Azaustre con su CURSO DE JAVASCRIPT COMPLETO DESDE CERO en español.",
    icon: Code2,
    difficulty: "Principiante",
    path: "/javascript",
    videoUrl: "https://www.youtube.com/watch?v=S9ojNaeC1RI",
    tutorialUrl: "https://developer.mozilla.org/es/docs/Web/JavaScript",
    practiceUrl: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/",
  },
  {
    title: "Python",
    description: "Descubre el lenguaje más versátil para backend y ciencia de datos de la mano de Curso de PYTHON desde CERO para PRINCIPIANTES de la mano de MoureDev (Brais Moure).",
    icon: Box,
    difficulty: "Principiante",
    path: "/python",
    videoUrl: "https://www.youtube.com/watch?v=Kp4Mvapo5kc",
    tutorialUrl: "https://docs.python.org/es/3/tutorial/",
    practiceUrl: "https://www.hackerrank.com/domains/python",
  },
  {
    title: "Frontend",
    description: "Crea interfaces de usuario modernas y responsivas.",
    icon: Globe,
    difficulty: "Avanzado",
    path: "/frontend",
    videoUrl: "https://www.youtube.com/watch?v=wTpuKOhGfJE",
    tutorialUrl: "https://roadmap.sh/frontend",
    practiceUrl: "https://www.frontendmentor.io/",
  },
  {
    title: "Backend",
    description: "Desarrolla la lógica y bases de datos de aplicaciones web.",
    icon: Database,
    difficulty: "Avanzado",
    path: "/backend",
    videoUrl: "https://www.youtube.com/watch?v=Wn_Kb3MR_cU",
    tutorialUrl: "https://roadmap.sh/backend",
    practiceUrl: "https://www.hackerrank.com/domains/tutorials/10-days-of-javascript",
  },
  {
    title: "FullStack",
    description: "Presentación del curso y Fundamentos del Desarrollo Web - Bootcamp FullStack Gratuito de MIDUDEV",
    icon: MonitorCheck,
    difficulty: "Avanzado",
    path: "/fullstack",
    videoUrl: "https://www.youtube.com/watch?v=wTpuKOhGfJE",
    tutorialUrl: "https://fullstackopen.com/es/",
    practiceUrl: "https://www.theodinproject.com/",
  }
];

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