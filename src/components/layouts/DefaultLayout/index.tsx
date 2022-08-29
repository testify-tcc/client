import "./DefaultLayout.scss";

import { Box } from "@chakra-ui/react";
import { Navbar } from "src/components/Navbar";
import { PropsWithChildren } from "react";
import classNames from "classnames";

type Props = PropsWithChildren & {
  classes?: {
    container?: string;
    childrenContainer?: string;
  };
};

export function DefaultLayout({ children, classes }: Props) {
  return (
    <Box className={classNames("default-layout-container", classes?.container)}>
      <Navbar />
      <Box
        className={classNames(
          "default-layout-children-container",
          classes?.childrenContainer,
        )}
      >
        {children}
      </Box>
    </Box>
  );
}
