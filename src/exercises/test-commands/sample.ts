import {
  TestingEnvironment,
  TestingEnvironmentTestCommands,
} from "src/models/TestingEnvironments.models";

import { ExerciseDefinitionTestCommandsMap } from "src/models/Exercises.models";

export const testCommandsMap: ExerciseDefinitionTestCommandsMap = {
  [TestingEnvironment.JAVASCRIPT_JEST]:
    TestingEnvironmentTestCommands.JAVASCRIPT_JEST,
};
