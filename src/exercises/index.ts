import { ExerciseDefinition } from "src/models/Exercises.models";
import { ExerciseUtils } from "src/utils/Exercises.utils";
import SampleExercise from "src/exercises/definitions/sample";

export const exerciseDefinitions: ExerciseDefinition[] = [SampleExercise];
export const flattenExerciseDefinitions =
  ExerciseUtils.flattenExerciseDefinitions(exerciseDefinitions);
