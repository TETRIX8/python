import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { HelpCircle } from "lucide-react";

interface CodeQuestionProps {
  question: string;
  correctAnswer: string;
  hint?: string;
  onAnswer: (isCorrect: boolean) => void;
}

export const CodeQuestion = ({ question, correctAnswer, hint, onAnswer }: CodeQuestionProps) => {
  const [answer, setAnswer] = useState("");
  const [hasAnswered, setHasAnswered] = useState(false);

  const normalizeCode = (code: string) => {
    return code.replace(/\s*=\s*/g, '=').trim();
  };

  const handleSubmit = () => {
    if (!hasAnswered) {
      setHasAnswered(true);
      const normalizedAnswer = normalizeCode(answer);
      const normalizedCorrect = normalizeCode(correctAnswer);
      onAnswer(normalizedAnswer === normalizedCorrect);
    }
  };

  return (
    <div className="mb-6 p-4 bg-white rounded-lg shadow-sm animate-fade-up">
      <div className="flex items-start justify-between mb-4">
        <p className="text-lg font-medium text-gray-800">{question}</p>
        {hint && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-6 w-6">
                  <HelpCircle className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-sm">{hint}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
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
          <p className={`text-sm ${normalizeCode(answer) === normalizeCode(correctAnswer) ? 'text-green-600' : 'text-red-600'}`}>
            {normalizeCode(answer) === normalizeCode(correctAnswer) ? 'Правильно!' : `Неправильно. Правильный ответ: ${correctAnswer}`}
          </p>
        )}
      </div>
    </div>
  );
};