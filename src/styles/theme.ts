import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
  light: {
    bg: "#F9FAFB",
    text: "#1A202C",
  },
  dark: {
    bg: "#1A202C",
    text: "#F9FAFB",
  },
};

const theme = extendTheme({
  config,
  colors,
});

export default theme;
