import {
  ExerciseDefinition,
  ExerciseDefinitionParams,
  ExerciseIds,
} from "src/models/Exercises.models";

import { dummyString } from "test/commonProps";
import { mockExerciseFileSchemas } from "./exerciseFileSchemas";
import { mockTestingEnvironment } from "./testingEnvironment";

const mockParams: ExerciseDefinitionParams = {
  id: dummyString as ExerciseIds,
  title: dummyString,
  description: dummyString,
  availableTestingEnvironments: [mockTestingEnvironment],
  defaultTestingEnvironment: mockTestingEnvironment,
  fileSchemasMap: {
    [mockTestingEnvironment]: mockExerciseFileSchemas,
  },
  testCommandsMap: {
    [mockTestingEnvironment]: dummyString,
  },
};

export const mockExerciseDefinition = new ExerciseDefinition(mockParams);
