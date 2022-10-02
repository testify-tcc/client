import { DefinitionList, DefinitionMap } from "./Definitions.models";

export type GetDefinitionsResponse = {
  map: DefinitionMap;
  list: DefinitionList;
};
