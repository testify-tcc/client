import "./ExerciseRenderer.scss";

import {
  Box,
  Button,
  ListItem,
  Select,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  UnorderedList,
} from "@chakra-ui/react";
import { Colors, FontFamilies, FontSizes } from "src/theme";
import {
  ExerciseFileContentMap,
  ExerciseFileSchemas,
} from "src/models/ExerciseFile.models";
import { useCallback, useEffect, useState } from "react";

import { CodeEditor } from "../CodeEditor";
import { ExerciseDefinition } from "src/models/Exercises.models";
import { ExerciseLink } from "../Links/ExerciseLink";
import { ExerciseRendererAriaLabels } from "./ExerciseRenderer.aria.labels";
import { ExerciseRendererLabels } from "./ExerciseRenderer.labels";
import { ExerciseUtils } from "src/utils/Exercises.utils";
import { RunnerFacade } from "src/resources/RunnerFacade";
import { TestingEnvironment } from "src/models/TestingEnvironments.models";
import { TestingEnvironmentUtils } from "src/utils/TestingEnvironment.utils";
import { useEffectOnlyOnDependenciesUpdate } from "src/hooks/useEffectOnlyOnDependenciesUpdate";

type Props = {
  exerciseDefinition: ExerciseDefinition;
};

export function ExerciseRenderer({ exerciseDefinition }: Props) {
  const [output, setOutput] = useState("");
  const [tabIndex, setTabIndex] = useState(0);
  const [isTestRunning, setIsTestRunning] = useState(false);
  const [fileSchemas, setFileSchemas] = useState<ExerciseFileSchemas>([]);
  const [fileContents, setFileContents] = useState<ExerciseFileContentMap>({});
  const [testingEnvironment, setTestingEnvironment] =
    useState<TestingEnvironment | null>(null);

  const getOutputTabIndex = useCallback(() => {
    return testingEnvironment
      ? exerciseDefinition.getNumberOfFiles(testingEnvironment)
      : 0;
  }, [exerciseDefinition, testingEnvironment]);

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

  const handleTestingEnvironmentChange = useCallback(
    (testingEnvironment: TestingEnvironment) => {
      setTestingEnvironment(testingEnvironment);
      setFileSchemas(exerciseDefinition.getFileSchemas(testingEnvironment));
    },
    [exerciseDefinition],
  );

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
    if (testingEnvironment) {
      const { output } = await RunnerFacade.runTestAndGetOutput({
        testingEnvironment,
        testCommand: exerciseDefinition.getTestCommand(testingEnvironment),
        files: ExerciseUtils.createFileList(fileSchemas, fileContents),
      });
      setOutput(output);
    }
    setIsTestRunning(false);
  }, [testingEnvironment, exerciseDefinition, fileSchemas, fileContents]);

  const openFirstTab = () => {
    setTabIndex(0);
  };

  const resetOutput = () => {
    setOutput("");
  };

  useEffect(() => {
    if (fileSchemas) {
      const initialFileEditContentDisabled: Record<string, boolean> = {};
      const initialFileContents: ExerciseFileContentMap = {};
      fileSchemas.forEach((fileSchema) => {
        initialFileContents[fileSchema.name] = fileSchema.initialContent;
        initialFileEditContentDisabled[fileSchema.name] =
          fileSchema.editDisabled ?? false;
      });
      setFileContents(initialFileContents);
    }
  }, [fileSchemas]);

  useEffectOnlyOnDependenciesUpdate(() => {
    if (output) {
      setTabIndex(getOutputTabIndex());
    }
  }, [output]);

  useEffect(() => {
    resetOutput();
    openFirstTab();
  }, [testingEnvironment]);

  useEffect(() => {
    const testingEnvironment =
      exerciseDefinition.getDefaultTestingEnvironment();

    if (testingEnvironment) {
      setTestingEnvironment(testingEnvironment);
      setFileSchemas(exerciseDefinition.getFileSchemas(testingEnvironment));
    }

    resetOutput();
    openFirstTab();
  }, [exerciseDefinition]);

  return (
    <Box className="exercise-container">
      {!exerciseDefinition.hasSubExercises() && (
        <Box className="exercise-actions-container">
          {exerciseDefinition.hasTestingEnvironments() && testingEnvironment && (
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
              {exerciseDefinition
                .getTestingEnvironments()
                .map((testingEnvironment) => {
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
            loadingText={ExerciseRendererLabels.RUN_TEST_BUTTON_LOADING}
            isLoading={isTestRunning}
            onClick={runTest}
          >
            {ExerciseRendererLabels.RUN_TEST_BUTTON}
          </Button>
        </Box>
      )}
      <Box className="exercise-content-container-wrapper">
        <Box className="exercise-content-container">
          <Box as="h1" className="exercise-title" fontSize={FontSizes.HEADING1}>
            {exerciseDefinition.getTitle()}
          </Box>
          {exerciseDefinition.getDescription() && (
            <Box
              as="p"
              className="exercise-description"
              fontSize={FontSizes.TEXT}
            >
              {exerciseDefinition.getDescription()}
            </Box>
          )}
          {exerciseDefinition.hasSubExercises() && (
            <Box className="exercise-sub-exercises-section">
              <Box as="h2" fontSize={FontSizes.HEADING2}>
                {ExerciseRendererLabels.SUB_EXERCISES_TITLE_SECTION}
              </Box>
              <UnorderedList className="exercise-sub-exercises-section-list">
                {exerciseDefinition
                  .getSubExerciseDefinitions()
                  .map((subExerciseDefinition) => (
                    <ListItem
                      key={`sub-exercise-list-item-${subExerciseDefinition.getId()}`}
                    >
                      <ExerciseLink
                        color={Colors.BLACK}
                        fontSize={FontSizes.TEXT}
                        fontFamily={FontFamilies.COMFORTAA}
                        label={subExerciseDefinition.getTitle()}
                        exerciseId={subExerciseDefinition.getId()}
                      />
                    </ListItem>
                  ))}
              </UnorderedList>
            </Box>
          )}
          {!exerciseDefinition.hasSubExercises() &&
            testingEnvironment &&
            fileSchemas.length && (
              <Tabs
                index={tabIndex}
                className="exercise-files"
                onChange={(index) => setTabIndex(index)}
              >
                <TabList className="exercise-file-names-list">
                  {fileSchemas.map((fileSchema) => (
                    <Tab
                      key={`tab-${fileSchema.name}`}
                      className="exercise-file-name"
                      fontSize={FontSizes.TEXT}
                    >
                      {fileSchema.name}
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
                      key={`tab-panel-${fileSchema.name}`}
                      className="exercise-file-content"
                      data-color-mode="dark"
                    >
                      <CodeEditor
                        disabled={fileSchema.editDisabled ?? false}
                        language={getCodeEditorLanguage(testingEnvironment)}
                        className="exercise-file-editor"
                        value={fileContents[fileSchema.name]}
                        onChange={(fileContent) => {
                          handleFileContentChange(fileSchema.name, fileContent);
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
