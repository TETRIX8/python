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
      const response = await fetch('https://api.python.org.ru/api/v1/execute', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          code: code
        }),
      });

      const data = await response.json();
      
      if (response.ok) {
        setOutput(data.output || 'Программа выполнена успешно!');
        toast({
          title: "Успех",
          description: "Код успешно выполнен",
        });
      } else {
        setOutput(data.error || 'Произошла ошибка при выполнении кода');
        toast({
          title: "Ошибка выполнения",
          description: data.error || 'Произошла ошибка при выполнении кода',
          variant: "destructive",
        });
      }
    } catch (error) {
      setOutput('Ошибка при выполнении кода. Пожалуйста, попробуйте позже.');
      toast({
        title: "Ошибка",
        description: "Не удалось выполнить код. Проверьте подключение к интернету.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-4 animate-fade-up">
      <Card className="p-4">
        <h2 className="text-2xl font-bold mb-4">Python Компилятор</h2>
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