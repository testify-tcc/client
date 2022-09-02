import {
  RunRequestBody,
  RunRequestResponse,
} from "src/models/RunnerFacade.models";

import axios from "axios";
import { env } from "src/env";

export class RunnerFacade {
  public static async runTestAndGetOutput(
    requestBody: RunRequestBody,
  ): Promise<RunRequestResponse> {
    const { data } = await axios.post(env.SERVER_ENDPOINT, requestBody);
    return data;
  }
}
