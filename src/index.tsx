import "./index.scss";

import { App } from "src/App";
import { ChakraProvider } from "@chakra-ui/react";
import { createRoot } from "react-dom/client";
import { theme } from "./theme";

function boostrap() {
  const container = document.getElementById("root");

  if (container) {
    const root = createRoot(container);
    root.render(
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>,
    );
  }
}

boostrap();
