import Link from "next/link";
import {
  Center,
  GridItem,
  Image,
  Link as ChakraLink,
  Text,
} from "@chakra-ui/react";

export default function CustomGridItem({
  area,
  row = 1,
  col = 1,
  bg = "#FFF",
  href = "",
  img,
  alt,
  title = "",
}) {
  return (
    <GridItem bg={bg} rounded="20px" area={area}>
      <ChakraLink
        as={Link}
        href={href}
        w="100%"
        h="100%"
        pos="relative"
        display="flex"
        alignItems="center"
        justifyContent="center"
        _hover={{ ".hover-text": { opacity: "1" } }}
        cursor={href === "" ? "default" : "pointer"}
      >
        <Image
          w={alt === "logo" ? "auto" : "100%"}
          h={alt === "logo" ? "auto" : "100%"}
          //   w="50px"
          //   h="50px"
          src={img.src}
          alt={alt}
          rounded="18px"
        />
        {title.length > 0 && (
          <Text
            className="hover-text"
            w="min-content"
            px="10px"
            py="3px"
            pos="absolute"
            color="#FFF"
            fontSize="25px"
            fontStyle="italic"
            textAlign="center"
            textTransform="uppercase"
            lineHeight="30px"
            userSelect="none"
            opacity="0"
            transition="all 300ms ease-in-out"
            border="1px solid #FFF"
            backdropFilter="blur(3px)"
          >
            {title}
          </Text>
        )}
      </ChakraLink>
    </GridItem>
  );
}
