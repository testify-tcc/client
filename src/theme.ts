import { extendTheme } from "@chakra-ui/react";

export enum FontFamilies {
  COMFORTAA = "comfortaa",
  OPEN_SANS = "open-sans",
}

export enum Colors {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  WHITE = "white",
  BLACK = "back",
}

export const theme = extendTheme({
  fonts: {
    [FontFamilies.COMFORTAA]: `"Comfortaa", cursive`,
    [FontFamilies.OPEN_SANS]: `"Open Sans", sans-serif`,
  },
  colors: {
    [Colors.PRIMARY]: "#2DA7A5",
    [Colors.SECONDARY]: "#dc9934",
    [Colors.WHITE]: "#f7f7f7",
    [Colors.BLACK]: "#272727",
  },
});
