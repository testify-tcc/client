import "./MarkdownReader.scss";

import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

type Props = {
  children: string;
};

export function MarkdownReader({ children }: Props) {
  return (
    <ReactMarkdown remarkPlugins={[gfm]} className="markdown-reader">
      {children}
    </ReactMarkdown>
  );
}
