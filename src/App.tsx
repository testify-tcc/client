import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Exercises } from "./components/Exercises";
import { Home } from "./components/Home";
import { usePathUtils } from "./hooks/usePathUtils";

export function App() {
  const { homePath, exercisesPath } = usePathUtils();

  return (
    <BrowserRouter>
      <Routes>
        <Route path={homePath} element={<Home />} />
        <Route path={exercisesPath} element={<Exercises />} />
      </Routes>
    </BrowserRouter>
  );
}
