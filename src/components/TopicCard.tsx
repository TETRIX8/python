import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

interface TopicCardProps {
  title: string;
  description: string;
  path: string;
}

export const TopicCard = ({ title, description, path }: TopicCardProps) => {
  const navigate = useNavigate();

  return (
    <Card 
      className="p-6 cursor-pointer hover:shadow-lg transition-all duration-300 animate-fade-up bg-white hover:scale-105"
      onClick={() => navigate(path)}
    >
      <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Card>
  );
};