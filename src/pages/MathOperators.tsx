import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CodeBlock } from "@/components/CodeBlock";
import { QuizQuestion } from "@/components/QuizQuestion";
import { CodeQuestion } from "@/components/CodeQuestion";

const MathOperators = () => {
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
    if (isCorrect) setScore((prev) => prev + 1);
    setQuestionsAnswered((prev) => prev + 1);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center space-y-4 bg-gray-900">
        <h1 className="text-4xl font-bold text-white animate-fade-in">
          Математические операторы в Python
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
          Математические операторы в Python
        </h1>

        <section className="prose lg:prose-xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-sm mb-8 animate-fade-up">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Основные математические операторы
            </h2>
            <p className="text-gray-700 mb-4">
              В Python доступны все основные математические операции. Давайте рассмотрим их на примерах:
            </p>

            <CodeBlock
              code={`num1 = 5
num2 = 2

print(num1 + num2)   # Сложение: 7
print(num1 - num2)   # Вычитание: 3
print(num1 * num2)   # Умножение: 10
print(num1 / num2)   # Деление: 2.5
print(num1 // num2)  # Целочисленное деление: 2
print(num1 % num2)   # Остаток от деления: 1
print(num1 ** num2)  # Возведение в степень: 25`}
              description="Примеры использования математических операторов"
            />
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm mb-8 animate-fade-up">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Сложные математические выражения
            </h2>
            <p className="text-gray-700 mb-4">
              Python позволяет создавать сложные математические выражения, комбинируя различные операторы:
            </p>

            <CodeBlock
              code={`a = 8
b = 5
c = 1000

result = ((a + 2) / (b + 5)) ** 4 - 0.001 * c
print(result)  # Результат: 0.0`}
              description="Пример сложного математического выражения"
            />
          </div>
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8 animate-fade-up">
            Проверь свои знания
          </h2>

          <div className="space-y-6">
            <QuizQuestion
              question="Какой оператор используется для возведения в степень в Python?"
              options={["^", "**", "^^", "pow"]}
              correctAnswer="**"
              onAnswer={handleAnswer}
            />

            <QuizQuestion
              question="Что выведет выражение: 17 % 5?"
              options={["2", "3.4", "3", "2.4"]}
              correctAnswer="2"
              onAnswer={handleAnswer}
            />

            <QuizQuestion
              question="Какой результат будет у выражения: 15 // 2?"
              options={["7.5", "7", "8", "6"]}
              correctAnswer="7"
              onAnswer={handleAnswer}
            />

            <QuizQuestion
              question="Что означает оператор % в Python?"
              options={["Процент", "Модуль числа", "Остаток от деления", "Деление"]}
              correctAnswer="Остаток от деления"
              onAnswer={handleAnswer}
            />

            <QuizQuestion
              question="Какой результат выражения: 2 ** 3?"
              options={["6", "8", "5", "9"]}
              correctAnswer="8"
              onAnswer={handleAnswer}
            />

            <QuizQuestion
              question="Что делает оператор // в Python?"
              options={["Обычное деление", "Целочисленное деление", "Деление с округлением", "Двойное деление"]}
              correctAnswer="Целочисленное деление"
              onAnswer={handleAnswer}
            />

            <QuizQuestion
              question="Какой результат выражения: 10 + 5 * 2?"
              options={["30", "20", "25", "15"]}
              correctAnswer="20"
              onAnswer={handleAnswer}
            />

            <QuizQuestion
              question="Что выведет выражение: (10 + 5) * 2?"
              options={["20", "25", "30", "15"]}
              correctAnswer="30"
              onAnswer={handleAnswer}
            />

            <QuizQuestion
              question="Какой оператор имеет высший приоритет?"
              options={["+", "*", "**", "/"]}
              correctAnswer="**"
              onAnswer={handleAnswer}
            />

            <QuizQuestion
              question="Чему равно 27 ** (1/3)?"
              options={["3", "9", "1", "27"]}
              correctAnswer="3"
              onAnswer={handleAnswer}
            />

            <CodeQuestion
              question="Напишите выражение для вычисления площади круга (π*r²). Используйте переменную r для радиуса"
              correctAnswer="3.14 * r ** 2"
              hint="Используйте число 3.14 для π и оператор возведения в степень"
              onAnswer={handleAnswer}
            />

            <CodeQuestion
              question="Напишите выражение для вычисления среднего арифметического трех чисел a, b и c"
              correctAnswer="(a + b + c) / 3"
              hint="Сложите числа и разделите на количество чисел"
              onAnswer={handleAnswer}
            />

            <CodeQuestion
              question="Напишите выражение для конвертации температуры из Цельсия (C) в Фаренгейты: (C * 9/5) + 32"
              correctAnswer="(C * 9/5) + 32"
              hint="Используйте переменную C для температуры в Цельсиях"
              onAnswer={handleAnswer}
            />

            <CodeQuestion
              question="Напишите выражение для вычисления периметра прямоугольника со сторонами a и b"
              correctAnswer="2 * (a + b)"
              hint="Периметр = 2 * (длина + ширина)"
              onAnswer={handleAnswer}
            />

            <CodeQuestion
              question="Напишите выражение для вычисления дискриминанта (b² - 4ac)"
              correctAnswer="b ** 2 - 4 * a * c"
              hint="Используйте переменные a, b и c"
              onAnswer={handleAnswer}
            />
          </div>

          {questionsAnswered === 15 && (
            <div className="mt-8 p-6 bg-white rounded-lg shadow-sm text-center animate-fade-up">
              <h3 className="text-2xl font-bold mb-4">
                Ваш результат: {score} из 15
              </h3>
              <p className="text-gray-600 mb-4">
                {score === 15
                  ? "Отлично! Вы отлично разбираетесь в математических операторах!"
                  : score >= 10
                  ? "Хороший результат! Продолжайте практиковаться!"
                  : "Попробуйте еще раз после повторения материала!"}
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

export default MathOperators;