import { Exercise, ExerciseIds } from "src/models/Exercises.models";
import {
  javascriptJestCodeFileContent,
  javascriptJestTestingFileContent,
} from "./sampleExercise.contents";

import { ExerciseFileSchema } from "src/models/ExerciseFile.models";
import { TestingEnvironment } from "src/models/TestingEnvironments.models";

const exercise: Exercise = {
  id: ExerciseIds.SAMPLE,
  name: "Sample",
  defaultTestingEnvironment: TestingEnvironment.JAVASCRIPT_JEST,
  availableTestingEnvironments: [TestingEnvironment.JAVASCRIPT_JEST],
  description:
    "This is a sample exercise for you to get used to the platform. Write a simple test file (sample.test.js) to test the function sum.",
  getTestCommand: (testingEnvironment) => {
    const testCommandsBasedOnTestingEnvironment: Record<
      TestingEnvironment,
      string
    > = {
      [TestingEnvironment.JAVASCRIPT_JEST]: "jest",
    };
    return testCommandsBasedOnTestingEnvironment[testingEnvironment];
  },
  getFileSchemas: (testingEnvironment) => {
    const filesBasedOnTestingEnvironment: Record<
      TestingEnvironment,
      ExerciseFileSchema[]
    > = {
      [TestingEnvironment.JAVASCRIPT_JEST]: [
        {
          name: "sample.js",
          initialContent: javascriptJestCodeFileContent,
        },
        {
          name: "sample.test.js",
          initialContent: javascriptJestTestingFileContent,
        },
      ],
    };

    return filesBasedOnTestingEnvironment[testingEnvironment];
  },
};

export default exercise;
