import { Colors, FontFamilies, FontSizes } from "src/theme";

import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { usePathUtils } from "src/hooks/usePathUtils";
import { useQueryParams } from "src/hooks/useQueryParams";

type Props = {
  label: string;
  exerciseId: string;
  color: Colors;
  fontSize: FontSizes;
  fontFamily: FontFamilies;
};

export function ExerciseLink({
  exerciseId,
  label,
  color,
  fontSize,
  fontFamily,
}: Props) {
  const { exercisesPath } = usePathUtils();
  const { getQueryString } = useQueryParams();

  return (
    <Link
      to={{ pathname: exercisesPath, search: getQueryString({ exerciseId }) }}
    >
      <Button
        variant="link"
        color={color}
        fontSize={fontSize}
        fontFamily={fontFamily}
      >
        {label}
      </Button>
    </Link>
  );
}
