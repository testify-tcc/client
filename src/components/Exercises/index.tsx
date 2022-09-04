import "./Exercises.scss";

import { exerciseDefinitions, flattenExerciseDefinitions } from "src/exercises";
import { useEffect, useState } from "react";

import { Box } from "@chakra-ui/react";
import { DefaultLayout } from "components/layouts/DefaultLayout";
import { ExerciseDefinition } from "src/models/Exercises.models";
import { ExerciseRenderer } from "../ExerciseRenderer";
import { ExercisesPanel } from "../ExercisesPanel";
import { useExercisesQueryParams } from "src/hooks/useExercisesQueryParams";
import { useToggle } from "src/hooks/useToggle";

export function Exercises() {
  const { exerciseId, setExerciseQueryParams } = useExercisesQueryParams();
  const [selectedExerciseDefinition, setSelectedExerciseDefinition] =
    useState<ExerciseDefinition>();
  const { value: isPanelOpen, toggle: toggleIsPanelOpen } = useToggle(true);

  const handleExerciseItemClick = (exerciseDefinition: ExerciseDefinition) => {
    setExerciseQueryParams(exerciseDefinition.getId());
  };

  useEffect(() => {
    if (exerciseId) {
      const exerciseDefinition = flattenExerciseDefinitions[exerciseId];

      if (exerciseDefinition) {
        setSelectedExerciseDefinition(exerciseDefinition);
        return;
      }
    }

    setSelectedExerciseDefinition(exerciseDefinitions[0]);
  }, [exerciseId]);

  return (
    <DefaultLayout>
      <Box className="exercises-container">
        {selectedExerciseDefinition && (
          <ExercisesPanel
            isOpen={isPanelOpen}
            exerciseDefinitions={exerciseDefinitions}
            onOpenPanelButtonClick={toggleIsPanelOpen}
            onClosePanelButtonClick={toggleIsPanelOpen}
            selectedExerciseDefinitionId={selectedExerciseDefinition.getId()}
            onExerciseItemClick={handleExerciseItemClick}
          />
        )}
        {selectedExerciseDefinition && (
          <ExerciseRenderer exerciseDefinition={selectedExerciseDefinition} />
        )}
      </Box>
    </DefaultLayout>
  );
}
