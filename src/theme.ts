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
  PASSED = "green.700",
  FAILED = "red.700",
  PASSED_BACKGROUND = "green.100",
  FAILED_BACKGROUND = "red.100",
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
