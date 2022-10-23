import { DefinitionRendererWrapper } from "../DefinitionRendererWrapper";
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
    <DefinitionRendererWrapper
      header={<SectionDefinitionHeader sectionDefinition={sectionDefinition} />}
      content={
        <SectionDefinitionContent sectionDefinition={sectionDefinition} />
      }
    />
  );
}
