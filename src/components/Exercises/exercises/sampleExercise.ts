import { Exercise, ExerciseIds } from "src/models/Exercises.models";

import { ExerciseFileSchema } from "src/models/ExerciseFile.models";
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
  expect().toBe();
});
`.trim();

const exercise: Exercise = {
  id: ExerciseIds.SAMPLE,
  name: "Sample",
  defaultTestingEnvironment: TestingEnvironment.JAVASCRIPT_JEST,
  availableTestingEnvironments: [TestingEnvironment.JAVASCRIPT_JEST],
  description:
    "This is a sample exercise for you to get used to the platform. Write a simple test file (sample.test.js) to test the function sum.",
  getFileSchemas: (testingEnvironment) => {
    const filesBasedOnTestingEnvironment: Record<
      TestingEnvironment,
      ExerciseFileSchema[]
    > = {
      [TestingEnvironment.JAVASCRIPT_JEST]: [
        {
          fileName: "sample.js",
          initialContent: codeFileContent,
        },
        {
          fileName: "sample.test.js",
          initialContent: testingFileContent,
        },
      ],
    };

    return filesBasedOnTestingEnvironment[testingEnvironment];
  },
};

export default exercise;
