import { useQueryParams } from "./useQueryParams";

export function useExercisesQueryParams() {
  const { queryParams, setQueryParams } = useQueryParams();
  const exerciseId = queryParams.exerciseId ?? null;

  const setExerciseQueryParams = (exerciseId: string) => {
    setQueryParams({ exerciseId });
  };

  return { exerciseId, setExerciseQueryParams };
}
