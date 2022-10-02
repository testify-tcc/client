import "./DefinitionDescription.scss";

import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

type Props = {
  children: string;
};

export function DefinitionDescription({ children }: Props) {
  return (
    <ReactMarkdown remarkPlugins={[gfm]} className="definition-description">
      {children}
    </ReactMarkdown>
  );
}
