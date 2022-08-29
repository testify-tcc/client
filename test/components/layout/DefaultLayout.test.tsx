import { DefaultLayout } from "src/components/layouts/DefaultLayout";
import TestRenderer from "react-test-renderer";

describe("Navbar", () => {
  it("render without crashing", () => {
    TestRenderer.create(<DefaultLayout />);
  });
});
