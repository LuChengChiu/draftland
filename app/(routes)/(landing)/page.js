import { Center, Box, Grid, GridItem } from "@chakra-ui/react";
import CustomGridDesktop from "@/app/_components/home/custom-grid-desktop";
import CustomGridTablet from "@/app/_components/home/custom-grid-tablet";
export default function Landing() {
  const data = {};
  return (
    <Center w="100dvw" h="100dvh" bg="#000">
      <CustomGridDesktop />
      {/* <CustomGridTablet /> */}
    </Center>
  );
}
