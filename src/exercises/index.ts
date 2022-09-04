import { ExerciseDefinition } from "src/models/Exercises.models";
import { ExerciseUtils } from "src/utils/Exercises.utils";
import SampleExercise from "src/exercises/definitions/sample";
import SpecificationBasedTestingExercise from "src/exercises/definitions/specification-based-testing";

export const exerciseDefinitions: ExerciseDefinition[] = [
  SampleExercise,
  SpecificationBasedTestingExercise,
];

export const flattenExerciseDefinitions =
  ExerciseUtils.flattenExerciseDefinitions(exerciseDefinitions);
