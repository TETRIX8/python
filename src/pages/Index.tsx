import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { GeminiResponse } from "@/components/GeminiResponse";
import { getGeminiResponse } from "@/utils/gemini";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";

const Index = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
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
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-primary">Python Assistant</h1>
        
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="flex gap-4">
            <Input
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Задайте вопрос о Python..."
              className="flex-1"
            />
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Загрузка...
                </>
              ) : (
                "Отправить"
              )}
            </Button>
          </div>
        </form>

        {response && <GeminiResponse content={response} />}
      </div>
    </div>
  );
};

export default Index;