import { MarkdownReader } from "../MarkdownReader";
import { SectionDefinition } from "src/models/Definitions.models";

type Props = {
  sectionDefinition: SectionDefinition;
};

export function SectionDefinitionHeader({
  sectionDefinition,
}: Props): JSX.Element {
  return <MarkdownReader>{sectionDefinition.description}</MarkdownReader>;
}
