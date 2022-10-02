import { ExerciseFileSchemas } from "./ExerciseFile.models";
import { TestingEnvironment } from "./TestingEnvironments.models";

export enum DefinitionType {
  SECTION = "SECTION",
  EXERCISE = "EXERCISE",
}

type DefinitionCommonAttributes = {
  id: string;
  panelLabel: string;
  description: string;
};

export type ExerciseDefinition = DefinitionCommonAttributes & {
  type: DefinitionType.EXERCISE;
  testEnvironments: TestingEnvironment[];
  fileSchemasMap: Record<TestingEnvironment, ExerciseFileSchemas>;
  testCommandsMap: Record<TestingEnvironment, string>;
};

export type SectionDefinition = DefinitionCommonAttributes & {
  type: DefinitionType.SECTION;
  exercises: ExerciseDefinition[];
};

export type Definition = ExerciseDefinition | SectionDefinition;

export type DefinitionList = Array<Definition>;

export type DefinitionMap = Record<string, Definition>;
