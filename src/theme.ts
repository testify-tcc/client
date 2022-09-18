import { extendTheme } from "@chakra-ui/react";

export enum FontFamilies {
  COMFORTAA = "comfortaa",
  MONOSPACE = "monospace",
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
    [FontFamilies.MONOSPACE]: `ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace`,
  },
});
