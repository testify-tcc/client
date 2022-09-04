import {
  ExerciseDefinition,
  ExerciseDefinitionIds,
} from "src/models/Exercises.models";

import { ExerciseDefinitionLabels } from "src/exercises/labels/sample";
import SubtractExerciseDefinition from "./subtract";
import SumExerciseDefinition from "./sum";

const exercise = new ExerciseDefinition({
  id: ExerciseDefinitionIds.SAMPLE,
  title: ExerciseDefinitionLabels.TITLE,
  description: ExerciseDefinitionLabels.DESCRIPTION,
  subExerciseDefinitions: [SumExerciseDefinition, SubtractExerciseDefinition],
});

export default exercise;
