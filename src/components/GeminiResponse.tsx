import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Card } from "./ui/card";

interface GeminiResponseProps {
  content: string;
}

export const GeminiResponse = ({ content }: GeminiResponseProps) => {
  return (
    <Card className="p-6 my-4 bg-white shadow-sm">
      <ReactMarkdown
        components={{
          h1: ({ children }) => <h1 className="text-3xl font-bold mb-4">{children}</h1>,
          h2: ({ children }) => <h2 className="text-2xl font-bold mb-3">{children}</h2>,
          h3: ({ children }) => <h3 className="text-xl font-bold mb-2">{children}</h3>,
          p: ({ children }) => <p className="mb-4 text-gray-700">{children}</p>,
          code: ({ node, inline, className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                style={dracula}
                language={match[1]}
                PreTag="div"
                className="rounded-md my-4"
                {...props}
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code className="bg-gray-100 rounded px-1" {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </Card>
  );
};