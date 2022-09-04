import * as ExerciseDefinitionLabels from "src/exercises/labels/specification-based-testing/listing-2-2";

import {
  ExerciseDefinition,
  ExerciseDefinitionIds,
} from "src/models/Exercises.models";

import { TestingEnvironment } from "src/models/TestingEnvironments.models";
import { fileSchemasMap } from "src/exercises/file-schemas/specification-based-testing/listing-2-2";
import { testCommandsMap } from "src/exercises/test-commands/specification-based-testing/listing-2-2";

const exercise = new ExerciseDefinition({
  id: ExerciseDefinitionIds.SPECIFICATION_BASED_TESTING_LISTING_2_2,
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
