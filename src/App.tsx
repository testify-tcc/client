import { Route, Routes } from "react-router-dom";

import { Box } from "@chakra-ui/react";
import { FontFamilies } from "./theme";
import { Home } from "./components/Home";

export function App() {
  return (
    <Box fontFamily={FontFamilies.COMFORTAA}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Box>
  );
}
