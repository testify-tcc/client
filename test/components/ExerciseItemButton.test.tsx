import { ExerciseItemButton } from "src/components/ExerciseItemButton";
import TestRenderer from "react-test-renderer";
import { mockExerciseDefinition } from "test/mocks/exerciseDefinition";
import { providersWrapper } from "test/providersWrapper";

describe("ExerciseRenderer", () => {
  it("render without crashing", () => {
    TestRenderer.create(
      providersWrapper(
        <ExerciseItemButton
          isSelected
          exerciseDefinition={mockExerciseDefinition}
          onExerciseItemButtonClick={jest.fn}
        />,
      ),
    );
  });
});
