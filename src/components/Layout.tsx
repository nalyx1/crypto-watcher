import { useColorMode, IconButton } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <IconButton
        aria-label="Toggle dark mode"
        icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
        onClick={toggleColorMode}
        variant="ghost"
        position="fixed"
        top="1rem"
        right="1rem"
      />
      {children}
    </>
  );
}
