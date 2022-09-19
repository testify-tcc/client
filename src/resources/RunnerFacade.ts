import {
  RunRequestBody,
  RunRequestResponse,
} from "src/models/RunnerFacade.models";

import axios from "axios";
import { getConfig } from "src/config";

export class RunnerFacade {
  public static async runTestAndGetOutput(
    requestBody: RunRequestBody,
  ): Promise<RunRequestResponse> {
    const config = getConfig();

    try {
      if (config.runnerEndpoint) {
        const { data } = await axios.post(config.runnerEndpoint, requestBody);
        return data;
      } else {
        return { output: "Server endpoint not found." };
      }
    } catch {
      return { output: "Error happend during test execution." };
    }
  }
}
