import { TopicCard } from "@/components/TopicCard";

const Topics = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8 animate-fade-up">
          Изучаем Python
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <TopicCard
            title="Переменные"
            description="Узнайте, как работать с переменными в Python"
            path="/variables"
          />
          <TopicCard
            title="Строки"
            description="Изучите работу со строками в Python"
            path="/strings"
          />
        </div>
      </div>
    </div>
  );
};

export default Topics;