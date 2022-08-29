import "./Exercises.scss";

import { Box } from "@chakra-ui/react";
import { DefaultLayout } from "components/layouts/DefaultLayout";
import { Exercise } from "src/models/Exercises.models";
import { ExerciseRenderer } from "../ExerciseRenderer";
import { ExercisesPanel } from "../ExercisesPanel";
import { exercises } from "./exercises";
import { useState } from "react";
import { useToggle } from "src/hooks/useToggle";

export function Exercises() {
  const [selectedExercise, setSelectedExercise] = useState<Exercise>(
    exercises[0],
  );
  const { value: isPanelOpen, toggle: toggleIsPanelOpen } = useToggle(true);

  const handleExerciseItemClick = (exercise: Exercise) =>
    setSelectedExercise(exercise);

  return (
    <DefaultLayout>
      <Box className="exercises-container">
        <ExercisesPanel
          isOpen={isPanelOpen}
          exercises={exercises}
          onOpenPanelButtonClick={toggleIsPanelOpen}
          onClosePanelButtonClick={toggleIsPanelOpen}
          selectedExerciseId={selectedExercise?.id}
          onExerciseItemClick={handleExerciseItemClick}
        />
        {selectedExercise && <ExerciseRenderer exercise={selectedExercise} />}
      </Box>
    </DefaultLayout>
  );
}
