import {
  TestingEnvironment,
  TestingEnvironmentLanguages,
} from "src/models/TestingEnvironments.models";

import { ExerciseUtils } from "src/utils/Exercises.utils";
import { mockExerciseFileContentMap } from "test/mocks/exerciseFileContents";
import { mockExerciseFileSchemas } from "test/mocks/exerciseFileSchemas";
import { mockExerciseFiles } from "test/mocks/exerciseFiles";

describe("ExercisesUtils", () => {
  it("should return proper language for javascript environment", () => {
    expect(
      ExerciseUtils.getLanguageFromTestingEnvironment(
        TestingEnvironment.JAVASCRIPT_JEST,
      ),
    ).toBe(TestingEnvironmentLanguages.JAVASCRIPT);
  });

  it("should return proper file list", () => {
    expect(
      ExerciseUtils.createFileList(
        mockExerciseFileSchemas,
        mockExerciseFileContentMap,
      ),
    ).toEqual(mockExerciseFiles);
  });
});
