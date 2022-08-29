import { BrowserRouter } from "react-router-dom";

export function routerWrapper(element: JSX.Element) {
  return <BrowserRouter>{element}</BrowserRouter>;
}
