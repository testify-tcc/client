import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

export function providersWrapper(element: JSX.Element) {
  return (
    <ChakraProvider>
      <BrowserRouter>{element}</BrowserRouter>
    </ChakraProvider>
  );
}
