import {
  ExerciseDefinition,
  FlattenExerciseDefinitions,
} from "src/models/Exercises.models";
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
    return fileSchemas.map(({ name }) => ({
      name,
      content: fileContents[name],
    }));
  }

  public static flattenExerciseDefinitions(
    exerciseDefinitions: ExerciseDefinition[],
  ): FlattenExerciseDefinitions {
    const exerciseDefinitionsMap: FlattenExerciseDefinitions = {};

    exerciseDefinitions.forEach((exerciseDefinition) => {
      exerciseDefinitionsMap[exerciseDefinition.getId()] = exerciseDefinition;

      if (exerciseDefinition.hasSubExercises()) {
        exerciseDefinition
          .getSubExerciseDefinitions()
          .forEach((subExerciseDefinition) => {
            exerciseDefinitionsMap[subExerciseDefinition.getId()] =
              subExerciseDefinition;
          });
      }
    });

    return exerciseDefinitionsMap;
  }
}
