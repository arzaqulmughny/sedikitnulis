"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer = ({ content }: MarkdownRendererProps) => {
  return (
    <div className="max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        children={content}
        components={{
          h1: ({ children }) => (
            <h1 className="text-lg font-bold text-heading-black mb-2 mt-4 lg:text-xl">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-md lg:text-xl font-bold text-heading-black mb-2 mt-4">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-md lg:text-lg font-bold text-heading-black mb-2 mt-6">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-base font-bold text-heading-black mt-4 mb-2">
              {children}
            </h4>
          ),
          p: ({ children }) => (
            <p className="text-paragraph leading-relaxed mb-4 text-xs lg:text-sm">{children}</p>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              className="text-primary hover:text-primary-dark underline underline-offset-2 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),
          strong: ({ children }) => (
            <strong className="font-bold text-paragraph">{children}</strong>
          ),
          em: ({ children }) => (
            <em className="italic text-paragraph">{children}</em>
          ),
          ul: ({ children }) => (
            <ul className="list-disc list-inside text-paragraph mb-4 space-y-1">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside text-paragraph mb-4 space-y-1">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="text-paragraph leading-relaxed">{children}</li>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-primary pl-4 py-1 bg-primary-muted rounded-r-md text-paragraph italic mt-8 mb-8 text-xs lg:text-sm">
              {children}
            </blockquote>
          ),
          code: ({ className, children, ...props }) => {
            const isInline = !className;
            if (isInline) {
              return (
                <code
                  className="bg-bg-gray text-paragraph px-1.5 py-0.5 rounded text-sm font-mono"
                  {...props}
                >
                  {children}
                </code>
              );
            }
            return (
              <code className={`${className || ""} font-mono text-xs`} {...props}>
                {children}
              </code>
            );
          },
          pre: ({ children }) => (
            <pre className="bg-[#0d1117] rounded-lg p-4 my-4 overflow-x-auto text-sm leading-relaxed">
              {children}
            </pre>
          ),
          hr: () => <hr className="border-card-border my-6" />,
          table: ({ children }) => (
            <div className="overflow-x-auto my-4">
              <table className="min-w-full border border-card-border rounded-lg overflow-hidden">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-bg-gray">{children}</thead>
          ),
          th: ({ children }) => (
            <th className="px-4 py-2 text-left text-xs font-semibold text-paragraph border-b border-card-border">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="px-4 py-2 text-paragraph border-b border-card-border text-xs lg:text-sm">
              {children}
            </td>
          ),
          img: ({ src, alt }) => (
            <img
              src={src}
              alt={alt || ""}
              className="max-w-full h-auto rounded-lg my-4"
            />
          ),
        }}
      />
    </div>
  );
};

export default MarkdownRenderer;
