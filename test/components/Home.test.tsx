import { Home } from "src/components/Home";
import TestRenderer from "react-test-renderer";
import { providersWrapper } from "test/providersWrapper";

describe("Home", () => {
  it("render without crashing", () => {
    TestRenderer.create(providersWrapper(<Home />));
  });
});
