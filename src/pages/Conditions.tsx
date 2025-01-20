import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CodeBlock } from "@/components/CodeBlock";
import { QuizQuestion } from "@/components/QuizQuestion";
import { CodeQuestion } from "@/components/CodeQuestion";

const Conditions = () => {
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
          Условия и условные операторы
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
          Условия и условные операторы в Python
        </h1>

        <section className="prose lg:prose-xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-sm mb-8 animate-fade-up">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Что такое условные операторы?
            </h2>
            <p className="text-gray-700 mb-4">
              Условные операторы позволяют изменять ход выполнения программы в зависимости от заданных условий.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Основные условные операторы:
            </h3>

            <CodeBlock
              code={`# Оператор if
x = 10
if x > 0:
    print("Число положительное")`}
              description="Простой пример использования if"
            />

            <CodeBlock
              code={`# Оператор if-else
x = -5
if x > 0:
    print("Число положительное")
else:
    print("Число отрицательное или равно нулю")`}
              description="Пример использования if-else"
            />

            <CodeBlock
              code={`# Оператор if-elif-else
x = 0
if x > 0:
    print("Число положительное")
elif x < 0:
    print("Число отрицательное")
else:
    print("Число равно нулю")`}
              description="Пример использования if-elif-else"
            />
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm mb-8 animate-fade-up">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Операторы сравнения
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>&lt; (меньше)</li>
              <li>&gt; (больше)</li>
              <li>&lt;= (меньше или равно)</li>
              <li>&gt;= (больше или равно)</li>
              <li>== (равно)</li>
              <li>!= (не равно)</li>
            </ul>

            <CodeBlock
              code={`x = 5
y = 10
print(x < y)  # True
print(x > y)  # False
print(x == 5)  # True`}
              description="Примеры использования операторов сравнения"
            />
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm mb-8 animate-fade-up">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Логические операторы
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>and (логическое И)</li>
              <li>or (логическое ИЛИ)</li>
              <li>not (логическое НЕ)</li>
            </ul>

            <CodeBlock
              code={`x = 5
y = 10
print(x > 0 and y > 0)  # True
print(x < 0 or y > 0)   # True
print(not x > y)        # True`}
              description="Примеры использования логических операторов"
            />
          </div>
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8 animate-fade-up">
            Проверь свои знания
          </h2>

          <div className="space-y-6">
            <QuizQuestion
              question="Какой оператор используется для проверки равенства в Python?"
              options={["=", "==", "===", "!="]}
              correctAnswer="=="
              onAnswer={handleAnswer}
            />

            <QuizQuestion
              question="Что выведет следующий код: print(5 > 3 and 2 < 1)?"
              options={["True", "False", "Error", "None"]}
              correctAnswer="False"
              onAnswer={handleAnswer}
            />

            <QuizQuestion
              question="Какой оператор используется для логического 'И' в Python?"
              options={["&&", "and", "&", "AND"]}
              correctAnswer="and"
              onAnswer={handleAnswer}
            />

            <QuizQuestion
              question="Что выведет код: print(not True)?"
              options={["True", "False", "None", "Error"]}
              correctAnswer="False"
              onAnswer={handleAnswer}
            />

            <QuizQuestion
              question="Какой оператор проверяет неравенство в Python?"
              options={["<>", "!=", "/=", "not="]}
              correctAnswer="!="
              onAnswer={handleAnswer}
            />

            <QuizQuestion
              question="Что выведет код: print(10 >= 10)?"
              options={["True", "False", "10", "Error"]}
              correctAnswer="True"
              onAnswer={handleAnswer}
            />

            <QuizQuestion
              question="Какой оператор используется для логического 'ИЛИ' в Python?"
              options={["||", "or", "|", "OR"]}
              correctAnswer="or"
              onAnswer={handleAnswer}
            />

            <QuizQuestion
              question="Что выведет код: print(5 < 10 < 15)?"
              options={["True", "False", "Error", "None"]}
              correctAnswer="True"
              onAnswer={handleAnswer}
            />

            <QuizQuestion
              question="Какое ключевое слово используется для альтернативного условия в Python?"
              options={["else if", "elif", "otherwise", "alternative"]}
              correctAnswer="elif"
              onAnswer={handleAnswer}
            />

            <QuizQuestion
              question="Что выведет код: print(True or False and False)?"
              options={["True", "False", "Error", "None"]}
              correctAnswer="True"
              onAnswer={handleAnswer}
            />

            <CodeQuestion
              question="Напишите условие, которое проверяет, что число x больше 0"
              correctAnswer="if x > 0:"
              hint="Используйте оператор if и знак >"
              onAnswer={handleAnswer}
            />

            <CodeQuestion
              question="Напишите условие, которое проверяет, что число равно 10"
              correctAnswer="if x == 10:"
              hint="Используйте оператор if и двойное равенство =="
              onAnswer={handleAnswer}
            />

            <CodeQuestion
              question="Напишите условие, которое проверяет, что число меньше или равно 5"
              correctAnswer="if x <= 5:"
              hint="Используйте оператор if и знак <="
              onAnswer={handleAnswer}
            />

            <CodeQuestion
              question="Напишите условие с двумя проверками через and"
              correctAnswer="if x > 0 and x < 10:"
              hint="Используйте оператор and для объединения двух условий"
              onAnswer={handleAnswer}
            />

            <CodeQuestion
              question="Напишите условие с оператором or"
              correctAnswer="if x < 0 or x > 10:"
              hint="Используйте оператор or для объединения двух условий"
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
                  ? "Отлично! Вы отлично разбираетесь в условных операторах!"
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

export default Conditions;