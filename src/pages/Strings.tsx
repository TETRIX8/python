import { CodeBlock } from "@/components/CodeBlock";

const Strings = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8 animate-fade-up">
          Строки в Python
        </h1>

        <section className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-sm mb-8 animate-fade-up">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Что такое строки?
            </h2>
            <p className="text-gray-700 mb-4">
              Строки в Python — это последовательности символов, заключённые в кавычки. Они могут быть одинарными (`'`) или двойными (`"`).
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
              Многострочные строки
            </h2>
            <CodeBlock 
              code={`food = '''В школе KiberOne ученики едят на полдник бананы
А что едят на полдник динозавры?'''
print(food)`}
            />
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm mb-8 animate-fade-up">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Специальные символы
            </h2>
            <CodeBlock 
              code={`# Перенос строки
print("aaa \\n bbb")

# Табуляция
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

# Старый способ
print("Мое имя %s, мне %d, и мой средний балл %.2f" % (name, old, grade))

# Метод format
print("Этого кота зовут {0}, а этого пса зовут {1}".format("Шарик", "Мурзик"))

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
      </div>
    </div>
  );
};

export default Strings;