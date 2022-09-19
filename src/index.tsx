import "./index.scss";

import { App } from "src/App";
import { ChakraProvider } from "@chakra-ui/react";
import { HashRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { theme } from "./theme";

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);
  root.render(
    <ChakraProvider theme={theme}>
      <HashRouter>
        <App />
      </HashRouter>
    </ChakraProvider>,
  );
}
