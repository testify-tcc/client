import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

import { DefinitionDescription } from "../DefinitionDescription";
import { ExerciseDefinition } from "src/models/Definitions.models";
import { ExerciseDefinitionHeaderLabels } from "./ExerciseDefinitionHeader.labels";
import { TestingEnvironment } from "src/models/TestingEnvironments.models";
import { useMemo } from "react";

type Props = {
  exerciseDefinition: ExerciseDefinition;
  testingEnvironment: TestingEnvironment;
};

export function ExerciseDefinitionHeader({
  exerciseDefinition,
  testingEnvironment,
}: Props): JSX.Element {
  const description = useMemo(
    () => exerciseDefinition.descriptionsMap[testingEnvironment],
    [exerciseDefinition.descriptionsMap, testingEnvironment],
  );

  const solutionDescription = useMemo(
    () => exerciseDefinition.solutionDescriptionsMap[testingEnvironment],
    [exerciseDefinition.solutionDescriptionsMap, testingEnvironment],
  );

  return (
    <Tabs>
      <TabList>
        <Tab>{ExerciseDefinitionHeaderLabels.DESCRIPTION_TAB_LABEL}</Tab>
        <Tab>
          {ExerciseDefinitionHeaderLabels.SOLUTION_DESCRIPTION_TAB_LABEL}
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <DefinitionDescription>{description}</DefinitionDescription>
        </TabPanel>
        <TabPanel>
          <DefinitionDescription>{solutionDescription}</DefinitionDescription>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
