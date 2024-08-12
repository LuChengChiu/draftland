import {
  Grid,
  GridItem,
  Link as ChakraLink,
  Image,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";

import logo from "@/app/_assets/logo.webp";
import carousel1 from "@/app/_assets/home-carousel-1.webp";
import carousel2 from "@/app/_assets/home-carousel-2.webp";
import carousel3 from "@/app/_assets/home-carousel-3.webp";
import carousel4 from "@/app/_assets/home-carousel-4.webp";

import story from "@/app/_assets/story.webp";
import testing from "@/app/_assets/testing.webp";
import draftland from "@/app/_assets/draftland.jpg";
import dailyDraftland from "@/app/_assets/dailydraftland.webp";
import recruit from "@/app/_assets/recruit.jpg";
import onTap from "@/app/_assets/onTap.jpg";
import fbIcon from "@/app/_assets/facebook.svg";
import igIcon from "@/app/_assets/instagram.svg";

import CustomGridItem from "../ui/custom-griditem";

export default function CustomGrid() {
  const images = [
    { img: carousel1, alt: "carousel-image-1" },
    { img: carousel2, alt: "carousel-image-2" },
    { img: carousel3, alt: "carousel-image-3" },
    { img: carousel4, alt: "carousel-image-4" },
  ];
  return (
    <Grid
      w="100%"
      h="100%"
      p={{ base: "10%", md: "15%", lg: "5%" }}
      placeContent={{ md: "center" }}
      templateAreas={{
        base: `"slogan slogan slogan logo" "carousel carousel carousel carousel" "draftland draftland draftland testing" "daily daily daily testing" "story story link recruit"`,
        md: `"logo slogan slogan slogan"
        "testing carousel carousel story"
        "testing carousel carousel recruit"
        "draftland draftland daily daily"`,
        lg: `"logo slogan slogan story testing"
                  "carousel carousel draftland draftland testing"
                  "carousel carousel daily daily recruit"`,
      }}
      gridTemplateRows={{
        base: "130px 260px 130px 130px 130px",
        md: "20% 20% 20% 20%",
        lg: "220px 220px 220px",
      }}
      gridTemplateColumns={{
        base: "20% 15% 18% 35%",
        md: "1fr 1fr 1fr 1fr",
        lg: "1fr 1fr 1fr 1fr 1fr",
        xl: "200px 200px 200px 200px 200px",
      }}
      gap={4}
      overflowY="scroll"
    >
      <CustomGridItem
        href="#"
        img={logo}
        alt="logo"
        area="logo"
        bgGradient="linear(to-b, #ebf4f5, #b5c6e0)"
      />
      <CustomGridItem img={onTap} area="slogan" title="cocktails on tap" />
      <CustomGridItem href="#" img={story} title="story" area="story" />
      <CustomGridItem
        row={2}
        href="#"
        img={testing}
        title={`testing\nroom`}
        area="testing"
      />
      <CustomGridItem row={2} col={2} img={images} area="carousel" />
      <CustomGridItem
        col={2}
        href="#"
        img={draftland}
        title="draftland"
        area="draftland"
      />
      <CustomGridItem
        col={2}
        href="#"
        img={dailyDraftland}
        title="daily by draftland"
        area="daily"
      />
      <CustomGridItem href="#" img={recruit} title="recruit" area="recruit" />
      <GridItem
        as={VStack}
        area="link"
        py="5px"
        rounded="20px"
        spacing="0px"
        // bg="linear-gradient(0deg, rgba(235,244,245,1) 0%, rgba(181,198,224,0.821187850140056) 74%)"
        alignItems="space-between"
        justifyContent="center"
        display={{ base: "grid", md: "none" }}
      >
        <ChakraLink
          as={Link}
          href="https://www.instagram.com/draftland/"
          w="50px"
        >
          <Image
            src={fbIcon.src}
            alt="facebook-link"
            p="5px"
            bg="#FFF"
            rounded="15px"
            aspectRatio="1/1"
          />
        </ChakraLink>
        <ChakraLink
          as={Link}
          href="https://www.facebook.com/draftland"
          w="50px"
        >
          <Image
            src={igIcon.src}
            alt="facebook-link"
            p="5px"
            bg="#FFF"
            rounded="15px"
            aspectRatio="1/1"
          />
        </ChakraLink>
      </GridItem>
    </Grid>
  );
}
