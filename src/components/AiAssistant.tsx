import React, { useState } from 'react';
import { Bot, X } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { GeminiResponse } from './GeminiResponse';
import { getGeminiResponse } from '@/utils/gemini';
import { useToast } from './ui/use-toast';
import { Loader2 } from 'lucide-react';

export const AiAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, введите вопрос",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const result = await getGeminiResponse(prompt);
      setResponse(result);
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось получить ответ от AI",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-12 h-12 flex items-center justify-center bg-primary hover:bg-primary/90"
        >
          <Bot className="h-6 w-6" />
        </Button>
      ) : (
        <Card className="w-[350px] p-4 shadow-lg animate-fade-up">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">Python Помощник</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                setIsOpen(false);
                setResponse('');
                setPrompt('');
              }}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Задайте вопрос о Python..."
              className="w-full"
            />
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Загрузка...
                </>
              ) : (
                "Отправить"
              )}
            </Button>
          </form>

          {response && (
            <div className="mt-4 max-h-[400px] overflow-y-auto">
              <GeminiResponse content={response} />
            </div>
          )}
        </Card>
      )}
    </div>
  );
};