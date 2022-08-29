import "./AboutTestify.scss";

import { Box } from "@chakra-ui/react";

export function AboutTestify() {
  return (
    <Box className="about-testify-container">
      <Box as="h1" className="about-testify-title">
        Testify
      </Box>
      <Box as="p" className="about-testify-description">
        {`The Testify goal is to help developers learn about software testing in
        practice. We recommend using the platform along with Mauricio Aniche's
        book Effective Software Testing: A Developer's Guide, which is the base
        for the exercises.`.trim()}
      </Box>
    </Box>
  );
}
