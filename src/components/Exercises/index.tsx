import "./Exercises.scss";

import { Box, Divider, Spinner, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { DefaultLayout } from "components/layouts/DefaultLayout";
import { Definition } from "src/models/Definitions.models";
import { DefinitionRenderer } from "../DefinitionRenderer";
import { DefinitionsPanel } from "../DefinitionsPanel";
import { ExercisesLabels } from "./Exercises.labels";
import { useDefinitions } from "src/hooks/useDefinitions";
import { useDefinitionsQueryParams } from "src/hooks/useDefinitionsQueryParams";
import { useToggle } from "src/hooks/useToggle";

export function Exercises() {
  const {
    definitionList,
    definitionMap,
    isLoadingDefinitions,
    loadDefinitions,
  } = useDefinitions();
  const { definitionId, setDefinitionQueryParams } =
    useDefinitionsQueryParams();
  const [selectedDefinition, setSelectedDefinition] = useState<Definition>();
  const { value: isPanelOpen, toggle: toggleIsPanelOpen } = useToggle(true);

  const handleDefinitionItemClick = (definition: Definition) => {
    setDefinitionQueryParams(definition.id);
  };

  useEffect(() => {
    if (definitionList && definitionMap) {
      if (definitionId) {
        const exerciseDefinition = definitionMap[definitionId];

        if (exerciseDefinition) {
          setSelectedDefinition(exerciseDefinition);
          return;
        }
      }

      setSelectedDefinition(definitionList[0]);
    }
  }, [definitionList, definitionMap, definitionId]);

  useEffect(() => {
    loadDefinitions();
  }, [loadDefinitions]);

  return (
    <DefaultLayout>
      {isLoadingDefinitions && (
        <Box className="exercises-page-loader">
          <Spinner thickness="4px" speed="0.65s" size="xl" />
          <Text>{ExercisesLabels.LOADING_LABEL}</Text>
        </Box>
      )}
      {definitionList && selectedDefinition && (
        <Box className="exercises-page-container">
          <DefinitionsPanel
            isOpen={isPanelOpen}
            definitions={definitionList}
            onOpenPanelButtonClick={toggleIsPanelOpen}
            onClosePanelButtonClick={toggleIsPanelOpen}
            selectedDefinitionId={selectedDefinition.id}
            onDefinitionItemClick={handleDefinitionItemClick}
          />
          <Divider orientation="vertical" />
          <DefinitionRenderer definition={selectedDefinition} />
        </Box>
      )}
    </DefaultLayout>
  );
}
