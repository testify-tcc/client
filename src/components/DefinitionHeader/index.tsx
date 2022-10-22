import { Definition, DefinitionType } from "src/models/Definitions.models";

import { ExerciseDefinitionHeader } from "../ExerciseDefinitionHeader";
import { SectionDefinitionHeader } from "../SectionDefinitionHeader";

type Props = {
  definition: Definition;
};

export function DefinitionHeader({ definition }: Props): JSX.Element {
  switch (definition.type) {
    case DefinitionType.EXERCISE:
      return <ExerciseDefinitionHeader exerciseDefinition={definition} />;
    case DefinitionType.SECTION:
      return <SectionDefinitionHeader sectionDefinition={definition} />;
  }
}
