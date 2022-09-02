import { dummyString } from "test/commonProps";
import { mockExerciseDefinition } from "test/mocks/exerciseDefinition";
import { mockExerciseFileSchemas } from "test/mocks/exerciseFileSchemas";
import { mockTestingEnvironment } from "test/mocks/testingEnvironment";

describe("ExercisesModels", () => {
  it("ExerciseDeinifion methods should work properly", () => {
    expect(mockExerciseDefinition.getId()).toBe(dummyString);
    expect(mockExerciseDefinition.getTitle()).toBe(dummyString);
    expect(mockExerciseDefinition.getDescription()).toBe(dummyString);
    expect(mockExerciseDefinition.getDefaultTestingEnvironment()).toBe(
      mockTestingEnvironment,
    );
    expect(mockExerciseDefinition.getAvailableTestingEnvironments()).toEqual([
      mockTestingEnvironment,
    ]);
    expect(
      mockExerciseDefinition.getFileSchemas(mockTestingEnvironment),
    ).toEqual(mockExerciseFileSchemas);
    expect(mockExerciseDefinition.getTestCommand(mockTestingEnvironment)).toBe(
      dummyString,
    );
  });
});
