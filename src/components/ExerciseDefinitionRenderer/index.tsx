import { DefinitionRendererWrapper } from "../DefinitionRendererWrapper";
import { ExerciseDefinition } from "src/models/Definitions.models";
import { ExerciseDefinitionContent } from "../ExerciseDefinitionContent";
import { ExerciseDefinitionHeader } from "../ExerciseDefinitionHeader";

type Props = {
  exerciseDefinition: ExerciseDefinition;
};

export function ExerciseDefinitionRenderer({
  exerciseDefinition,
}: Props): JSX.Element {
  return (
    <DefinitionRendererWrapper
      header={
        <ExerciseDefinitionHeader exerciseDefinition={exerciseDefinition} />
      }
      content={
        <ExerciseDefinitionContent exerciseDefinition={exerciseDefinition} />
      }
    />
  );
}
