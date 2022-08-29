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

export enum FontSizes {
  HEADING1 = "5xl",
  HEADING2 = "3xl",
  TEXT = "xl",
  TEXT_SMALL = "md",
}

export const theme = extendTheme({
  fonts: {
    [FontFamilies.COMFORTAA]: `"Comfortaa", cursive`,
    [FontFamilies.OPEN_SANS]: `"Open Sans", sans-serif`,
  },
});
