import { Colors, FontSizes } from "src/theme";

import { Button } from "@chakra-ui/react";
import { Exercise } from "src/models/Exercises.models";
import { useCallback } from "react";

type Props = {
  exercise: Exercise;
  isSelected: boolean;
  onClick: () => void;
};

export function ExerciseItemButton(props: Props) {
  const getExerciseItemColor = useCallback(() => {
    return props.isSelected ? Colors.PRIMARY : Colors.BLACK;
  }, [props.isSelected]);

  return (
    <Button
      variant="link"
      color={getExerciseItemColor()}
      onClick={props.onClick}
      fontSize={FontSizes.TEXT}
    >
      {props.exercise.name}
    </Button>
  );
}
