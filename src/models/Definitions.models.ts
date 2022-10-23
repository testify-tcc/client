import { ExerciseFileSchemas } from "./ExerciseFile.models";
import { TestingEnvironment } from "./TestingEnvironments.models";

export enum DefinitionType {
  SECTION = "SECTION",
  EXERCISE = "EXERCISE",
}

type DefinitionCommonAttributes = {
  id: string;
  panelLabel: string;
};

export type ExerciseDefinition = DefinitionCommonAttributes & {
  type: DefinitionType.EXERCISE;
  testEnvironments: TestingEnvironment[];
  descriptionsMap: Record<TestingEnvironment, string>;
  solutionDescriptionsMap: Record<TestingEnvironment, string>;
  fileSchemasMap: Record<TestingEnvironment, ExerciseFileSchemas>;
  testCommandsMap: Record<TestingEnvironment, string>;
};

export type SectionDefinition = DefinitionCommonAttributes & {
  type: DefinitionType.SECTION;
  exercises: ExerciseDefinition[];
  description: string;
};

export type Definition = ExerciseDefinition | SectionDefinition;

export type DefinitionList = Array<Definition>;

export type DefinitionMap = Record<string, Definition>;
