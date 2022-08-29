import { ExerciseIds } from "src/models/Exercises.models";
import { TestingEnvironment } from "src/models/TestingEnvironments.models";

export const dummyString = "dummy";

export const exerciseProps = {
  id: dummyString as ExerciseIds,
  name: dummyString,
  availableTestingEnvironments: [],
  defaultTestingEnvironment: dummyString as TestingEnvironment,
  getFiles: () => [],
};
