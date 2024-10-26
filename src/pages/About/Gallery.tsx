import { Box, Grid, Heading, Text, Skeleton, SkeletonText, Image as ChakraImage } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import GalleryCardSkeleton from "./GalleryCardSkeleton"; // Skeleton component for the image cards

// Adjust the Slide interface to match the backend response
interface Slide {
  images: { image: string }[]; // Array of objects with an image property
  text_en: string;
  text_am: string;
}

const GalleryPage = () => {
  const { i18n, t } = useTranslation();
  const [slides, setSlides] = useState<Slide[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://192.168.1.44:8000/api/slides/')
    // axios.get('http://192.168.137.226:8000/api/slides/')
      .then(response => {
        setSlides(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
        setLoading(false);
      });
  }, []);

  const skeletons = [1, 2, 3, 4, 5, 6]; // Adjust number of skeletons based on layout

  return (
    <Box px={[4, 6, 8, 10]} py={[8, 12, 16]} mt={[10, 20, 28]}>
      <Heading as="h1" size="xl" mb={4} mt={{ base: '3%', md: "0%" }} color="#FF7400">
        {t("gallery.gallery")}
      </Heading>

      {loading ? (
        // Skeleton for text and images
        skeletons.map((_skeleton, index) => (
          <Box key={index} mb={8}>
            <SkeletonText mt="4" noOfLines={2} spacing="4" skeletonHeight="2" />
            <Grid
              templateColumns={[
                "repeat(1, 1fr)", // mobile
                "repeat(2, 1fr)", // tablet
                "repeat(3, 1fr)", // larger sizes
              ]}
              gap={6}
              mt={4}
            >
              <GalleryCardSkeleton /> {/* Skeleton for images */}
              <GalleryCardSkeleton />
              <GalleryCardSkeleton />
            </Grid>
          </Box>
        ))
      ) : (
        slides.map((slide, index) => (
          <Box key={index} mb={8}>
            {/* Render actual text once data is fetched */}
            <Text fontSize="lg" fontWeight="bold" mb={6} color="#00008B" textAlign="center">
              {i18n.language === 'am' ? slide.text_am : slide.text_en}
            </Text>

            <Grid
              templateColumns={[
                "repeat(1, 1fr)", // mobile
                "repeat(2, 1fr)", // tablet
                "repeat(3, 1fr)", // larger sizes
              ]}
              gap={2}
              mb={4}
            >
              {slide.images.map((imageObj, imageIndex) => (
                <Box key={imageIndex} w="100%" h="100%" position="relative">
                  <ChakraImage
                    src={imageObj.image}
                    alt={`Gallery item ${imageIndex + 1}`}
                    borderRadius="md"
                    boxShadow="md"
                    _hover={{
                      transform: "scale(1.05)",
                      boxShadow: "lg",
                    }}
                    w="100%"
                    h="100%"
                    objectFit="cover"
                  />
                </Box>
              ))}
            </Grid>
          </Box>
        ))
      )}
    </Box>
  );
};

export default GalleryPage;
