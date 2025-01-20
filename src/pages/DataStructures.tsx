import { CodeBlock } from "@/components/CodeBlock";
import { QuizQuestion } from "@/components/QuizQuestion";
import { CodeQuestion } from "@/components/CodeQuestion";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DataStructures = () => {
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
          Списки, кортежи, словари
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
          Списки, кортежи, словари в Python
        </h1>
        
        <section className="prose lg:prose-xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-sm mb-8 animate-fade-up">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Типы структур данных
            </h2>
            <p className="text-gray-700 mb-4">
              В Python в зависимости от используемых скобок при создании переменной, будет создан определённый тип данных:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>( ) - кортеж</li>
              <li>[ ] - список</li>
              <li>{ } - словарь</li>
            </ul>

            <CodeBlock 
              code={`# Создание списка
shoppingList = ["Мороженое", "Пироженое", "Конфеты"]
print(shoppingList[1])  # Выведет: Пироженое

# Создание кортежа
coordinates = (10, 20)
print(coordinates[0])  # Выведет: 10

# Создание словаря
capitals = {"Россия": "Москва", "США": "Вашингтон"}
print(capitals["Россия"])  # Выведет: Москва`}
            />
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm mb-8 animate-fade-up">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Работа со списками
            </h2>
            <p className="text-gray-700 mb-4">
              Списки - это изменяемые последовательности, которые могут содержать элементы разных типов.
            </p>

            <CodeBlock 
              code={`# Создание и изменение списка
numbers = [1, 2, 3, 4, 5]
numbers[0] = 10  # Изменение элемента
numbers.append(6)  # Добавление элемента
numbers.remove(3)  # Удаление элемента
print(numbers)  # Выведет: [10, 2, 4, 5, 6]`}
            />
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm mb-8 animate-fade-up">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Работа с кортежами
            </h2>
            <p className="text-gray-700 mb-4">
              Кортежи - это неизменяемые последовательности. Они похожи на списки, но их нельзя изменять после создания.
            </p>

            <CodeBlock 
              code={`# Создание кортежа
point = (10, 20)
x, y = point  # Распаковка кортежа
print(f"X: {x}, Y: {y}")  # Выведет: X: 10, Y: 20`}
            />
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm mb-8 animate-fade-up">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Работа со словарями
            </h2>
            <p className="text-gray-700 mb-4">
              Словари - это структуры данных, которые хранят пары ключ-значение.
            </p>

            <CodeBlock 
              code={`# Создание и изменение словаря
user = {
    "name": "Алексей",
    "age": 25,
    "city": "Москва"
}
user["age"] = 26  # Изменение значения
user["email"] = "alex@example.com"  # Добавление новой пары
del user["city"]  # Удаление пары
print(user)`}
            />
          </div>
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8 animate-fade-up">
            Проверь свои знания
          </h2>

          <div className="space-y-6">
            <QuizQuestion
              question="Какие скобки используются для создания списка в Python?"
              options={["( )", "[ ]", "{ }", "< >"]}
              correctAnswer="[ ]"
              onAnswer={handleAnswer}
            />

            <QuizQuestion
              question="Можно ли изменять элементы кортежа после его создания?"
              options={["Да", "Нет", "Только числовые элементы", "Только строковые элементы"]}
              correctAnswer="Нет"
              onAnswer={handleAnswer}
            />

            <QuizQuestion
              question="Какой метод используется для добавления элемента в конец списка?"
              options={["add()", "append()", "insert()", "push()"]}
              correctAnswer="append()"
              onAnswer={handleAnswer}
            />

            <QuizQuestion
              question="Как получить значение из словаря по ключу 'name'?"
              options={["dict[name]", "dict('name')", "dict.name", "dict['name']"]}
              correctAnswer="dict['name']"
              onAnswer={handleAnswer}
            />

            <QuizQuestion
              question="Какой тип данных в Python является неизменяемым?"
              options={["Список", "Словарь", "Кортеж", "Множество"]}
              correctAnswer="Кортеж"
              onAnswer={handleAnswer}
            />

            <QuizQuestion
              question="Какой метод используется для сортировки списка?"
              options={["sort()", "order()", "arrange()", "organize()"]}
              correctAnswer="sort()"
              onAnswer={handleAnswer}
            />

            <QuizQuestion
              question="Что вернет len([1, 2, 3, 4, 5])?"
              options={["4", "5", "6", "Ошибку"]}
              correctAnswer="5"
              onAnswer={handleAnswer}
            />

            <QuizQuestion
              question="Как удалить элемент из списка по индексу?"
              options={["remove()", "del()", "pop()", "delete()"]}
              correctAnswer="del()"
              onAnswer={handleAnswer}
            />

            <QuizQuestion
              question="Что произойдет при попытке доступа к несуществующему ключу словаря?"
              options={["Вернется None", "Ничего", "KeyError", "ValueError"]}
              correctAnswer="KeyError"
              onAnswer={handleAnswer}
            />

            <QuizQuestion
              question="Какой метод используется для получения индекса элемента в списке?"
              options={["find()", "search()", "index()", "position()"]}
              correctAnswer="index()"
              onAnswer={handleAnswer}
            />

            <CodeQuestion
              question="Создайте список fruits со значениями 'apple', 'banana', 'orange'"
              correctAnswer="fruits = ['apple', 'banana', 'orange']"
              onAnswer={handleAnswer}
            />

            <CodeQuestion
              question="Создайте словарь person с ключами 'name' и 'age' и значениями 'John' и 25"
              correctAnswer="person = {'name': 'John', 'age': 25}"
              onAnswer={handleAnswer}
            />

            <CodeQuestion
              question="Создайте кортеж coordinates с значениями 10 и 20"
              correctAnswer="coordinates = (10, 20)"
              onAnswer={handleAnswer}
            />

            <CodeQuestion
              question="Напишите код для удаления элемента с ключом 'age' из словаря person"
              correctAnswer="del person['age']"
              onAnswer={handleAnswer}
            />

            <CodeQuestion
              question="Напишите код для добавления числа 100 в конец списка numbers"
              correctAnswer="numbers.append(100)"
              onAnswer={handleAnswer}
            />
          </div>

          {questionsAnswered === 15 && (
            <div className="mt-8 p-6 bg-white rounded-lg shadow-sm text-center animate-fade-up">
              <h3 className="text-2xl font-bold mb-4">
                Ваш результат: {score} из 15
              </h3>
              <p className="text-gray-600 mb-4">
                {score === 15 ? "Отлично! Вы отлично разбираетесь в структурах данных Python!" :
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

export default DataStructures;