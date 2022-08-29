import { AboutTestify } from "src/components/AboutTestify";
import TestRenderer from "react-test-renderer";

describe("Navbar", () => {
  it("render without crashing", () => {
    TestRenderer.create(<AboutTestify />);
  });
});
