import "./App.scss";

import { Colors, FontFamilies } from "./theme";

import { AboutTestify } from "./components/AboutTestify";
import { Box } from "@chakra-ui/react";
import { Navbar } from "./components/Navbar";

export function App() {
  return (
    <Box
      className="app-container"
      bgColor={Colors.WHITE}
      fontFamily={FontFamilies.COMFORTAA}
    >
      <Navbar />
      <AboutTestify />
    </Box>
  );
}
