import { ExerciseFile } from "./ExerciseFile.models";
import { TestingEnvironment } from "./TestingEnvironments.models";

export type RunRequestBody = {
  files: ExerciseFile[];
  testingEnvironment: TestingEnvironment;
  testCommand: string;
};

export type RunRequestResponse = {
  passed: boolean;
  output: string;
};
