import {
  ExerciseFile,
  ExerciseFileContents,
  ExerciseFileSchema,
} from "src/models/ExerciseFile.models";
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

  public static createFileList(
    fileSchemas: ExerciseFileSchema[],
    fileContents: ExerciseFileContents,
  ): ExerciseFile[] {
    return fileSchemas.map(({ name }) => ({
      name,
      content: fileContents[name],
    }));
  }
}
