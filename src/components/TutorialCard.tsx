import { LucideIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Video, Book, Code } from "lucide-react";

interface TutorialCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  difficulty: "Principiante" | "Intermedio" | "Avanzado";
  path: string;
  videoUrl?: string;
  tutorialUrl?: string;
  practiceUrl?: string;
}

export const TutorialCard = ({ 
  title, 
  description, 
  icon: Icon, 
  difficulty, 
  path,
  videoUrl = "https://www.youtube.com/results?search_query=tutorial+" + title,
  tutorialUrl = "https://www.w3schools.com/" + title.toLowerCase(),
  practiceUrl = "https://www.codecademy.com/learn/" + title.toLowerCase()
}: TutorialCardProps) => (
  <div className="card-tutorial">
    <Icon className="w-12 h-12 text-primary mb-4" />
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <span className="inline-block px-3 py-1 rounded-full text-sm bg-primary/10 text-primary mb-4">
      {difficulty}
    </span>
    <div className="flex flex-col gap-2 mt-4">
      <Button variant="default" className="w-full flex items-center gap-2" onClick={() => window.open(videoUrl, '_blank')}>
        <Video className="w-4 h-4" />
        Ver Video
      </Button>
      <Button variant="outline" className="w-full flex items-center gap-2" onClick={() => window.open(tutorialUrl, '_blank')}>
        <Book className="w-4 h-4" />
        Tutorial Web
      </Button>
      <Button variant="secondary" className="w-full flex items-center gap-2" onClick={() => window.open(practiceUrl, '_blank')}>
        <Code className="w-4 h-4" />
        Practicar
      </Button>
    </div>
  </div>
);