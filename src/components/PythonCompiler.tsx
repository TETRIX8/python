import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

export const PythonCompiler = () => {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');

  const runCode = async () => {
    try {
      // Here we would integrate with a Python execution service
      // For now, we'll just show a placeholder message
      setOutput('Python execution is coming soon!\nYour code:\n' + code);
    } catch (error) {
      setOutput('Error executing code');
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-4 animate-fade-up">
      <Card className="p-4">
        <h2 className="text-2xl font-bold mb-4">Python Compiler</h2>
        <Textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Write your Python code here..."
          className="min-h-[200px] font-mono"
        />
        <Button 
          onClick={runCode}
          className="mt-4"
        >
          Run Code
        </Button>
        {output && (
          <div className="mt-4 p-4 bg-gray-100 rounded-md">
            <pre className="whitespace-pre-wrap">{output}</pre>
          </div>
        )}
      </Card>
    </div>
  );
};