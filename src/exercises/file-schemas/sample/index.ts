import {
  FileNames as JavascriptJestFileNames,
  codeFileContent as javascriptJestFileContent,
  testingFileContent as javascriptJestTestingFileContent,
} from "./javascript-jest";
import {
  FileNames as TypescriptJestFileNames,
  codeFileContent as typescriptJestFileContent,
  testingFileContent as typescriptJestTestingFileContent,
} from "./typescript-jest";

import { ExerciseDefinitionFileSchemasMap } from "src/models/Exercises.models";
import { TestingEnvironment } from "src/models/TestingEnvironments.models";

export const fileSchemasMap: ExerciseDefinitionFileSchemasMap = {
  [TestingEnvironment.JAVASCRIPT_JEST]: [
    {
      name: JavascriptJestFileNames.CODE,
      initialContent: javascriptJestFileContent,
    },
    {
      name: JavascriptJestFileNames.TEST,
      initialContent: javascriptJestTestingFileContent,
    },
  ],
  [TestingEnvironment.TYPESCRIPT_JEST]: [
    {
      name: TypescriptJestFileNames.CODE,
      initialContent: typescriptJestFileContent,
    },
    {
      name: TypescriptJestFileNames.TEST,
      initialContent: typescriptJestTestingFileContent,
    },
  ],
};
