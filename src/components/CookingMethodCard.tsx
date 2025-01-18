import { LucideIcon } from "lucide-react";

interface CookingMethodCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  tips: string[];
  imageUrl: string;
}

export const CookingMethodCard = ({ title, description, icon: Icon, tips, imageUrl }: CookingMethodCardProps) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <img 
      src={imageUrl} 
      alt={title} 
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <div className="flex items-center gap-3 mb-4">
        <Icon className="w-8 h-8 text-primary" />
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="space-y-2">
        <h4 className="font-semibold">Consejos para principiantes:</h4>
        <ul className="list-disc list-inside space-y-1 text-gray-600">
          {tips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);