import { DefinitionList, DefinitionMap } from "src/models/Definitions.models";
import { useCallback, useState } from "react";

import { DefinitionsFacade } from "src/resources/DefinitionsFacade";

export function useDefinitions() {
  const [isLoadingDefinitions, setIsLoadingDefinitions] =
    useState<boolean>(true);
  const [definitionList, setDefinitionList] = useState<DefinitionList>();
  const [definitionMap, setDefinitionMap] = useState<DefinitionMap>();

  const loadDefinitions = useCallback(async () => {
    setIsLoadingDefinitions(true);

    const response = await DefinitionsFacade.getExercises();

    setDefinitionMap(response.map);
    setDefinitionList(response.list);

    setIsLoadingDefinitions(false);
  }, []);

  return {
    definitionList,
    definitionMap,
    isLoadingDefinitions,
    loadDefinitions,
  };
}
