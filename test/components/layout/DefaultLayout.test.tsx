import { DefaultLayout } from "src/components/layouts/DefaultLayout";
import TestRenderer from "react-test-renderer";
import { providersWrapper } from "test/providersWrapper";

describe("Navbar", () => {
  it("render without crashing", () => {
    TestRenderer.create(providersWrapper(<DefaultLayout />));
  });
});
