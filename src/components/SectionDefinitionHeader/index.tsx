import { DefinitionDescription } from "../DefinitionDescription";
import { SectionDefinition } from "src/models/Definitions.models";

type Props = {
  sectionDefinition: SectionDefinition;
};

export function SectionDefinitionHeader({
  sectionDefinition,
}: Props): JSX.Element {
  return (
    <DefinitionDescription>
      {sectionDefinition.description}
    </DefinitionDescription>
  );
}
