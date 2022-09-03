import { ExerciseFileSchemas } from "./ExerciseFile.models";
import { TestingEnvironment } from "./TestingEnvironments.models";

export enum ExerciseDefinitionIds {
  SAMPLE = "sample",
}

export type ExerciseDefinitionFileSchemasMap = Record<
  string,
  ExerciseFileSchemas
>;

export type ExerciseDefinitionTestCommandsMap = Record<string, string>;

export type ExerciseDefinitionParams = {
  id: ExerciseDefinitionIds;
  title: string;
  description?: string;
  testingEnvironments: TestingEnvironment[];
  fileSchemasMap: ExerciseDefinitionFileSchemasMap;
  testCommandsMap: ExerciseDefinitionTestCommandsMap;
};

export class ExerciseDefinition {
  private readonly id: ExerciseDefinitionIds;
  private readonly title: string;
  private readonly description: string | null;
  private readonly testingEnvironments: TestingEnvironment[];
  protected readonly fileSchemasMap: ExerciseDefinitionFileSchemasMap;
  protected readonly testCommandsMap: ExerciseDefinitionTestCommandsMap;

  constructor(params: ExerciseDefinitionParams) {
    if (params.testingEnvironments.length < 1) {
      throw new Error(
        "Exercise definitions should have at least one testing environment",
      );
    }

    this.id = params.id;
    this.title = params.title;
    this.fileSchemasMap = params.fileSchemasMap;
    this.testCommandsMap = params.testCommandsMap;
    this.description = params.description ?? null;
    this.testingEnvironments = params.testingEnvironments;
  }

  public getId(): ExerciseDefinitionIds {
    return this.id;
  }

  public getTitle(): string {
    return this.title;
  }

  public getDescription(): string | null {
    return this.description;
  }

  public getDefaultTestingEnvironment(): TestingEnvironment {
    return this.testingEnvironments[0];
  }

  public getTestingEnvironments(): TestingEnvironment[] {
    return this.testingEnvironments;
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
