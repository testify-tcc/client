import { Button, TypographyProps } from "@chakra-ui/react";
import { Colors, FontFamilies, FontSizes } from "src/theme";

import { Link } from "react-router-dom";
import { usePathUtils } from "src/hooks/usePathUtils";
import { useQueryParams } from "src/hooks/useQueryParams";

type Props = {
  label: string;
  definitionId: string;
  color: Colors;
  fontSize: FontSizes;
  fontFamily?: FontFamilies;
  fontWeight?: TypographyProps["fontWeight"];
};

export function DefinitionLink({
  definitionId,
  label,
  color,
  fontSize,
  fontFamily,
  fontWeight,
}: Props) {
  const { exercisesPath } = usePathUtils();
  const { getQueryString } = useQueryParams();

  return (
    <Link
      to={{ pathname: exercisesPath, search: getQueryString({ definitionId }) }}
    >
      <Button
        variant="link"
        fontWeight={fontWeight ?? "normal"}
        color={color}
        fontSize={fontSize}
        fontFamily={fontFamily}
      >
        {label}
      </Button>
    </Link>
  );
}
