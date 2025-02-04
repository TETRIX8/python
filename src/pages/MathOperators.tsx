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
    }, 1000);

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
      <div className="min-h-screen flex flex-col items-center justify-center space-y-4 bg-gray-50">
        <h1 className="text-4xl font-bold text-gray-900 animate-fade-in">
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
              Введение
            </h2>
            <p className="text-gray-700 mb-4">
              Мы познакомились с математическими операторами, строками, массивами (списками), 
              словарями и условиями. Сегодня мы применим полученные знания на практике.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm mb-8 animate-fade-up">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Основные математические операции
            </h2>
            
            <CodeBlock
              code={`num1 = int(input())
num2 = int(input())

print(num1 + num2)  # Сложение
print(num1 - num2)  # Вычитание
print(num1 * num2)  # Умножение
print(num1 / num2)  # Деление
print(num1 // num2) # Целая часть от деления
print(num1 % num2)  # Остаток от деления
print(num1 ** num2) # Возведение в степень`}
              description="Пример использования основных математических операторов"
            />

            <CodeBlock
              code={`# Пример вывода при num1 = 5, num2 = 2:
7   # 5 + 2
3   # 5 - 2
10  # 5 * 2
2.5 # 5 / 2
2   # 5 // 2
1   # 5 % 2
25  # 5 ** 2`}
              description="Результат выполнения программы"
            />
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm mb-8 animate-fade-up">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Сложные математические выражения
            </h2>
            
            <CodeBlock
              code={`a = int(input())
b = int(input())
c = int(input())

result = ((a+2)/(b+5))**4 - 0.001*c

print(result)
# При a = 8, b = 5, c = 1000 ответ должен быть 0.0`}
              description="Пример сложного математического выражения"
            />
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm mb-8 animate-fade-up">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Работа со строками
            </h2>
            
            <CodeBlock
              code={`message = input()
print("="*40)
print("\\t Сообщение: " + message)
print("="*40)`}
              description="Пример форматирования строк и повторения символов"
            />
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm mb-8 animate-fade-up">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Практические задачи
            </h2>
            
            <CodeBlock
              code={`# Задача про Гришу Н.
f = int(input())  # Количество задач за первый час
exercises = 12 - f  # Оставшиеся задачи
time = 4*60  # Оставшееся время в минутах
completed = time // 45  # Сколько задач можно решить
result = "YES" if exercises <= completed else "NO"
print(result)`}
              description="Решение задачи про соревнование"
            />
          </div>
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8 animate-fade-up">
            Проверь свои знания
          </h2>

          <div className="space-y-6">
            <QuizQuestion
              question="Какой оператор используется для получения остатка от деления?"
              options={["/", "//", "%", "**"]}
              correctAnswer="%"
              onAnswer={handleAnswer}
            />

            <QuizQuestion
              question="Что выведет выражение: 15 // 2?"
              options={["7.5", "7", "8", "6"]}
              correctAnswer="7"
              onAnswer={handleAnswer}
            />

            <CodeQuestion
              question="Напишите выражение для вычисления площади круга (π*r²). Используйте 3.14 для π"
              correctAnswer="3.14 * r ** 2"
              hint="Используйте оператор возведения в степень"
              onAnswer={handleAnswer}
            />
          </div>

          {questionsAnswered === 3 && (
            <div className="mt-8 p-6 bg-white rounded-lg shadow-sm text-center animate-fade-up">
              <h3 className="text-2xl font-bold mb-4">
                Ваш результат: {score} из 3
              </h3>
              <p className="text-gray-600 mb-4">
                {score === 3
                  ? "Отлично! Вы отлично разбираетесь в математических операторах!"
                  : score >= 2
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