import { useQueryParams } from "./useQueryParams";

export function useDefinitionsQueryParams() {
  const { queryParams, setQueryParams } = useQueryParams();
  const definitionId = queryParams.definitionId ?? null;

  const setDefinitionQueryParams = (definitionId: string) => {
    setQueryParams({ definitionId });
  };

  return { definitionId, setDefinitionQueryParams };
}
