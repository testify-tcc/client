import "./Exercises.scss";

import { Box } from "@chakra-ui/react";
import { DefaultLayout } from "components/layouts/DefaultLayout";
import { ExerciseDefinition } from "src/models/Exercises.models";
import { ExerciseRenderer } from "../ExerciseRenderer";
import { ExercisesPanel } from "../ExercisesPanel";
import { exerciseDefinitions } from "src/exercises";
import { useState } from "react";
import { useToggle } from "src/hooks/useToggle";

export function Exercises() {
  const [selectedExerciseDefinition, setSelectedExerciseDefinition] =
    useState<ExerciseDefinition>(exerciseDefinitions[0]);
  const { value: isPanelOpen, toggle: toggleIsPanelOpen } = useToggle(true);

  const handleExerciseItemClick = (exerciseDefinition: ExerciseDefinition) => {
    setSelectedExerciseDefinition(exerciseDefinition);
  };

  return (
    <DefaultLayout>
      <Box className="exercises-container">
        <ExercisesPanel
          isOpen={isPanelOpen}
          exerciseDefinitions={exerciseDefinitions}
          onOpenPanelButtonClick={toggleIsPanelOpen}
          onClosePanelButtonClick={toggleIsPanelOpen}
          selectedExerciseId={selectedExerciseDefinition.getId()}
          onExerciseItemClick={handleExerciseItemClick}
        />
        {selectedExerciseDefinition && (
          <ExerciseRenderer exerciseDefinition={selectedExerciseDefinition} />
        )}
      </Box>
    </DefaultLayout>
  );
}
