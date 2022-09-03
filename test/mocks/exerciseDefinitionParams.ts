import {
  ExerciseDefinitionParams,
  ExerciseIds,
} from "src/models/Exercises.models";

import { dummyString } from "test/commonProps";
import { mockExerciseFileSchemas } from "./exerciseFileSchemas";
import { mockTestingEnvironment } from "./testingEnvironment";

export const mockExerciseDefinitionParams: ExerciseDefinitionParams = {
  id: dummyString as ExerciseIds,
  title: dummyString,
  description: dummyString,
  testingEnvironments: [mockTestingEnvironment],
  fileSchemasMap: {
    [mockTestingEnvironment]: mockExerciseFileSchemas,
  },
  testCommandsMap: {
    [mockTestingEnvironment]: dummyString,
  },
};
