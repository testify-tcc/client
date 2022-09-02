type ExerciseFileCommonAttributes = {
  name: string;
};

export type ExerciseFileSchema = ExerciseFileCommonAttributes & {
  initialContent: string;
};

export type ExerciseFile = ExerciseFileCommonAttributes & {
  content: string;
};

export type ExerciseFileContents = Record<string, string>;
