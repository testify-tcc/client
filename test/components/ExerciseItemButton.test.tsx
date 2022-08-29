import { Exercise } from "src/models/Exercises.models";
import { ExerciseItemButton } from "src/components/ExerciseItemButton";
import TestRenderer from "react-test-renderer";
import { exerciseProps } from "test/commonProps";

describe("ExerciseRenderer", () => {
  it("render without crashing", () => {
    TestRenderer.create(
      <ExerciseItemButton
        isSelected
        onClick={jest.fn}
        exercise={exerciseProps as Exercise}
      />,
    );
  });
});
