import { Definition, DefinitionType } from "src/models/Definitions.models";

import { ExerciseDefinitionRenderer } from "../ExerciseDefinitionRenderer";
import { SectionDefinitionRenderer } from "../SectionDefinitionRenderer";

type Props = {
  definition: Definition;
};

export function DefinitionRenderer({ definition }: Props): JSX.Element {
  switch (definition.type) {
    case DefinitionType.EXERCISE:
      return <ExerciseDefinitionRenderer exerciseDefinition={definition} />;
    case DefinitionType.SECTION:
      return <SectionDefinitionRenderer sectionDefinition={definition} />;
  }
}
