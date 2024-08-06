import {
  Grid,
  GridItem,
  Text,
  Image,
  Center,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Link from "next/link";
import logo from "@/app/_assets/logo.webp";
import homeCarousel1 from "@/app/_assets/home-carousel-1.webp";
import story from "@/app/_assets/story.webp";
import testing from "@/app/_assets/testing.webp";
import draftland from "@/app/_assets/draftland.jpg";
import dailyDraftland from "@/app/_assets/dailydraftland.webp";
import recruit from "@/app/_assets/recruit.jpg";

import CustomGridItem from "../ui/custom-griditem";

export default function CustomGridDesktop() {
  return (
    <Grid
      w={{ base: "80%", lg: "80%", xl: "70%" }}
      h={{ base: "80%", lg: "80%", xl: "70%" }}
      //   templateAreas={`"first sec sec thd"
      //               "d d e e"
      //               "f f e e"
      //               "g g h h"`}
      templateAreas={{
        md: `"logo slogan slogan slogan"
        "testing carousel carousel story"
        "testing carousel carousel recruit"
        "draftland draftland daily daily"`,
        lg: `"logo slogan slogan story testing"
                  "carousel carousel draftland draftland testing"
                  "carousel carousel daily daily recruit"`,
      }}
      gridTemplateRows={{ md: "1fr 1fr 1fr 1fr", lg: "1fr 1fr 1fr" }}
      gridTemplateColumns={{ md: "1fr 1fr 1fr 1fr", lg: "1fr 1fr 1fr 1fr 1fr" }}
      gap={4}
      //   display={{ md: "none", lg: "grid" }}
    >
      <CustomGridItem href="#" img={logo} alt="logo" area="logo" />

      <GridItem as={Center} bg="papayawhip" rounded="20px" area="slogan">
        <Text fontSize="28px" fontWeight="500" textTransform="uppercase">
          cocktails on tap
        </Text>
      </GridItem>
      <CustomGridItem
        href="#"
        img={story}
        alt="story-image"
        title="story"
        area="story"
      />
      <CustomGridItem
        row={2}
        bg="blue"
        href="#"
        img={testing}
        title={`testing\nroom`}
        area="testing"
      />
      <CustomGridItem
        row={2}
        col={2}
        bg="lightgreen"
        img={homeCarousel1}
        alt="carousel-image-1"
        area="carousel"
      />
      <CustomGridItem
        col={2}
        href="#"
        img={draftland}
        alt="draftland-image"
        title="draftland"
        area="draftland"
      />
      <CustomGridItem
        col={2}
        href="#"
        img={dailyDraftland}
        alt="dailyDraftland-image"
        title="daily by draftland"
        area="daily"
      />
      <CustomGridItem
        href="#"
        img={recruit}
        alt="recruit-image"
        title="recruit"
        area="recruit"
      />
      {/* <GridItem rowSpan={1} colSpan={1} bg="papayawhip" rounded="20px" /> */}
    </Grid>
    // <Grid
    //   w={{ base: "80%", lg: "80%", xl: "70%" }}
    //   h={{ base: "80%", lg: "80%", xl: "70%" }}
    //   templateRows={{
    //     lg: "repeat(3, 150px)",
    //     xl: "repeat(3, 1fr)",
    //   }}
    //   templateColumns={{
    //     lg: "repeat(5, 150px)",
    //     xl: "repeat(5, 1fr)",
    //   }}
    //   gap={4}
    //   display={{ md: "none", lg: "grid" }}
    // >
    //   <CustomGridItem href="#" img={logo} alt="logo" />

    //   <GridItem
    //     as={Center}
    //     rowSpan={1}
    //     colSpan={2}
    //     bg="papayawhip"
    //     rounded="20px"
    //   >
    //     <Text fontSize="28px" fontWeight="500" textTransform="uppercase">
    //       cocktails on tap
    //     </Text>
    //   </GridItem>
    //   <CustomGridItem href="#" img={story} alt="story-image" title="story" />
    //   <CustomGridItem
    //     row={2}
    //     bg="blue"
    //     href="#"
    //     img={testing}
    //     title={`testing\nroom`}
    //   />
    //   <CustomGridItem
    //     row={2}
    //     col={2}
    //     bg="lightgreen"
    //     img={homeCarousel1}
    //     alt="carousel-image-1"
    //   />
    //   <CustomGridItem
    //     col={2}
    //     href="#"
    //     img={draftland}
    //     alt="draftland-image"
    //     title="draftland"
    //   />
    //   <CustomGridItem
    //     col={2}
    //     href="#"
    //     img={dailyDraftland}
    //     alt="dailyDraftland-image"
    //     title="daily by draftland"
    //   />
    //   <CustomGridItem
    //     href="#"
    //     img={recruit}
    //     alt="recruit-image"
    //     title="recruit"
    //   />
    //   {/* <GridItem rowSpan={1} colSpan={1} bg="papayawhip" rounded="20px" /> */}
    // </Grid>
  );
}
