import { Box, Button, Select } from "@chakra-ui/react";

import { Colors } from "src/theme";
import { ExerciseDefinition } from "src/models/Definitions.models";
import { ExerciseDefinitionActionsLabels } from "./ExerciseDefinitionsActions.labels";
import { TestingEnvironment } from "src/models/TestingEnvironments.models";
import { TestingEnvironmentUtils } from "src/utils/TestingEnvironment.utils";

type Props = {
  exerciseDefinition: ExerciseDefinition;
  testingEnvironment: TestingEnvironment;
  onTestingEnvironmentChange: (testingEnvironment: TestingEnvironment) => void;
  runTest: () => void;
  isTestRunning: boolean;
};

export function ExerciseDefinitionActions({
  exerciseDefinition,
  testingEnvironment,
  onTestingEnvironmentChange,
  runTest,
  isTestRunning,
}: Props): JSX.Element {
  return (
    <Box className="exercise-actions-container">
      {exerciseDefinition.testEnvironments.length > 0 && testingEnvironment && (
        <Select
          size="lg"
          className="exercise-testing-environment-options"
          maxWidth="400px"
          value={testingEnvironment}
          onChange={(event) =>
            onTestingEnvironmentChange(event.target.value as TestingEnvironment)
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
        loadingText={ExerciseDefinitionActionsLabels.RUN_TEST_BUTTON_LOADING}
        isLoading={isTestRunning}
        onClick={runTest}
      >
        {ExerciseDefinitionActionsLabels.RUN_TEST_BUTTON}
      </Button>
    </Box>
  );
}
