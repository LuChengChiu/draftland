import { Center, Flex } from "@chakra-ui/react";
import CustomGrid from "@/app/_components/home/custom-grid";

export default function Landing() {
  const data = {};
  return (
    <Flex
      w="100dvw"
      h="100dvh"
      bg="#000"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <CustomGrid />
    </Flex>
  );
}
