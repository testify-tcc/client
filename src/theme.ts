import { extendTheme } from "@chakra-ui/react";

export enum FontFamilies {
  COMFORTAA = "comfortaa",
  OPEN_SANS = "open-sans",
}

export enum Colors {
  PRIMARY = "teal",
  SECONDARY = "yellow",
  WHITE = "gray.50",
  BLACK = "black",
}

export const theme = extendTheme({
  fonts: {
    [FontFamilies.COMFORTAA]: `"Comfortaa", cursive`,
    [FontFamilies.OPEN_SANS]: `"Open Sans", sans-serif`,
  },
});
