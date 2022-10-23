import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

import { DefinitionDescription } from "../DefinitionDescription";
import { ExerciseDefinition } from "src/models/Definitions.models";
import { ExerciseDefinitionHeaderLabels } from "./ExerciseDefinitionHeader.labels";
import { TestingEnvironment } from "src/models/TestingEnvironments.models";

type Props = {
  exerciseDefinition: ExerciseDefinition;
  testingEnvironment: TestingEnvironment;
};

export function ExerciseDefinitionHeader({
  exerciseDefinition,
}: Props): JSX.Element {
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
          <DefinitionDescription>
            {exerciseDefinition.description}
          </DefinitionDescription>
        </TabPanel>
        <TabPanel>
          <DefinitionDescription>
            {exerciseDefinition.solutionDescription}
          </DefinitionDescription>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
