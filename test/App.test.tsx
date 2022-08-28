import { App } from "../src/App";
import React from "react";
import TestRenderer from "react-test-renderer";

test("App is rendered without crashing", () => {
  TestRenderer.create(<App />);
});
