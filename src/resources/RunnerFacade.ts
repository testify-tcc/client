import { ExerciseFile } from "src/models/ExerciseFile.models";
import axios from "axios";
import { env } from "src/env";

export class RunnerFacade {
  public static async runTestAndGetOutput(
    files: ExerciseFile[],
  ): Promise<string> {
    const { data } = await axios.post(`${env.SERVER_ENDPOINT}/run`, { files });
    return data;
  }
}
