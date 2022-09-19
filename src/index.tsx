import "./index.scss";

import { App } from "src/App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { createRoot } from "react-dom/client";
import { theme } from "./theme";

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);
  root.render(
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>,
  );
}
