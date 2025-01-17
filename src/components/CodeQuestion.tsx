import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface CodeQuestionProps {
  question: string;
  correctAnswer: string;
  onAnswer: (isCorrect: boolean) => void;
}

export const CodeQuestion = ({ question, correctAnswer, onAnswer }: CodeQuestionProps) => {
  const [answer, setAnswer] = useState("");
  const [hasAnswered, setHasAnswered] = useState(false);

  const handleSubmit = () => {
    if (!hasAnswered) {
      setHasAnswered(true);
      onAnswer(answer.trim() === correctAnswer.trim());
    }
  };

  return (
    <div className="mb-6 p-4 bg-white rounded-lg shadow-sm animate-fade-up">
      <p className="text-lg font-medium mb-4 text-gray-800">{question}</p>
      <div className="space-y-4">
        <Input
          value={answer}
          onChange={(e) => !hasAnswered && setAnswer(e.target.value)}
          placeholder="Введите ваш ответ"
          className="font-mono"
          disabled={hasAnswered}
        />
        <Button 
          onClick={handleSubmit}
          disabled={hasAnswered}
          className="w-full"
        >
          Проверить
        </Button>
        {hasAnswered && (
          <p className={`text-sm ${answer.trim() === correctAnswer.trim() ? 'text-green-600' : 'text-red-600'}`}>
            {answer.trim() === correctAnswer.trim() ? 'Правильно!' : `Неправильно. Правильный ответ: ${correctAnswer}`}
          </p>
        )}
      </div>
    </div>
  );
};