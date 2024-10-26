import React, { useState, useEffect } from "react";
import {
  Box,
  Image,
  Text,
  Center,
  HStack,
  Circle,
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react"; 
import slide1 from "../../assets/slide2.png";
import slide2 from "../../assets/slide1.png";
import slide3 from "../../assets/slide3.png";

const slides = [
  {
    image: slide1,
    text: "Welcome to AMIGOS\nSaving and Credit Cooperation",
  },
  {
    image: slide2,
    text: "Short-Term Loans Available\nModern Technology for Better Service: We leverage the latest technology to provide efficient and friendly service to our members.",
  },
  {
    image: slide3,
    text: "Flexible Loan Terms\nEnjoy longer repayment periods of up to 10 years and multiple warranty options to suit your needs.",
  },
];

const fadeInOut = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const ImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box position="relative" w="100vw" maxW="100%" mx="auto" overflow="hidden">
      <Box position="relative" w="100%" h="600px">
        {slides.map((slide, index) => (
          <Box
            key={index}
            position="absolute"
            top="0"
            left="0"
            w="100%"
            h="100%"
            transition="opacity 1s ease-in-out"
            opacity={currentIndex === index ? 1 : 0}
            zIndex={currentIndex === index ? 1 : 0}
          >
            <Image
              src={slide.image}
              alt={`Slide ${index + 1}`}
              objectFit="cover"
              w="100%"
              h="100%"
            />
            <Box
              position="absolute"
              top="0"
              left="0"
              w="100%"
              h="100%"
              bgGradient="linear(to-b, blackAlpha.600, transparent, blackAlpha.600)"
            />
            <Center
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              textAlign="center"
              color="#FF7400"
              px={4}
              animation={`${fadeInOut} 1s ease-in-out`}
            >
              <Text
                fontSize={["sm", "md", "lg"]}
                fontWeight="bold"
                whiteSpace="pre-line"
                animation={`${fadeInOut} 1s ease-in-out`}
              >
                {slide.text}
              </Text>
            </Center>
          </Box>
        ))}
      </Box>
      <HStack
        spacing={3}
        position="absolute"
        bottom="10px"
        left="50%"
        transform="translateX(-50%)"
      >
        {slides.map((_, index) => (
          <Circle
            key={index}
            size="10px"
            bg={currentIndex === index ? "teal.300" : "gray.500"}
            transition="background-color 0.3s"
          />
        ))}
      </HStack>
    </Box>
  );
};

export default ImageSlider;
