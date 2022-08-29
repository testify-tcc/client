import "./Exercises.scss";

import { Box } from "@chakra-ui/react";
import { DefaultLayout } from "components/layouts/DefaultLayout";
import { ExerciseIds } from "src/models/Exercises.models";
import { ExercisesPanel } from "../ExercisesPanel";
import { exercises } from "./exercises";
import { useToggle } from "src/hooks/useToggle";

export function Exercises() {
  const { value: isPanelOpen, toggle: toggleIsPanelOpen } = useToggle(false);

  return (
    <DefaultLayout>
      <Box className="exercises-container">
        <ExercisesPanel
          isOpen={isPanelOpen}
          exercises={exercises}
          onOpenPanelButtonClick={toggleIsPanelOpen}
          onClosePanelButtonClick={toggleIsPanelOpen}
          selectedExerciseId={ExerciseIds.SAMPLE}
        />
      </Box>
    </DefaultLayout>
  );
}
