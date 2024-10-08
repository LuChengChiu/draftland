import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  breakpoints: {
    base: "0px",
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
  },
  colors: {},
  components: {
    // Heading: headingTheme,
  },
});
