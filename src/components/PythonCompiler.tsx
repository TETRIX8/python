import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";

export const PythonCompiler = () => {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const runCode = async () => {
    if (!code.trim()) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, введите код для выполнения",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

      const response = await fetch('https://api.codex.jaagrav.in/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          code: code,
          language: "py",
          input: "" // Explicitly setting empty input
        }),
        signal: controller.signal
      });

      clearTimeout(timeoutId);
      
      const data = await response.json();
      
      if (response.ok) {
        if (data.error) {
          setOutput(data.error);
          toast({
            title: "Ошибка выполнения",
            description: "В коде обнаружена ошибка",
            variant: "destructive",
          });
        } else {
          setOutput(data.output || 'Программа выполнена успешно!');
          toast({
            title: "Успех",
            description: "Код успешно выполнен",
          });
        }
      } else {
        setOutput('Произошла ошибка при выполнении кода');
        toast({
          title: "Ошибка выполнения",
          description: "Произошла ошибка при выполнении кода",
          variant: "destructive",
        });
      }
    } catch (error) {
      if (error.name === 'AbortError') {
        setOutput('Превышено время выполнения кода (10 секунд)');
        toast({
          title: "Ошибка",
          description: "Время выполнения кода превышено",
          variant: "destructive",
        });
      } else {
        setOutput('Ошибка при выполнении кода. Пожалуйста, попробуйте позже.');
        toast({
          title: "Ошибка",
          description: "Не удалось выполнить код. Проверьте подключение к интернету.",
          variant: "destructive",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-4 animate-fade-up">
      <Card className="p-4">
        <h2 className="text-2xl font-bold mb-4">Python Компилятор</h2>
        <div className="mb-4">
          <p className="text-sm text-gray-600">
            Примечание: Компилятор не поддерживает функции ввода (input()). 
            Пожалуйста, используйте предопределенные значения в вашем коде.
          </p>
        </div>
        <Textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Напишите ваш Python код здесь..."
          className="min-h-[200px] font-mono"
        />
        <Button 
          onClick={runCode}
          className="mt-4"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Выполняется...
            </>
          ) : (
            'Запустить код'
          )}
        </Button>
        {output && (
          <div className="mt-4 p-4 bg-gray-100 rounded-md">
            <pre className="whitespace-pre-wrap font-mono">{output}</pre>
          </div>
        )}
      </Card>
    </div>
  );
};