import {
  ExerciseFile,
  ExerciseFileContentMap,
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
    [TestingEnvironment.TYPESCRIPT_JEST]:
      TestingEnvironmentLanguages.TYPESCRIPT,
  };

  public static getLanguageFromTestingEnvironment(
    testingEnvironment: TestingEnvironment,
  ): TestingEnvironmentLanguages {
    return ExerciseUtils.testingEnvironmentToLanguages[testingEnvironment];
  }

  public static createFileList(
    fileSchemas: ExerciseFileSchema[],
    fileContents: ExerciseFileContentMap,
  ): ExerciseFile[] {
    return fileSchemas.map(({ fileName }) => ({
      fileName,
      content: fileContents[fileName],
    }));
  }
}
