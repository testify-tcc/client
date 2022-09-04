import { useSearchParams } from "react-router-dom";

enum QueryParamsKey {
  EXERCISE_ID = "exerciseId",
}

type QueryParams = {
  exerciseId?: string | null;
};

export function useQueryParams() {
  const [searchParams, setSearchParams] = useSearchParams();

  const queryParams: QueryParams = {
    exerciseId: searchParams.get(QueryParamsKey.EXERCISE_ID),
  };

  const getQueryString = (queryParams: QueryParams): string => {
    const searchParams = new URLSearchParams();
    const exerciseId = queryParams[QueryParamsKey.EXERCISE_ID];

    if (exerciseId) {
      searchParams.set(QueryParamsKey.EXERCISE_ID, exerciseId);
    }

    return searchParams.toString();
  };

  const setQueryParams = (rawQueryParams: QueryParams): void => {
    const queryParams: Record<string, string> = {};

    const exerciseId = rawQueryParams[QueryParamsKey.EXERCISE_ID];

    if (exerciseId) {
      queryParams[QueryParamsKey.EXERCISE_ID] = exerciseId;
    }

    setSearchParams(queryParams);
  };

  return { queryParams, getQueryString, setQueryParams };
}
