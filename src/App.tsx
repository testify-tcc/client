import "./App.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Colors, FontFamilies } from "./theme";

import { Box } from "@chakra-ui/react";
import { Exercises } from "./components/Exercises";
import { Home } from "./components/Home";
import { usePathUtils } from "./hooks/usePathUtils";

export function App() {
  const { homePath, exercisesPath } = usePathUtils();

  return (
    <Box
      className="app-container"
      bgColor={Colors.WHITE}
      fontFamily={FontFamilies.COMFORTAA}
    >
      <BrowserRouter>
        <Routes>
          <Route path={homePath} element={<Home />} />
          <Route path={exercisesPath} element={<Exercises />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}
