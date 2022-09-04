import * as ExerciseDefinitionLabels from "src/exercises/labels/specification-based-testing";

import {
  ExerciseDefinition,
  ExerciseDefinitionIds,
} from "src/models/Exercises.models";

import Listing22Exercise from "./listing-2-2";

const exercise = new ExerciseDefinition({
  id: ExerciseDefinitionIds.SPECIFICATION_BASED_TESTING,
  title: ExerciseDefinitionLabels.TITLE,
  description: ExerciseDefinitionLabels.DESCRIPTION,
  subExerciseDefinitions: [Listing22Exercise],
});

export default exercise;
