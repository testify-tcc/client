import "./DefinitionRenderer.scss";

import { Box, Divider } from "@chakra-ui/react";

import { Definition } from "src/models/Definitions.models";
import { DefinitionContent } from "../DefinitionContent";
import { DefinitionDescription } from "../DefinitionDescription";

type Props = {
  definition: Definition;
};

export function DefinitionRenderer({ definition }: Props): JSX.Element {
  return (
    <Box className="definition-container">
      <DefinitionDescription>{definition.description}</DefinitionDescription>
      <Divider orientation="horizontal" />
      <DefinitionContent definition={definition} />
    </Box>
  );
}
