import { App } from "src/App";
import TestRenderer from "react-test-renderer";
import { routerWrapper } from "./routerWrapper";

test("App is rendered without crashing", () => {
  TestRenderer.create(routerWrapper(<App />));
});
