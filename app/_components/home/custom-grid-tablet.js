import { Grid, GridItem } from "@chakra-ui/react";
export default function CustomGridTablet() {
  return (
    <Grid
      w={{ base: "80%", lg: "80%", xl: "70%" }}
      h={{ base: "80%", lg: "80%", xl: "70%" }}
      templateAreas={`"first sec sec thd"
                  "d d e e"
                  "f f e e"
                  "g g h h"`}
      gridTemplateRows={"1fr 1fr 1fr 1fr"}
      gridTemplateColumns={"1fr 1fr 1fr 1fr"}
      gap={4}
      display={{ md: "grid", lg: "none" }}
    >
      <GridItem bg="tomato" rounded="20px" area="first" />
      <GridItem bg="papayawhip" rounded="20px" area="sec" />
      <GridItem bg="papayawhip" rounded="20px" area="thd" />
      <GridItem bg="tomato" rounded="20px" area="d" />
      <GridItem bg="tomato" rounded="20px" area="e" />
      <GridItem bg="tomato" rounded="20px" area="f" />
      <GridItem bg="tomato" rounded="20px" area="g" />
      <GridItem bg="tomato" rounded="20px" area="h" />

      {/* <GridItem rowSpan={1} colSpan={1} bg="papayawhip" rounded="20px" /> */}
    </Grid>
  );
}
