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
  const [isAccessGranted, setIsAccessGranted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const currentDate = new Date();
    const accessDate = new Date(2025, 0, 20); // January 20, 2025

    if (currentDate >= accessDate) {
      setIsAccessGranted(true);
    }

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

  if (!isAccessGranted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center space-y-4 bg-gray-900">
        <h1 className="text-4xl font-bold text-white animate-fade-in">
          Доступ к контенту откроется 20 января 2025 года
        </h1>
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
              Строки в Python — это последовательности символов, которые можно использовать для хранения и работы с текстовыми данными. 
              Они заключаются в одинарные (') или двойные (") кавычки. Это делает строки удобными для работы с текстом любого типа — от простых предложений до сложных форматов.
            </p>
            <p className="text-gray-700 mb-4">
              Например, строка может быть описана так:
            </p>

            <CodeBlock 
              code={`foodForChildren = "В школе KiberOne ученики едят на полдник бананы"
foodForDinosaurus = 'А что едят на полдник динозавры?'

print(foodForChildren)  # Выводит: В школе KiberOne ученики едят на полдник бананы
print(foodForDinosaurus)  # Выводит: А что едят на полдник динозавры?`}
            />
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm mb-8 animate-fade-up">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Длинные строки (многострочный текст)
            </h2>
            <p className="text-gray-700 mb-4">
              Иногда текст слишком длинный, чтобы писать его в одной строке. В таких случаях используют тройные кавычки (''' или """).
              Это позволяет записывать многострочные строки, которые удобно читать и редактировать.
            </p>
            <p className="text-gray-700 mb-4">
              Вот пример:
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
            <p className="text-gray-700 mb-4">
              Внутри строк можно использовать специальные символы, которые дают дополнительные возможности:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>\n — перенос строки.</li>
              <li>\t — табуляция (вставляет отступ).</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Например:
            </p>

            <CodeBlock 
              code={`# \n - перенос на следующую строку
print("aaa \n bbb")

# \t - табуляция (4 пробела)
print("aaa \t bbb")`}
            />
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm mb-8 animate-fade-up">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Форматирование строк
            </h2>
            <p className="text-gray-700 mb-4">
              Форматирование позволяет включать значения переменных в строки. 
              Вы можете использовать старый метод с оператором %, метод <code>format()</code> или современные f-строки, которые наиболее удобны.
            </p>
            <p className="text-gray-700 mb-4">
              Вот примеры разных способов форматирования:
            </p>

            <CodeBlock 
              code={`name = "Александр"
old = 22
grade = 4.5

# Старый способ с %
print("Мое имя %s, мне %d, и мой средний балл %.2f" % (name, old, grade))

# Современный способ (f-строки)
print(f"Привет, {name}! Тебе {old} лет.")`}
            />
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm mb-8 animate-fade-up">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Срезы строк
            </h2>
            <p className="text-gray-700 mb-4">
              Срезы дают возможность извлекать части строки. Вы задаете начальный индекс, конечный индекс и шаг.
              Это мощный инструмент для обработки текстов и анализа данных.
            </p>
            <p className="text-gray-700 mb-4">
              Например, вы можете извлечь часть строки, взять каждый второй символ или даже перевернуть строку:
            </p>

            <CodeBlock 
              code={`myString = "kiberOne"
print(myString[3:6])    # Символы с 3 по 5: 'erO'
print(myString[1:9:2])  # Каждый второй символ с 1 по 8: 'ieOe'
print(myString[::-1])   # Строка в обратном порядке: 'enOrebik'`}
            />
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm mb-8 animate-fade-up">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Экранирование символов
            </h2>
            <p className="text-gray-700 mb-4">
              Предположим, нам потребовалось вывести в консоль предложение с прямой речью, например такое:
            </p>

            <CodeBlock 
              code={`# Ошибка из-за одиночной кавычки
print('"Тут что-то не так, не будь я Д'Артаньян" - подумал он.')`}
            />

            <p className="text-gray-700 mb-4">
              Просто так мы не можем ее ввести, потому что у в середине предложения есть одиночная кавычка. Python думает, что строка (тип данных), заканчивается на этой строке, а дальше он не может определить что написано. В таких случаях используют экранирование:
            </p>

            <CodeBlock 
              code={`# Правильный способ с экранированием использовать 

                print('"Тут что-то не так, не будь я Д/'Артаньян" - подумал он.')`}
            />
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm mb-8 animate-fade-up">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Обращение к символам строки по индексу
            </h2>
            <p className="text-gray-700 mb-4">
              Мы можем обратиться к определенному символу строки, указав его индекс в квадратных скобках. Например:
            </p>

            <CodeBlock 
              code={`myString = "kiberOne"

print(myString[2])  # Выводит: b`}
            />

            <p className="text-gray-700 mb-4">
              Как можно заметить, символы в строке нумеруются с нуля:
            </p>

            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>k - [0]</li>
              <li>i - [1]</li>
              <li>b - [2]</li>
              <li>...</li>
            </ul>

            <CodeBlock 
              code={`print(myString[0])  # Выводит: k`}
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
              options={["n", "t", "r", "s"]}
              correctAnswer="n"
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
              options={["t", "n", "r", "s"]}
              correctAnswer="t"
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