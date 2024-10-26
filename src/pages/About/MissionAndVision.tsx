import { Box, Heading, Text, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

// Motion component for Box with hover animation
const MotionBox = motion(Box);

const VisionMissionValues = () => {
  const { t } = useTranslation();

  return (
    <Box px={[4, 6, 8, 10]} py={[8, 12, 16]} mt={[10, 20, 28]}>
      <Heading as="h1" size="xl" mb={10} color="#FF7400" textAlign="center">
        {t("missionAndVision.title")}
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
        {/* Vision Box */}
        <MotionBox
          p={5}
          shadow="md"
          borderWidth="1px"
          borderRadius="md"
          whileHover={{ scale: 1.05 }}
        >
          <Heading as="h2" size="lg" mb={4} color="#FF7400" textAlign="center">
            {t("missionAndVision.vision")}
          </Heading>
          <Text textAlign="justify">{t("missionAndVision.card1")}</Text>
        </MotionBox>

        {/* Mission Box */}
        <MotionBox
          p={5}
          shadow="md"
          borderWidth="1px"
          borderRadius="md"
          whileHover={{ scale: 1.05 }}
        >
          <Heading as="h2" size="lg" mb={4} color="#FF7400" textAlign="center">
            {t("missionAndVision.mission")}
          </Heading>
          <Text textAlign="justify">{t("missionAndVision.card2")}</Text>
        </MotionBox>

        {/* Values Box */}
        <MotionBox
          p={5}
          shadow="md"
          borderWidth="1px"
          borderRadius="md"
          whileHover={{ scale: 1.05 }}
        >
          <Heading as="h2" size="lg" mb={4} color="#FF7400" textAlign="center">
            {t("missionAndVision.values")}
          </Heading>
          <Text textAlign="justify">{t("missionAndVision.card3")}</Text>
          <Text mt={4} textAlign="justify">
            {t("missionAndVision.value1")}
            <br />
            {t("missionAndVision.value2")}
            <br />
            {t("missionAndVision.value3")}
            <br />
            {t("missionAndVision.value4")}
            <br />
            {t("missionAndVision.value5")}
          </Text>
        </MotionBox>
      </SimpleGrid>
    </Box>
  );
};

export default VisionMissionValues;
