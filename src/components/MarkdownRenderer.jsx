import React from "react";
import ReactMarkdown from "react-markdown";

const MarkdownRenderer = ({ markdown }) => {
  return (
    <div className="prose w-full max-w-none p-4">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
