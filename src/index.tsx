import "./index.scss";

import { App } from "src/App";
import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom";
import { theme } from "./theme";

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
  document.getElementById("root"),
);
