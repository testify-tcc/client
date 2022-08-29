import {
  TestingEnvironment,
  TestingEnvironmentLanguages,
} from "src/models/TestingEnvironments.models";

export class ExerciseUtils {
  private static readonly testingEnvironmentToLanguages: Record<
    TestingEnvironment,
    TestingEnvironmentLanguages
  > = {
    [TestingEnvironment.JAVASCRIPT_JEST]:
      TestingEnvironmentLanguages.JAVASCRIPT,
  };

  public static getLanguageFromTestingEnvironment(
    testingEnvironment: TestingEnvironment,
  ): TestingEnvironmentLanguages {
    return ExerciseUtils.testingEnvironmentToLanguages[testingEnvironment];
  }
}
