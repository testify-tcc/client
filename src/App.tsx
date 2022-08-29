import "./App.scss";

import { Colors, FontFamilies } from "./theme";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Box } from "@chakra-ui/react";
import { Exercises } from "./components/Exercises";
import { Home } from "./components/Home";
import { Paths } from "./paths";

export function App() {
  return (
    <Box
      className="app-container"
      bgColor={Colors.WHITE}
      fontFamily={FontFamilies.COMFORTAA}
    >
      <Router>
        <Routes>
          <Route path={Paths.HOME} element={<Home />} />
          <Route path={Paths.EXERCISES} element={<Exercises />} />
        </Routes>
      </Router>
    </Box>
  );
}
