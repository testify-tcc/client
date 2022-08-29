import { Exercise, ExerciseIds } from "src/models/Exercises.models";

export const exercises: Exercise[] = [
  {
    id: ExerciseIds.SAMPLE,
    name: "Sample",
  },
  {
    id: ExerciseIds.SPECIFICATION_BASED_TESTING,
    name: "Specification-based Testing",
  },
  {
    id: ExerciseIds.TEST_DRIVEN_DEVELOPMENT,
    name: "Test-Driven Development",
  },
];
