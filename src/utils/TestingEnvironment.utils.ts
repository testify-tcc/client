import { TestingEnvironment } from "src/models/TestingEnvironments.models";
import { TestingEnvironmentLabel } from "src/labels/TestingEnvironment.labels";

export class TestingEnvironmentUtils {
  private static readonly testingEnvironmentLabels: Record<
    TestingEnvironment,
    TestingEnvironmentLabel
  > = {
    [TestingEnvironment.JAVASCRIPT_JEST]:
      TestingEnvironmentLabel.JAVASCRIPT_JEST,
  };

  public static getTestingEnvironmentLabel(
    testingEnvironment: TestingEnvironment,
  ): TestingEnvironmentLabel {
    return TestingEnvironmentUtils.testingEnvironmentLabels[testingEnvironment];
  }
}
