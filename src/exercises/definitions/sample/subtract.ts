import {
  ExerciseDefinition,
  ExerciseDefinitionIds,
} from "src/models/Exercises.models";

import { ExerciseDefinitionLabels } from "src/exercises/labels/sample/subtract";
import { TestingEnvironment } from "src/models/TestingEnvironments.models";
import { fileSchemasMap } from "src/exercises/file-schemas/sample/subtract";
import { testCommandsMap } from "src/exercises/test-commands/sample/subtract";

const exercise = new ExerciseDefinition({
  id: ExerciseDefinitionIds.SAMPLE_SUBTRACT,
  title: ExerciseDefinitionLabels.TITLE,
  description: ExerciseDefinitionLabels.DESCRIPTION,
  testingEnvironments: [
    TestingEnvironment.JAVASCRIPT_JEST,
    TestingEnvironment.TYPESCRIPT_JEST,
  ],
  fileSchemasMap,
  testCommandsMap,
});

export default exercise;
