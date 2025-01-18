import { Hero } from "@/components/Hero";
import { TutorialGrid } from "@/components/TutorialGrid";
import { CookingMethods } from "@/components/CookingMethods";
import { MediterraneanRecipes } from "@/components/MediterraneanRecipes";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <TutorialGrid />
      <CookingMethods />
      <MediterraneanRecipes />
    </div>
  );
};

export default Index;