import { ExerciseFile } from "./ExerciseFile.models";
import { TestingEnvironment } from "./TestingEnvironments.models";

export enum ExerciseIds {
  SAMPLE = "sample",
  SPECIFICATION_BASED_TESTING = "specification-based-testing",
  TEST_DRIVEN_DEVELOPMENT = "test-driven-development",
}

export type Exercise = {
  id: ExerciseIds;
  name: string;
  description?: string;
  defaultTestingEnvironment: TestingEnvironment;
  availableTestingEnvironments: TestingEnvironment[];
  getFiles: (testingEnvironment: TestingEnvironment) => ExerciseFile[];
};
