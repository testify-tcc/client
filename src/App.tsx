import "./App.scss";

import { Colors, FontFamilies } from "./theme";
import { Route, Routes } from "react-router-dom";

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
      <Routes>
        <Route path={homePath} element={<Home />} />
        <Route path={exercisesPath} element={<Exercises />} />
      </Routes>
    </Box>
  );
}
