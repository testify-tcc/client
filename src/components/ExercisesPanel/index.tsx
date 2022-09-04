import "./ExercisesPanel.scss";

import {
  Box,
  IconButton,
  ListIcon,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { ChevronRightIcon, CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

import { Colors } from "src/theme";
import { ExerciseDefinition } from "src/models/Exercises.models";
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
  onExerciseItemClick: (exerciseDefinition: ExerciseDefinition) => void;
};

export function ExercisesPanel(props: Props) {
  const isExerciseItemSelected = useCallback(
    (exerciseDefinitionId: string) =>
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
      <UnorderedList className="exercises-panel-list">
        {props.exerciseDefinitions.map((exerciseDefinition) => {
          return (
            <ListItem
              className="exercises-panel-item"
              key={exerciseDefinition.getId()}
            >
              <ListIcon as={ChevronRightIcon} color={Colors.PRIMARY} />
              <ExerciseItemButton
                exerciseDefinition={exerciseDefinition}
                onExerciseItemButtonClick={props.onExerciseItemClick}
                isSelected={isExerciseItemSelected(exerciseDefinition.getId())}
              />
              {exerciseDefinition.hasSubExercises() && (
                <UnorderedList
                  className={classNames(
                    "exercises-panel-list",
                    "exercises-panel-sub-list",
                  )}
                >
                  {exerciseDefinition
                    .getSubExerciseDefinitions()
                    .map((subExerciseDefinition) => (
                      <ListItem
                        className="exercises-panel-sub-item"
                        key={subExerciseDefinition.getId()}
                      >
                        <ListIcon
                          as={ChevronRightIcon}
                          color={Colors.PRIMARY}
                        />
                        <ExerciseItemButton
                          exerciseDefinition={subExerciseDefinition}
                          onExerciseItemButtonClick={props.onExerciseItemClick}
                          isSelected={isExerciseItemSelected(
                            subExerciseDefinition.getId(),
                          )}
                        />
                      </ListItem>
                    ))}
                </UnorderedList>
              )}
            </ListItem>
          );
        })}
      </UnorderedList>
    </Box>
  );
}
