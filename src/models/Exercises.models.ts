import { ExerciseFileSchema } from "./ExerciseFile.models";
import { TestingEnvironment } from "./TestingEnvironments.models";

export enum ExerciseIds {
  SAMPLE = "sample",
}

export type Exercise = {
  id: ExerciseIds;
  name: string;
  description?: string;
  defaultTestingEnvironment: TestingEnvironment;
  availableTestingEnvironments: TestingEnvironment[];
  getTestCommand: (testingEnvironment: TestingEnvironment) => string;
  getFileSchemas: (
    testingEnvironment: TestingEnvironment,
  ) => ExerciseFileSchema[];
};
