import "./DefinitionRenderer.scss";

import { Box, Divider } from "@chakra-ui/react";

import { Definition } from "src/models/Definitions.models";
import { DefinitionContent } from "../DefinitionContent";
import { DefinitionHeader } from "../DefinitionHeader";

type Props = {
  definition: Definition;
};

export function DefinitionRenderer({ definition }: Props): JSX.Element {
  return (
    <Box className="definition-wrapper">
      <Box className="definition-container">
        <DefinitionHeader definition={definition} />
        <Divider orientation="horizontal" />
        <DefinitionContent definition={definition} />
      </Box>
    </Box>
  );
}
