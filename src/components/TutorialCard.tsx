import { LucideIcon } from "lucide-react";

interface TutorialCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  difficulty: "Principiante" | "Intermedio" | "Avanzado";
  path: string;
}

export const TutorialCard = ({ title, description, icon: Icon, difficulty, path }: TutorialCardProps) => {
  return (
    <a 
      href={path}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div className="card-tutorial cursor-pointer transition-transform hover:scale-105">
        <Icon className="w-12 h-12 text-primary mb-4" />
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <span className="inline-block px-3 py-1 rounded-full text-sm bg-primary/10 text-primary">
          {difficulty}
        </span>
      </div>
    </a>
  );
};