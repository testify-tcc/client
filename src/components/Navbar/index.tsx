import "./Navbar.scss";

import { Box, Text } from "@chakra-ui/react";
import { Colors, FontFamilies, FontSizes } from "src/theme";

import { NavbarLabels } from "./Navbar.labels";

export function Navbar() {
  return (
    <Box
      as="nav"
      className="navbar-container"
      bgColor={Colors.PRIMARY}
      color={Colors.WHITE}
    >
      <Text
        className="navbar-platform-name"
        fontFamily={FontFamilies.COMFORTAA}
        fontSize={FontSizes.HEADING1}
      >
        {NavbarLabels.PLATFORM_NAME}
      </Text>
      <Text
        className="navbar-section"
        fontFamily={FontFamilies.OPEN_SANS}
        fontSize={FontSizes.TEXT}
      >
        {NavbarLabels.EXERCISES_SECTION}
      </Text>
    </Box>
  );
}
