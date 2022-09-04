import { Colors, FontSizes } from "src/theme";

import { Button } from "@chakra-ui/react";
import { ExerciseDefinition } from "src/models/Exercises.models";
import { useCallback } from "react";

type Props = {
  exerciseDefinition: ExerciseDefinition;
  isSelected: boolean;
  onExerciseItemButtonClick: (exerciseDefinition: ExerciseDefinition) => void;
};

export function ExerciseItemButton(props: Props) {
  const getExerciseItemColor = useCallback(() => {
    return props.isSelected ? Colors.PRIMARY : Colors.BLACK;
  }, [props.isSelected]);

  return (
    <Button
      variant="link"
      color={getExerciseItemColor()}
      onClick={() => props.onExerciseItemButtonClick(props.exerciseDefinition)}
      fontSize={FontSizes.TEXT}
    >
      {props.exerciseDefinition.getTitle()}
    </Button>
  );
}
