import { Hero } from "@/components/Hero";
import { TutorialGrid } from "@/components/TutorialGrid";
import { MediterraneanRecipes } from "@/components/MediterraneanRecipes";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <TutorialGrid />
      <MediterraneanRecipes />
    </div>
  );
};

export default Index;