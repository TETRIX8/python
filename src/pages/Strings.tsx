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
          Работа со строками в Python
        </h1>

        <section className="prose lg:prose-xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-sm mb-8 animate-fade-up">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Что такое строки?
            </h2>
            <p className="text-gray-700 mb-4">
              Строки в Python — эпоследовательности символов, заключённые в кавычки. 
              Они могут быть одинарными (') или двойными (").
            </p>

            <CodeBlock 
              code={`foodForChildren = "В школе KiberOne ученики едят на полдник бананы"
foodForDinosaurus = 'А что едят на полдник динозавры?'

print(foodForChildren)
print(foodForDinosaurus)`}
            />
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm mb-8 animate-fade-up">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Длинные строки (многострочный текст)
            </h2>
            <p className="text-gray-700 mb-4">
              Если строка слишком длинная, её можно разделить на несколько строк, используя тройные кавычки.
            </p>

            <CodeBlock 
              code={`food = '''В школе KiberOne ученики едят на полдник бананы
А что едят на полдник динозавры?'''

print(food)`}
            />
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm mb-8 animate-fade-up">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Специальные символы внутри строк
            </h2>
            
            <CodeBlock 
              code={`# \\n - перенос на следующую строку
print("aaa \\n bbb")

# \\t - табуляция (4 пробела)
print("aaa \\t bbb")`}
            />
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm mb-8 animate-fade-up">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Форматирование строк
            </h2>
            
            <CodeBlock 
              code={`name = "Александр"
old = 22
grade = 4.5

print("Мое имя %s, мне %d, и мой средний балл %.2f" % (name, old, grade))

# Современный способ (f-строки)
print(f"Привет, {name}! Тебе {old} лет.")`}
            />
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm mb-8 animate-fade-up">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Срезы строк
            </h2>
            
            <CodeBlock 
              code={`myString = "kiberOne"
print(myString[3:6])    # Символы с 3 по 5: 'erO'
print(myString[1:9:2])  # Каждый второй символ с 1 по 8: 'ieOe'
print(myString[::-1])   # Строка в обратном порядке: 'enOrebik'`}
            />
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm mb-8 animate-fade-up">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Сложные примеры срезов
            </h2>
            
            <CodeBlock 
              code={`# Пример 1: Нечётные индексы в обратном порядке
string = "Программирование"
print(string[1::2][::-1])  # Результат: einnaorP

# Пример 2: Удаление последних символов и дублирование
string = "PythonDeveloper"
trimmed = string[:-3]
print(trimmed * 2)  # Результат: PythonDevePythonDeve

# Пример 3: Форматирование строк
name = "Иван"
age = 30
profession = "программист"
print(f"Привет, {name}! Тебе {age} лет, и ты {profession}.")`}
            />
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm mb-8 animate-fade-up">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Практические задания
            </h2>
            
            <CodeBlock 
              code={`# Задание 1: Анализ строки
inputString = "Моя строка"
print(inputString[2])      # Третий символ: 'я'
print(inputString[-2])     # Предпоследний символ: 'к'
print(inputString[:5])     # Первые пять символов: 'Моя с'

# Задание 2: Разделение строки
myString = "Режем строки"
mid = len(myString) // 2
firstPart = myString[:mid]
secondPart = myString[mid:]
print(secondPart + firstPart)  # Результат: строкиРежем`}
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
              options={["\\n", "\\t", "\\r", "\\s"]}
              correctAnswer="\\n"
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

            <QuizQuestion
              question="Какой индекс у первого символа в строке Python?"
              options={["0", "1", "-1", "Нет индекса"]}
              correctAnswer="0"
              onAnswer={handleAnswer}
            />

            <QuizQuestion
              question="Как получить длину строки в Python?"
              options={["len()", "length()", "size()", "count()"]}
              correctAnswer="len()"
              onAnswer={handleAnswer}
            />

            <QuizQuestion
              question="Какой символ используется для табуляции в строке?"
              options={["\\t", "\\n", "\\r", "\\s"]}
              correctAnswer="\\t"
              onAnswer={handleAnswer}
            />

            <QuizQuestion
              question="Как получить последний символ строки 'Python'?"
              options={["Python[-1]", "Python[5]", "Python[6]", "Python[len]"]}
              correctAnswer="Python[-1]"
              onAnswer={handleAnswer}
            />

            <QuizQuestion
              question="Что делает оператор + со строками?"
              options={["Складывает", "Объединяет", "Умножает", "Делит"]}
              correctAnswer="Объединяет"
              onAnswer={handleAnswer}
            />

            <QuizQuestion
              question="Как развернуть строку в обратном порядке?"
              options={["str[::-1]", "str.reverse()", "str[-1:0]", "reverse(str)"]}
              correctAnswer="str[::-1]"
              onAnswer={handleAnswer}
            />

            <QuizQuestion
              question="Какой современный способ форматирования строк в Python?"
              options={["f-строки", "%-форматирование", ".format()", "template strings"]}
              correctAnswer="f-строки"
              onAnswer={handleAnswer}
            />

            <QuizQuestion
              question="Что выведет print('Hello' * 2)?"
              options={["HelloHello", "Hello2", "Error", "Hello Hello"]}
              correctAnswer="HelloHello"
              onAnswer={handleAnswer}
            />

            <CodeQuestion
              question="Создайте строку greeting со значением 'Привет, мир!'"
              correctAnswer="greeting = 'Привет, мир!'"
              onAnswer={handleAnswer}
            />

            <CodeQuestion
              question="Напишите код для вывода строки с переносом строки между словами: 'Первая\nВторая'"
              correctAnswer='print("Первая\\nВторая")'
              onAnswer={handleAnswer}
            />

            <CodeQuestion
              question="Создайте f-строку с переменной name = 'Python': 'Я учу Python!'"
              correctAnswer='f"Я учу {name}!"'
              onAnswer={handleAnswer}
            />

            <CodeQuestion
              question="Напишите код для получения первых трех символов строки text"
              correctAnswer="text[:3]"
              onAnswer={handleAnswer}
            />

            <CodeQuestion
              question="Создайте строку spaces с 10 пробелами"
              correctAnswer='spaces = " " * 10'
              onAnswer={handleAnswer}
            />
          </div>

          {questionsAnswered === 15 && (
            <div className="mt-8 p-6 bg-white rounded-lg shadow-sm text-center animate-fade-up">
              <h3 className="text-2xl font-bold mb-4">
                Ваш результат: {score} из 15
              </h3>
              <p className="text-gray-600 mb-4">
                {score === 15 ? "Отлично! Вы отлично разбираетесь в строках!" :
                 score >= 12 ? "Хороший результат! Продолжайте практиковаться!" :
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