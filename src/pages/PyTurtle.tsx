
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const PyTurtle = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate loading with a progress bar
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
            toast.success("Загружен Google Colab с PyTurtle");
          }, 500);
          return 100;
        }
        const increment = Math.floor(Math.random() * 10) + 5;
        return Math.min(prevProgress + increment, 100);
      });
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-6 flex justify-between items-center">
          <Button
            variant="outline"
            onClick={() => navigate("/topics")}
            className="hover:bg-primary/10"
          >
            Назад к темам
          </Button>
        </div>

        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8 animate-fade-up">
          Рисование с помощью PyTurtle
        </h1>

        <div className="max-w-6xl mx-auto space-y-8 animate-fade-up">
          {loading ? (
            <div className="flex flex-col items-center justify-center p-12 bg-white rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-6">Подготовка среды разработки...</h2>
              <div className="w-full max-w-md mb-4">
                <Progress value={progress} className="h-2" />
                <p className="text-right mt-2 text-sm text-gray-500">{progress}%</p>
              </div>
              <p className="text-center text-gray-600 animate-pulse">
                Загружается интерактивная среда Google Colab для работы с PyTurtle
              </p>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-4 border-b">
                <h2 className="text-xl font-semibold">Google Colab с PyTurtle</h2>
              </div>
              <div className="w-full aspect-[16/9]">
                <iframe 
                  src="https://colab.research.google.com/drive/1r6BkwiwuYVSOO63eVxg8l4FKdduHYtqS?usp=sharing#scrollTo=tcO3cFG9b4KK" 
                  className="w-full h-full border-0"
                  title="Google Colab с PyTurtle"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PyTurtle;
