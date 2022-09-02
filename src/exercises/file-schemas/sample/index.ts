import {
  FileNames,
  codeFileContent,
  testingFileContent,
} from "./javascript-jest";

import { ExerciseDefinitionFileSchemasMap } from "src/models/Exercises.models";
import { TestingEnvironment } from "src/models/TestingEnvironments.models";

export const fileSchemasMap: ExerciseDefinitionFileSchemasMap = {
  [TestingEnvironment.JAVASCRIPT_JEST]: [
    {
      name: FileNames.CODE,
      initialContent: codeFileContent,
    },
    {
      name: FileNames.TEST,
      initialContent: testingFileContent,
    },
  ],
};
