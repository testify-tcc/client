import { Definition, DefinitionType } from "src/models/Definitions.models";

import { ExerciseDefinitionContent } from "../ExerciseDefinitionContent";
import { SectionDefinitionContent } from "../SectionDefinitionContent";

type Props = {
  definition: Definition;
};

export function DefinitionContent({ definition }: Props) {
  return definition.type == DefinitionType.EXERCISE ? (
    <ExerciseDefinitionContent exerciseDefinition={definition} />
  ) : (
    <SectionDefinitionContent sectionDefinition={definition} />
  );
}
