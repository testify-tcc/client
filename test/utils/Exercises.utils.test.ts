import {
  TestingEnvironment,
  TestingEnvironmentLanguages,
} from "src/models/TestingEnvironments.models";

import { ExerciseUtils } from "src/utils/Exercises.utils";

describe("ExercisesUtils", () => {
  it("should return proper language for javascript environment", () => {
    expect(
      ExerciseUtils.getLanguageFromTestingEnvironment(
        TestingEnvironment.JAVASCRIPT_JEST,
      ),
    ).toBe(TestingEnvironmentLanguages.JAVASCRIPT);
  });
});
