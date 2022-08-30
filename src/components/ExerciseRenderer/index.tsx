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
} from "@chakra-ui/react";
import { Colors, FontSizes } from "src/theme";
import {
  ExerciseFileContents,
  ExerciseFileSchema,
} from "src/models/ExerciseFile.models";
import { useCallback, useEffect, useState } from "react";

import { CodeEditor } from "../CodeEditor";
import { Exercise } from "src/models/Exercises.models";
import { ExerciseRendererAriaLabels } from "./ExerciseRenderer.aria.labels";
import { ExerciseRendererLabels } from "./ExerciseRenderer.labels";
import { ExerciseUtils } from "src/utils/Exercises.utils";
import { RunnerFacade } from "src/resources/RunnerFacade";
import { TestingEnvironment } from "src/models/TestingEnvironments.models";
import { TestingEnvironmentUtils } from "src/utils/TestingEnvironment.utils";

type Props = {
  exercise: Exercise;
};

export function ExerciseRenderer({ exercise }: Props) {
  const [output, setOutput] = useState("");
  const [isTestRunning, setIsTestRunning] = useState(false);
  const [testingEnvironment, setTestingEnvironment] = useState(
    exercise.defaultTestingEnvironment,
  );
  const [fileSchemas, setFileSchemas] = useState<ExerciseFileSchema[]>(
    exercise.getFileSchemas(exercise.defaultTestingEnvironment),
  );
  const [fileContents, setFileContents] = useState<ExerciseFileContents>({});

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

  const getProcessedOutput = useCallback(() => {
    return output
      .split("\n")
      .filter((str) => str)
      .map((str, idx) => (
        <>
          <span>{str}</span>
          {idx !== output.length - 1 ? <br /> : null}
        </>
      ));
  }, [output]);

  const runTest = useCallback(async () => {
    setIsTestRunning(true);
    const testOutput = await RunnerFacade.runTestAndGetOutput(
      ExerciseUtils.createFileList(fileSchemas, fileContents),
    );
    setOutput(testOutput);
    setIsTestRunning(false);
  }, [fileSchemas, fileContents]);

  useEffect(() => {
    if (fileSchemas) {
      const initialFileContents: ExerciseFileContents = {};
      fileSchemas.forEach((fileSchema) => {
        initialFileContents[fileSchema.fileName] = fileSchema.initialContent;
      });
      setFileContents(initialFileContents);
      setFileSchemas(fileSchemas);
    }
  }, [fileSchemas]);

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
          isLoading={isTestRunning}
          onClick={runTest}
        >
          {ExerciseRendererLabels.RUN_TEST_BUTTON}
        </Button>
      </Box>
      <Box className="exercise-content-container-wrapper">
        <Box className="exercise-content-container">
          <Box as="h1" className="exercise-title" fontSize={FontSizes.HEADING1}>
            {exercise.name}
          </Box>
          {exercise.description && (
            <Box
              as="p"
              className="exercise-description"
              fontSize={FontSizes.TEXT}
            >
              {exercise.description}
            </Box>
          )}
          {fileSchemas.length && (
            <Tabs className="exercise-files">
              <TabList className="exercise-file-names-list">
                {fileSchemas.map((fileSchema) => (
                  <Tab
                    key={fileSchema.fileName}
                    className="exercise-file-name"
                    fontSize={FontSizes.TEXT}
                  >
                    {fileSchema.fileName}
                  </Tab>
                ))}
                {output && (
                  <Tab fontSize={FontSizes.TEXT}>
                    {ExerciseRendererLabels.OUTPUT_TAB}
                  </Tab>
                )}
              </TabList>
              <TabPanels className="exercise-file-contents">
                {fileSchemas.map((fileSchema) => (
                  <TabPanel
                    key={fileSchema.fileName}
                    className="exercise-file-content"
                    data-color-mode="dark"
                  >
                    <CodeEditor
                      language={getCodeEditorLanguage()}
                      className="exercise-file-editor"
                      value={fileContents[fileSchema.fileName]}
                      onChange={(fileContent) => {
                        handleFileContentChange(
                          fileSchema.fileName,
                          fileContent,
                        );
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
                      {getProcessedOutput()}
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
