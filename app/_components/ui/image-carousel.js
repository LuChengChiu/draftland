"use client";
import { Box, Center, HStack, Image, keyframes } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log("carousel: ", currentIndex);
  let delay = 3000;
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, delay);
    return () => clearInterval(interval);
  }, [images.length, delay]);

  // Animation for sliding images
  const slideAnimation = keyframes`
    from { transform: translateX(100%); }
    to { transform: translateX(0); }
  `;
  return (
    <Center as={HStack} w="100%" h="100%" opacity={20}>
      {/* {images.map((img, index) => {
        return (
          <Box
            width="100%"
            height="100%"
            animation={`${slideAnimation} 0.5s ease-in-out`}
            position={index === currentIndex ? "relative" : "absolute"}
            left={index === currentIndex ? 0 : "100%"}
            // opacity={index === currentIndex ? 1 : 0}
            transition="opacity 0.5s ease-in-out"
          >
            <Image
              src={img.img.src}
              alt={img.alt}
              w="100%"
              h="100%"
              objectFit="fill"
            />{" "}
          </Box>
        );
      })} */}
      <HStack
        width="100%"
        height="100%"
        // animation={`${slideAnimation} 0.25s ease-in-out`}
        transition="all 300ms ease-in-out"
        pos="relative"
      >
        {images.map((img, index) => {
          return (
            <Image
              h="100%"
              objectFit="fill"
              src={img.img.src}
              alt={img.alt}
              //   pos={index === currentIndex ? "relative" : "absolute"}
              pos={"absolute"}
              left={`calc(${index} * 100%)`}
              //   left={index === currentIndex ? 0 : `calc(${index} * 100%)`}
              //   animation={`${slideAnimation} 0.25s ease-in-out`}
              transition="all 300ms ease-in-out"
            />
          );
        })}
      </HStack>
    </Center>
  );
}
