import { Clock, Users } from "lucide-react";

interface RecipeCardProps {
  title: string;
  description: string;
  prepTime: string;
  servings: number;
  imageUrl: string;
}

export const RecipeCard = ({ title, description, prepTime, servings, imageUrl }: RecipeCardProps) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <img 
      src={imageUrl} 
      alt={title} 
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex items-center gap-4 text-gray-500">
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          <span>{prepTime}</span>
        </div>
        <div className="flex items-center gap-1">
          <Users className="w-4 h-4" />
          <span>{servings} personas</span>
        </div>
      </div>
    </div>
  </div>
);