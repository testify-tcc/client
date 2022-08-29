import { Home } from "src/components/Home";
import TestRenderer from "react-test-renderer";

describe("Home", () => {
  it("render without crashing", () => {
    TestRenderer.create(<Home />);
  });
});
