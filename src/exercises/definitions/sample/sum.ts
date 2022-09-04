import {
  ExerciseDefinition,
  ExerciseDefinitionIds,
} from "src/models/Exercises.models";

import { ExerciseDefinitionLabels } from "src/exercises/labels/sample/sum";
import { TestingEnvironment } from "src/models/TestingEnvironments.models";
import { fileSchemasMap } from "src/exercises/file-schemas/sample/sum";
import { testCommandsMap } from "src/exercises/test-commands/sample/sum";

const exercise = new ExerciseDefinition({
  id: ExerciseDefinitionIds.SAMPLE_SUM,
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
