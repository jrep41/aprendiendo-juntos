import { GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => (
  <div className="bg-primary text-white py-20 px-4 sm:px-6 lg:px-8">
    <div className="container mx-auto text-center">
      <GraduationCap className="w-16 h-16 mx-auto mb-8" />
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
        Aprende programación web
      </h1>
      <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
        Tutoriales gratuitos y prácticos para dominar HTML, CSS, JavaScript, Python y más.
        Comienza tu viaje en el desarrollo web hoy mismo.
      </p>
      <Button size="lg" className="bg-accent text-primary hover:bg-accent/90">
        Comenzar ahora
      </Button>
    </div>
  </div>
);