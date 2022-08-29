import { TestingEnvironment } from "src/models/TestingEnvironments.models";
import { TestingEnvironmentLabel } from "src/labels/TestingEnvironment.labels";
import { TestingEnvironmentUtils } from "src/utils/TestingEnvironment.utils";

describe("TestingEnvironmentUtils", () => {
  it("should return proper label for javascript environment", () => {
    expect(
      TestingEnvironmentUtils.getTestingEnvironmentLabel(
        TestingEnvironment.JAVASCRIPT_JEST,
      ),
    ).toBe(TestingEnvironmentLabel.JAVASCRIPT_JEST);
  });
});
