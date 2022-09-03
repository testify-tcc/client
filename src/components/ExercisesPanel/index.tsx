import "./ExercisesPanel.scss";

import { Box, IconButton, ListItem, UnorderedList } from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  ExerciseDefinition,
  ExerciseDefinitionIds,
} from "src/models/Exercises.models";

import { Colors } from "src/theme";
import { ExerciseItemButton } from "../ExerciseItemButton";
import { ExercisesPanelAriaLabels } from "./ExercisesPanel.aria.labels";
import classNames from "classnames";
import { useCallback } from "react";

type Props = {
  isOpen: boolean;
  exerciseDefinitions: ExerciseDefinition[];
  selectedExerciseDefinitionId?: string;
  onOpenPanelButtonClick: () => void;
  onClosePanelButtonClick: () => void;
  onExerciseItemClick: (exercise: ExerciseDefinition) => void;
};

export function ExercisesPanel(props: Props) {
  const isExerciseItemSelected = useCallback(
    (exerciseDefinitionId: ExerciseDefinitionIds) =>
      exerciseDefinitionId === props.selectedExerciseDefinitionId,
    [props.selectedExerciseDefinitionId],
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
        {props.exerciseDefinitions.map((exerciseDefinition) => {
          return (
            <ListItem
              className="exercises-panel-item"
              key={exerciseDefinition.getId()}
            >
              <ExerciseItemButton
                exerciseDefinition={exerciseDefinition}
                isSelected={isExerciseItemSelected(exerciseDefinition.getId())}
                onClick={() => props.onExerciseItemClick(exerciseDefinition)}
              />
            </ListItem>
          );
        })}
      </UnorderedList>
    </Box>
  );
}
