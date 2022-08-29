import { Exercises } from "src/components/Exercises";
import TestRenderer from "react-test-renderer";

describe("Navbar", () => {
  it("render without crashing", () => {
    TestRenderer.create(<Exercises />);
  });
});
