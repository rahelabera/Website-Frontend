import {
  Box,
  Heading,
  Text,
  Image,
  VStack,
  Container,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import training from "../../assets/training.jpg";
import { useTranslation } from "react-i18next";

const TrainingAndConsultancy = () => {
  const { t } = useTranslation();
  return (
    <Container maxW="container.md" p={4} mt={70}>
      <Heading as="h1" size="xl" mb={6} color="#FF7400" textAlign="center">
        {t("Training and Consultancy.title")}
      </Heading>
      <VStack spacing={8} align="stretch">
        <Box p={4} boxShadow="md" borderRadius="md" bg="white">
          <Image
            borderRadius="md"
            src={training}
            alt="Training and Consultancy"
            mb={4}
            objectFit="cover"
          />
          <Text fontSize="lg" mb={4}>
            {t("Training and Consultancy.description")}
          </Text>
          <Text fontSize="md" mb={4}>
            {t("Training and Consultancy.Lists")}
          </Text>
          <VStack align="start" spacing={2}>
            <Text>- {t("Training and Consultancy.list1")}</Text>
            <Text>- {t("Training and Consultancy.list2")}</Text>
            <Text>- {t("Training and Consultancy.list3")}</Text>
            <Text>- {t("Training and Consultancy.list4")}</Text>
          </VStack>
        </Box>
      </VStack>
      <Box textAlign="center" mt={10}>
        <Heading as="h3" size="md" mb={4}>
          {t("Training and Consultancy.start")}
        </Heading>
        <Text mb={4}>{t("Training and Consultancy.description2")}</Text>
        <Link to="/contact-us">
          <Button colorScheme="orange" mr={2}>
            {t("Training and Consultancy.button1")}
          </Button>
        </Link>
        <Link to="/services">
          <Button colorScheme="orange" variant="outline">
            {t("Training and Consultancy.button2")}
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default TrainingAndConsultancy;
