import { CodeBlock } from "@/components/CodeBlock";
import { QuizQuestion } from "@/components/QuizQuestion";
import { CodeQuestion } from "@/components/CodeQuestion";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Strings = () => {
  const [score, setScore] = useState(0);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) setScore(prev => prev + 1);
    setQuestionsAnswered(prev => prev + 1);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center space-y-4 bg-gray-900">
        <h1 className="text-4xl font-bold text-white animate-fade-in">
          Строки
        </h1>
        <div className="w-64">
          <Progress value={progress} className="animate-fade-in" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12 animate-fade-up">
          Строки в Python: основы работы
        </h1>
        
        <section className="prose lg:prose-xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-sm mb-8 animate-fade-up">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Что такое строки?
            </h2>
            <p className="text-gray-700 mb-4">
              Строка — это последовательность символов, заключенная в кавычки.
            </p>
            
            <CodeBlock 
              code={`text = "Привет, мир!"  # Строка в двойных кавычках
name = 'Python'    # Строка в одинарных кавычках

print(text)        # Выведет: Привет, мир!
print(name)        # Выведет: Python`}
            />
          </div>

          {/* More content will be added here */}
        </section>
      </div>
    </div>
  );
};

export default Strings;