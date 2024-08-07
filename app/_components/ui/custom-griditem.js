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
  bgGradient,
  href = "",
  img,
  alt,
  title = "",
}) {
  const slogan = title.includes("on");

  return (
    <GridItem bgGradient={bgGradient} rounded="20px" border="0" area={area}>
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
            lineHeight={slogan ? "35px" : "30px"}
            userSelect="none"
            opacity={slogan ? 1 : 0}
            transition="all 300ms ease-in-out"
            border={slogan ? "0" : "1px solid #FFF"}
            backdropFilter={slogan ? "blur(1px)" : "blur(3px)"}
          >
            {slogan ? title.slice(0, 10) : title}
            <Text as="span" display="inline" borderBottom="2px solid #FFF">
              {slogan && title.slice(10, 12)}
            </Text>{" "}
            {slogan && title.slice(13, title.length)}
          </Text>
        )}
      </ChakraLink>
    </GridItem>
  );
}
