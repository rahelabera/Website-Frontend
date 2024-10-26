import {
  Box,
  Heading,
  Text,
  Image,
  VStack,
  Flex,
  AspectRatio,
} from "@chakra-ui/react";
import image1 from "../../assets/Saada.png";
import image2 from "../../assets/kassahun.png";
import { useTranslation } from "react-i18next";

const CustomerReview = () => {
  const { t } = useTranslation();
  return (
    <Box px={[4, 6, 8, 10]} py={[8, 12, 16]} mx="auto">
      <Heading
        as="h2"
        size="lg"
        mb={4}
        textAlign="center"
        mt={[10, 20, 28]}
        color="#FF7400"
      >
        {t("customerReview.title1")}
      </Heading>
      <Text mb={4} textAlign="center" fontWeight="bold">
        {t("customerReview.title2")}
      </Text>
      <Text mb={8} textAlign="center" fontWeight="bold">
        {t("customerReview.title3")}
      </Text>

      <Flex
        direction={["column", "row", "row"]} // changed to column on mobile, row on tablet and desktop
        justify="space-between"
        flexWrap="wrap"
        mb={8}
        gap={[4, 6, 8]} // increased gap on desktop
      >
        <VStack
          align="center"
          spacing={4}
          flexBasis={["100%", "45%", "40%"]} // changed to 40% on desktop
          mb={4}
        >
          <Image
            src={image1}
            alt={t("customerReview.saada")}
            borderRadius="md"
            maxW={["250px", "250px", "300px"]} // increased max width on desktop
            width="100%"
            height="auto"
          />
          <Text fontSize={["md", "lg", "xl"]} fontWeight="bold" color="#FF7400">
            {t("customerReview.saada")}
          </Text>
          <Text textAlign="center" mb={4}>
            {t("customerReview.saadaSaid")}
          </Text>
          <AspectRatio maxW={["560px", "560px", "700px"]} ratio={16 / 9} width="100%">
            <div style={{ borderRadius: "16px", overflow: "hidden" }}>
              <iframe
                src="https://www.youtube.com/embed/nCh8xf3zp0k"
                title="YouTube video player"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          </AspectRatio>
        </VStack>

        <VStack
          align="center"
          spacing={4}
          flexBasis={["100%", "45%", "40%"]} // changed to 40% on desktop
          mb={4}
        >
          <Image
            src={image2}
            alt={t("customerReview.kasahun")}
            borderRadius="md"
            maxW={["200px", "200px", "250px"]} // increased max width on desktop
            width="100%"
            height="auto"
          />
          <Text fontSize={["md", "lg", "xl"]} fontWeight="bold" color="#FF7400">
            {t("customerReview.kasahun")}
          </Text>
          <Text textAlign="center" mb={4}>
            {t("customerReview.kasahunSaid")}
          </Text>
          <AspectRatio maxW={["560px", "560px", "700px"]} ratio={16 / 9} width="100%">
            <div style={{ borderRadius: "16px", overflow: "hidden" }}>
              <iframe
                src="https://www.youtube.com/embed/WuFJKYwYXXk"
                title="YouTube video player"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          </AspectRatio>
        </VStack>
      </Flex>
    </Box>
  );
};

export default CustomerReview;