import { ExerciseItemButton } from "src/components/ExerciseItemButton";
import TestRenderer from "react-test-renderer";
import { mockExerciseDefinition } from "test/mocks/exerciseDefinition";

describe("ExerciseRenderer", () => {
  it("render without crashing", () => {
    TestRenderer.create(
      <ExerciseItemButton
        isSelected
        onClick={jest.fn}
        exerciseDefinition={mockExerciseDefinition}
      />,
    );
  });
});
