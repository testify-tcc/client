import "./App.scss";

import { Box } from "@chakra-ui/react";
import { Colors } from "./theme";
import { Navbar } from "./components/Navbar";

export function App() {
  return (
    <Box className="app-container" bgColor={Colors.WHITE}>
      <Navbar />
    </Box>
  );
}
