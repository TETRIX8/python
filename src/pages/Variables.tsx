import { CodeBlock } from "@/components/CodeBlock";

const Variables = () => {
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
        </section>
      </div>
    </div>
  );
};

export default Variables;