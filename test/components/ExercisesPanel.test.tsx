import { ExercisesPanel } from "src/components/ExercisesPanel";
import TestRenderer from "react-test-renderer";

describe("ExercisesPanel", () => {
  it("render without crashing", () => {
    TestRenderer.create(
      <ExercisesPanel
        isOpen={false}
        exerciseDefinitions={[]}
        selectedExerciseId="dummy"
        onClosePanelButtonClick={jest.fn}
        onOpenPanelButtonClick={jest.fn}
        onExerciseItemClick={jest.fn}
      />,
    );
  });
});
