import { Box } from "@chakra-ui/react";
import { Navbar } from "src/components/Navbar";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren;

export function DefaultLayout({ children }: Props) {
  return (
    <Box className="default-layout-container">
      <Navbar />
      {children}
    </Box>
  );
}
