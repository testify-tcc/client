import {
  ExerciseDefinition,
  ExerciseDefinitionIds,
} from "src/models/Exercises.models";

import { SampleExerciseLabels } from "../labels/sample";
import { TestingEnvironment } from "src/models/TestingEnvironments.models";
import { fileSchemasMap } from "../file-schemas/sample";
import { testCommandsMap } from "../test-commands/sample";

const exercise = new ExerciseDefinition({
  id: ExerciseDefinitionIds.SAMPLE,
  title: SampleExerciseLabels.TITLE,
  description: SampleExerciseLabels.DESCRIPTION,
  testingEnvironments: [TestingEnvironment.JAVASCRIPT_JEST],
  fileSchemasMap,
  testCommandsMap,
});

export default exercise;
