import "./DefinitionsPanel.scss";

import {
  Box,
  Divider,
  Heading,
  IconButton,
  ListIcon,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { ChevronRightIcon, CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Colors, FontFamilies } from "src/theme";
import {
  Definition,
  DefinitionList,
  DefinitionType,
} from "src/models/Definitions.models";

import { DefinitionItemButton } from "../DefinitionItemButton";
import { DefinitionsPanelAriaLabels } from "./DefinitionsPanel.ariaLabels";
import { DefinitionsPanelLabels } from "./DefinitionsPanel.labels";
import classNames from "classnames";
import { useCallback } from "react";

type Props = {
  isOpen: boolean;
  definitions: DefinitionList;
  selectedDefinitionId?: string;
  onOpenPanelButtonClick: () => void;
  onClosePanelButtonClick: () => void;
  onDefinitionItemClick: (definition: Definition) => void;
};

export function DefinitionsPanel(props: Props) {
  const isDefinitionItemSelected = useCallback(
    (definitionId: string) => definitionId === props.selectedDefinitionId,
    [props.selectedDefinitionId],
  );

  if (!props.isOpen) {
    return (
      <Box
        className={classNames("definitions-panel", "definitions-panel-closed")}
      >
        <IconButton
          variant="solid"
          colorScheme={Colors.PRIMARY}
          aria-label={DefinitionsPanelAriaLabels.OPEN_BUTTON}
          icon={<HamburgerIcon />}
          onClick={props.onOpenPanelButtonClick}
          className="definitions-panel-open-button"
        />
      </Box>
    );
  }

  return (
    <Box className={classNames("definitions-panel", "definitions-panel-open")}>
      <Box className="definitions-panel-header">
        <Heading as="h2" size="lg" fontFamily={FontFamilies.COMFORTAA}>
          {DefinitionsPanelLabels.HEADING}
        </Heading>
        <IconButton
          variant="solid"
          colorScheme={Colors.PRIMARY}
          aria-label={DefinitionsPanelAriaLabels.CLOSE_BUTTON}
          icon={<CloseIcon />}
          onClick={props.onClosePanelButtonClick}
        />
      </Box>
      <Divider orientation="horizontal" />
      <Box className="definitions-panel-list-wrapper">
        <UnorderedList className="definitions-panel-list definitions-panel-prime-list">
          {props.definitions.map((definition) => {
            return (
              <ListItem className="definitions-panel-item" key={definition.id}>
                <ListIcon as={ChevronRightIcon} color={Colors.PRIMARY} />
                <DefinitionItemButton
                  definition={definition}
                  onClick={props.onDefinitionItemClick}
                  isSelected={isDefinitionItemSelected(definition.id)}
                />
                {definition.type == DefinitionType.SECTION && (
                  <UnorderedList
                    className={classNames(
                      "definitions-panel-list",
                      "definitions-panel-sub-list",
                    )}
                  >
                    {definition.exercises.map((exerciseDefinition) => (
                      <ListItem
                        className="definitions-panel-sub-item"
                        key={exerciseDefinition.id}
                      >
                        <ListIcon
                          as={ChevronRightIcon}
                          color={Colors.PRIMARY}
                        />
                        <DefinitionItemButton
                          definition={exerciseDefinition}
                          onClick={props.onDefinitionItemClick}
                          isSelected={isDefinitionItemSelected(
                            exerciseDefinition.id,
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
    </Box>
  );
}
