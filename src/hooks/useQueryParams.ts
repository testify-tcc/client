import { useSearchParams } from "react-router-dom";

enum QueryParamsKey {
  DEFINITION_ID = "definitionId",
}

type QueryParams = {
  definitionId?: string | null;
};

export function useQueryParams() {
  const [searchParams, setSearchParams] = useSearchParams();

  const queryParams: QueryParams = {
    definitionId: searchParams.get(QueryParamsKey.DEFINITION_ID),
  };

  const getQueryString = (queryParams: QueryParams): string => {
    const searchParams = new URLSearchParams();
    const definitionId = queryParams[QueryParamsKey.DEFINITION_ID];

    if (definitionId) {
      searchParams.set(QueryParamsKey.DEFINITION_ID, definitionId);
    }

    return searchParams.toString();
  };

  const setQueryParams = (rawQueryParams: QueryParams): void => {
    const queryParams: Record<string, string> = {};

    const definitionId = rawQueryParams[QueryParamsKey.DEFINITION_ID];

    if (definitionId) {
      queryParams[QueryParamsKey.DEFINITION_ID] = definitionId;
    }

    setSearchParams(queryParams);
  };

  return { queryParams, getQueryString, setQueryParams };
}
