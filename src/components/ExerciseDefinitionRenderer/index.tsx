import {
  ExerciseFileContentMap,
  ExerciseFileSchemas,
} from "src/models/ExerciseFile.models";
import { useCallback, useEffect, useMemo, useState } from "react";

import { DefinitionRendererWrapper } from "../DefinitionRendererWrapper";
import { Divider } from "@chakra-ui/react";
import { ExerciseDefinition } from "src/models/Definitions.models";
import { ExerciseDefinitionActions } from "../ExerciseDefinitionsActions";
import { ExerciseDefinitionContent } from "../ExerciseDefinitionContent";
import { ExerciseDefinitionHeader } from "../ExerciseDefinitionHeader";
import { ExerciseUtils } from "src/utils/Exercises.utils";
import { RunnerFacade } from "src/resources/RunnerFacade";
import { TestingEnvironment } from "src/models/TestingEnvironments.models";
import { useEffectOnlyOnDependenciesUpdate } from "src/hooks/useEffectOnlyOnDependenciesUpdate";

type Props = {
  exerciseDefinition: ExerciseDefinition;
};

export function ExerciseDefinitionRenderer({
  exerciseDefinition,
}: Props): JSX.Element {
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

  const handleTabIndexChange = useCallback((tabIndex: number) => {
    setTabIndex(tabIndex);
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
    <DefinitionRendererWrapper>
      <ExerciseDefinitionActions
        exerciseDefinition={exerciseDefinition}
        onTestingEnvironmentChange={handleTestingEnvironmentChange}
        testingEnvironment={testingEnvironment}
        isTestRunning={isTestRunning}
        runTest={runTest}
      />
      <Divider orientation="horizontal" />
      <ExerciseDefinitionHeader
        exerciseDefinition={exerciseDefinition}
        testingEnvironment={testingEnvironment}
      />
      <Divider orientation="horizontal" />
      <ExerciseDefinitionContent
        output={output}
        passed={passed}
        tabIndex={tabIndex}
        fileSchemas={fileSchemas}
        fileContents={fileContents}
        testingEnvironment={testingEnvironment}
        onTabIndexChange={handleTabIndexChange}
        onFileContentChange={handleFileContentChange}
        getCodeEditorLanguage={getCodeEditorLanguage}
      />
    </DefinitionRendererWrapper>
  );
}
