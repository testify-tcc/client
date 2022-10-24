import { Colors, FontSizes } from "src/theme";

import { Definition } from "src/models/Definitions.models";
import { DefinitionLink } from "../Links/DefinitionLink";
import { useMemo } from "react";

type Props = {
  definition: Definition;
  isSelected: boolean;
  onClick: (definition: Definition) => void;
};

export function DefinitionItemButton(props: Props) {
  const definitionItemColor = useMemo(() => {
    return props.isSelected ? Colors.PRIMARY : Colors.BLACK;
  }, [props.isSelected]);

  return (
    <DefinitionLink
      fontSize={FontSizes.TEXT}
      color={definitionItemColor}
      label={props.definition.panelLabel}
      definitionId={props.definition.id}
    />
  );
}
