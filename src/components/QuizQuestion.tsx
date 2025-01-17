import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface QuizQuestionProps {
  question: string;
  options: string[];
  correctAnswer: string;
  onAnswer: (isCorrect: boolean) => void;
}

export const QuizQuestion = ({ question, options, correctAnswer, onAnswer }: QuizQuestionProps) => {
  const [selected, setSelected] = useState<string>("");
  const [hasAnswered, setHasAnswered] = useState(false);

  const handleChange = (value: string) => {
    if (!hasAnswered) {
      setSelected(value);
      setHasAnswered(true);
      onAnswer(value === correctAnswer);
    }
  };

  return (
    <div className="mb-6 p-4 bg-white rounded-lg shadow-sm animate-fade-up">
      <p className="text-lg font-medium mb-4 text-gray-800">{question}</p>
      <RadioGroup value={selected} onValueChange={handleChange}>
        <div className="space-y-3">
          {options.map((option) => (
            <div key={option} className="flex items-center space-x-2">
              <RadioGroupItem value={option} id={option} />
              <Label htmlFor={option} className={`${
                hasAnswered && option === correctAnswer ? 'text-green-600 font-medium' :
                hasAnswered && option === selected ? 'text-red-600' : ''
              }`}>
                {option}
              </Label>
            </div>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
};