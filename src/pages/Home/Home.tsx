import { useTranslation } from "react-i18next";
import ImageSlider from "./ImageSlider";
import PartnerSlider from "./PartnerSlider";
import { Box, Heading, Text } from "@chakra-ui/react";

const Home = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <Box mb={8}>
        <ImageSlider />
      </Box>
      <Box mb={8} p={4}>
        <Heading textAlign="center" color="#FF7400" mb={4} mt={10}>
          {t("home.title1")}
        </Heading>
        <Text fontSize={{ base: "md", md: "lg" }} textAlign="center" mb={10}>
          {t("home.description1")}
        </Text>
      </Box>
      <Box mb={8} p={4} maxW="100%" overflow="hidden">
      <Heading textAlign="center" color="#FF7400" mb={4} mt={10}>
          {t("home.partners")}
        </Heading>
        <PartnerSlider />
      </Box>
    </Box>
  );
};

export default Home;