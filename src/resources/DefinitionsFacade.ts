import { GetDefinitionsResponse } from "src/models/DefinitionsFacade.models";
import axios from "axios";
import { getConfig } from "src/config";

export class DefinitionsFacade {
  public static async getExercises(): Promise<GetDefinitionsResponse> {
    const config = getConfig();
    const { data } = await axios.get<GetDefinitionsResponse>(
      config.exercisesEndpoint,
    );
    return data;
  }
}
