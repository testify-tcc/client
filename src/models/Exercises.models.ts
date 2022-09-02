import { ExerciseFileSchemas } from "./ExerciseFile.models";
import { TestingEnvironment } from "./TestingEnvironments.models";

export enum ExerciseIds {
  SAMPLE = "sample",
}

export type ExerciseDefinitionFileSchemasMap = Record<
  TestingEnvironment,
  ExerciseFileSchemas
>;

export type ExerciseDefinitionTestCommandsMap = Record<
  TestingEnvironment,
  string
>;

export type ExerciseDefinitionParams = {
  id: ExerciseIds;
  title: string;
  description?: string;
  defaultTestingEnvironment: TestingEnvironment;
  availableTestingEnvironments: TestingEnvironment[];
  fileSchemasMap: ExerciseDefinitionFileSchemasMap;
  testCommandsMap: ExerciseDefinitionTestCommandsMap;
};

export class ExerciseDefinition {
  private readonly id: ExerciseIds;
  private readonly title: string;
  private readonly description: string | null;
  private readonly defaultTestingEnvironment: TestingEnvironment;
  private readonly availableTestingEnvironments: TestingEnvironment[];
  protected readonly fileSchemasMap: ExerciseDefinitionFileSchemasMap;
  protected readonly testCommandsMap: ExerciseDefinitionTestCommandsMap;

  constructor(params: ExerciseDefinitionParams) {
    this.id = params.id;
    this.title = params.title;
    this.fileSchemasMap = params.fileSchemasMap;
    this.testCommandsMap = params.testCommandsMap;
    this.description = params.description ?? null;
    this.defaultTestingEnvironment = params.defaultTestingEnvironment;
    this.availableTestingEnvironments = params.availableTestingEnvironments;
  }

  public getId(): ExerciseIds {
    return this.id;
  }

  public getTitle(): string {
    return this.title;
  }

  public getDescription(): string | null {
    return this.description;
  }

  public getDefaultTestingEnvironment(): TestingEnvironment {
    return this.defaultTestingEnvironment;
  }

  public getAvailableTestingEnvironments(): TestingEnvironment[] {
    return this.availableTestingEnvironments;
  }

  public getTestCommand(testingEnvironment: TestingEnvironment): string {
    return this.testCommandsMap[testingEnvironment];
  }

  public getFileSchemas(
    testingEnvironment: TestingEnvironment,
  ): ExerciseFileSchemas {
    return this.fileSchemasMap[testingEnvironment];
  }

  public getNumberOfFiles(testingEnvironment: TestingEnvironment): number {
    return Object.keys(this.getFileSchemas(testingEnvironment)).length;
  }
}
