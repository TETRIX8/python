import { Card } from "@/components/ui/card";

interface CodeBlockProps {
  code: string;
  description?: string;
}

export const CodeBlock = ({ code, description }: CodeBlockProps) => {
  return (
    <div className="my-6 animate-fade-up">
      <Card className="bg-gray-900 p-4 rounded-lg">
        <pre className="text-white font-mono text-sm whitespace-pre-wrap">
          {code}
        </pre>
      </Card>
      {description && (
        <p className="text-gray-600 mt-2 text-sm">{description}</p>
      )}
    </div>
  );
};