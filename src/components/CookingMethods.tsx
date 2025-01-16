import { Flame, Oven, Fan, Cooking } from "lucide-react";
import { CookingMethodCard } from "./CookingMethodCard";

const cookingMethods = [
  {
    title: "Cocina con Olla",
    description: "Aprende las bases de la cocina mediterránea usando una olla tradicional.",
    icon: Cooking,
    tips: [
      "Siempre precalienta la olla con un poco de aceite",
      "Controla el fuego - medio-bajo para cocción lenta",
      "Usa la tapa para cocinar más rápido y ahorrar energía"
    ],
    imageUrl: "https://images.unsplash.com/photo-1544378730-8b5104b18790?auto=format&fit=crop&q=80"
  },
  {
    title: "Horno",
    description: "Descubre cómo usar el horno para platos mediterráneos horneados.",
    icon: Oven,
    tips: [
      "Precalienta siempre el horno",
      "Usa papel de hornear para evitar que se pegue",
      "Mantén la puerta cerrada durante la cocción"
    ],
    imageUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80"
  },
  {
    title: "Air Fryer",
    description: "Cocina mediterránea saludable con poco aceite usando la freidora de aire.",
    icon: Fan,
    tips: [
      "No sobrecargues la cesta",
      "Agita la cesta a mitad de cocción",
      "Usa un spray de aceite para resultados crujientes"
    ],
    imageUrl: "https://images.unsplash.com/photo-1621317758612-3958e0f07c36?auto=format&fit=crop&q=80"
  },
  {
    title: "Sartén",
    description: "Domina las técnicas básicas de cocina mediterránea en sartén.",
    icon: Flame,
    tips: [
      "Calienta la sartén antes de añadir aceite",
      "No muevas constantemente la comida",
      "Usa una espátula adecuada para cada tipo de sartén"
    ],
    imageUrl: "https://images.unsplash.com/photo-1620574387735-3624d75b2dbc?auto=format&fit=crop&q=80"
  }
];

export const CookingMethods = () => (
  <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
    <div className="container mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        Aprende a Cocinar: Métodos Básicos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cookingMethods.map((method) => (
          <CookingMethodCard key={method.title} {...method} />
        ))}
      </div>
    </div>
  </div>
);