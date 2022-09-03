import { ExerciseDefinition } from "src/models/Exercises.models";
import { dummyString } from "test/commonProps";
import { mockExerciseDefinition } from "test/mocks/exerciseDefinition";
import { mockExerciseDefinitionParams } from "test/mocks/exerciseDefinitionParams";
import { mockExerciseFileSchemas } from "test/mocks/exerciseFileSchemas";
import { mockTestingEnvironment } from "test/mocks/testingEnvironment";

describe("ExercisesModels", () => {
  describe("ExerciseDefinition", () => {
    it("methods should work properly", () => {
      expect(mockExerciseDefinition.getId()).toBe(dummyString);
      expect(mockExerciseDefinition.getTitle()).toBe(dummyString);
      expect(mockExerciseDefinition.getDescription()).toBe(dummyString);
      expect(mockExerciseDefinition.getDefaultTestingEnvironment()).toBe(
        mockTestingEnvironment,
      );
      expect(mockExerciseDefinition.getTestingEnvironments()).toEqual([
        mockTestingEnvironment,
      ]);
      expect(
        mockExerciseDefinition.getFileSchemas(mockTestingEnvironment),
      ).toEqual(mockExerciseFileSchemas);
      expect(
        mockExerciseDefinition.getTestCommand(mockTestingEnvironment),
      ).toBe(dummyString);
    });

    it("should throw error when testing environment list is empty", () => {
      const creation = () => {
        const mockParams = {
          ...mockExerciseDefinitionParams,
          testingEnvironments: [],
        };
        new ExerciseDefinition(mockParams);
      };
      expect(creation).toThrowError();
    });
  });
});
