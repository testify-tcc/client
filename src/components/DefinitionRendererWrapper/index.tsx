import "./DefinitionRendererWrapper.scss";

import { Box, Divider } from "@chakra-ui/react";

type Props = {
  header: JSX.Element;
  content: JSX.Element;
};

export function DefinitionRendererWrapper({
  header,
  content,
}: Props): JSX.Element {
  return (
    <Box className="definition-wrapper">
      <Box className="definition-container">
        {header}
        <Divider orientation="horizontal" />
        {content}
      </Box>
    </Box>
  );
}
