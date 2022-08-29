import { Exercise, ExerciseIds } from "src/models/Exercises.models";

import { ExerciseFile } from "src/models/ExerciseFile.models";
import { TestingEnvironment } from "src/models/TestingEnvironments.models";

const codeFileContent = `
'use strict';

function sum(a, b) {
  return a + b;
}

module.exports = { sum };
`.trim();

const testingFileContent = `
'use strict';

const { sum } = require('./sample.js');

test('should return proper result', () => {
  expect(sum(1, 1)).toBe(2);
});
`.trim();

const exercise: Exercise = {
  id: ExerciseIds.SAMPLE,
  name: "Sample",
  defaultTestingEnvironment: TestingEnvironment.JAVASCRIPT_JEST,
  availableTestingEnvironments: [TestingEnvironment.JAVASCRIPT_JEST],
  description:
    "This is a sample exercise for you to get used to the platform. Write a simple test file (sample.test.js) to test the function sum.",
  getFiles: (testingEnvironment) => {
    const filesBasedOnTestingEnvironment: Record<
      TestingEnvironment,
      ExerciseFile[]
    > = {
      [TestingEnvironment.JAVASCRIPT_JEST]: [
        {
          fileName: "sample.js",
          content: codeFileContent,
        },
        {
          fileName: "sample.test.js",
          content: testingFileContent,
        },
      ],
    };

    return filesBasedOnTestingEnvironment[testingEnvironment];
  },
};

export default exercise;
