import "./index.scss";

import { App } from "src/App";
import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
  document.getElementById("root"),
);
