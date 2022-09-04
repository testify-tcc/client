import { AboutTestify } from "src/components/AboutTestify";
import TestRenderer from "react-test-renderer";
import { providersWrapper } from "test/providersWrapper";

describe("Navbar", () => {
  it("render without crashing", () => {
    TestRenderer.create(providersWrapper(<AboutTestify />));
  });
});
