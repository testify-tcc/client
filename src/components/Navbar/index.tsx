import "./Navbar.scss";

import { Box, Text } from "@chakra-ui/react";
import { Colors, FontFamilies } from "src/theme";

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
      >
        {NavbarLabels.PLATFORM_NAME}
      </Text>
      <Text className="navbar-section" fontFamily={FontFamilies.OPEN_SANS}>
        {NavbarLabels.EXERCISES_SECTION}
      </Text>
    </Box>
  );
}
