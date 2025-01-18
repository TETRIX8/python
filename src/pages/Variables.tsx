import { CodeBlock } from "@/components/CodeBlock";
import { QuizQuestion } from "@/components/QuizQuestion";
import { CodeQuestion } from "@/components/CodeQuestion";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Variables = () => {
  const [score, setScore] = useState(0);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // Changed to 5000ms (5 seconds)

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2; // Adjusted to make progress smoother over 5 seconds
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
          Переменные
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
          Переменные в Python: просто и понятно
        </h1>
        
        <section className="prose lg:prose-xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-sm mb-8 animate-fade-up">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Что такое переменные?
            </h2>
            <p className="text-gray-700 mb-4">
              Переменная — это именованная "коробка", куда можно положить что-то и потом использовать это в коде.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Пример из жизни:
            </h3>
            <p className="text-gray-700 mb-6">
              Представь, что у тебя есть полка, на которую ты кладешь коробки с разными вещами. 
              На каждой коробке есть ярлык с названием, чтобы ты знал, что внутри.
            </p>

            <CodeBlock 
              code={`имя = "Анна"  # Переменная с именем
возраст = 25  # Переменная с возрастом

print(имя, "возраст:", возраст)  # Выведет: Анна возраст: 25`}
            />
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm mb-8 animate-fade-up">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Для чего нужны переменные?
            </h2>
            <ul className="list-decimal pl-6 space-y-4 text-gray-700">
              <li>Хранить данные для повторного использования.</li>
              <li>Делать код понятным и удобным.</li>
              <li>Автоматизировать расчёты или действия.</li>
            </ul>

            <CodeBlock 
              code={`яблоки = 3  # Цена за килограмм
груши = 4

общая_стоимость = яблоки + груши
print("Общая стоимость:", общая_стоимость)  # Выведет: Общая стоимость: 7`}
              description="Пример использования переменных для расчёта стоимости"
            />
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm mb-8 animate-fade-up">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Названия переменных: как нельзя называть
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  1. Не начинай с цифры
                </h3>
                <CodeBlock 
                  code={`1переменная = 10  # Ошибка
переменная1 = 10  # Правильно`}
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  2. Не используй пробелы
                </h3>
                <CodeBlock 
                  code={`моя переменная = 5  # Ошибка
моя_переменная = 5  # Правильно`}
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  3. Не используй специальные символы
                </h3>
                <CodeBlock 
                  code={`переменная$ = 10  # Ошибка
переменная_доллар = 10  # Правильно`}
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  4. Не используй зарезервированные слова
                </h3>
                <CodeBlock 
                  code={`for = 5  # Ошибка
число = 5  # Правильно`}
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm mb-8 animate-fade-up">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Идеальные названия переменных
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  1. Понятные и описательные
                </h3>
                <CodeBlock 
                  code={`x = 10  # Неочевидно
возраст = 10  # Понятно`}
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  2. Соблюдай стиль snake_case
                </h3>
                <CodeBlock 
                  code={`имяПользователя = "Анна"  # Не рекомендуется
имя_пользователя = "Анна"  # Правильно`}
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm mb-8 animate-fade-up">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Комментарии в Python
            </h2>
            
            <p className="text-gray-700 mb-4">
              Комментарии — это заметки в коде, которые Python игнорирует при выполнении. 
              Они помогают объяснить, что делает код.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  1. Однострочные комментарии
                </h3>
                <CodeBlock 
                  code={`# Это однострочный комментарий
имя = "Анна"  # Можно писать комментарий после кода
возраст = 25  # Объясняем, что содержит переменная`}
                  description="Однострочные комментарии начинаются с символа #"
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  2. Многострочные комментарии
                </h3>
                <CodeBlock 
                  code={`"""
Это многострочный комментарий.
Он может занимать несколько строк.
Часто используется для документации функций.
"""

def приветствие():
    """Эта функция выводит приветствие"""
    print("Привет!")`}
                  description="Многострочные комментарии заключаются в тройные кавычки"
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Хорошие практики комментирования
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Пиши комментарии на понятном языке</li>
                  <li>Объясняй сложные части кода</li>
                  <li>Не пиши очевидных комментариев</li>
                  <li>Обновляй комментарии при изменении кода</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Пример использования комментариев
                </h3>
                <CodeBlock 
                  code={`# Переменные для расчёта
цена = 100  # Цена товара в рублях
количество = 5  # Количество единиц товара

# Расчёт общей стоимости
общая_стоимость = цена * количество  # Умножаем цену на количество

"""
Программа считает стоимость покупки
и выводит результат на экран
"""
print(f"К оплате: {общая_стоимость} рублей")`}
                  description="Пример правильного использования комментариев в коде"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8 animate-fade-up">
            Проверь свои знания
          </h2>

          <div className="space-y-6">
            <QuizQuestion
              question="Какой символ используется для создания комментария в одну строку в Python?"
              options={["#", "//", "/*", "--"]}
              correctAnswer="#"
              onAnswer={handleAnswer}
            />

            <QuizQuestion
              question="Как правильно назвать переменную в Python?"
              options={["1name", "my-name", "my_name", "my name"]}
              correctAnswer="my_name"
              onAnswer={handleAnswer}
            />

            <QuizQuestion
              question="Какое из этих имен переменных недопустимо в Python?"
              options={["user_age", "userAge", "for", "age_1"]}
              correctAnswer="for"
              onAnswer={handleAnswer}
            />

            <QuizQuestion
              question="Какой стиль именования рекомендуется использовать в Python?"
              options={["camelCase", "snake_case", "PascalCase", "kebab-case"]}
              correctAnswer="snake_case"
              onAnswer={handleAnswer}
            />

            <QuizQuestion
              question="Что выведет следующий код: x = 5; y = x; x = 10; print(y)?"
              options={["5", "10", "None", "Ошибка"]}
              correctAnswer="5"
              onAnswer={handleAnswer}
            />

            <CodeQuestion
              question="Создайте переменную name и присвойте ей значение 'Python'"
              correctAnswer="name = 'Python'"
              onAnswer={handleAnswer}
            />

            <CodeQuestion
              question="Создайте переменную age и присвойте ей значение 25"
              correctAnswer="age = 25"
              onAnswer={handleAnswer}
            />

            <CodeQuestion
              question="Создайте переменную is_student и присвойте ей значение True"
              correctAnswer="is_student = True"
              onAnswer={handleAnswer}
            />

            <CodeQuestion
              question="Создайте переменную price со значением 99.99"
              correctAnswer="price = 99.99"
              onAnswer={handleAnswer}
            />

            <CodeQuestion
              question="Создайте переменную user_name со значением 'Alice'"
              correctAnswer="user_name = 'Alice'"
              onAnswer={handleAnswer}
            />
          </div>

          {questionsAnswered === 10 && (
            <div className="mt-8 p-6 bg-white rounded-lg shadow-sm text-center animate-fade-up">
              <h3 className="text-2xl font-bold mb-4">
                Ваш результат: {score} из 10
              </h3>
              <p className="text-gray-600 mb-4">
                {score === 10 ? "Отлично! Вы отлично разбираетесь в переменных!" :
                 score >= 7 ? "Хороший результат! Продолжайте практиковаться!" :
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

export default Variables;