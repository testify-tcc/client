import { TestingEnvironmentLanguages } from "src/models/TestingEnvironments.models";
import UIWCodeEditor from "@uiw/react-textarea-code-editor";
import { useCallback } from "react";

export type CodeEditorProps = {
  value: string;
  onChange: (value: string) => void;
  language: TestingEnvironmentLanguages;
  className?: string;
};

export function CodeEditor(props: CodeEditorProps) {
  const getLanguage = useCallback(() => {
    const languages: Record<TestingEnvironmentLanguages, string> = {
      [TestingEnvironmentLanguages.JAVASCRIPT]: "js",
      [TestingEnvironmentLanguages.TYPESCRIPT]: "ts",
    };

    return languages[props.language];
  }, [props.language]);

  return (
    <UIWCodeEditor
      language={getLanguage()}
      className={props.className}
      value={props.value}
      onChange={(event) => {
        props.onChange(event.target.value);
      }}
      padding={15}
      style={{
        fontFamily:
          "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
        fontSize: 16,
      }}
    />
  );
}
