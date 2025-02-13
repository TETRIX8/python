
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CodeBlock } from "@/components/CodeBlock";
import { QuizQuestion } from "@/components/QuizQuestion";
import { CodeQuestion } from "@/components/CodeQuestion";

const Loops = () => {
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
          Циклы в Python
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
          Циклы в Python
        </h1>

        <section className="prose lg:prose-xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-sm mb-8 animate-fade-up">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Цикл for
            </h2>
            <p className="text-gray-700 mb-4">
              Циклы используются, когда нам надо выполнить какие-либо действия множество раз или пока выполняется определённое условие.
            </p>
            
            <CodeBlock
              code={`for name in range(10):
    print(name)

# Вывод:
# 0
# 1
# 2
# 3
# 4
# 5
# 6
# 7
# 8
# 9`}
              description="Пример простого цикла for"
            />
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm mb-8 animate-fade-up">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Функция range()
            </h2>
            
            <CodeBlock
              code={`# От 5 до 10
for i in range(5, 10):
    print(i)

# От большего к меньшему
for a in range(10, 5, -1):
    print(a)`}
              description="Примеры использования функции range()"
            />
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm mb-8 animate-fade-up">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Цикл while
            </h2>
            
            <CodeBlock
              code={`a = 0
while (a < 10):
    a = a + 2
    print(a)

# Вывод:
# 2
# 4
# 6
# 8
# 10`}
              description="Пример использования цикла while"
            />
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm mb-8 animate-fade-up">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Практические примеры
            </h2>
            
            <CodeBlock
              code={`# Подсчет количества символов в строке
string = input()
findChar = input()
count = 0
for char in string:
    if char == findChar:
        count = count + 1
print(count)`}
              description="Пример подсчета символов в строке"
            />
          </div>
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8 animate-fade-up">
            Проверь свои знания
          </h2>

          <div className="space-y-6">
            <QuizQuestion
              question="Что выведет код: for i in range(3): print(i)?"
              options={["0 1 2", "1 2 3", "0 1 2 3", "1 2"]}
              correctAnswer="0 1 2"
              onAnswer={handleAnswer}
            />

            <QuizQuestion
              question="Какой цикл используется, когда известно точное количество повторений?"
              options={["while", "for", "loop", "repeat"]}
              correctAnswer="for"
              onAnswer={handleAnswer}
            />

            <QuizQuestion
              question="Что делает range(5, 10)?"
              options={[
                "Создает последовательность от 5 до 9",
                "Создает последовательность от 5 до 10",
                "Создает последовательность от 0 до 10",
                "Создает последовательность от 0 до 5"
              ]}
              correctAnswer="Создает последовательность от 5 до 9"
              onAnswer={handleAnswer}
            />

            <CodeQuestion
              question="Напишите цикл for, который выводит числа от 1 до 5 (используйте range)"
              correctAnswer="for i in range(1, 6):"
              hint="Не забудьте, что range не включает последнее число"
              onAnswer={handleAnswer}
            />

            <CodeQuestion
              question="Напишите условие для цикла while, который работает пока переменная x меньше 10"
              correctAnswer="while x < 10:"
              hint="Используйте оператор сравнения"
              onAnswer={handleAnswer}
            />
          </div>

          {questionsAnswered === 5 && (
            <div className="mt-8 p-6 bg-white rounded-lg shadow-sm text-center animate-fade-up">
              <h3 className="text-2xl font-bold mb-4">
                Ваш результат: {score} из 5
              </h3>
              <p className="text-gray-600 mb-4">
                {score === 5
                  ? "Отлично! Вы отлично разбираетесь в циклах Python!"
                  : score >= 3
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

export default Loops;
