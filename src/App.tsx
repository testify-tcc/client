import "./App.scss";

import { Button, Text } from "@chakra-ui/react";

import { FontFamilies } from "./theme";
import { useState } from "react";

export function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="app-container">
      <Text
        as="u"
        fontSize="6xl"
        color="teal"
        fontFamily={FontFamilies.COMFORTAA}
      >
        Hello, World!
      </Text>
      <Button
        colorScheme="teal"
        size="lg"
        variant="solid"
        onClick={() => {
          setCounter((oldCounter) => oldCounter + 1);
        }}
      >
        Counter: {counter}
      </Button>
    </div>
  );
}
