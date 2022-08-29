import { App } from "src/App";
import TestRenderer from "react-test-renderer";

describe("App", () => {
  it("render without crashing", () => {
    TestRenderer.create(<App />);
  });
});
