import "./ExerciseDefinitionContent.scss";

import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import {
  ExerciseFileContentMap,
  ExerciseFileSchemas,
  ExerciseFileType,
} from "src/models/ExerciseFile.models";
import {
  TestingEnvironment,
  TestingEnvironmentLanguages,
} from "src/models/TestingEnvironments.models";

import { CodeEditor } from "../CodeEditor";
import { ExerciseDefinitionContentLabels } from "./ExerciseDefinitionContent.labels";
import { TestOutput } from "../TestOutput";

type Props = {
  testPassed: boolean;
  fileTabIndex: number;
  testOutput: string | null;
  fileSchemas: ExerciseFileSchemas;
  fileContents: ExerciseFileContentMap;
  testingEnvironment: TestingEnvironment;
  onFileTabIndexChange: (fileTabIndex: number) => void;
  onFileContentChange: (fileName: string, fileContent: string) => void;
  getCodeEditorLanguage: (
    testingEnvironment: TestingEnvironment,
  ) => TestingEnvironmentLanguages;
};

export function ExerciseDefinitionContent({
  testPassed,
  testOutput,
  fileTabIndex,
  fileSchemas,
  fileContents,
  testingEnvironment,
  onFileTabIndexChange,
  onFileContentChange,
  getCodeEditorLanguage,
}: Props) {
  return (
    <Box className="exercise-content-container">
      <Tabs
        index={fileTabIndex}
        className="exercise-files"
        onChange={onFileTabIndexChange}
      >
        <TabList className="exercise-file-names-list">
          {fileSchemas.map((fileSchema) => (
            <Tab
              key={`tab-${fileSchema.fileName}`}
              className="exercise-file-name"
            >
              {fileSchema.fileName}
            </Tab>
          ))}
          {testOutput && (
            <Tab>{ExerciseDefinitionContentLabels.TEST_OUTPUT_TAB}</Tab>
          )}
        </TabList>
        <TabPanels className="exercise-file-contents">
          {fileSchemas.map((fileSchema) => (
            <TabPanel
              key={`tab-panel-${fileSchema.fileName}`}
              className="exercise-file-content"
              data-color-mode="dark"
            >
              <CodeEditor
                disabled={fileSchema.type == ExerciseFileType.CODE}
                language={getCodeEditorLanguage(testingEnvironment)}
                className="exercise-file-editor"
                value={fileContents[fileSchema.fileName]}
                onChange={(fileContent) => {
                  onFileContentChange(fileSchema.fileName, fileContent);
                }}
              />
            </TabPanel>
          ))}
          {testOutput && (
            <TabPanel className="exercise-output-container">
              <TestOutput output={testOutput} passed={testPassed} />
            </TabPanel>
          )}
        </TabPanels>
      </Tabs>
    </Box>
  );
}
