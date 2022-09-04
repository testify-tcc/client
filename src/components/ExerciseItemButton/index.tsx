import { Colors, FontFamilies, FontSizes } from "src/theme";

import { ExerciseDefinition } from "src/models/Exercises.models";
import { ExerciseLink } from "../Links/ExerciseLink";
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
    <ExerciseLink
      fontSize={FontSizes.TEXT}
      fontFamily={FontFamilies.COMFORTAA}
      color={getExerciseItemColor()}
      label={props.exerciseDefinition.getTitle()}
      exerciseId={props.exerciseDefinition.getId()}
    />
  );
}
