import "./Navbar.scss";

import { Box, Button } from "@chakra-ui/react";
import { Colors, FontFamilies, FontSizes } from "src/theme";

import { Link } from "react-router-dom";
import { NavbarLabels } from "./Navbar.labels";
import { usePathUtils } from "src/hooks/usePathUtils";

export function Navbar() {
  const { homePath, exercisesPath } = usePathUtils();

  return (
    <Box
      as="nav"
      className="navbar-container"
      bgColor={Colors.PRIMARY}
      color={Colors.WHITE}
    >
      <Link to={homePath}>
        <Button
          variant="link"
          className="navbar-platform-name"
          color={Colors.WHITE}
          fontSize={FontSizes.HEADING1}
          fontFamily={FontFamilies.COMFORTAA}
        >
          {NavbarLabels.PLATFORM_NAME}
        </Button>
      </Link>
      <Link to={exercisesPath}>
        <Button
          variant="link"
          className="navbar-section"
          color={Colors.WHITE}
          fontSize={FontSizes.TEXT}
          fontFamily={FontFamilies.COMFORTAA}
        >
          {NavbarLabels.EXERCISES_SECTION}
        </Button>
      </Link>
    </Box>
  );
}
