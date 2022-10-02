import "./ExerciseDefinitionContent.scss";

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
  ExerciseFileContentMap,
  ExerciseFileSchemas,
  ExerciseFileType,
} from "src/models/ExerciseFile.models";
import { useCallback, useEffect, useMemo, useState } from "react";

import { CodeEditor } from "../CodeEditor";
import { ExerciseDefinition } from "src/models/Definitions.models";
import { ExerciseDefinitionContentLabels } from "./ExerciseDefinitionContent.labels";
import { ExerciseUtils } from "src/utils/Exercises.utils";
import { RunnerFacade } from "src/resources/RunnerFacade";
import { TestOutput } from "../TestOutput";
import { TestingEnvironment } from "src/models/TestingEnvironments.models";
import { TestingEnvironmentUtils } from "src/utils/TestingEnvironment.utils";
import { useEffectOnlyOnDependenciesUpdate } from "src/hooks/useEffectOnlyOnDependenciesUpdate";

type Props = {
  exerciseDefinition: ExerciseDefinition;
};

export function ExerciseDefinitionContent({ exerciseDefinition }: Props) {
  const [tabIndex, setTabIndex] = useState<number>(0);
  const [passed, setPassed] = useState<boolean>(false);
  const [output, setOutput] = useState<string | null>(null);
  const [isTestRunning, setIsTestRunning] = useState<boolean>(false);
  const [fileSchemas, setFileSchemas] = useState<ExerciseFileSchemas>([]);
  const [fileContents, setFileContents] = useState<ExerciseFileContentMap>({});
  const [testingEnvironment, setTestingEnvironment] =
    useState<TestingEnvironment>(exerciseDefinition.testEnvironments[0]);

  const outputTabIndex = useMemo((): number => {
    return exerciseDefinition.fileSchemasMap[testingEnvironment].length;
  }, [exerciseDefinition, testingEnvironment]);

  const openFirstTab = useCallback(() => {
    setTabIndex(0);
  }, []);

  const resetOutput = useCallback(() => {
    setOutput(null);
  }, []);

  const handleTestingEnvironmentChange = useCallback(
    (testingEnvironment: TestingEnvironment) => {
      setTestingEnvironment(testingEnvironment);
    },
    [],
  );

  const getCodeEditorLanguage = (testingEnvironment: TestingEnvironment) => {
    return ExerciseUtils.getLanguageFromTestingEnvironment(testingEnvironment);
  };

  const handleFileContentChange = (fileName: string, fileContent: string) => {
    setFileContents((oldFileContents) => {
      return {
        ...oldFileContents,
        [fileName]: fileContent,
      };
    });
  };

  const runTest = useCallback(async () => {
    setIsTestRunning(true);
    if (testingEnvironment) {
      const response = await RunnerFacade.runTestAndGetOutput({
        testingEnvironment,
        testCommand: exerciseDefinition.testCommandsMap[testingEnvironment],
        files: ExerciseUtils.createFileList(fileSchemas, fileContents),
      });
      setPassed(response.passed);
      setOutput(response.output);
    }
    setIsTestRunning(false);
  }, [testingEnvironment, exerciseDefinition, fileSchemas, fileContents]);

  useEffect(() => {
    if (fileSchemas) {
      const initialFileContents: ExerciseFileContentMap = {};
      fileSchemas.forEach((fileSchema) => {
        initialFileContents[fileSchema.fileName] = fileSchema.initialContent;
      });
      setFileContents(initialFileContents);
    }
  }, [fileSchemas]);

  useEffectOnlyOnDependenciesUpdate(() => {
    if (output) {
      setTabIndex(outputTabIndex);
    }
  }, [output]);

  useEffect(() => {
    resetOutput();
    openFirstTab();
  }, [openFirstTab, resetOutput, testingEnvironment]);

  useEffect(() => {
    setFileSchemas(exerciseDefinition.fileSchemasMap[testingEnvironment]);
    resetOutput();
    openFirstTab();
  }, [exerciseDefinition, openFirstTab, resetOutput, testingEnvironment]);

  return (
    <Box className="exercise-content-container">
      <Box className="exercise-actions-container">
        {exerciseDefinition.testEnvironments.length > 0 && testingEnvironment && (
          <Select
            size="lg"
            className="exercise-testing-environment-options"
            maxWidth="400px"
            value={testingEnvironment}
            onChange={(event) =>
              handleTestingEnvironmentChange(
                event.target.value as TestingEnvironment,
              )
            }
          >
            {exerciseDefinition.testEnvironments.map((testingEnvironment) => {
              return (
                <option
                  key={`testing-environment-${testingEnvironment}`}
                  value={testingEnvironment}
                >
                  {TestingEnvironmentUtils.getTestingEnvironmentLabel(
                    testingEnvironment,
                  )}
                </option>
              );
            })}
          </Select>
        )}
        <Button
          variant="solid"
          size="lg"
          className="exercise-run-test-button"
          colorScheme={Colors.PRIMARY}
          loadingText={ExerciseDefinitionContentLabels.RUN_TEST_BUTTON_LOADING}
          isLoading={isTestRunning}
          onClick={runTest}
        >
          {ExerciseDefinitionContentLabels.RUN_TEST_BUTTON}
        </Button>
      </Box>
      <Tabs
        index={tabIndex}
        className="exercise-files"
        onChange={(index) => setTabIndex(index)}
      >
        <TabList className="exercise-file-names-list">
          {fileSchemas.map((fileSchema) => (
            <Tab
              key={`tab-${fileSchema.fileName}`}
              className="exercise-file-name"
              fontSize={FontSizes.TEXT}
            >
              {fileSchema.fileName}
            </Tab>
          ))}
          {output && (
            <Tab fontSize={FontSizes.TEXT}>
              {ExerciseDefinitionContentLabels.OUTPUT_TAB}
            </Tab>
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
                  handleFileContentChange(fileSchema.fileName, fileContent);
                }}
              />
            </TabPanel>
          ))}
          {output && (
            <TabPanel className="exercise-output-container">
              <TestOutput output={output} passed={passed} />
            </TabPanel>
          )}
        </TabPanels>
      </Tabs>
    </Box>
  );
}
