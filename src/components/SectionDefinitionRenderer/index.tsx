import { DefinitionRendererWrapper } from "../DefinitionRendererWrapper";
import { Divider } from "@chakra-ui/react";
import { SectionDefinition } from "src/models/Definitions.models";
import { SectionDefinitionContent } from "../SectionDefinitionContent";
import { SectionDefinitionHeader } from "../SectionDefinitionHeader";

type Props = {
  sectionDefinition: SectionDefinition;
};

export function SectionDefinitionRenderer({
  sectionDefinition,
}: Props): JSX.Element {
  return (
    <DefinitionRendererWrapper>
      <SectionDefinitionHeader sectionDefinition={sectionDefinition} />
      <Divider orientation="horizontal" />
      <SectionDefinitionContent sectionDefinition={sectionDefinition} />
    </DefinitionRendererWrapper>
  );
}
