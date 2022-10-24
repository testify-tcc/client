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
  const [testPassed, setTestPassed] = useState<boolean>(false);
  const [testOutput, setTestOutput] = useState<string | null>(null);
  const [fileTabIndex, setFileTabIndex] = useState<number>(0);
  const [isTestRunning, setIsTestRunning] = useState<boolean>(false);
  const [fileSchemas, setFileSchemas] = useState<ExerciseFileSchemas>([]);
  const [fileContents, setFileContents] = useState<ExerciseFileContentMap>({});
  const [testingEnvironment, setTestingEnvironment] =
    useState<TestingEnvironment>(exerciseDefinition.testEnvironments[0]);

  const outputTabIndex = useMemo((): number => {
    return exerciseDefinition.fileSchemasMap[testingEnvironment]
      ? exerciseDefinition.fileSchemasMap[testingEnvironment].length
      : 0;
  }, [exerciseDefinition, testingEnvironment]);

  const openFirstFile = useCallback(() => {
    setFileTabIndex(0);
  }, []);

  const resetTestOutput = useCallback(() => {
    setTestOutput(null);
  }, []);

  const handleFileTabIndexChange = useCallback((filetTabIndex: number) => {
    setFileTabIndex(filetTabIndex);
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
      setTestPassed(response.passed);
      setTestOutput(response.output);
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
    if (testOutput) {
      setFileTabIndex(outputTabIndex);
    }
  }, [testOutput]);

  useEffect(() => {
    resetTestOutput();
    openFirstFile();
  }, [openFirstFile, resetTestOutput, testingEnvironment]);

  useEffect(() => {
    if (exerciseDefinition.fileSchemasMap[testingEnvironment]) {
      setFileSchemas(exerciseDefinition.fileSchemasMap[testingEnvironment]);
      resetTestOutput();
      openFirstFile();
    }
  }, [exerciseDefinition, openFirstFile, resetTestOutput, testingEnvironment]);

  useEffect(() => {
    setTestingEnvironment(exerciseDefinition.testEnvironments[0]);
  }, [exerciseDefinition.testEnvironments]);

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
        testOutput={testOutput}
        testPassed={testPassed}
        fileTabIndex={fileTabIndex}
        fileSchemas={fileSchemas}
        fileContents={fileContents}
        testingEnvironment={testingEnvironment}
        onFileTabIndexChange={handleFileTabIndexChange}
        onFileContentChange={handleFileContentChange}
        getCodeEditorLanguage={getCodeEditorLanguage}
      />
    </DefinitionRendererWrapper>
  );
}
