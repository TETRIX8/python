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
              code={`foodForChildren = "В школе KiberOne ученики едят на полдник бананы"
foodForDinosaurus = 'А что едят на полдник динозавры?'

print(foodForChildren)
print(foodForDinosaurus)`}
              description="Пример создания и вывода строк"
            />
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm mb-8 animate-fade-up">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Многострочные строки
            </h2>
            <p className="text-gray-700 mb-4">
              Для создания многострочных строк используются тройные кавычки.
            </p>
            
            <CodeBlock 
              code={`food = '''В школе KiberOne ученики едят на полник бананы
А что едят на полдник динозавры?'''

print(food)`}
            />
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm mb-8 animate-fade-up">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Специальные символы
            </h2>
            <p className="text-gray-700 mb-4">
              В Python есть специальные символы для форматирования текста:
            </p>
            
            <CodeBlock 
              code={`# \\n - перенос на следующую строку
print("aaa \\n bbb")

# \\t - табуляция (4 пробела)
print("aaa \\t bbb")`}
            />
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm mb-8 animate-fade-up">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Экранирование символов
            </h2>
            
            <CodeBlock 
              code={`print('"Тут что-то не так, не будь я Д\\'Артаньян" - подумал он.')`}
              description="Использование обратного слеша для экранирования символов"
            />
          </div>
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8 animate-fade-up">
            Проверь свои знания
          </h2>

          <div className="space-y-6">
            <QuizQuestion
              question="Какой символ используется для переноса строки в Python?"
              options={["\n", "\t", "\s", "\r"]}
              correctAnswer="\n"
              onAnswer={handleAnswer}
            />

            <QuizQuestion
              question="Как создать многострочную строку в Python?"
              options={[
                "Использовать тройные кавычки '''",
                "Использовать двойные кавычки \"\"",
                "Использовать одинарные кавычки ''",
                "Использовать символ \\n"
              ]}
              correctAnswer="Использовать тройные кавычки '''"
              onAnswer={handleAnswer}
            />

            <CodeQuestion
              question="Создайте строковую переменную greeting со значением 'Привет, мир!'"
              correctAnswer="greeting = 'Привет, мир!'"
              onAnswer={handleAnswer}
            />

            <CodeQuestion
              question="Напишите команду для вывода строки с табуляцией между словами: 'Python    программирование'"
              correctAnswer='print("Python\tпрограммирование")'
              onAnswer={handleAnswer}
            />
          </div>

          {questionsAnswered === 4 && (
            <div className="mt-8 p-6 bg-white rounded-lg shadow-sm text-center animate-fade-up">
              <h3 className="text-2xl font-bold mb-4">
                Ваш результат: {score} из 4
              </h3>
              <p className="text-gray-600 mb-4">
                {score === 4 ? "Отлично! Вы отлично разбираетесь в строках!" :
                 score >= 3 ? "Хороший результат! Продолжайте практиковаться!" :
                 "Попробуйте еще раз после повторения материала!"}
              </p>
              <Button onClick={() => navigate("/topics")} className="mt-4">
                Вернуться к темам
              </Button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Strings;