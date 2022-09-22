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
        const response = await axios.post<RunRequestResponse>(
          config.runnerEndpoint,
          requestBody,
        );
        return response.data;
      } else {
        return { passed: false, output: "Server endpoint not found." };
      }
    } catch {
      return { passed: false, output: "Error happend during test execution." };
    }
  }
}
