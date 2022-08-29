import "./ExercisesPanel.scss";

import { Box, IconButton, ListItem, UnorderedList } from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Exercise, ExerciseIds } from "src/models/Exercises.models";

import { Colors } from "src/theme";
import { ExerciseItemButton } from "../ExerciseItemButton";
import { ExercisesPanelAriaLabels } from "./ExercisesPanel.aria.labels";
import classNames from "classnames";
import { useCallback } from "react";

type Props = {
  isOpen: boolean;
  exercises: Exercise[];
  selectedExerciseId?: string;
  onOpenPanelButtonClick: () => void;
  onClosePanelButtonClick: () => void;
  onExerciseItemClick: (exercise: Exercise) => void;
};

export function ExercisesPanel(props: Props) {
  const isExerciseItemSelected = useCallback(
    (exerciseId: ExerciseIds) => exerciseId === props.selectedExerciseId,
    [props.selectedExerciseId],
  );

  if (!props.isOpen) {
    return (
      <Box className={classNames("exercises-panel", "exercises-panel-closed")}>
        <IconButton
          variant="solid"
          colorScheme={Colors.PRIMARY}
          aria-label={ExercisesPanelAriaLabels.OPEN_BUTTON}
          icon={<HamburgerIcon />}
          onClick={props.onOpenPanelButtonClick}
          className="exercises-panel-open-button"
        />
      </Box>
    );
  }

  return (
    <Box className={classNames("exercises-panel", "exercises-panel-open")}>
      <IconButton
        variant="solid"
        colorScheme={Colors.PRIMARY}
        aria-label={ExercisesPanelAriaLabels.CLOSE_BUTTON}
        icon={<CloseIcon />}
        onClick={props.onClosePanelButtonClick}
        className="exercises-panel-close-button"
      />
      <UnorderedList
        className="exercises-panel-list"
        listStyleType="none"
        marginInlineStart="none"
      >
        {props.exercises.map((exercise) => {
          return (
            <ListItem className="exercises-panel-item" key={exercise.id}>
              <ExerciseItemButton
                exercise={exercise}
                isSelected={isExerciseItemSelected(exercise.id)}
                onClick={() => props.onExerciseItemClick(exercise)}
              />
            </ListItem>
          );
        })}
      </UnorderedList>
    </Box>
  );
}
