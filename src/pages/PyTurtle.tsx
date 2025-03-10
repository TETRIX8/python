
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
            // Redirect to Google Colab after loading is complete
            window.open("https://colab.research.google.com/drive/1r6BkwiwuYVSOO63eVxg8l4FKdduHYtqS?usp=sharing#scrollTo=tcO3cFG9b4KK", "_blank");
            toast.success("Открыт Google Colab с PyTurtle");
            setLoading(false);
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

        <div className="max-w-4xl mx-auto space-y-8 animate-fade-up">
          {loading ? (
            <div className="flex flex-col items-center justify-center p-12 bg-white rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-6">Подготовка среды разработки...</h2>
              <div className="w-full max-w-md mb-4">
                <Progress value={progress} className="h-2" />
                <p className="text-right mt-2 text-sm text-gray-500">{progress}%</p>
              </div>
              <p className="text-center text-gray-600 animate-pulse">
                Вы будете перенаправлены в Google Colab для интерактивной работы с PyTurtle
              </p>
            </div>
          ) : (
            <div className="p-8 bg-white rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Среда разработки готова</h2>
              <p className="mb-6">
                Вы были перенаправлены в Google Colab, где можете интерактивно работать с PyTurtle. Если страница не открылась автоматически, нажмите на кнопку ниже:
              </p>
              <Button 
                onClick={() => window.open("https://colab.research.google.com/drive/1r6BkwiwuYVSOO63eVxg8l4FKdduHYtqS?usp=sharing#scrollTo=tcO3cFG9b4KK", "_blank")}
                className="mt-2"
              >
                Открыть Google Colab
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PyTurtle;
