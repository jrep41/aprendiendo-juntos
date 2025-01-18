import { RecipeCard } from "./RecipeCard";

const recipes = [
  {
    title: "Paella Valenciana",
    description: "Auténtica paella española con arroz, azafrán, pollo y mariscos frescos.",
    prepTime: "45 min",
    servings: 4,
    imageUrl: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&q=80",
  },
  {
    title: "Ensalada Griega",
    description: "Refrescante ensalada con tomates, pepino, aceitunas kalamata y queso feta.",
    prepTime: "15 min",
    servings: 2,
    imageUrl: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80",
  },
  {
    title: "Pasta al Pesto",
    description: "Pasta italiana con salsa pesto casera, piñones y parmesano rallado.",
    prepTime: "20 min",
    servings: 3,
    imageUrl: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&q=80",
  }
];

export const MediterraneanRecipes = () => (
  <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
    <div className="container mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        Recetas Mediterráneas
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.title} {...recipe} />
        ))}
      </div>
    </div>
  </div>
);