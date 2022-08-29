import { Navbar } from "src/components/Navbar";
import TestRenderer from "react-test-renderer";

describe("Navbar", () => {
  it("render without crashing", () => {
    TestRenderer.create(<Navbar />);
  });
});
