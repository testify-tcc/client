export enum ExerciseFileType {
  CODE = "CODE",
  TEST = "TEST",
}

type ExerciseFileCommonAttributes = {
  fileName: string;
};

export type ExerciseFileSchema = ExerciseFileCommonAttributes & {
  type: ExerciseFileType;
  initialContent: string;
};

export type ExerciseFile = ExerciseFileCommonAttributes & {
  content: string;
};

export type ExerciseFileSchemas = Array<ExerciseFileSchema>;

export type ExerciseFileContentMap = Record<string, string>;
