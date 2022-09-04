type ExerciseFileCommonAttributes = {
  name: string;
};

export type ExerciseFileSchema = ExerciseFileCommonAttributes & {
  editDisabled?: boolean;
  initialContent: string;
};

export type ExerciseFileSchemas = Array<ExerciseFileSchema>;

export type ExerciseFile = ExerciseFileCommonAttributes & {
  content: string;
};

export type ExerciseFileContentMap = Record<string, string>;
