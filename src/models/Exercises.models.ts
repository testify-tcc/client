export enum ExerciseIds {
  SAMPLE = "sample",
  SPECIFICATION_BASED_TESTING = "specification-based-testing",
  TEST_DRIVEN_DEVELOPMENT = "test-driven-development",
}

export type Exercise = {
  id: ExerciseIds;
  name: string;
};
