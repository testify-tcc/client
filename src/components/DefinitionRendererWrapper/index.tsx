import "./DefinitionRendererWrapper.scss";

import { Box } from "@chakra-ui/react";
import { ReactElement } from "react";

type Props = {
  children: ReactElement[];
};

export function DefinitionRendererWrapper({ children }: Props): JSX.Element {
  return (
    <Box className="definition-wrapper">
      <Box className="definition-container">{children}</Box>
    </Box>
  );
}
