import "./SectionDefinitionContent.scss";

import { Box, ListItem, UnorderedList } from "@chakra-ui/react";
import { Colors, FontSizes } from "src/theme";

import { DefinitionLink } from "../Links/DefinitionLink";
import { SectionDefinition } from "src/models/Definitions.models";
import { SectionDefinitionContentLabels } from "./SectionDefinitionContent.labels";

type Props = {
  sectionDefinition: SectionDefinition;
};

export function SectionDefinitionContent({ sectionDefinition }: Props) {
  return (
    <Box className="section-container">
      <Box as="h2" fontSize={FontSizes.HEADING2}>
        {SectionDefinitionContentLabels.EXERCISES_SECTION_TITLE}
      </Box>
      <UnorderedList className="section-exercises-list">
        {sectionDefinition.exercises.map((exerciseDefinition) => (
          <ListItem key={`sub-exercise-list-item-${exerciseDefinition.id}`}>
            <DefinitionLink
              color={Colors.BLACK}
              fontSize={FontSizes.TEXT}
              label={exerciseDefinition.panelLabel}
              definitionId={exerciseDefinition.id}
            />
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
}
