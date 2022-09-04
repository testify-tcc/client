import { ExerciseFileSchemas } from "./ExerciseFile.models";
import { TestingEnvironment } from "./TestingEnvironments.models";

export const EXERCISE_ID_SEPARATOR = "::";

export const ExerciseDefinitionIds = {
  SAMPLE: "sample",
  SAMPLE_SUM: `sample${EXERCISE_ID_SEPARATOR}sum`,
  SAMPLE_SUBTRACT: `sample${EXERCISE_ID_SEPARATOR}subtract`,
};

export type ExerciseDefinitionFileSchemasMap = Record<
  string,
  ExerciseFileSchemas
>;

export type ExerciseDefinitionTestCommandsMap = Record<string, string>;

export type FlattenExerciseDefinitions = Record<string, ExerciseDefinition>;

export type ExerciseDefinitionParams = {
  id: string;
  title: string;
  description?: string;
  testingEnvironments?: TestingEnvironment[];
  fileSchemasMap?: ExerciseDefinitionFileSchemasMap;
  testCommandsMap?: ExerciseDefinitionTestCommandsMap;
  subExerciseDefinitions?: ExerciseDefinition[];
};

export class ExerciseDefinition {
  private readonly id: string;
  private readonly title: string;
  private readonly description: string | null;
  private readonly testingEnvironments: TestingEnvironment[];
  private readonly fileSchemasMap: ExerciseDefinitionFileSchemasMap;
  private readonly testCommandsMap: ExerciseDefinitionTestCommandsMap;
  private readonly subExerciseDefinitions: ExerciseDefinition[];

  constructor(params: ExerciseDefinitionParams) {
    this.id = params.id;
    this.title = params.title;
    this.description = params.description ?? null;
    this.fileSchemasMap = params.fileSchemasMap ?? {};
    this.testCommandsMap = params.testCommandsMap ?? {};
    this.testingEnvironments = params.testingEnvironments ?? [];
    this.subExerciseDefinitions = params.subExerciseDefinitions ?? [];
  }

  public getId(): string {
    return this.id;
  }

  public getTitle(): string {
    return this.title;
  }

  public getDescription(): string | null {
    return this.description;
  }

  public getDefaultTestingEnvironment(): TestingEnvironment | null {
    return this.testingEnvironments[0] ?? null;
  }

  public getTestingEnvironments(): TestingEnvironment[] {
    return this.testingEnvironments;
  }

  public hasTestingEnvironments(): boolean {
    return this.testingEnvironments.length >= 1;
  }

  public getTestCommand(testingEnvironment: TestingEnvironment): string {
    return this.testCommandsMap[testingEnvironment];
  }
  public getSubExerciseDefinitions(): ExerciseDefinition[] {
    return this.subExerciseDefinitions;
  }

  public getFileSchemas(
    testingEnvironment: TestingEnvironment,
  ): ExerciseFileSchemas {
    return this.fileSchemasMap[testingEnvironment];
  }

  public getNumberOfFiles(testingEnvironment: TestingEnvironment): number {
    return Object.keys(this.getFileSchemas(testingEnvironment)).length;
  }

  public hasSubExercises(): boolean {
    return this.subExerciseDefinitions.length >= 1;
  }
}
