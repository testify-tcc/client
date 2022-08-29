import "./ExerciseRenderer.scss";

import {
  Box,
  Button,
  Select,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { Colors, FontSizes } from "src/theme";
import { useCallback, useEffect, useState } from "react";

import { CodeEditor } from "../CodeEditor";
import { Exercise } from "src/models/Exercises.models";
import { ExerciseRendererAriaLabels } from "./ExerciseRenderer.aria.labels";
import { ExerciseRendererLabels } from "./ExerciseRenderer.labels";
import { ExerciseUtils } from "src/utils/Exercises.utils";
import { TestingEnvironment } from "src/models/TestingEnvironments.models";
import { TestingEnvironmentUtils } from "src/utils/TestingEnvironment.utils";

type Props = {
  exercise: Exercise;
};

type FileContents = Record<string, string>;

export function ExerciseRenderer({ exercise }: Props) {
  const [output] = useState("");
  const [testingEnvironment, setTestingEnvironment] = useState(
    exercise.defaultTestingEnvironment,
  );
  const [files, setFiles] = useState(
    exercise.getFiles(exercise.defaultTestingEnvironment),
  );
  const [fileContents, setFileContents] = useState<FileContents>({});

  const getCodeEditorLanguage = useCallback(() => {
    return ExerciseUtils.getLanguageFromTestingEnvironment(testingEnvironment);
  }, [testingEnvironment]);

  const handleFileContentChange = (fileName: string, fileContent: string) => {
    setFileContents((oldFileContents) => {
      return {
        ...oldFileContents,
        [fileName]: fileContent,
      };
    });
  };

  const handleTestingEnvironmentChange = (
    testingEnvironment: TestingEnvironment,
  ) => {
    setTestingEnvironment(testingEnvironment);
  };

  useEffect(() => {
    if (files) {
      const initialFileContents: FileContents = {};
      files.forEach((file) => {
        initialFileContents[file.fileName] = file.content;
      });
      setFileContents(initialFileContents);
      setFiles(files);
    }
  }, [files]);

  return (
    <Box className="exercise-container">
      <Box className="exercise-actions-container">
        <Select
          size="lg"
          className="exercise-testing-environment-options"
          maxWidth="400px"
          onChange={(event) =>
            handleTestingEnvironmentChange(
              event.target.value as TestingEnvironment,
            )
          }
        >
          {exercise.availableTestingEnvironments.map((testingEnvironment) => {
            return (
              <option key={testingEnvironment} value={testingEnvironment}>
                {TestingEnvironmentUtils.getTestingEnvironmentLabel(
                  testingEnvironment,
                )}
              </option>
            );
          })}
        </Select>
        <Button
          variant="solid"
          size="lg"
          className="exercise-run-test-button"
          colorScheme={Colors.PRIMARY}
          loadingText={ExerciseRendererLabels.RUN_TEST_BUTTON_LOADING}
        >
          {ExerciseRendererLabels.RUN_TEST_BUTTON}
        </Button>
      </Box>
      <Box className="exercise-content-container-wrapper">
        <Box className="exercise-content-container">
          <Text className="exercise-title" fontSize={FontSizes.HEADING1}>
            {exercise.name}
          </Text>
          {exercise.description && (
            <Text className="exercise-description" fontSize={FontSizes.TEXT}>
              {exercise.description}
            </Text>
          )}
          {files.length && (
            <Tabs className="exercise-files">
              <TabList className="exercise-file-names-list">
                {files.map((file) => (
                  <Tab
                    key={file.fileName}
                    className="exercise-file-name"
                    fontSize={FontSizes.TEXT}
                  >
                    {file.fileName}
                  </Tab>
                ))}
                {output && (
                  <Tab fontSize={FontSizes.TEXT}>
                    {ExerciseRendererLabels.OUTPUT_TAB}
                  </Tab>
                )}
              </TabList>
              <TabPanels className="exercise-file-contents">
                {files.map((file) => (
                  <TabPanel
                    key={file.fileName}
                    className="exercise-file-content"
                    data-color-mode="dark"
                  >
                    <CodeEditor
                      language={getCodeEditorLanguage()}
                      className="exercise-file-editor"
                      value={fileContents[file.fileName]}
                      onChange={(fileContent) => {
                        handleFileContentChange(file.fileName, fileContent);
                      }}
                    />
                  </TabPanel>
                ))}
                {output && (
                  <TabPanel className="exercise-output-container">
                    <Box
                      className="exercise-output-text"
                      aria-label={ExerciseRendererAriaLabels.OUTPUT_TEXT}
                    >
                      {output}
                    </Box>
                  </TabPanel>
                )}
              </TabPanels>
            </Tabs>
          )}
        </Box>
      </Box>
    </Box>
  );
}
