import { ExercisesPanel } from "src/components/ExercisesPanel";
import TestRenderer from "react-test-renderer";
import { providersWrapper } from "test/providersWrapper";

describe("ExercisesPanel", () => {
  it("render without crashing", () => {
    TestRenderer.create(
      providersWrapper(
        <ExercisesPanel
          isOpen={false}
          exerciseDefinitions={[]}
          onClosePanelButtonClick={jest.fn}
          onOpenPanelButtonClick={jest.fn}
          onExerciseItemClick={jest.fn}
        />,
      ),
    );
  });
});
